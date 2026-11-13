import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';
import { Brush, Evaluator, ADDITION } from 'three-bvh-csg';

/* ============================================================
   Designer parametrico per accessori da pannelli acustici.
   Stessa logica del file OpenSCAD "Mensola_Pannelli_Parametrica".
   ============================================================ */

// ---------- tipi e parametri ----------
const TYPES = [
  ['mensola', 'Mensola'],
  ['vaschetta', 'Vaschetta'],
  ['piattino', 'Piattino'],
  ['portavaso', 'Portavaso'],
  ['solo_innesto', 'Innesto prova'],
];

const PARAMS = [
  // sezione innesto
  { s: 'insert', k: 'spessore_innesto', label: 'Spessore innesto', hint: 'Fessura − 0,5~1 mm', def: 12.5, min: 6, max: 20, step: 0.1 },
  { s: 'insert', k: 'profondita_doga', label: 'Profondità doga', hint: 'Lunghezza del collo nella fessura', def: 12, min: 5, max: 30, step: 0.5 },
  { s: 'insert', k: 'larghezza_collo', label: 'Larghezza collo', def: 16, min: 8, max: 40, step: 0.5 },
  { s: 'insert', k: 'larghezza_testa', label: 'Larghezza testa a T', def: 40, min: 20, max: 80, step: 0.5 },
  { s: 'insert', k: 'spessore_testa', label: 'Spessore testa a T', def: 3, min: 2, max: 10, step: 0.25 },
  { s: 'insert', k: 'raccordo_collo', label: 'Raccordo collo', def: 6, min: 0, max: 15, step: 0.5 },
  { s: 'insert', k: 'larghezza_svasatura', label: 'Larghezza svasatura', def: 40, min: 16, max: 80, step: 1 },
  // corpo
  { s: 'body', k: 'larghezza_mensola', label: 'Larghezza', def: 100, min: 40, max: 200, step: 1, t: ['mensola', 'vaschetta'] },
  { s: 'body', k: 'profondita_mensola', label: 'Profondità', def: 90, min: 30, max: 200, step: 1, t: ['mensola', 'vaschetta'] },
  { s: 'body', k: 'spessore_mensola', label: 'Spessore piano', def: 8, min: 3, max: 20, step: 0.5, t: ['mensola', 'vaschetta', 'piattino', 'portavaso'] },
  { s: 'body', k: 'raggio_spigoli', label: 'Raggio spigoli', def: 8, min: 0, max: 25, step: 0.5, t: ['mensola', 'vaschetta'] },
  { s: 'body', k: 'altezza_bordo', label: 'Altezza bordino', def: 5, min: 0, max: 20, step: 0.5, t: ['mensola', 'piattino'] },
  { s: 'body', k: 'altezza_parete', label: 'Altezza pareti', def: 25, min: 5, max: 60, step: 1, t: ['vaschetta'] },
  { s: 'body', k: 'spessore_bordo', label: 'Spessore bordino/pareti', def: 4, min: 2, max: 10, step: 0.5, t: ['mensola', 'vaschetta', 'piattino'] },
  { s: 'body', k: 'diametro_piattino', label: 'Diametro piattino', def: 90, min: 40, max: 200, step: 1, t: ['piattino'] },
  { s: 'body', k: 'diametro_vaso', label: 'Diametro interno anello (vaso)', def: 105, min: 40, max: 220, step: 1, t: ['portavaso'] },
  { s: 'body', k: 'banda_anello', label: 'Larghezza fascia anello', def: 5, min: 3, max: 12, step: 0.5, t: ['portavaso'] },
];

const DEFAULTS = { tipo: 'mensola', bordo_sopra: true };
PARAMS.forEach(p => DEFAULTS[p.k] = p.def);
let state = JSON.parse(JSON.stringify(DEFAULTS));

// ---------- scena ----------
const view = document.getElementById('view');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
view.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf3efe6);

const camera = new THREE.PerspectiveCamera(45, 1, 0.5, 4000);
camera.position.set(150, 140, 190);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 5, 20);

scene.add(new THREE.HemisphereLight(0xffffff, 0xd8cfbc, 1.0));
const sun = new THREE.DirectionalLight(0xfff4e0, 2.4);
sun.position.set(120, 220, 140);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = sun.shadow.camera.bottom = -220;
sun.shadow.camera.right = sun.shadow.camera.top = 220;
sun.shadow.bias = -0.0005;
scene.add(sun);
const fill = new THREE.DirectionalLight(0xdfe8ff, 0.7);
fill.position.set(-140, 90, -120);
scene.add(fill);

const ground = new THREE.Mesh(
  new THREE.CircleGeometry(900, 72).rotateX(-Math.PI / 2),
  new THREE.ShadowMaterial({ opacity: 0.14 }));
ground.receiveShadow = true;
scene.add(ground);
const grid = new THREE.GridHelper(600, 60, 0xcfc7b2, 0xe2dccb);
grid.position.y = 0.05;
scene.add(grid);
// linea rossa: faccia del pannello (z=0)
const wallLine = new THREE.Mesh(
  new THREE.BoxGeometry(600, 0.4, 0.4),
  new THREE.MeshBasicMaterial({ color: 0xb3452a }));
wallLine.position.y = 0.25;
scene.add(wallLine);

const pieceMat = new THREE.MeshStandardMaterial({ color: 0xc9a05e, roughness: 0.55, metalness: 0.0 });
const insertMat = new THREE.MeshStandardMaterial({ color: 0xa8834a, roughness: 0.6 });
let pieceMesh = null;

// ---------- costruzione geometria ----------
function shapeFromPoints(pts) {
  const s = new THREE.Shape();
  s.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) s.lineTo(pts[i][0], pts[i][1]);
  s.closePath();
  return s;
}

function roundedRect(cls, w, d, r, x0 = 0, y0 = 0) {
  const s = new cls();
  r = Math.max(0, Math.min(r, w / 2 - 0.01, d / 2 - 0.01));
  if (r <= 0) {
    s.moveTo(x0, y0); s.lineTo(x0 + w, y0); s.lineTo(x0 + w, y0 + d); s.lineTo(x0, y0 + d); s.closePath();
    return s;
  }
  s.moveTo(x0 + r, y0);
  s.lineTo(x0 + w - r, y0);
  s.absarc(x0 + w - r, y0 + r, r, -Math.PI / 2, 0, false);
  s.lineTo(x0 + w, y0 + d - r);
  s.absarc(x0 + w - r, y0 + d - r, r, 0, Math.PI / 2, false);
  s.lineTo(x0 + r, y0 + d);
  s.absarc(x0 + r, y0 + d - r, r, Math.PI / 2, Math.PI, false);
  s.lineTo(x0, y0 + r);
  s.absarc(x0 + r, y0 + r, r, Math.PI, Math.PI * 1.5, false);
  return s;
}

function circleShape(cls, cx, cy, r, cw = false) {
  const s = new cls();
  s.absarc(cx, cy, r, 0, Math.PI * 2, cw);
  return s;
}

// shape (x, y2d) -> solido piatto: y2d diventa z mondo, estruso in altezza h (base y=0)
function extrudeFlat(shape, h) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false, curveSegments: 72 });
  g.rotateX(Math.PI / 2);
  g.translate(0, h, 0);
  return g;
}

// Anti-degenerazione CSG: due facce perfettamente complanari mandano in stallo
// l'algoritmo booleano. Ogni parte viene quindi "annegata" di EM mm sotto la base
// comune e i bordini vengono allargati di EPS mm: nessuna faccia combacia mai.
const EM = 0.5;   // affondamento sotto la base (la mesh finale viene riallineata)
const EPS = 0.02; // dilatazione del bordino per evitare pareti complanari

function buildParts(p) {
  const parts = [];
  const insertShape = shapeFromPoints([
    [-p.larghezza_testa / 2, -(p.profondita_doga + p.spessore_testa)],
    [p.larghezza_testa / 2, -(p.profondita_doga + p.spessore_testa)],
    [p.larghezza_testa / 2, -p.profondita_doga],
    [p.larghezza_collo / 2, -p.profondita_doga],
    [p.larghezza_collo / 2, -p.raccordo_collo],
    [p.larghezza_svasatura / 2, 4],
    [-p.larghezza_svasatura / 2, 4],
    [-p.larghezza_collo / 2, -p.raccordo_collo],
    [-p.larghezza_collo / 2, -p.profondita_doga],
    [-p.larghezza_testa / 2, -p.profondita_doga],
  ]);
  const ins = extrudeFlat(insertShape, p.spessore_innesto);
  parts.push(ins);

  const rimH = state.tipo === 'vaschetta' ? p.altezza_parete : p.altezza_bordo;

  if (state.tipo === 'mensola' || state.tipo === 'vaschetta') {
    const plate = roundedRect(THREE.Shape, p.larghezza_mensola, p.profondita_mensola, p.raggio_spigoli, -p.larghezza_mensola / 2, 0);
    parts.push(extrudeFlat(plate, p.spessore_mensola));
    if (rimH > 0) {
      const b = p.spessore_bordo;
      const w2 = p.larghezza_mensola + 2 * EPS, d2 = p.profondita_mensola + 2 * EPS;
      const rim = roundedRect(THREE.Shape, w2, d2, p.raggio_spigoli + EPS, -w2 / 2, -EPS);
      rim.holes.push(roundedRect(THREE.Path, p.larghezza_mensola - 2 * b, p.profondita_mensola - 2 * b, Math.max(0, p.raggio_spigoli - b), -p.larghezza_mensola / 2 + b, b));
      const g = extrudeFlat(rim, rimH + EM);
      g.translate(0, state.bordo_sopra ? p.spessore_mensola - EM : -rimH, 0);
      parts.push(g);
    }
  } else if (state.tipo === 'piattino') {
    const r = p.diametro_piattino / 2, yc = r - 4;
    parts.push(extrudeFlat(circleShape(THREE.Shape, 0, yc, r), p.spessore_mensola));
    if (rimH > 0) {
      const rim = circleShape(THREE.Shape, 0, yc, r + EPS);
      rim.holes.push(circleShape(THREE.Path, 0, yc, r - p.spessore_bordo, true));
      const g = extrudeFlat(rim, rimH + EM);
      g.translate(0, state.bordo_sopra ? p.spessore_mensola - EM : -rimH, 0);
      parts.push(g);
    }
  } else if (state.tipo === 'portavaso') {
    const rOut = p.diametro_vaso / 2 + p.banda_anello, yc = rOut - 4;
    const ring = circleShape(THREE.Shape, 0, yc, rOut);
    ring.holes.push(circleShape(THREE.Path, 0, yc, p.diametro_vaso / 2, true));
    parts.push(extrudeFlat(ring, p.spessore_mensola));
  } else if (state.tipo === 'solo_innesto') {
    parts.push(extrudeFlat(roundedRect(THREE.Shape, p.larghezza_svasatura, 20, 4, -p.larghezza_svasatura / 2, 0), p.spessore_innesto));
  }
  return parts;
}

const evaluator = new Evaluator();
function buildPiece() {
  const geoms = buildParts(state);
  let brush = new Brush(geoms[0]);
  for (let i = 1; i < geoms.length; i++) {
    brush = evaluator.evaluate(brush, new Brush(geoms[i]), ADDITION);
  }
  const g = brush.geometry;
  g.computeBoundingBox();
  const minY = g.boundingBox.min.y;
  if (minY < -0.001) g.translate(0, -minY, 0); // tutto sopra il "piatto"
  g.computeVertexNormals();
  g.computeBoundingBox();
  g.computeBoundingSphere();
  return g;
}

function geometryVolume(g) {
  const pos = g.attributes.position.array;
  let v = 0;
  for (let i = 0; i < pos.length; i += 9) {
    const ax = pos[i], ay = pos[i + 1], az = pos[i + 2];
    const bx = pos[i + 3], by = pos[i + 4], bz = pos[i + 5];
    const cx = pos[i + 6], cy = pos[i + 7], cz = pos[i + 8];
    v += (ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx)) / 6;
  }
  return Math.abs(v);
}

// ---------- ricostruzione ----------
let rebuildTimer = null;
function rebuild(fit = false) {
  const g = buildPiece();
  if (pieceMesh) {
    pieceMesh.geometry.dispose();
    scene.remove(pieceMesh);
  }
  pieceMesh = new THREE.Mesh(g, pieceMat);
  pieceMesh.castShadow = pieceMesh.receiveShadow = true;
  scene.add(pieceMesh);
  if (fit) fitCamera();
  updateDims(g);
}
function scheduleRebuild() {
  clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(() => rebuild(false), 120);
}
function fitCamera() {
  const bs = pieceMesh.geometry.boundingSphere;
  const c = bs.center, r = bs.radius;
  const dir = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
  const dist = r / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * 1.35;
  controls.target.copy(c);
  camera.position.copy(c).addScaledVector(dir, dist);
  controls.update();
}
function updateDims(g) {
  const bb = g.boundingBox, s = new THREE.Vector3();
  bb.getSize(s);
  const vol = geometryVolume(g) / 1000; // cm3
  const grams = vol * 1.24;
  document.getElementById('dims').innerHTML =
    `<span>ingombro <b>${s.x.toFixed(0)} × ${s.z.toFixed(0)} × ${s.y.toFixed(1)} mm</b></span>` +
    `<span>volume <b>${vol.toFixed(0)} cm³</b></span>` +
    `<span>≈ <b>${grams.toFixed(0)} g</b> pieno</span>`;
}

// ---------- UI ----------
const toastEl = document.getElementById('toast');
let toastTimer = null;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

const typesEl = document.getElementById('types');
TYPES.forEach(([id, label]) => {
  const b = document.createElement('button');
  b.textContent = label;
  b.dataset.type = id;
  b.addEventListener('click', () => {
    state.tipo = id;
    refreshTypeUI();
    rebuild(true);
  });
  typesEl.appendChild(b);
});

const paramEls = {};
function buildParamUI() {
  PARAMS.forEach(p => {
    const wrap = document.createElement('div');
    wrap.className = 'param';
    const row = document.createElement('div');
    row.className = 'row';
    const lab = document.createElement('label');
    lab.textContent = p.label;
    const val = document.createElement('span');
    val.className = 'val';
    row.append(lab, val);
    const inp = document.createElement('input');
    inp.type = 'range'; inp.min = p.min; inp.max = p.max; inp.step = p.step;
    inp.setAttribute('aria-label', p.label);
    inp.addEventListener('input', () => {
      state[p.k] = parseFloat(inp.value);
      val.textContent = fmt(state[p.k]);
      scheduleRebuild();
    });
    wrap.append(row, inp);
    if (p.hint) {
      const h = document.createElement('small');
      h.textContent = p.hint;
      wrap.appendChild(h);
    }
    document.getElementById(p.s === 'insert' ? 'params-insert' : 'params-body').appendChild(wrap);
    paramEls[p.k] = { wrap, inp, val, p };
  });
  document.getElementById('bordo_sopra').addEventListener('change', e => {
    state.bordo_sopra = e.target.checked;
    scheduleRebuild();
  });
}
function fmt(v) { return (Math.round(v * 100) / 100).toString(); }

function refreshTypeUI() {
  typesEl.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.type === state.tipo));
  PARAMS.forEach(p => {
    const visible = !p.t || p.t.includes(state.tipo);
    paramEls[p.k].wrap.classList.toggle('hide', !visible);
  });
  document.getElementById('wrap-bordo').style.display =
    ['mensola', 'vaschetta', 'piattino'].includes(state.tipo) ? '' : 'none';
  document.getElementById('sec-body').style.display = state.tipo === 'solo_innesto' ? 'none' : '';
}
function syncInputs() {
  PARAMS.forEach(p => {
    paramEls[p.k].inp.value = state[p.k];
    paramEls[p.k].val.textContent = fmt(state[p.k]);
  });
  document.getElementById('bordo_sopra').checked = state.bordo_sopra;
}

// ---------- preset ----------
const LS_KEY = 'pannelli-presets-v1';
function loadPresets() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch { return {}; }
}
function savePresets(obj) { localStorage.setItem(LS_KEY, JSON.stringify(obj)); }
function renderPresets() {
  const all = loadPresets();
  const box = document.getElementById('plist');
  box.innerHTML = '';
  const names = Object.keys(all);
  if (!names.length) {
    box.innerHTML = '<span class="pempty">Nessun preset salvato</span>';
    return;
  }
  names.forEach(n => {
    const item = document.createElement('div');
    item.className = 'pitem';
    const nm = document.createElement('span');
    nm.className = 'nm';
    nm.textContent = `${n} (${all[n].tipo})`;
    nm.title = 'Clicca per applicare';
    nm.addEventListener('click', () => {
      state = { ...JSON.parse(JSON.stringify(DEFAULTS)), ...all[n] };
      syncInputs(); refreshTypeUI(); rebuild(true);
      toast(`Preset «${n}» applicato`);
    });
    const del = document.createElement('button');
    del.textContent = '✕';
    del.title = 'Elimina preset';
    del.addEventListener('click', () => {
      const a = loadPresets(); delete a[n]; savePresets(a); renderPresets();
    });
    item.append(nm, del);
    box.appendChild(item);
  });
}
document.getElementById('psave').addEventListener('click', () => {
  const inp = document.getElementById('pname');
  const name = inp.value.trim();
  if (!name) { toast('Scrivi un nome per il preset'); return; }
  const all = loadPresets();
  all[name] = JSON.parse(JSON.stringify(state));
  savePresets(all); renderPresets();
  inp.value = '';
  toast(`Preset «${name}» salvato`);
});
document.getElementById('pexport').addEventListener('click', () => {
  const all = loadPresets();
  if (!Object.keys(all).length) { toast('Nessun preset da esportare'); return; }
  downloadBlob(new Blob([JSON.stringify(all, null, 2)], { type: 'application/json' }), 'preset-pannelli.json');
});
document.getElementById('pimport').addEventListener('click', () => document.getElementById('pfile').click());
document.getElementById('pfile').addEventListener('change', e => {
  const f = e.target.files[0];
  if (!f) return;
  const rd = new FileReader();
  rd.onload = () => {
    try {
      const data = JSON.parse(rd.result);
      const all = { ...loadPresets(), ...data };
      savePresets(all); renderPresets();
      toast(`Importati ${Object.keys(data).length} preset`);
    } catch { toast('File non valido'); }
  };
  rd.readAsText(f);
  e.target.value = '';
});

// ---------- export STL ----------
function downloadBlob(blob, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
document.getElementById('export').addEventListener('click', () => {
  const stl = new STLExporter().parse(pieceMesh, { binary: true });
  const s = state;
  const dims = s.tipo === 'piattino' ? `D${s.diametro_piattino}`
    : s.tipo === 'portavaso' ? `vaso${s.diametro_vaso}`
    : s.tipo === 'solo_innesto' ? `fessura${s.spessore_innesto}`
    : `${s.larghezza_mensola}x${s.profondita_mensola}`;
  downloadBlob(new Blob([stl], { type: 'application/octet-stream' }), `${s.tipo}_${dims}.stl`);
  toast('STL scaricato — aprilo in BambuStudio');
});
document.getElementById('reset').addEventListener('click', () => {
  state = JSON.parse(JSON.stringify(DEFAULTS));
  syncInputs(); refreshTypeUI(); rebuild(true);
  toast('Valori di default ripristinati');
});

// ---------- loop ----------
function resize() {
  const w = view.clientWidth, h = view.clientHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);

const hud = document.getElementById('hud');
renderer.setAnimationLoop(() => {
  controls.update();
  renderer.render(scene, camera);
  hud.textContent = `tris ${renderer.info.render.triangles}`;
});

// ---------- avvio ----------
buildParamUI();
syncInputs();
refreshTypeUI();
renderPresets();
resize();
rebuild(true);
window.__SCENE_READY__ = true;
