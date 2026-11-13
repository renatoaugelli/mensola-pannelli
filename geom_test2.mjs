import * as THREE from 'three';
import { Brush, Evaluator, ADDITION } from 'three-bvh-csg';

function roundedRect(cls, w, d, r, x0 = 0, y0 = 0) {
  const s = new cls();
  r = Math.max(0, Math.min(r, w / 2 - 0.01, d / 2 - 0.01));
  if (r <= 0) { s.moveTo(x0, y0); s.lineTo(x0 + w, y0); s.lineTo(x0 + w, y0 + d); s.lineTo(x0, y0 + d); s.closePath(); return s; }
  s.moveTo(x0 + r, y0);
  s.lineTo(x0 + w - r, y0); s.absarc(x0 + w - r, y0 + r, r, -Math.PI/2, 0, false);
  s.lineTo(x0 + w, y0 + d - r); s.absarc(x0 + w - r, y0 + d - r, r, 0, Math.PI/2, false);
  s.lineTo(x0 + r, y0 + d); s.absarc(x0 + r, y0 + d - r, r, Math.PI/2, Math.PI, false);
  s.lineTo(x0, y0 + r); s.absarc(x0 + r, y0 + r, r, Math.PI, Math.PI*1.5, false);
  return s;
}
function extrudeFlat(shape, h) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false, curveSegments: 72 });
  g.rotateX(Math.PI / 2); g.translate(0, h, 0);
  return g;
}
const W = 100, D = 90, R = 8, B = 4;
const rim = roundedRect(THREE.Shape, W, D, R, -W/2, 0);
rim.holes.push(roundedRect(THREE.Path, W-2*B, D-2*B, Math.max(0, R-B), -W/2+B, B));
console.time('extrude rim');
const g = extrudeFlat(rim, 5);
console.timeEnd('extrude rim');
console.log('rim tris:', g.attributes.position.count/3);
console.time('rim self-union check');
const ev = new Evaluator();
const plate = roundedRect(THREE.Shape, W, D, R, -W/2, 0);
const gp = extrudeFlat(plate, 8);
const res = ev.evaluate(new Brush(gp), new Brush(g), ADDITION);
console.timeEnd('rim self-union check');
console.log('union tris:', res.geometry.attributes.position.count/3);
