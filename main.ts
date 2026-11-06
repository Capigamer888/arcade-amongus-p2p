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
    if (!s1 || !s2) return 99999;
    return distCoords(s1.x, s1.y, s2.x, s2.y);
}

function idValido(idNum: number): boolean {
    return idNum >= 1 && idNum <= 4;
}

function obtenerRival(idNum: number): Sprite {
    if (idNum == 1) return Rival1;
    if (idNum == 2) return Rival2;
    if (idNum == 3) return Rival3;
    if (idNum == 4) return Rival4;
    return null;
}

function asignarRival(idNum: number, s: Sprite) {
    if (idNum == 1) Rival1 = s;
    else if (idNum == 2) Rival2 = s;
    else if (idNum == 3) Rival3 = s;
    else if (idNum == 4) Rival4 = s;
}

// Mensaje importante: se muestra durante 'ms' y bloquea los avisos de proximidad mientras tanto
function mostrarMensaje(texto: string, ms: number) {
    if (!JugadorLocal) return;
    JugadorLocal.sayText(texto, ms);
    avisoPrioritarioHasta = game.runtime() + ms;
    ultimoAvisoTexto = "";
}

// Aviso de proximidad: no recrea el globo en cada frame ni pisa los mensajes importantes
function mostrarAviso(texto: string) {
    if (!JugadorLocal) return;
    let ahora = game.runtime();
    if (ahora < avisoPrioritarioHasta) return;
    if (texto == ultimoAvisoTexto && ahora - ultimoAvisoTiempo < 150) return;
    ultimoAvisoTexto = texto;
    ultimoAvisoTiempo = ahora;
    JugadorLocal.sayText(texto, 250);
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

let ModoPractica = false;
let VotoEmitido: boolean[] = [false, false, false, false, false];
let TareasPorJugador: number[] = [0, 0, 0, 0, 0];
let Desconectados: boolean[] = [false, false, false, false, false];
const TAREAS_POR_TRIPULANTE = 3;

// Mesa de emergencia de la Cafetería en Level_2: bloque de muros alrededor de tile32
// (columnas 85-90, filas 53-58). El botón se activa a RADIO_MESA píxeles de su centro.
const MESA_X = 1408;
const MESA_Y = 896;
const RADIO_MESA = 64;
// Puntos de aparición alrededor de la mesa (libres de muros y fuera del radio del botón)
const SPAWN_X = [MESA_X - 80, MESA_X - 80, MESA_X + 80, MESA_X, MESA_X];
const SPAWN_Y = [MESA_Y, MESA_Y, MESA_Y, MESA_Y - 80, MESA_Y + 80];

let avisoPrioritarioHasta = 0;
let ultimoAvisoTexto = "";
let ultimoAvisoTiempo = 0;

// ============================================================
//                     FUNCIONES CORE
// ============================================================

function resetearRivalHub(r: Sprite, id: number) {
    if (!r) return;
    r.setImage(obtenerSkin(id));
    r.setKind(SpriteKind.P2PRival);
    // Nunca mostrar un "rival" con nuestro propio ID (duplicado de nosotros mismos)
    r.setFlag(SpriteFlag.Invisible, id == MiId);
    r.setFlag(SpriteFlag.GhostThroughWalls, true);
    r.setPosition(75 + id * 12, 75);
}

function cargarHub() {
    for (let i = 1; i <= 4; i++) Muertos[i] = false;
    MapaActual = "hub";
    PartidaActiva = false;
    PartidaTerminada = false;
    ModoPractica = false;
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
    for (let i = 0; i <= 4; i++) TareasPorJugador[i] = 0;

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
    r.setPosition(SPAWN_X[id], SPAWN_Y[id]);
    return r;
}

// Coloca a un jugador en su punto de aparición junto a la mesa de la Cafetería
function colocarEnMesa(s: Sprite, id: number) {
    if (!s || !idValido(id)) return;
    s.setPosition(SPAWN_X[id], SPAWN_Y[id]);
}

function iniciarPartida() {
    for (let i = 1; i <= 4; i++) Muertos[i] = false;
    for (let i = 0; i <= 4; i++) {
        TareasPorJugador[i] = 0;
        VotoEmitido[i] = false;
        Desconectados[i] = false;
    }
    MapaActual = "skeld";
    PartidaActiva = true;
    PartidaTerminada = false;
    EnVotacion = false;
    YaVote = false;
    TareasGlobales = 0;
    tareasCompletadas = 0;
    MaxTareasGlobales = Math.max(1, TotalJugadores - 1) * TAREAS_POR_TRIPULANTE;
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
    if (UI_Votacion) { UI_Votacion.destroy(); UI_Votacion = null; }

    // Limpiar marcadores previos
    for (let m of misMarcadoresTareas) { m.destroy(); }
    misMarcadoresTareas = [];
    misUbicacionesTareas = [];
    misTareasActivas = [];

    // Limpiar cadáveres previos
    for (let c of ListaCadaveres) { c.destroy(); }
    ListaCadaveres = [];

    // Reposicionar jugador local junto a la mesa de la Cafetería.
    // (tile32 es la propia mesa y es un muro: colocar al jugador encima lo dejaba atascado)
    JugadorLocal.setImage(obtenerSkin(MiId));
    JugadorLocal.setKind(SpriteKind.P2PLocal);
    JugadorLocal.setFlag(SpriteFlag.GhostThroughWalls, false);
    colocarEnMesa(JugadorLocal, MiId);
    controller.moveSprite(JugadorLocal, 90, 90);

    // Preparar rivales (en modo práctica se crean bots de prueba; en online solo los conectados)
    for (let id = 1; id <= 4; id++) {
        if (id != MiId && (id <= TotalJugadores || ModoPractica)) {
            asignarRival(id, prepararRivalPartida(obtenerRival(id), id));
        } else {
            let sobrante = obtenerRival(id);
            if (sobrante) sobrante.setFlag(SpriteFlag.Invisible, true);
        }
    }

    // Configurar tareas para tripulantes (y en modo práctica para poder probarlas)
    if (!SoyImpostor || ModoPractica) {
        configurarTareasTripulante();
    }

    crearUI();

    if (ModoPractica) {
        mostrarMensaje("PRACTICA: A=Tarea/Reportar B=Matar", 5000);
    } else if (SoyImpostor) {
        mostrarMensaje("IMPOSTOR (Usa B para matar)", 5000);
    } else {
        mostrarMensaje("TRIPULANTE (Sigue la guia de tareas)", 5000);
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

    totalTareas = TAREAS_POR_TRIPULANTE;
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
    
    let fillW = Math.min(108, Math.max(0, Math.round((TareasGlobales / Math.max(1, MaxTareasGlobales)) * 108)));
    if (fillW > 0) {
        imgBarra.fillRect(1, 1, fillW, 9, 7);
    }
    
    let txt = "TAREAS " + TareasGlobales + "/" + MaxTareasGlobales;
    imgBarra.printCenter(txt, 2, 1, image.font5);
    
    BarraTareasUI.setImage(imgBarra);
}

// Ancho de la guía: font5 usa 6 px por carácter y textos como "TODAS TUS TAREAS LISTAS"
// (23 caracteres = 138 px) se cortaban con el ancho anterior de 110 px.
const ANCHO_GUIA = 150;
let ultimoTextoGuia = "";

function dibujarGuia(texto: string, colorFondo: number, colorTexto: number) {
    if (!GuiaTareasUI) return;
    let clave = texto + "#" + colorFondo + "#" + colorTexto;
    if (clave != ultimoTextoGuia) {
        ultimoTextoGuia = clave;
        let imgG = image.create(ANCHO_GUIA, 9);
        imgG.fillRect(0, 0, ANCHO_GUIA, 9, 15);
        imgG.fillRect(1, 1, ANCHO_GUIA - 2, 7, colorFondo);
        imgG.printCenter(texto, 1, colorTexto, image.font5);
        GuiaTareasUI.setImage(imgG);
    }
    GuiaTareasUI.setFlag(SpriteFlag.Invisible, false);
}

function actualizarGuiaTareasHUD() {
    if (!GuiaTareasUI || (SoyImpostor && !ModoPractica) || !PartidaActiva || PartidaTerminada) {
        if (GuiaTareasUI) GuiaTareasUI.setFlag(SpriteFlag.Invisible, true);
        return;
    }

    if (misUbicacionesTareas.length == 0) {
        dibujarGuia("TODAS TUS TAREAS LISTAS", 7, 1);
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

    if (minDist <= 32) {
        dibujarGuia("[A] HACER TAREA AQUI", 7, 1);
    } else {
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
        dibujarGuia("TAREA: " + distTiles + "m " + flecha, 1, 5);
    }
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
    ultimoTextoGuia = "";
    
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
    }
    if (!SoyImpostor || ModoPractica) {
        // Guía / Brújula de tareas para tripulantes (y modo práctica)
        GuiaTareasUI = sprites.create(image.create(ANCHO_GUIA, 9), SpriteKind.Player);
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
        TaskBtnUI.setPosition(SoyImpostor ? 122 : 140, 125);
        TaskBtnUI.z = 100;
    }
}

// ============================================================
//                     POSICIONES RIVALES
// ============================================================

function actualizarPosRival(idNum: number, xVal: number, yVal: number) {
    if (!idValido(idNum) || idNum == MiId) return;
    if (Desconectados[idNum]) return;
    if (PartidaActiva && idNum > TotalJugadores) return;
    if (EnVotacion) return;

    let rival = obtenerRival(idNum);
    if (!rival) {
        rival = sprites.create(Muertos[idNum] ? SPRITE_FANTASMA : obtenerSkin(idNum), Muertos[idNum] ? SpriteKind.P2PCadaver : SpriteKind.P2PRival);
        rival.setFlag(SpriteFlag.GhostThroughWalls, true);
        if (Muertos[idNum] && !Muertos[MiId]) {
            rival.setFlag(SpriteFlag.Invisible, true);
        }
        asignarRival(idNum, rival);
    }
    rival.x = xVal;
    rival.y = yVal;
}

// ============================================================
//                     MUERTE Y CADÁVERES
// ============================================================

function aplicarMuerte(idNum: number, posX: number, posY: number) {
    if (!idValido(idNum) || Muertos[idNum]) return;
    Muertos[idNum] = true;

    let dX = posX;
    let dY = posY;
    if (dX == 0 && dY == 0) {
        if (idNum == MiId && JugadorLocal) {
            dX = JugadorLocal.x;
            dY = JugadorLocal.y;
        } else {
            let rival = obtenerRival(idNum);
            if (rival) { dX = rival.x; dY = rival.y; }
            else { dX = SPAWN_X[idNum]; dY = SPAWN_Y[idNum]; }
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
        controller.moveSprite(JugadorLocal, EnVotacion ? 0 : 130, EnVotacion ? 0 : 130);
        mostrarMensaje("HAS SIDO ASESINADO", 4000);
        
        // Mostrar otros fantasmas
        if (Rival1 && Muertos[1]) Rival1.setFlag(SpriteFlag.Invisible, false);
        if (Rival2 && Muertos[2]) Rival2.setFlag(SpriteFlag.Invisible, false);
        if (Rival3 && Muertos[3]) Rival3.setFlag(SpriteFlag.Invisible, false);
        if (Rival4 && Muertos[4]) Rival4.setFlag(SpriteFlag.Invisible, false);
    } else {
        let rival = obtenerRival(idNum);
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
    if (ModoPractica) {
        if (Muertos[2] && Muertos[3] && Muertos[4]) {
            terminarPartida(false);
        }
        return;
    }

    let vivosNoImpostor = 0;
    for (let i = 1; i <= TotalJugadores; i++) {
        if (i != IdImpostor && !Muertos[i] && !Desconectados[i]) vivosNoImpostor++;
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
    EnVotacion = false;
    if (UI_Votacion) { UI_Votacion.destroy(); UI_Votacion = null; }
    
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

function maxIndiceVotacion(): number {
    return ModoPractica ? 4 : TotalJugadores;
}

function iniciarReunion(reporterId: number) {
    if (!PartidaActiva || PartidaTerminada || EnVotacion) return;
    
    // Limpiar cadáveres del suelo
    for (let c of ListaCadaveres) { c.destroy(); }
    ListaCadaveres = [];
    
    EnVotacion = true;
    YaVote = Muertos[MiId] ? true : false;
    VotosRecibidos = 0;
    MisVotos = [0, 0, 0, 0, 0];
    for (let i = 0; i <= 4; i++) VotoEmitido[i] = false;
    VotoSeleccionado = 0;
    TiempoVotacion = 30;
    
    colocarEnMesa(JugadorLocal, MiId);
    controller.moveSprite(JugadorLocal, 0, 0); // Congelar movimiento durante la reunión
    
    // Reunir rivales en la mesa de emergencia de la Cafetería
    if (Rival1) colocarEnMesa(Rival1, 1);
    if (Rival2) colocarEnMesa(Rival2, 2);
    if (Rival3) colocarEnMesa(Rival3, 3);
    if (Rival4) colocarEnMesa(Rival4, 4);

    game.splash("!REUNION DE EMERGENCIA!", "Reportado por Jugador " + reporterId);
    
    if (!PartidaActiva || PartidaTerminada) return;

    if (UI_Votacion) { UI_Votacion.destroy(); UI_Votacion = null; }
    UI_Votacion = sprites.create(image.create(160, 40), SpriteKind.Player);
    UI_Votacion.setFlag(SpriteFlag.RelativeToCamera, true);
    UI_Votacion.setPosition(80, 90);
    UI_Votacion.z = 200;
    
    actualizarImagenVotacion();
    verificarFinVotacion();
}

function actualizarImagenVotacion() {
    if (!UI_Votacion) return;
    let imgV = image.create(160, 40);
    imgV.fillRect(0, 0, 160, 40, 15);
    imgV.fillRect(1, 1, 158, 38, 1);
    
    let tMostrado = Math.max(0, TiempoVotacion);
    if (Muertos[MiId]) {
        imgV.fillRect(0, 0, 160, 40, 15);
        imgV.printCenter("FANTASMA (NO VOTAS)", 8, 1, image.font8);
        imgV.printCenter("TIEMPO: " + tMostrado + "s", 24, 2, image.font5);
    } else if (YaVote) {
        imgV.fillRect(0, 0, 160, 40, 15);
        imgV.printCenter("ESPERANDO VOTOS...", 10, 1, image.font8);
        imgV.printCenter("TIEMPO: " + tMostrado + "s", 25, 2, image.font5);
    } else {
        let txtV = VotoSeleccionado == 0 ? "OMITIR" : "JUGADOR " + VotoSeleccionado;
        let colorTexto = VotoSeleccionado == 0 ? 1 : VotoSeleccionado == 1 ? 2 : VotoSeleccionado == 2 ? 8 : VotoSeleccionado == 3 ? 7 : 5;
        
        imgV.printCenter("VOTAR A: " + txtV, 2, colorTexto, image.font8);
        imgV.printCenter("< IZQ | DER >  A=Confirmar", 14, 1, image.font5);
        imgV.printCenter("TIEMPO: " + tMostrado + "s", 25, 2, image.font8);
    }
    
    UI_Votacion.setImage(imgV);
}

function verificarFinVotacion() {
    if (!EnVotacion) return;
    let vivos = 0;
    let votaronVivos = 0;
    for (let i = 1; i <= TotalJugadores; i++) {
        if (!Muertos[i] && !Desconectados[i]) {
            vivos++;
            if (VotoEmitido[i]) votaronVivos++;
        }
    }
    if (vivos == 0 || votaronVivos >= vivos || VotosRecibidos >= vivos) {
        procesarResultadoVotacion();
    }
}

function registrarVoto(voterId: number, votoId: number) {
    if (!EnVotacion) return;
    if (votoId < 0 || votoId > 4) return;
    if (idValido(voterId)) {
        if (Muertos[voterId] || Desconectados[voterId] || VotoEmitido[voterId]) return;
        VotoEmitido[voterId] = true;
    }
    VotosRecibidos++;
    MisVotos[votoId]++;
    verificarFinVotacion();
}

function procesarResultadoVotacion() {
    if (!EnVotacion) return;
    EnVotacion = false;
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
        colocarEnMesa(JugadorLocal, MiId);
        game.splash("NADIE FUE EXPULSADO", "Empate o saltaron el voto");
    } else {
        let eraImpostor = (!ModoPractica && expulsado == IdImpostor);
        game.splash("JUGADOR " + expulsado + " EXPULSADO", eraImpostor ? "Era el Impostor" : "No era el Impostor");
        
        Muertos[expulsado] = true;

        if (MiId == expulsado) {
            JugadorLocal.setImage(SPRITE_FANTASMA);
            JugadorLocal.setKind(SpriteKind.P2PCadaver);
            JugadorLocal.setFlag(SpriteFlag.GhostThroughWalls, true);
            controller.moveSprite(JugadorLocal, 130, 130);
            mostrarMensaje("FANTASMA", 5000);
            
            // Ver a los demás fantasmas
            if (Rival1 && Muertos[1]) Rival1.setFlag(SpriteFlag.Invisible, false);
            if (Rival2 && Muertos[2]) Rival2.setFlag(SpriteFlag.Invisible, false);
            if (Rival3 && Muertos[3]) Rival3.setFlag(SpriteFlag.Invisible, false);
            if (Rival4 && Muertos[4]) Rival4.setFlag(SpriteFlag.Invisible, false);
        } else {
            let rivalExp = obtenerRival(expulsado);
            if (rivalExp) {
                rivalExp.setImage(SPRITE_FANTASMA);
                rivalExp.setKind(SpriteKind.P2PCadaver);
                if (!Muertos[MiId]) {
                    rivalExp.setFlag(SpriteFlag.Invisible, true);
                } else {
                    rivalExp.setFlag(SpriteFlag.Invisible, false);
                }
            }
        }
        
        // Cooldown y debounce para evitar reactivar el botón de emergencia al salir del splash
        cooldownEmergencia = game.runtime() + 25000;
        cooldownKill = game.runtime() + 20000;
        debounceBotonA = game.runtime() + 1000;
        colocarEnMesa(JugadorLocal, MiId);

        if (eraImpostor) {
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
        if (idValido(pId)) {
            MiId = pId;
            SoyImpostor = (MiId == IdImpostor);
            if (!PartidaActiva) cargarHub();
        }
    } else if (accion == "setup_partida") {
        if (PartidaActiva && !ModoPractica) return;
        let partes = valor.split(",");
        if (partes.length < 3) return;
        let nuevoMiId = parseInt(partes[0]);
        let nuevoTotal = parseInt(partes[1]);
        let nuevoImpostor = parseInt(partes[2]);
        if (!idValido(nuevoMiId) || nuevoTotal < 1 || nuevoTotal > 4 || !idValido(nuevoImpostor)) return;
        MiId = nuevoMiId;
        TotalJugadores = nuevoTotal;
        IdImpostor = nuevoImpostor;
        ModoPractica = (TotalJugadores == 1);
        SoyImpostor = (MiId == IdImpostor);
        iniciarPartida();
    } else if (accion == "player_left") {
        let leftId = parseInt(valor);
        if (idValido(leftId) && !Desconectados[leftId]) {
            Desconectados[leftId] = true;
            Muertos[leftId] = true;
            let rival = obtenerRival(leftId);
            if (rival) {
                sprites.destroy(rival);
                asignarRival(leftId, null);
            }
            if (EnVotacion) {
                if (VotoSeleccionado == leftId) {
                    VotoSeleccionado = 0;
                    actualizarImagenVotacion();
                }
                verificarFinVotacion();
            }
            if (leftId == IdImpostor && PartidaActiva && !PartidaTerminada) {
                game.splash("IMPOSTOR DESCONECTADO", "Tripulantes ganan");
                terminarPartida(true);
            } else if (PartidaActiva && !PartidaTerminada) {
                let tareasPendientes = Math.max(0, TAREAS_POR_TRIPULANTE - TareasPorJugador[leftId]);
                MaxTareasGlobales = Math.max(1, Math.max(TareasGlobales, MaxTareasGlobales - tareasPendientes));
                actualizarBarraTareas();
                if (TareasGlobales >= MaxTareasGlobales && MaxTareasGlobales > 0) {
                    redP2P.enviarDatos("task_win", "1");
                    terminarPartida(true);
                    return;
                }
                revisarVictoriaImpostor();
            }
        }
    } else if (accion == "pos") {
        let partesPos = valor.split(",");
        if (partesPos.length >= 3) {
            let idRemoto = parseInt(partesPos[0]);
            let px = parseFloat(partesPos[1]);
            let py = parseFloat(partesPos[2]);
            if (idRemoto != MiId && !isNaN(px) && !isNaN(py)) {
                actualizarPosRival(idRemoto, px, py);
            }
        }
    } else if (accion == "kill") {
        if (!PartidaActiva || PartidaTerminada) return;
        let partesK = valor.split(",");
        let victimId = parseInt(partesK[0]);
        let kX = partesK.length >= 3 ? parseFloat(partesK[1]) : 0;
        let kY = partesK.length >= 3 ? parseFloat(partesK[2]) : 0;
        aplicarMuerte(victimId, isNaN(kX) ? 0 : kX, isNaN(kY) ? 0 : kY);
    } else if (accion == "task_sync") {
        if (!PartidaActiva || PartidaTerminada) return;
        let autorId = parseInt(valor);
        if (idValido(autorId) && autorId != MiId) {
            TareasPorJugador[autorId]++;
        }
        TareasGlobales++;
        actualizarBarraTareas();
        if (TareasGlobales >= MaxTareasGlobales) {
            redP2P.enviarDatos("task_win", "1");
            terminarPartida(true);
        }
    } else if (accion == "report") {
        if (!PartidaActiva || PartidaTerminada) return;
        let repId = parseInt(valor);
        iniciarReunion(idValido(repId) ? repId : 1);
    } else if (accion == "vote") {
        if (!PartidaActiva || PartidaTerminada) return;
        let partesV = valor.split(",");
        if (partesV.length >= 2) {
            registrarVoto(parseInt(partesV[0]), parseInt(partesV[1]));
        } else {
            registrarVoto(0, parseInt(valor));
        }
    } else if (accion == "task_win") {
        if (PartidaActiva) terminarPartida(true);
    } else if (accion == "impostor_win" || accion == "imp_win") {
        if (PartidaActiva) terminarPartida(false);
    }
});

// ============================================================
//                     BOTÓN A - INTERACCIÓN
// ============================================================

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() < debounceBotonA) return;

    // 1. Votación
    if (EnVotacion) {
        if (!YaVote && !Muertos[MiId]) {
            YaVote = true;
            actualizarImagenVotacion();
            redP2P.enviarDatos("vote", MiId + "," + VotoSeleccionado);
            registrarVoto(MiId, VotoSeleccionado);
        }
        return;
    }
    
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

        let distCafeteria = distCoords(JugadorLocal.x, JugadorLocal.y, MESA_X, MESA_Y);
        if (distCafeteria <= RADIO_MESA) {
            if (game.runtime() < cooldownEmergencia) {
                let segs = Math.ceil((cooldownEmergencia - game.runtime()) / 1000);
                mostrarMensaje("Espera " + segs + "s", 1200);
                return;
            }
            if (reunionesEmergenciaRestantes <= 0) {
                mostrarMensaje("Sin reuniones restantes", 1200);
                return;
            }
            reunionesEmergenciaRestantes--;
            redP2P.enviarDatos("report", MiId.toString());
            iniciarReunion(MiId);
            return;
        }
    }
    
    // 3. Iniciar partida (Host en Lobby o Modo Práctica en MakeCode Arcade)
    if (!PartidaActiva) {
        if (MiId == 1) {
            redP2P.enviarDatos("req_start", "1");
        }
        setTimeout(function() {
            if (!PartidaActiva) {
                ModoPractica = true;
                MiId = 1;
                TotalJugadores = 1;
                IdImpostor = 1;
                SoyImpostor = true;
                iniciarPartida();
            }
        }, 500);
        return;
    }

    // 4. Hacer tareas (Tripulantes vivos, fantasmas y modo práctica pueden hacer tareas)
    if ((!SoyImpostor || ModoPractica) && PartidaActiva && !PartidaTerminada) {
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
            TareasPorJugador[MiId]++;
            TareasGlobales++;
            actualizarBarraTareas();
            actualizarGuiaTareasHUD();
            mostrarMensaje("¡Tarea " + tareasCompletadas + "/" + totalTareas + " lista!", 1500);
            redP2P.enviarDatos("task_sync", MiId.toString());

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
            mostrarMensaje("Cooldown: " + segs + "s", 1000);
            return;
        }

        let killRange = 35;
        let matoId = 0;
        let mejorDist = 99999;
        let vX = 0;
        let vY = 0;

        for (let id = 1; id <= 4; id++) {
            if (id == MiId || Muertos[id] || Desconectados[id]) continue;
            let r = obtenerRival(id);
            if (r) {
                let d = dist(JugadorLocal, r);
                if (d <= killRange && d < mejorDist) {
                    mejorDist = d;
                    matoId = id;
                    vX = r.x;
                    vY = r.y;
                }
            }
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
    if (EnVotacion && !YaVote && !Muertos[MiId]) {
        let maxId = maxIndiceVotacion();
        VotoSeleccionado--;
        if (VotoSeleccionado < 0) VotoSeleccionado = maxId;
        while (VotoSeleccionado > 0 && (Muertos[VotoSeleccionado] || Desconectados[VotoSeleccionado])) {
            VotoSeleccionado--;
            if (VotoSeleccionado < 0) VotoSeleccionado = maxId;
        }
        actualizarImagenVotacion();
    }
});

controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    if (EnVotacion && !YaVote && !Muertos[MiId]) {
        let maxId = maxIndiceVotacion();
        VotoSeleccionado++;
        if (VotoSeleccionado > maxId) VotoSeleccionado = 0;
        while (VotoSeleccionado > 0 && (Muertos[VotoSeleccionado] || Desconectados[VotoSeleccionado])) {
            VotoSeleccionado++;
            if (VotoSeleccionado > maxId) VotoSeleccionado = 0;
        }
        actualizarImagenVotacion();
    }
});

// ============================================================
//                     GAME LOOPS
// ============================================================

// Enviar posición cada 50ms
game.onUpdateInterval(50, function () {
    if (JugadorLocal && !PartidaTerminada && !EnVotacion) {
        redP2P.enviarDatos("pos", MiId + "," + Math.round(JugadorLocal.x) + "," + Math.round(JugadorLocal.y));
    }
});

// Timer de votación (con failsafe a los 32s por si algún jugador está en pestaña en segundo plano)
game.onUpdateInterval(1000, function() {
    if (EnVotacion && TiempoVotacion > -5) {
        TiempoVotacion--;
        actualizarImagenVotacion();
        if (TiempoVotacion <= 0 && !YaVote && !Muertos[MiId]) {
            YaVote = true;
            redP2P.enviarDatos("vote", MiId + ",0");
            registrarVoto(MiId, 0);
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
        if (Muertos[MiId]) {
            KillBtnUI.setFlag(SpriteFlag.Invisible, true);
        } else {
            KillBtnUI.setFlag(SpriteFlag.Invisible, false);
            let puedeMatar = false;
            let cercaDeAlguien = false;
            let killRange = 35;
            for (let id = 1; id <= 4; id++) {
                if (id == MiId || Muertos[id] || Desconectados[id]) continue;
                let r = obtenerRival(id);
                if (r && dist(JugadorLocal, r) <= killRange) {
                    cercaDeAlguien = true;
                    break;
                }
            }
            if (game.runtime() >= cooldownKill) {
                puedeMatar = cercaDeAlguien;
            } else if (cercaDeAlguien && !EnVotacion) {
                let segs = Math.ceil((cooldownKill - game.runtime()) / 1000);
                mostrarAviso("Kill en " + segs + "s");
            }
            KillBtnUI.y = puedeMatar ? 98 + Math.sin(game.runtime()/100)*2 : 125;
        }
    }

    // Actualizar guía de tareas y botón para Tripulante (o Modo Práctica)
    if (!SoyImpostor || ModoPractica) {
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
        let distCafeteria = distCoords(JugadorLocal.x, JugadorLocal.y, MESA_X, MESA_Y);
        let cercaDeCadaver = false;
        for (let c of ListaCadaveres) {
            if (distCoords(JugadorLocal.x, JugadorLocal.y, c.x, c.y) <= 50) {
                cercaDeCadaver = true;
                break;
            }
        }
        if (cercaDeCadaver) {
            mostrarAviso("!REPORTAR CUERPO [A]!");
        } else if (distCafeteria <= RADIO_MESA) {
            if (game.runtime() >= cooldownEmergencia && reunionesEmergenciaRestantes > 0) {
                mostrarAviso("!EMERGENCIA [A]!");
            } else if (reunionesEmergenciaRestantes <= 0) {
                mostrarAviso("Boton agotado");
            } else {
                let segs = Math.ceil((cooldownEmergencia - game.runtime()) / 1000);
                mostrarAviso("Boton: " + segs + "s");
            }
        }
    }
});
