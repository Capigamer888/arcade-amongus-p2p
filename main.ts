// Among Us Arcade P2P - Mapa Skeld & Soporte 4 Jugadores

namespace redP2P {
    let _handlers: ((accion: string, valor: string) => void)[] = [];
    export function alRecibir(handler: (accion: string, valor: string) => void): void {
        _handlers.push(handler);
    }
    export function enviarDatos(accion: string, valor: string): void {
        try {
            let msg = accion + "|" + valor;
            control.simmessages.send("amogus", Buffer.fromUTF8(msg));
        } catch (e) {}
    }
    export function inicializar() {
        try {
            control.simmessages.onReceived("amogus", function(data: Buffer) {
                let str = "";
                for (let i = 0; i < data.length; i++) {
                    str += String.fromCharCode(data[i]);
                }
                let sep = str.indexOf("|");
                if (sep >= 0) {
                    let acc = str.substr(0, sep);
                    let val = str.substr(sep + 1);
                    for(let h of _handlers) { h(acc, val); }
                }
            });
        } catch(e) {}
    }
}
redP2P.inicializar();

namespace SpriteKind {
    export const P2PLocal = SpriteKind.create()
    export const P2PRival = SpriteKind.create()
    export const P2PCadaver = SpriteKind.create()
    export const UI_Button = SpriteKind.create()
    export const TaskMarker = SpriteKind.create()
}

const SPRITE_ROJO = img`
. . . . . 2 2 2 2 2 . . . . . .
. . . . 2 2 2 2 2 2 2 . . . . .
. . . 2 2 2 2 2 2 2 2 2 . . . .
. . 2 2 2 9 9 9 9 1 2 2 . . . .
. 2 2 2 9 9 9 9 9 1 2 2 . . . .
. 2 2 2 9 9 9 9 9 1 2 2 . . . .
. 2 2 2 2 2 2 2 2 2 2 2 . . . .
. 2 2 2 2 2 2 2 2 2 2 2 . . . .
. 2 2 2 2 2 2 2 2 2 2 2 . . . .
. 2 2 2 2 2 2 2 2 2 2 2 . . . .
. 2 2 2 2 2 2 2 2 2 2 2 . . . .
. 2 2 2 2 2 2 2 2 2 2 2 . . . .
. . 2 2 2 2 . 2 2 2 2 . . . . .
. . 2 2 2 2 . 2 2 2 2 . . . . .
. . 4 4 4 4 . 4 4 4 4 . . . . .
. . . . . . . . . . . . . . . .
`
const SPRITE_AZUL = img`
. . . . . 8 8 8 8 8 . . . . . .
. . . . 8 8 8 8 8 8 8 . . . . .
. . . 8 8 8 8 8 8 8 8 8 . . . .
. . 8 8 8 9 9 9 9 1 8 8 . . . .
. 8 8 8 9 9 9 9 9 1 8 8 . . . .
. 8 8 8 9 9 9 9 9 1 8 8 . . . .
. 8 8 8 8 8 8 8 8 8 8 8 . . . .
. 8 8 8 8 8 8 8 8 8 8 8 . . . .
. 8 8 8 8 8 8 8 8 8 8 8 . . . .
. 8 8 8 8 8 8 8 8 8 8 8 . . . .
. 8 8 8 8 8 8 8 8 8 8 8 . . . .
. 8 8 8 8 8 8 8 8 8 8 8 . . . .
. . 8 8 8 8 . 8 8 8 8 . . . . .
. . 8 8 8 8 . 8 8 8 8 . . . . .
. . 6 6 6 6 . 6 6 6 6 . . . . .
. . . . . . . . . . . . . . . .
`
const SPRITE_VERDE = img`
. . . . . 7 7 7 7 7 . . . . . .
. . . . 7 7 7 7 7 7 7 . . . . .
. . . 7 7 7 7 7 7 7 7 7 . . . .
. . 7 7 7 9 9 9 9 1 7 7 . . . .
. 7 7 7 9 9 9 9 9 1 7 7 . . . .
. 7 7 7 9 9 9 9 9 1 7 7 . . . .
. 7 7 7 7 7 7 7 7 7 7 7 . . . .
. 7 7 7 7 7 7 7 7 7 7 7 . . . .
. 7 7 7 7 7 7 7 7 7 7 7 . . . .
. 7 7 7 7 7 7 7 7 7 7 7 . . . .
. 7 7 7 7 7 7 7 7 7 7 7 . . . .
. 7 7 7 7 7 7 7 7 7 7 7 . . . .
. . 7 7 7 7 . 7 7 7 7 . . . . .
. . 7 7 7 7 . 7 7 7 7 . . . . .
. . 6 6 6 6 . 6 6 6 6 . . . . .
. . . . . . . . . . . . . . . .
`
const SPRITE_AMARILLO = img`
. . . . . 5 5 5 5 5 . . . . . .
. . . . 5 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 . . . .
. . 5 5 5 9 9 9 9 1 5 5 . . . .
. 5 5 5 9 9 9 9 9 1 5 5 . . . .
. 5 5 5 9 9 9 9 9 1 5 5 . . . .
. 5 5 5 5 5 5 5 5 5 5 5 . . . .
. 5 5 5 5 5 5 5 5 5 5 5 . . . .
. 5 5 5 5 5 5 5 5 5 5 5 . . . .
. 5 5 5 5 5 5 5 5 5 5 5 . . . .
. 5 5 5 5 5 5 5 5 5 5 5 . . . .
. 5 5 5 5 5 5 5 5 5 5 5 . . . .
. . 5 5 5 5 . 5 5 5 5 . . . . .
. . 5 5 5 5 . 5 5 5 5 . . . . .
. . 4 4 4 4 . 4 4 4 4 . . . . .
. . . . . . . . . . . . . . . .
`

const SPRITE_MUERTO_ROJO = img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . 1 1 . . . . . . .
. . . . . . 1 1 1 1 . . . . . .
. . . . . 1 1 d d 1 1 . . . . .
. . . . . . . d d . . . . . . .
. . . . . . . d d . . . . . . .
. . . . . 2 2 2 2 2 2 . . . . .
. . . 2 2 2 2 2 2 2 2 2 2 . . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 2 2 2 2 2 2 2 2 2 2 . .
. . 2 2 2 2 . . . 2 2 2 2 . . .
. . 2 2 2 2 . . . 2 2 2 2 . . .
. . 4 4 4 4 . . . 4 4 4 4 . . .
. . . . . . . . . . . . . . . .
`
const SPRITE_MUERTO_AZUL = img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . 1 1 . . . . . . .
. . . . . . 1 1 1 1 . . . . . .
. . . . . 1 1 d d 1 1 . . . . .
. . . . . . . d d . . . . . . .
. . . . . . . d d . . . . . . .
. . . . . 8 8 8 8 8 8 . . . . .
. . . 8 8 8 8 8 8 8 8 8 8 . . .
. . 8 8 8 8 8 8 8 8 8 8 8 8 . .
. . 8 8 8 8 8 8 8 8 8 8 8 8 . .
. . 8 8 8 8 8 8 8 8 8 8 8 8 . .
. . 8 8 8 8 . . . 8 8 8 8 . . .
. . 8 8 8 8 . . . 8 8 8 8 . . .
. . 6 6 6 6 . . . 6 6 6 6 . . .
. . . . . . . . . . . . . . . .
`
const SPRITE_MUERTO_VERDE = img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . 1 1 . . . . . . .
. . . . . . 1 1 1 1 . . . . . .
. . . . . 1 1 d d 1 1 . . . . .
. . . . . . . d d . . . . . . .
. . . . . . . d d . . . . . . .
. . . . . 7 7 7 7 7 7 . . . . .
. . . 7 7 7 7 7 7 7 7 7 7 . . .
. . 7 7 7 7 7 7 7 7 7 7 7 7 . .
. . 7 7 7 7 7 7 7 7 7 7 7 7 . .
. . 7 7 7 7 7 7 7 7 7 7 7 7 . .
. . 7 7 7 7 . . . 7 7 7 7 . . .
. . 7 7 7 7 . . . 7 7 7 7 . . .
. . 6 6 6 6 . . . 6 6 6 6 . . .
. . . . . . . . . . . . . . . .
`
const SPRITE_MUERTO_AMARILLO = img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . 1 1 . . . . . . .
. . . . . . 1 1 1 1 . . . . . .
. . . . . 1 1 d d 1 1 . . . . .
. . . . . . . d d . . . . . . .
. . . . . . . d d . . . . . . .
. . . . . 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. . 5 5 5 5 . . . 5 5 5 5 . . .
. . 5 5 5 5 . . . 5 5 5 5 . . .
. . 4 4 4 4 . . . 4 4 4 4 . . .
. . . . . . . . . . . . . . . .
`

const SPRITE_FANTASMA = img`
. . . . . 1 1 1 1 1 . . . . . .
. . . . 1 1 1 1 1 1 1 . . . . .
. . . 1 1 1 1 1 1 1 1 1 . . . .
. . 1 1 1 9 9 9 9 b 1 1 . . . .
. 1 1 1 9 9 9 9 9 b 1 1 . . . .
. 1 1 1 9 9 9 9 9 b 1 1 . . . .
. 1 1 1 1 1 1 1 1 1 1 1 . . . .
. 1 1 1 1 1 1 1 1 1 1 1 . . . .
. 1 1 1 1 1 1 1 1 1 1 1 . . . .
. . 1 1 1 1 1 1 1 1 1 . . . . .
. . . 1 1 1 1 1 1 1 . . . . . .
. . 1 1 . 1 1 . 1 1 . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`

const SPRITE_TASK_MARKER = img`
. . 5 5 5 5 5 5 . .
. 5 5 5 5 5 5 5 5 .
5 5 5 f f f f 5 5 5
5 5 5 f f f f 5 5 5
5 5 5 f f f f 5 5 5
. 5 5 f f f f 5 5 .
. . 5 5 5 5 5 5 . .
. . . . . . . . . .
. . 5 5 f f 5 5 . .
. . 5 5 f f 5 5 . .
. . . 5 5 5 5 . . .
`

let ListaCadaveres: Sprite[] = [];

function obtenerSkin(idNum: number): Image {
    if (idNum == 1) return SPRITE_ROJO;
    if (idNum == 2) return SPRITE_AZUL;
    if (idNum == 3) return SPRITE_VERDE;
    return SPRITE_AMARILLO;
}

function obtenerSkinCadaver(idNum: number): Image {
    if (idNum == 1) return SPRITE_MUERTO_ROJO;
    if (idNum == 2) return SPRITE_MUERTO_AZUL;
    if (idNum == 3) return SPRITE_MUERTO_VERDE;
    return SPRITE_MUERTO_AMARILLO;
}

function distCoords(x1: number, y1: number, x2: number, y2: number): number {
    let dx = x1 - x2;
    let dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}

function dist(s1: Sprite, s2: Sprite): number {
    return distCoords(s1.x, s1.y, s2.x, s2.y);
}

// === Variables Globales ===
let MiId = 1;
let TotalJugadores = 2;
let IdImpostor = 1;
let SoyImpostor = false;
let PartidaActiva = false;
let PartidaTerminada = false;
let MapaActual = "hub";
let Muertos = [false, false, false, false, false];

let JugadorLocal: Sprite = null;
let Rival1: Sprite = null;
let Rival2: Sprite = null;
let Rival3: Sprite = null;
let Rival4: Sprite = null;

let KillBtnUI: Sprite = null;
let TaskBtnUI: Sprite = null;
let BarraTareasUI: Sprite = null;
let GuiaTareasUI: Sprite = null;

let tareasCompletadas = 0;
let TareasGlobales = 0;
let MaxTareasGlobales = 3;
let totalTareas = 3;
let cooldownKill = 0;
let cooldownEmergencia = 0;
let reunionesEmergenciaRestantes = 1;
let debounceBotonA = 0;

let EnVotacion = false;
let VotosRecibidos = 0;
let MisVotos: number[] = [0, 0, 0, 0, 0];
let VotoSeleccionado = 0;
let UI_Votacion: Sprite = null;
let YaVote = false;
let TiempoVotacion = 0;

let misTareasActivas: Image[] = [];
let misUbicacionesTareas: tiles.Location[] = [];
let misMarcadoresTareas: Sprite[] = [];

// ============================================================
//                     FUNCIONES CORE
// ============================================================

function resetearRivalHub(r: Sprite, id: number) {
    if (!r) return;
    r.setImage(obtenerSkin(id));
    r.setKind(SpriteKind.P2PRival);
    r.setFlag(SpriteFlag.Invisible, false);
    r.setFlag(SpriteFlag.GhostThroughWalls, true);
    r.setPosition(75 + id * 12, 75);
}

function cargarHub() {
    MapaActual = "hub";
    PartidaActiva = false;
    PartidaTerminada = false;
    EnVotacion = false;
    tiles.setCurrentTilemap(assets.tilemap`Level_0`);
    scene.setBackgroundColor(11);

    if (KillBtnUI) { sprites.destroy(KillBtnUI); KillBtnUI = null; }
    if (TaskBtnUI) { sprites.destroy(TaskBtnUI); TaskBtnUI = null; }
    if (BarraTareasUI) { sprites.destroy(BarraTareasUI); BarraTareasUI = null; }
    if (GuiaTareasUI) { sprites.destroy(GuiaTareasUI); GuiaTareasUI = null; }
    if (UI_Votacion) { UI_Votacion.destroy(); UI_Votacion = null; }
    
    tareasCompletadas = 0;
    TareasGlobales = 0;

    // Limpiar marcadores de tareas
    for (let m of misMarcadoresTareas) { m.destroy(); }
    misMarcadoresTareas = [];
    misUbicacionesTareas = [];
    misTareasActivas = [];

    // Limpiar cadáveres
    for (let c of ListaCadaveres) { c.destroy(); }
    ListaCadaveres = [];

    // Resetear rivales
    resetearRivalHub(Rival1, 1);
    resetearRivalHub(Rival2, 2);
    resetearRivalHub(Rival3, 3);
    resetearRivalHub(Rival4, 4);

    if (!JugadorLocal) {
        JugadorLocal = sprites.create(obtenerSkin(MiId), SpriteKind.P2PLocal);
        controller.moveSprite(JugadorLocal, 90, 90);
        scene.cameraFollowSprite(JugadorLocal);
    } else {
        JugadorLocal.setImage(obtenerSkin(MiId));
        JugadorLocal.setKind(SpriteKind.P2PLocal);
        JugadorLocal.setFlag(SpriteFlag.GhostThroughWalls, false);
    }
    
    tiles.placeOnTile(JugadorLocal, tiles.getTileLocation(5, 5));
    controller.moveSprite(JugadorLocal, 90, 90);
}

// Inicio
MiId = 1;
cargarHub();

function prepararRivalPartida(r: Sprite, id: number): Sprite {
    if (!r) {
        r = sprites.create(obtenerSkin(id), SpriteKind.P2PRival);
        r.setFlag(SpriteFlag.GhostThroughWalls, true);
    }
    r.setImage(obtenerSkin(id));
    r.setKind(SpriteKind.P2PRival);
    r.setFlag(SpriteFlag.Invisible, false);
    r.setPosition(400, 150);
    return r;
}

function iniciarPartida() {
    MapaActual = "skeld";
    PartidaActiva = true;
    PartidaTerminada = false;
    EnVotacion = false;
    TareasGlobales = 0;
    MaxTareasGlobales = Math.max(1, TotalJugadores - 1) * 3;
    cooldownKill = game.runtime() + 15000;
    cooldownEmergencia = game.runtime() + 15000;
    reunionesEmergenciaRestantes = 1;
    debounceBotonA = 0;
    
    tiles.setCurrentTilemap(assets.tilemap`Level_2`);
    scene.setBackgroundColor(15);

    if (KillBtnUI) { sprites.destroy(KillBtnUI); KillBtnUI = null; }
    if (TaskBtnUI) { sprites.destroy(TaskBtnUI); TaskBtnUI = null; }
    if (BarraTareasUI) { sprites.destroy(BarraTareasUI); BarraTareasUI = null; }
    if (GuiaTareasUI) { sprites.destroy(GuiaTareasUI); GuiaTareasUI = null; }

    // Limpiar marcadores previos
    for (let m of misMarcadoresTareas) { m.destroy(); }
    misMarcadoresTareas = [];
    misUbicacionesTareas = [];
    misTareasActivas = [];

    // Limpiar cadáveres previos
    for (let c of ListaCadaveres) { c.destroy(); }
    ListaCadaveres = [];

    // Reposicionar jugador local en Cafetería
    let tileCentro = assets.tile`tile32`;
    if (tileCentro) {
        tiles.placeOnRandomTile(JugadorLocal, tileCentro);
    } else {
        JugadorLocal.x = 400; JugadorLocal.y = 150;
    }
    controller.moveSprite(JugadorLocal, 90, 90);

    // Preparar rivales
    if (TotalJugadores >= 2 && MiId != 1) Rival1 = prepararRivalPartida(Rival1, 1);
    if (TotalJugadores >= 2 && MiId != 2) Rival2 = prepararRivalPartida(Rival2, 2);
    if (TotalJugadores >= 3 && MiId != 3) Rival3 = prepararRivalPartida(Rival3, 3);
    if (TotalJugadores >= 4 && MiId != 4) Rival4 = prepararRivalPartida(Rival4, 4);

    // Configurar tareas para tripulantes
    if (!SoyImpostor) {
        configurarTareasTripulante();
    }

    crearUI();

    if (SoyImpostor) {
        JugadorLocal.sayText("IMPOSTOR (Usa B para matar)", 5000);
    } else {
        JugadorLocal.sayText("TRIPULANTE (Sigue la guia de tareas)", 5000);
    }
}

// ============================================================
//               ASIGNACIÓN DE TAREAS E INDICADORES
// ============================================================

function configurarTareasTripulante() {
    let posiblesTareas: Image[] = [
        assets.tile`tile44`,
        assets.tile`tile117`,
        assets.tile`tile85`,
        assets.tile`tile84`,
        assets.tile`tile112`
    ];

    let baldosasValidas: Image[] = [];
    for (let t of posiblesTareas) {
        let locs = tiles.getTilesByType(t);
        if (locs && locs.length > 0) {
            baldosasValidas.push(t);
        }
    }

    if (baldosasValidas.length == 0) {
        for (let t of posiblesTareas) {
            baldosasValidas.push(t);
        }
    }

    totalTareas = 3;
    misTareasActivas = [];
    misUbicacionesTareas = [];

    for (let i = 0; i < totalTareas; i++) {
        if (baldosasValidas.length == 0) break;
        let rndIdx = Math.randomRange(0, baldosasValidas.length - 1);
        let baldosaElegida = baldosasValidas[rndIdx];
        baldosasValidas.removeAt(rndIdx);
        misTareasActivas.push(baldosaElegida);

        let locs = tiles.getTilesByType(baldosaElegida);
        if (locs && locs.length > 0) {
            let loc = locs[Math.randomRange(0, locs.length - 1)];
            misUbicacionesTareas.push(loc);

            // Crear marcador visual en el mapa
            let marker = sprites.create(SPRITE_TASK_MARKER, SpriteKind.TaskMarker);
            tiles.placeOnTile(marker, loc);
            marker.z = 15;
            misMarcadoresTareas.push(marker);
        }
    }
}

// ============================================================
//                     BARRA DE TAREAS & GUÍA HUD
// ============================================================

function actualizarBarraTareas() {
    if (!BarraTareasUI) return;
    let imgBarra = image.create(110, 11);
    imgBarra.fillRect(0, 0, 110, 11, 15);
    imgBarra.fillRect(1, 1, 108, 9, 11);
    
    let fillW = Math.round((TareasGlobales / Math.max(1, MaxTareasGlobales)) * 108);
    if (fillW > 0) {
        imgBarra.fillRect(1, 1, fillW, 9, 7);
    }
    
    let txt = "TAREAS " + TareasGlobales + "/" + MaxTareasGlobales;
    imgBarra.printCenter(txt, 2, 1, image.font5);
    
    BarraTareasUI.setImage(imgBarra);
}

function actualizarGuiaTareasHUD() {
    if (!GuiaTareasUI || SoyImpostor || !PartidaActiva || PartidaTerminada) {
        if (GuiaTareasUI) GuiaTareasUI.setFlag(SpriteFlag.Invisible, true);
        return;
    }

    if (misUbicacionesTareas.length == 0) {
        let imgG = image.create(110, 9);
        imgG.fillRect(0, 0, 110, 9, 15);
        imgG.fillRect(1, 1, 108, 7, 7);
        imgG.printCenter("TODAS TUS TAREAS LISTAS", 1, 1, image.font5);
        GuiaTareasUI.setImage(imgG);
        GuiaTareasUI.setFlag(SpriteFlag.Invisible, false);
        return;
    }

    let minDist = 99999;
    let nearestLoc: tiles.Location = null;
    for (let loc of misUbicacionesTareas) {
        let d = distCoords(JugadorLocal.x, JugadorLocal.y, loc.x, loc.y);
        if (d < minDist) {
            minDist = d;
            nearestLoc = loc;
        }
    }

    if (!nearestLoc) return;

    let imgG = image.create(110, 9);
    imgG.fillRect(0, 0, 110, 9, 15);

    if (minDist <= 32) {
        imgG.fillRect(1, 1, 108, 7, 7);
        imgG.printCenter("[A] HACER TAREA AQUI", 1, 1, image.font5);
    } else {
        imgG.fillRect(1, 1, 108, 7, 1);
        let dx = nearestLoc.x - JugadorLocal.x;
        let dy = nearestLoc.y - JugadorLocal.y;
        let flecha = "";
        if (Math.abs(dx) > Math.abs(dy) * 2) {
            flecha = dx > 0 ? "-->" : "<--";
        } else if (Math.abs(dy) > Math.abs(dx) * 2) {
            flecha = dy > 0 ? "ABAJO" : "ARRIBA";
        } else {
            if (dx > 0 && dy > 0) flecha = "ABAJO-DER";
            else if (dx > 0 && dy < 0) flecha = "ARRIBA-DER";
            else if (dx < 0 && dy > 0) flecha = "ABAJO-IZQ";
            else flecha = "ARRIBA-IZQ";
        }
        let distTiles = Math.round(minDist / 16);
        imgG.printCenter("TAREA: " + distTiles + "m " + flecha, 1, 5, image.font5);
    }

    GuiaTareasUI.setImage(imgG);
    GuiaTareasUI.setFlag(SpriteFlag.Invisible, false);
}

// ============================================================
//                     CREAR UI
// ============================================================

function crearUI() {
    // Barra de tareas para TODOS
    BarraTareasUI = sprites.create(image.create(110, 11), SpriteKind.Player);
    BarraTareasUI.setFlag(SpriteFlag.RelativeToCamera, true);
    BarraTareasUI.setPosition(80, 8);
    BarraTareasUI.z = 100;
    actualizarBarraTareas();
    
    if (SoyImpostor) {
        KillBtnUI = sprites.create(img`
. . . . f f f f . . . .
. . f f 2 2 2 2 f f . .
. f 2 2 2 2 2 2 2 2 f .
f 2 2 2 f f f f 2 2 2 f
f 2 2 f 1 1 1 1 f 2 2 f
f 2 2 f 1 1 1 1 f 2 2 f
f 2 2 f 1 1 1 1 f 2 2 f
. f 2 2 2 2 2 2 2 2 f .
. . f f 2 2 2 2 f f . .
. . . . f f f f . . . .
        `, SpriteKind.UI_Button);
        KillBtnUI.setFlag(SpriteFlag.RelativeToCamera, true);
        KillBtnUI.setPosition(140, 120);
        KillBtnUI.z = 100;
    } else {
        // Guía / Brújula de tareas para tripulantes
        GuiaTareasUI = sprites.create(image.create(110, 9), SpriteKind.Player);
        GuiaTareasUI.setFlag(SpriteFlag.RelativeToCamera, true);
        GuiaTareasUI.setPosition(80, 19);
        GuiaTareasUI.z = 100;

        TaskBtnUI = sprites.create(img`
. . . . f f f f . . . .
. . f f 5 5 5 5 f f . .
. f 5 5 5 5 5 5 5 5 f .
f 5 5 5 f f f f 5 5 5 f
f 5 5 f 1 1 1 1 f 5 5 f
f 5 5 f 1 1 1 1 f 5 5 f
f 5 5 f 1 1 1 1 f 5 5 f
. f 5 5 5 5 5 5 5 5 f .
. . f f 5 5 5 5 f f . .
. . . . f f f f . . . .
        `, SpriteKind.UI_Button);
        TaskBtnUI.setFlag(SpriteFlag.RelativeToCamera, true);
        TaskBtnUI.setPosition(140, 125);
        TaskBtnUI.z = 100;
    }
}

// ============================================================
//                     POSICIONES RIVALES
// ============================================================

function actualizarPosRival(idNum: number, xVal: number, yVal: number) {
    if (idNum == MiId) return;
    if (idNum == 1) { 
        if(!Rival1) { Rival1 = sprites.create(obtenerSkin(1), SpriteKind.P2PRival); Rival1.setFlag(SpriteFlag.GhostThroughWalls, true); }
        Rival1.x = xVal; Rival1.y = yVal; 
    } else if (idNum == 2) { 
        if(!Rival2) { Rival2 = sprites.create(obtenerSkin(2), SpriteKind.P2PRival); Rival2.setFlag(SpriteFlag.GhostThroughWalls, true); }
        Rival2.x = xVal; Rival2.y = yVal; 
    } else if (idNum == 3) { 
        if(!Rival3) { Rival3 = sprites.create(obtenerSkin(3), SpriteKind.P2PRival); Rival3.setFlag(SpriteFlag.GhostThroughWalls, true); }
        Rival3.x = xVal; Rival3.y = yVal; 
    } else if (idNum == 4) { 
        if(!Rival4) { Rival4 = sprites.create(obtenerSkin(4), SpriteKind.P2PRival); Rival4.setFlag(SpriteFlag.GhostThroughWalls, true); }
        Rival4.x = xVal; Rival4.y = yVal; 
    }
}

// ============================================================
//                     MUERTE Y CADÁVERES
// ============================================================

function aplicarMuerte(idNum: number, posX: number, posY: number) {
    if (Muertos[idNum]) return;
    Muertos[idNum] = true;

    let dX = posX;
    let dY = posY;
    if (dX == 0 && dY == 0) {
        if (idNum == MiId && JugadorLocal) {
            dX = JugadorLocal.x;
            dY = JugadorLocal.y;
        } else {
            let rival = idNum == 1 ? Rival1 : (idNum == 2 ? Rival2 : (idNum == 3 ? Rival3 : Rival4));
            if (rival) { dX = rival.x; dY = rival.y; }
            else { dX = 400; dY = 150; }
        }
    }

    // Spawnear cadáver en el suelo visible para TODOS (z = 5)
    let cadaver = sprites.create(obtenerSkinCadaver(idNum), SpriteKind.P2PCadaver);
    cadaver.setPosition(dX, dY);
    cadaver.setFlag(SpriteFlag.GhostThroughWalls, true);
    cadaver.z = 5;
    ListaCadaveres.push(cadaver);

    if (idNum == MiId && JugadorLocal) {
        JugadorLocal.setImage(SPRITE_FANTASMA);
        JugadorLocal.setKind(SpriteKind.P2PCadaver);
        JugadorLocal.setFlag(SpriteFlag.GhostThroughWalls, true);
        controller.moveSprite(JugadorLocal, 130, 130);
        JugadorLocal.sayText("HAS SIDO ASESINADO", 4000);
        
        // Mostrar otros fantasmas
        if (Rival1 && Muertos[1]) Rival1.setFlag(SpriteFlag.Invisible, false);
        if (Rival2 && Muertos[2]) Rival2.setFlag(SpriteFlag.Invisible, false);
        if (Rival3 && Muertos[3]) Rival3.setFlag(SpriteFlag.Invisible, false);
        if (Rival4 && Muertos[4]) Rival4.setFlag(SpriteFlag.Invisible, false);
    } else {
        let rival = idNum == 1 ? Rival1 : (idNum == 2 ? Rival2 : (idNum == 3 ? Rival3 : Rival4));
        if (rival) {
            rival.setImage(SPRITE_FANTASMA); 
            rival.setKind(SpriteKind.P2PCadaver);
            if (!Muertos[MiId]) {
                rival.setFlag(SpriteFlag.Invisible, true);
            } else {
                rival.setFlag(SpriteFlag.Invisible, false);
            }
        }
    }
    
    revisarVictoriaImpostor();
}

// ============================================================
//                     VICTORIA
// ============================================================

function revisarVictoriaImpostor() {
    let vivosNoImpostor = 0;
    for (let i = 1; i <= TotalJugadores; i++) {
        if (i != IdImpostor && !Muertos[i]) vivosNoImpostor++;
    }
    
    // Impostor gana cuando quedan igual o menos tripulantes vivos que impostores
    let umbralVictoria = (TotalJugadores <= 2) ? 0 : 1;
    if (TotalJugadores > 1 && vivosNoImpostor <= umbralVictoria) {
        redP2P.enviarDatos("impostor_win", "1");
        terminarPartida(false);
    }
}

function terminarPartida(tripulantesGanan: boolean) {
    if (PartidaTerminada) return;
    PartidaTerminada = true;
    
    let colorFondo = tripulantesGanan ? 8 : 2;
    scene.setBackgroundColor(colorFondo);
    
    let txt = tripulantesGanan ? "VICTORIA TRIPULANTES" : "VICTORIA IMPOSTOR";
    let txt2 = tripulantesGanan ? "Tareas completas / Impostor fuera" : "Tripulacion eliminada";
    
    game.splash(txt, txt2);
    
    for (let i = 1; i <= 4; i++) Muertos[i] = false;
    cargarHub();
}

// ============================================================
//                     REUNIÓN Y VOTACIÓN
// ============================================================

function iniciarReunion(reporterId: number) {
    if (PartidaTerminada || EnVotacion) return;
    
    // Limpiar cadáveres del suelo
    for (let c of ListaCadaveres) { c.destroy(); }
    ListaCadaveres = [];
    
    EnVotacion = true;
    YaVote = false;
    VotosRecibidos = 0;
    MisVotos = [0, 0, 0, 0, 0];
    VotoSeleccionado = 0;
    TiempoVotacion = 30;
    
    JugadorLocal.setPosition(400, 150);
    controller.moveSprite(JugadorLocal, 0, 0); // Congelar movimiento durante la reunión
    game.splash("!REUNION DE EMERGENCIA!", "Reportado por Jugador " + reporterId);
    
    if (UI_Votacion) { UI_Votacion.destroy(); UI_Votacion = null; }
    UI_Votacion = sprites.create(image.create(160, 40), SpriteKind.Player);
    UI_Votacion.setFlag(SpriteFlag.RelativeToCamera, true);
    UI_Votacion.setPosition(80, 90);
    UI_Votacion.z = 200;
    
    actualizarImagenVotacion();
}

function actualizarImagenVotacion() {
    if (!UI_Votacion) return;
    let imgV = image.create(160, 40);
    imgV.fillRect(0, 0, 160, 40, 15);
    imgV.fillRect(1, 1, 158, 38, 1);
    
    let txtV = VotoSeleccionado == 0 ? "OMITIR" : "JUGADOR " + VotoSeleccionado;
    let colorTexto = VotoSeleccionado == 0 ? 1 : VotoSeleccionado == 1 ? 2 : VotoSeleccionado == 2 ? 8 : VotoSeleccionado == 3 ? 7 : 5;
    
    imgV.printCenter("VOTAR A: " + txtV, 2, colorTexto, image.font8);
    imgV.printCenter("< IZQ | DER >  A=Confirmar", 14, 1, image.font5);
    imgV.printCenter("TIEMPO: " + TiempoVotacion + "s", 25, 2, image.font8);
    
    if (YaVote) {
        imgV.fillRect(0, 0, 160, 40, 15);
        imgV.printCenter("ESPERANDO VOTOS...", 10, 1, image.font8);
        imgV.printCenter("TIEMPO: " + TiempoVotacion + "s", 25, 2, image.font5);
    }
    
    UI_Votacion.setImage(imgV);
}

function registrarVoto(votoId: number) {
    VotosRecibidos++;
    MisVotos[votoId]++;
    
    let vivos = 0;
    for (let i = 1; i <= TotalJugadores; i++) if (!Muertos[i]) vivos++;
    
    if (VotosRecibidos >= vivos) {
        procesarResultadoVotacion();
    }
}

function procesarResultadoVotacion() {
    let maxVotos = 0;
    let expulsado = -1;
    let empate = false;
    
    for (let i = 0; i <= 4; i++) {
        if (MisVotos[i] > maxVotos) {
            maxVotos = MisVotos[i];
            expulsado = i;
            empate = false;
        } else if (MisVotos[i] == maxVotos && maxVotos > 0) {
            empate = true;
        }
    }
    
    if (UI_Votacion) { UI_Votacion.destroy(); UI_Votacion = null; }
    EnVotacion = false;
    
    // Restaurar movimiento
    if (Muertos[MiId]) {
        controller.moveSprite(JugadorLocal, 130, 130);
    } else {
        controller.moveSprite(JugadorLocal, 90, 90);
    }
    
    if (empate || expulsado <= 0) {
        cooldownEmergencia = game.runtime() + 25000;
        cooldownKill = game.runtime() + 20000;
        debounceBotonA = game.runtime() + 1000;
        if (JugadorLocal) JugadorLocal.y = 200;
        game.splash("NADIE FUE EXPULSADO", "Empate o saltaron el voto");
    } else {
        game.splash("JUGADOR " + expulsado + " EXPULSADO", expulsado == IdImpostor ? "Era el Impostor" : "No era el Impostor");
        
        if (MiId == expulsado) {
            JugadorLocal.setImage(SPRITE_FANTASMA);
            JugadorLocal.setKind(SpriteKind.P2PCadaver);
            JugadorLocal.setFlag(SpriteFlag.GhostThroughWalls, true);
            controller.moveSprite(JugadorLocal, 130, 130);
            JugadorLocal.sayText("FANTASMA", 5000);
            
            // Ver a los demás fantasmas
            if (Rival1 && Muertos[1]) Rival1.setFlag(SpriteFlag.Invisible, false);
            if (Rival2 && Muertos[2]) Rival2.setFlag(SpriteFlag.Invisible, false);
            if (Rival3 && Muertos[3]) Rival3.setFlag(SpriteFlag.Invisible, false);
            if (Rival4 && Muertos[4]) Rival4.setFlag(SpriteFlag.Invisible, false);
        } else if (expulsado == 1 && Rival1) { Rival1.setFlag(SpriteFlag.Invisible, true); Rival1.setImage(SPRITE_FANTASMA); }
        else if (expulsado == 2 && Rival2) { Rival2.setFlag(SpriteFlag.Invisible, true); Rival2.setImage(SPRITE_FANTASMA); }
        else if (expulsado == 3 && Rival3) { Rival3.setFlag(SpriteFlag.Invisible, true); Rival3.setImage(SPRITE_FANTASMA); }
        else if (expulsado == 4 && Rival4) { Rival4.setFlag(SpriteFlag.Invisible, true); Rival4.setImage(SPRITE_FANTASMA); }
        
        Muertos[expulsado] = true;
        
        // Cooldown y debounce para evitar el loop del botón de emergencia al salir del splash
        cooldownEmergencia = game.runtime() + 25000;
        cooldownKill = game.runtime() + 20000;
        debounceBotonA = game.runtime() + 1000;
        if (JugadorLocal) JugadorLocal.y = 200;

        if (expulsado == IdImpostor) {
            redP2P.enviarDatos("task_win", "1");
            terminarPartida(true);
        } else {
            revisarVictoriaImpostor();
            if (!PartidaTerminada && TareasGlobales >= MaxTareasGlobales) {
                redP2P.enviarDatos("task_win", "1");
                terminarPartida(true);
            }
        }
    }
}

// ============================================================
//                     RED P2P - RECIBIR
// ============================================================

redP2P.alRecibir(function (accion: string, valor: string) {
    if (accion == "set_player") {
        let pId = parseInt(valor);
        if (pId >= 1 && pId <= 4) {
            MiId = pId;
            SoyImpostor = (MiId == IdImpostor);
            if (!PartidaActiva) cargarHub();
        }
    } else if (accion == "setup_partida") {
        if (PartidaActiva) return;
        let partes = valor.split(",");
        MiId = parseInt(partes[0]);
        TotalJugadores = parseInt(partes[1]);
        IdImpostor = parseInt(partes[2]);
        SoyImpostor = (MiId == IdImpostor);
        iniciarPartida();
    } else if (accion == "player_left") {
        let leftId = parseInt(valor);
        if (leftId >= 1 && leftId <= 4) {
            Muertos[leftId] = true;
            let rival = leftId == 1 ? Rival1 : (leftId == 2 ? Rival2 : (leftId == 3 ? Rival3 : Rival4));
            if (rival) { sprites.destroy(rival); }
            if (EnVotacion) { registrarVoto(0); }
            if (leftId == IdImpostor && PartidaActiva && !PartidaTerminada) {
                game.splash("IMPOSTOR DESCONECTADO", "Tripulantes ganan");
                terminarPartida(true);
            } else if (PartidaActiva && !PartidaTerminada) {
                revisarVictoriaImpostor();
            }
        }
    } else if (accion == "pos") {
        let partesPos = valor.split(",");
        if (partesPos.length >= 3) {
            let idRemoto = parseInt(partesPos[0]);
            if (idRemoto != MiId) {
                actualizarPosRival(idRemoto, parseFloat(partesPos[1]), parseFloat(partesPos[2]));
            }
        }
    } else if (accion == "kill") {
        let partesK = valor.split(",");
        let victimId = parseInt(partesK[0]);
        let kX = partesK.length >= 3 ? parseFloat(partesK[1]) : 0;
        let kY = partesK.length >= 3 ? parseFloat(partesK[2]) : 0;
        aplicarMuerte(victimId, kX, kY);
    } else if (accion == "task_sync") {
        TareasGlobales++;
        actualizarBarraTareas();
        if (TareasGlobales >= MaxTareasGlobales) {
            redP2P.enviarDatos("task_win", "1");
            terminarPartida(true);
        }
    } else if (accion == "report") {
        iniciarReunion(parseInt(valor));
    } else if (accion == "vote") {
        registrarVoto(parseInt(valor));
    } else if (accion == "task_win") {
        terminarPartida(true);
    } else if (accion == "impostor_win") {
        terminarPartida(false);
    } else if (accion == "imp_win") {
        terminarPartida(false);
    }
});

// ============================================================
//                     BOTÓN A - INTERACCIÓN
// ============================================================

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() < debounceBotonA) return;

    // 1. Votación
    if (EnVotacion && !YaVote) {
        YaVote = true;
        actualizarImagenVotacion();
        redP2P.enviarDatos("vote", VotoSeleccionado.toString());
        registrarVoto(VotoSeleccionado);
        return;
    }
    if (EnVotacion) return;
    
    // 2. Reportar cuerpo o emergencia
    if (PartidaActiva && !PartidaTerminada && !Muertos[MiId]) {
        let cercaDeCadaver = false;
        for (let c of ListaCadaveres) {
            if (distCoords(JugadorLocal.x, JugadorLocal.y, c.x, c.y) <= 50) {
                cercaDeCadaver = true;
                break;
            }
        }
        
        if (cercaDeCadaver) {
            redP2P.enviarDatos("report", MiId.toString());
            iniciarReunion(MiId);
            return;
        }

        let distCafeteria = distCoords(JugadorLocal.x, JugadorLocal.y, 400, 150);
        if (distCafeteria <= 50) {
            if (game.runtime() < cooldownEmergencia) {
                let segs = Math.ceil((cooldownEmergencia - game.runtime()) / 1000);
                JugadorLocal.sayText("Espera " + segs + "s", 1200);
                return;
            }
            if (reunionesEmergenciaRestantes <= 0) {
                JugadorLocal.sayText("Sin reuniones restantes", 1200);
                return;
            }
            reunionesEmergenciaRestantes--;
            redP2P.enviarDatos("report", MiId.toString());
            iniciarReunion(MiId);
            return;
        }
    }
    
    // 3. Iniciar partida (Host en Lobby)
    if (!PartidaActiva && MiId == 1) {
        redP2P.enviarDatos("req_start", "1");
        setTimeout(function() {
            if (!PartidaActiva) {
                TotalJugadores = 1;
                IdImpostor = 1;
                SoyImpostor = true;
                iniciarPartida();
            }
        }, 500);
        return;
    }

    // 4. Hacer tareas (Tripulantes vivos y fantasmas pueden hacer sus tareas)
    if (!SoyImpostor && PartidaActiva && !PartidaTerminada) {
        let idxCompletada = -1;
        for (let i = 0; i < misUbicacionesTareas.length; i++) {
            let loc = misUbicacionesTareas[i];
            let d = distCoords(JugadorLocal.x, JugadorLocal.y, loc.x, loc.y);
            if (d <= 32) {
                idxCompletada = i;
                break;
            }
        }

        if (idxCompletada >= 0) {
            if (misMarcadoresTareas[idxCompletada]) {
                misMarcadoresTareas[idxCompletada].destroy(effects.confetti, 500);
            }
            misMarcadoresTareas.removeAt(idxCompletada);
            misUbicacionesTareas.removeAt(idxCompletada);

            tareasCompletadas++;
            TareasGlobales++;
            actualizarBarraTareas();
            actualizarGuiaTareasHUD();
            JugadorLocal.sayText("¡Tarea " + tareasCompletadas + "/" + totalTareas + " lista!", 1500);
            redP2P.enviarDatos("task_sync", "1");

            if (TareasGlobales >= MaxTareasGlobales) {
                redP2P.enviarDatos("task_win", "1");
                terminarPartida(true);
            }
            return;
        }
    }
});

// ============================================================
//                     BOTÓN B - MATAR
// ============================================================

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (EnVotacion) return;
    if (SoyImpostor && PartidaActiva && !PartidaTerminada && JugadorLocal && !Muertos[MiId]) {
        if (game.runtime() < cooldownKill) {
            let segs = Math.ceil((cooldownKill - game.runtime()) / 1000);
            JugadorLocal.sayText("Cooldown: " + segs + "s", 1000);
            return;
        }

        let killRange = 35;
        let matoId = 0;
        let vX = 0;
        let vY = 0;

        if (Rival1 && !Muertos[1] && dist(JugadorLocal, Rival1) <= killRange) {
            matoId = 1; vX = Rival1.x; vY = Rival1.y;
        } else if (Rival2 && !Muertos[2] && dist(JugadorLocal, Rival2) <= killRange) {
            matoId = 2; vX = Rival2.x; vY = Rival2.y;
        } else if (Rival3 && !Muertos[3] && dist(JugadorLocal, Rival3) <= killRange) {
            matoId = 3; vX = Rival3.x; vY = Rival3.y;
        } else if (Rival4 && !Muertos[4] && dist(JugadorLocal, Rival4) <= killRange) {
            matoId = 4; vX = Rival4.x; vY = Rival4.y;
        }

        if (matoId > 0) {
            cooldownKill = game.runtime() + 20000; // 20 segundos de recarga tras asesinar
            aplicarMuerte(matoId, vX, vY);
            redP2P.enviarDatos("kill", matoId + "," + Math.round(vX) + "," + Math.round(vY));
        }
    }
});

// ============================================================
//             NAVEGACIÓN DE VOTACIÓN (IZQ / DER)
// ============================================================

controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    if (EnVotacion && !YaVote) {
        VotoSeleccionado--;
        if (VotoSeleccionado < 0) VotoSeleccionado = TotalJugadores;
        while (VotoSeleccionado > 0 && Muertos[VotoSeleccionado]) {
            VotoSeleccionado--;
            if (VotoSeleccionado < 0) VotoSeleccionado = TotalJugadores;
        }
        actualizarImagenVotacion();
    }
});

controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    if (EnVotacion && !YaVote) {
        VotoSeleccionado++;
        if (VotoSeleccionado > TotalJugadores) VotoSeleccionado = 0;
        while (VotoSeleccionado > 0 && Muertos[VotoSeleccionado]) {
            VotoSeleccionado++;
            if (VotoSeleccionado > TotalJugadores) VotoSeleccionado = 0;
        }
        actualizarImagenVotacion();
    }
});

// ============================================================
//                     GAME LOOPS
// ============================================================

// Enviar posición cada 50ms
game.onUpdateInterval(50, function () {
    if (JugadorLocal && !PartidaTerminada) {
        redP2P.enviarDatos("pos", MiId + "," + JugadorLocal.x + "," + JugadorLocal.y);
    }
});

// Timer de votación (con failsafe a los 32s por si algún jugador está en pestaña en segundo plano)
game.onUpdateInterval(1000, function() {
    if (EnVotacion && TiempoVotacion > -5) {
        TiempoVotacion--;
        actualizarImagenVotacion();
        if (TiempoVotacion <= 0 && !YaVote) {
            YaVote = true;
            redP2P.enviarDatos("vote", "0");
            registrarVoto(0);
        }
        if (TiempoVotacion <= -2 && EnVotacion) {
            procesarResultadoVotacion();
        }
    }
});

// UI & Proximidad Update
game.onUpdate(function() {
    if (!PartidaActiva || PartidaTerminada) return;

    // Actualizar botón de matar para Impostor
    if (SoyImpostor && KillBtnUI) {
        let puedeMatar = false;
        let killRange = 35;
        if (game.runtime() >= cooldownKill) {
            if (Rival1 && !Muertos[1] && dist(JugadorLocal, Rival1) <= killRange) puedeMatar = true;
            if (Rival2 && !Muertos[2] && dist(JugadorLocal, Rival2) <= killRange) puedeMatar = true;
            if (Rival3 && !Muertos[3] && dist(JugadorLocal, Rival3) <= killRange) puedeMatar = true;
            if (Rival4 && !Muertos[4] && dist(JugadorLocal, Rival4) <= killRange) puedeMatar = true;
        } else {
            let cercaDeAlguien = false;
            if (Rival1 && !Muertos[1] && dist(JugadorLocal, Rival1) <= killRange) cercaDeAlguien = true;
            if (Rival2 && !Muertos[2] && dist(JugadorLocal, Rival2) <= killRange) cercaDeAlguien = true;
            if (Rival3 && !Muertos[3] && dist(JugadorLocal, Rival3) <= killRange) cercaDeAlguien = true;
            if (Rival4 && !Muertos[4] && dist(JugadorLocal, Rival4) <= killRange) cercaDeAlguien = true;
            if (cercaDeAlguien) {
                let segs = Math.ceil((cooldownKill - game.runtime()) / 1000);
                JugadorLocal.sayText("Kill en " + segs + "s", 200);
            }
        }
        KillBtnUI.y = puedeMatar ? 98 + Math.sin(game.runtime()/100)*2 : 125;
    }

    // Actualizar guía de tareas y botón para Tripulante
    if (!SoyImpostor) {
        actualizarGuiaTareasHUD();

        let puedeHacerTarea = false;
        for (let loc of misUbicacionesTareas) {
            let d = distCoords(JugadorLocal.x, JugadorLocal.y, loc.x, loc.y);
            if (d <= 32) {
                puedeHacerTarea = true;
                break;
            }
        }
        if (TaskBtnUI) {
            TaskBtnUI.y = puedeHacerTarea ? 98 + Math.sin(game.runtime()/100)*2 : 125;
        }
    }

    // Avisos de proximidad a cadáveres o botón de emergencia
    if (!Muertos[MiId] && !EnVotacion) {
        let distCafeteria = distCoords(JugadorLocal.x, JugadorLocal.y, 400, 150);
        let cercaDeCadaver = false;
        for (let c of ListaCadaveres) {
            if (distCoords(JugadorLocal.x, JugadorLocal.y, c.x, c.y) <= 50) {
                cercaDeCadaver = true;
                break;
            }
        }
        if (cercaDeCadaver) {
            JugadorLocal.sayText("!REPORTAR CUERPO [A]!", 200);
        } else if (distCafeteria <= 50) {
            if (game.runtime() >= cooldownEmergencia && reunionesEmergenciaRestantes > 0) {
                JugadorLocal.sayText("!EMERGENCIA [A]!", 200);
            } else if (reunionesEmergenciaRestantes <= 0) {
                JugadorLocal.sayText("Boton agotado", 200);
            } else {
                let segs = Math.ceil((cooldownEmergencia - game.runtime()) / 1000);
                JugadorLocal.sayText("Boton: " + segs + "s", 200);
            }
        }
    }
});
