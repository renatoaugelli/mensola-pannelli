// ============================================================
//  ACCESSORI PARAMETRICI PER PANNELLI ACUSTICI A DOGHE
//  Mensola - Vaschetta - Piattino - Portavaso - Innesto di prova
//
//  Derivato dal portavaso "Acoustic_Panel_Plant_Holder_10.5cm".
//
//  COME SI USA (dettagli nel manuale PDF allegato):
//  1. Apri questo file in OpenSCAD
//  2. Finestra > Customizer: scegli il pezzo e modifica le misure
//  3. F5 = anteprima rapida, F6 = rendering completo
//  4. File > Export > Export as STL -> apri in BambuStudio
//
//  Tutte le misure sono in millimetri.
//  I valori di default riproducono il portavaso originale.
// ============================================================

/* [Cosa vuoi stampare?] */

// Tipo di pezzo da generare
tipo_pezzo = "mensola"; // [mensola, vaschetta, piattino, portavaso, solo_innesto]

/* [Pannello e innesto] */

// Spessore della piastrina che entra nella fessura tra le doghe (0,5-1 mm meno della fessura)
spessore_innesto = 12.5; // [6:0.1:20]

// Profondita' delle doghe = lunghezza del collo che attraversa la fessura
profondita_doga = 12.0; // [5:0.5:30]

// Larghezza del collo (passa nella fessura)
larghezza_collo = 16.0; // [8:0.5:40]

// Larghezza della testa a T che si aggancia dietro le doghe
larghezza_testa = 40.0; // [20:0.5:80]

// Spessore (lunghezza) della testa a T dietro le doghe
spessore_testa = 3.0; // [2:0.25:10]

// Lunghezza del raccordo di rinforzo tra collo e corpo del pezzo
raccordo_collo = 6.0; // [0:0.5:15]

// Larghezza della svasatura dove il collo incontra il corpo
larghezza_svasatura = 40.0; // [16:1:80]

/* [Mensola e vaschetta] */

// Larghezza della mensola / vaschetta
larghezza_mensola = 100.0; // [40:1:200]

// Profondita' della mensola / vaschetta (dal muro verso l'esterno)
profondita_mensola = 90.0; // [30:1:200]

// Spessore del piano
spessore_mensola = 8.0; // [3:0.5:20]

// Raggio degli spigoli
raggio_spigoli = 8.0; // [0:0.5:25]

// Altezza del bordino anticaduta della mensola (0 = nessun bordino)
altezza_bordo = 5.0; // [0:0.5:20]

// Altezza delle pareti della vaschetta
altezza_parete = 25.0; // [5:1:60]

// Spessore del bordino / delle pareti
spessore_bordo = 4.0; // [2:0.5:10]

// Bordino sopra il piano? Se dopo il montaggio resta rivolto in giu', metti "no"
bordo_sopra = true; // [true:false]

/* [Piattino rotondo] */

// Diametro esterno del piattino
diametro_piattino = 90.0; // [40:1:200]

/* [Portavaso (anello)] */

// Diametro interno dell'anello = diametro del vaso
diametro_vaso = 105.0; // [40:1:220]

// Larghezza della fascia dell'anello
banda_anello = 5.0; // [3:0.5:12]

/* [Avanzate] */

// Quanto il corpo si sovrappone al collo (zona di unione)
sovrapposizione = 4.0; // [2:0.5:10]

// Risoluzione delle curve (aumenta se gli spigoli sono seghettati)
$fn = 96; // [24:8:200]

// ============================================================
//  DA QUI IN POI NON SERVE MODIFICARE
// ============================================================

module profilo_innesto() {
    // Piano X-Y visto dall'alto. y=0: faccia del pannello
    yt = -(profondita_doga + spessore_testa); // fondo testa
    polygon(points = [
        [-larghezza_testa/2, yt],
        [ larghezza_testa/2, yt],
        [ larghezza_testa/2, -profondita_doga],
        [ larghezza_collo/2, -profondita_doga],
        [ larghezza_collo/2, -raccordo_collo],
        [ larghezza_svasatura/2,  sovrapposizione],
        [-larghezza_svasatura/2,  sovrapposizione],
        [-larghezza_collo/2, -raccordo_collo],
        [-larghezza_collo/2, -profondita_doga],
        [-larghezza_testa/2, -profondita_doga]
    ]);
}

module innesto() {
    linear_extrude(height = spessore_innesto)
        profilo_innesto();
}

// ---- mensola / vaschetta ----

module sagoma_mensola(riduci = 0) {
    offset(delta = -riduci)
        offset(r = raggio_spigoli)
            offset(delta = -raggio_spigoli)
                translate([-larghezza_mensola/2, 0])
                    square([larghezza_mensola, profondita_mensola]);
}

module piano_mensola() {
    linear_extrude(height = spessore_mensola)
        sagoma_mensola();
}

module bordino(h) {
    if (h > 0)
        translate([0, 0, bordo_sopra ? spessore_mensola : -h])
            linear_extrude(height = h)
                difference() {
                    sagoma_mensola();
                    sagoma_mensola(spessore_bordo);
                }
}

// ---- piattino ----

module piattino() {
    r = diametro_piattino / 2;
    yc = r - sovrapposizione; // il bordo posteriore si sovrappone al collo
    linear_extrude(height = spessore_mensola)
        translate([0, yc])
            circle(r = r);
    if (altezza_bordo > 0)
        translate([0, 0, bordo_sopra ? spessore_mensola : -altezza_bordo])
            linear_extrude(height = altezza_bordo)
                difference() {
                    translate([0, yc]) circle(r = r);
                    translate([0, yc]) circle(r = r - spessore_bordo);
                }
}

// ---- portavaso ----

module portavaso() {
    r_out = diametro_vaso/2 + banda_anello;
    linear_extrude(height = spessore_mensola)
        translate([0, r_out - sovrapposizione])
            difference() {
                circle(r = r_out);
                circle(r = diametro_vaso/2);
            }
}

// ---- solo innesto di prova ----

module solo_innesto() {
    // piccola linguetta per maneggiarlo durante la prova di incastro
    translate([0, 0, 0])
        linear_extrude(height = spessore_innesto)
            offset(r = 4)
                translate([-larghezza_svasatura/2, 0])
                    square([larghezza_svasatura, 20]);
}

// ---- assemblaggio ----

module corpo() {
    innesto();
    if (tipo_pezzo == "mensola") {
        piano_mensola();
        bordino(altezza_bordo);
    } else if (tipo_pezzo == "vaschetta") {
        piano_mensola();
        bordino(altezza_parete);
    } else if (tipo_pezzo == "piattino") {
        piattino();
    } else if (tipo_pezzo == "portavaso") {
        portavaso();
    } else if (tipo_pezzo == "solo_innesto") {
        solo_innesto();
    }
}

// se una sporgenza va sotto il piano, rialza tutto per tenerlo sul piatto
h_sotto = (bordo_sopra || (tipo_pezzo == "portavaso") || (tipo_pezzo == "solo_innesto"))
          ? 0
          : (tipo_pezzo == "vaschetta" ? altezza_parete : altezza_bordo);

translate([0, 0, h_sotto])
    corpo();
