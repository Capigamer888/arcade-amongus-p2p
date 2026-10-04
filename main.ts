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
    export function despachar(accion: string, valor: string): void {
        for (let h of _handlers) { h(accion, valor); }
    }
    try {
        control.simmessages.onReceived("amogus", function (data: Buffer) {
            let str = data.toString();
            let sep = str.indexOf("|");
            if (sep >= 0) { despachar(str.substr(0, sep), str.substr(sep + 1)); }
        });
    } catch (e) {}
}

namespace SpriteKind {
    export const P2PLocal = SpriteKind.create()
    export const P2PRival = SpriteKind.create()
    export const P2PCadaver = SpriteKind.create()
    export const UI_Button = SpriteKind.create()
}

// === Sprites de Jugadores ===
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
const SPRITE_MUERTO = img`
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

function obtenerSkin(idNum: number): Image {
    if (idNum == 1) return SPRITE_ROJO;
    if (idNum == 2) return SPRITE_AZUL;
    if (idNum == 3) return SPRITE_VERDE;
    return SPRITE_AMARILLO;
}

function obtenerColorNombre(idNum: number): string {
    if (idNum == 1) return "Rojo";
    if (idNum == 2) return "Azul";
    if (idNum == 3) return "Verde";
    return "Amarillo";
}

function dist(s1: Sprite, s2: Sprite): number {
    return Math.sqrt((s1.x - s2.x) ** 2 + (s1.y - s2.y) ** 2);
}

// === Variables Globales ===
let MiId = 1;
let TotalJugadores = 2;
let IdImpostor = 1;
let SoyImpostor = false;
let PartidaActiva = false;
let Muertos = [false, false, false, false, false];

let JugadorLocal: Sprite = null;
let Rival1: Sprite = null;
let Rival2: Sprite = null;
let Rival3: Sprite = null;
let Rival4: Sprite = null;

let KillBtnUI: Sprite = null;
let TaskBtnUI: Sprite = null;
let tareasCompletadas = 0;
let totalTareas = 5;

let misTareasActivas: string[] = [];

// Carga Inicial
tiles.setCurrentTilemap(tilemap`Level_0`);

function iniciarPartida() {
    PartidaActiva = true;

    tiles.setCurrentTilemap(tilemap`Level_1`);

    if (JugadorLocal) { sprites.destroy(JugadorLocal); }
    if (Rival1) { sprites.destroy(Rival1); Rival1 = null; }
    if (Rival2) { sprites.destroy(Rival2); Rival2 = null; }
    if (Rival3) { sprites.destroy(Rival3); Rival3 = null; }
    if (Rival4) { sprites.destroy(Rival4); Rival4 = null; }
    if (KillBtnUI) { sprites.destroy(KillBtnUI); KillBtnUI = null; }
    if (TaskBtnUI) { sprites.destroy(TaskBtnUI); TaskBtnUI = null; }

    JugadorLocal = sprites.create(obtenerSkin(MiId), SpriteKind.P2PLocal);
    
    // Fallback: usar una baldosa segura que exista en Level_1
    // Si assets.tile`tile32` no existe en su proyecto, fallaría al encontrarla, pero placeOnRandomTile solo la ignora o usa el centro
    let tileCentro = assets.tile`tile32`;
    if (tileCentro) {
        tiles.placeOnRandomTile(JugadorLocal, tileCentro);
    } else {
        JugadorLocal.x = 400;
        JugadorLocal.y = 150;
    }

    controller.moveSprite(JugadorLocal, 90, 90);
    scene.cameraFollowSprite(JugadorLocal);

    if (TotalJugadores >= 2 && MiId != 1) { Rival1 = sprites.create(obtenerSkin(1), SpriteKind.P2PRival); Rival1.setPosition(-100,-100); }
    if (TotalJugadores >= 2 && MiId != 2) { Rival2 = sprites.create(obtenerSkin(2), SpriteKind.P2PRival); Rival2.setPosition(-100,-100); }
    if (TotalJugadores >= 3 && MiId != 3) { Rival3 = sprites.create(obtenerSkin(3), SpriteKind.P2PRival); Rival3.setPosition(-100,-100); }
    if (TotalJugadores >= 4 && MiId != 4) { Rival4 = sprites.create(obtenerSkin(4), SpriteKind.P2PRival); Rival4.setPosition(-100,-100); }

    crearUI();

    if (SoyImpostor) {
        game.splash("ERES EL IMPOSTOR", "Usa B para eliminar");
    } else {
        game.splash("ERES TRIPULANTE (" + obtenerColorNombre(MiId) + ")", "Usa A para tareas");
    }
}

function crearUI() {
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
        KillBtnUI.setPosition(140, 100);
        KillBtnUI.z = 100;
    } else {
        let posiblesTareas = ["tile44", "tile117", "tile85", "tile84", "tile112"];
        misTareasActivas = [];
        totalTareas = 3;
        for (let i = 0; i < totalTareas; i++) {
            let rndIdx = Math.randomRange(0, posiblesTareas.length - 1);
            misTareasActivas.push(posiblesTareas[rndIdx]);
            posiblesTareas.removeAt(rndIdx);
        }
        
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
        TaskBtnUI.setPosition(140, 100);
        TaskBtnUI.z = 100;
    }
}

function actualizarPosRival(idNum: number, xVal: number, yVal: number) {
    if (idNum == 1 && Rival1) { Rival1.x = xVal; Rival1.y = yVal; }
    else if (idNum == 2 && Rival2) { Rival2.x = xVal; Rival2.y = yVal; }
    else if (idNum == 3 && Rival3) { Rival3.x = xVal; Rival3.y = yVal; }
    else if (idNum == 4 && Rival4) { Rival4.x = xVal; Rival4.y = yVal; }
}

function aplicarMuerte(idNum: number) {
    Muertos[idNum] = true;
    if (idNum == MiId && JugadorLocal) {
        JugadorLocal.setImage(SPRITE_FANTASMA);
        JugadorLocal.setKind(SpriteKind.P2PCadaver);
        game.splash("¡HAS SIDO ASESINADO!");
    } else if (idNum == 1 && Rival1) { Rival1.setImage(SPRITE_MUERTO); Rival1.setKind(SpriteKind.P2PCadaver); }
    else if (idNum == 2 && Rival2) { Rival2.setImage(SPRITE_MUERTO); Rival2.setKind(SpriteKind.P2PCadaver); }
    else if (idNum == 3 && Rival3) { Rival3.setImage(SPRITE_MUERTO); Rival3.setKind(SpriteKind.P2PCadaver); }
    else if (idNum == 4 && Rival4) { Rival4.setImage(SPRITE_MUERTO); Rival4.setKind(SpriteKind.P2PCadaver); }
}

// === LÓGICA DE RED ===
redP2P.alRecibir(function (accion: string, valor: string) {
    if (accion == "set_player") {
        let pId = parseInt(valor);
        if (pId >= 1 && pId <= 4) {
            MiId = pId;
            SoyImpostor = (MiId == IdImpostor);
        }
    } else if (accion == "setup_partida") {
        let partes = valor.split(",");
        MiId = parseInt(partes[0]);
        TotalJugadores = parseInt(partes[1]);
        IdImpostor = parseInt(partes[2]);
        SoyImpostor = (MiId == IdImpostor);
        iniciarPartida();
    } else if (accion == "pos") {
        let partesPos = valor.split(",");
        if (partesPos.length >= 3) {
            let idRemoto = parseInt(partesPos[0]);
            if (idRemoto != MiId) { actualizarPosRival(idRemoto, parseFloat(partesPos[1]), parseFloat(partesPos[2])); }
        }
    } else if (accion == "kill") {
        aplicarMuerte(parseInt(valor));
    } else if (accion == "task_win") {
        game.splash("¡TRIPULANTES GANAN!", "Completaron todas las tareas");
        game.reset();
    }
});

// === CONTROLES E INTERACCIÓN ===
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!SoyImpostor && PartidaActiva && !Muertos[MiId]) {
        let completada = false;
        
        for (let t of misTareasActivas) {
            let tileObj = assets.tile(t);
            if (tileObj && JugadorLocal.tileKindAt(TileDirection.Center, tileObj)) {
                misTareasActivas.removeElement(t);
                completada = true;
                break;
            }
            if (tileObj && JugadorLocal.tileKindAt(TileDirection.Top, tileObj)) {
                misTareasActivas.removeElement(t);
                completada = true;
                break;
            }
        }

        if (completada) {
            tareasCompletadas++;
            JugadorLocal.sayText("Tarea " + tareasCompletadas + "/" + totalTareas, 1000);
            if (tareasCompletadas >= totalTareas) {
                redP2P.enviarDatos("task_win", "1");
                game.splash("¡TODAS LAS TAREAS COMPLETAS!");
            }
        }
    }
});

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SoyImpostor && PartidaActiva && JugadorLocal && !Muertos[MiId]) {
        let killRange = 35;
        if (Rival1 && !Muertos[1] && dist(JugadorLocal, Rival1) <= killRange) {
            aplicarMuerte(1); redP2P.enviarDatos("kill", "1");
        } else if (Rival2 && !Muertos[2] && dist(JugadorLocal, Rival2) <= killRange) {
            aplicarMuerte(2); redP2P.enviarDatos("kill", "2");
        } else if (Rival3 && !Muertos[3] && dist(JugadorLocal, Rival3) <= killRange) {
            aplicarMuerte(3); redP2P.enviarDatos("kill", "3");
        } else if (Rival4 && !Muertos[4] && dist(JugadorLocal, Rival4) <= killRange) {
            aplicarMuerte(4); redP2P.enviarDatos("kill", "4");
        }
    }
});

game.onUpdateInterval(50, function () {
    if (PartidaActiva && JugadorLocal && !Muertos[MiId]) {
        redP2P.enviarDatos("pos", MiId + "," + JugadorLocal.x + "," + JugadorLocal.y);
    }
});

game.onUpdate(function() {
    if (SoyImpostor && KillBtnUI) {
        let puedeMatar = false;
        let killRange = 35;
        if (Rival1 && !Muertos[1] && dist(JugadorLocal, Rival1) <= killRange) puedeMatar = true;
        if (Rival2 && !Muertos[2] && dist(JugadorLocal, Rival2) <= killRange) puedeMatar = true;
        if (Rival3 && !Muertos[3] && dist(JugadorLocal, Rival3) <= killRange) puedeMatar = true;
        if (Rival4 && !Muertos[4] && dist(JugadorLocal, Rival4) <= killRange) puedeMatar = true;
        KillBtnUI.y = puedeMatar ? 98 + Math.sin(game.runtime()/100)*2 : 100;
    }
});
