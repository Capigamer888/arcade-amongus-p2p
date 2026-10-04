// Among Us Arcade P2P - Mapa Skeld & Soporte 4 Jugadores

namespace redP2P {
    // Declarar control explícitamente por si el entorno local no lo encuentra
    declare namespace control {
        function onEvent(src: number, value: number, handler: () => void): void;
    }

    //% shim=pxt::sendMessage
    export declare function _sendMsg(channel: string, message: Buffer, parentOnly?: boolean): void;

    //% shim=pxt::peekMessageChannel
    export declare function _peekMsg(): string;

    //% shim=pxt::readMessageData
    export declare function _readMsg(): Buffer;

    let _handlers: ((accion: string, valor: string) => void)[] = [];
    export function alRecibir(handler: (accion: string, valor: string) => void): void {
        _handlers.push(handler);
    }
    export function enviarDatos(accion: string, valor: string): void {
        try {
            let msg = accion + "|" + valor;
            _sendMsg("amogus", Buffer.fromUTF8(msg));
        } catch (e) {}
    }
    export function despachar(accion: string, valor: string): void {
        for (let h of _handlers) { h(accion, valor); }
    }

    let queueHandlers: { [channel: string]: (msg: Buffer) => void } = {};
    function consumeMessages() {
        while (true) {
            const channel = _peekMsg();
            if (!channel) break;
            const msg = _readMsg();
            const handler = queueHandlers && queueHandlers[channel];
            if (handler) handler(msg);
        }
    }

    export function inicializar() {
        queueHandlers["amogus"] = function(data: Buffer) {
            let str = data.toString();
            let sep = str.indexOf("|");
            if (sep >= 0) { despachar(str.substr(0, sep), str.substr(sep + 1)); }
        };
        control.onEvent(2999, 1, consumeMessages);
    }
}
redP2P.inicializar();

namespace SpriteKind {
    export const P2PLocal = SpriteKind.create()
    export const P2PRival = SpriteKind.create()
    export const P2PCadaver = SpriteKind.create()
    export const UI_Button = SpriteKind.create()
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

function dist(s1: Sprite, s2: Sprite): number {
    return Math.sqrt((s1.x - s2.x) ** 2 + (s1.y - s2.y) ** 2);
}

// === Variables Globales ===
let MiId = 1;
let TotalJugadores = 2;
let IdImpostor = 1;
let SoyImpostor = false;
let PartidaActiva = false;
let PartidaTerminada = false;
let Muertos = [false, false, false, false, false];

let JugadorLocal: Sprite = null;
let Rival1: Sprite = null;
let Rival2: Sprite = null;
let Rival3: Sprite = null;
let Rival4: Sprite = null;

let KillBtnUI: Sprite = null;
let TaskBtnUI: Sprite = null;
let tareasCompletadas = 0;
let totalTareas = 3;
let cooldownKill = 0;

let misTareasActivas: Image[] = [];

// Inicio por defecto en Hub
function cargarHub() {
    PartidaActiva = false;
    PartidaTerminada = false;
    tiles.setCurrentTilemap(tilemap`Level_0`);

    if (KillBtnUI) { sprites.destroy(KillBtnUI); KillBtnUI = null; }
    if (TaskBtnUI) { sprites.destroy(TaskBtnUI); TaskBtnUI = null; }

    if (!JugadorLocal) {
        JugadorLocal = sprites.create(obtenerSkin(MiId), SpriteKind.P2PLocal);
        controller.moveSprite(JugadorLocal, 90, 90);
        scene.cameraFollowSprite(JugadorLocal);
    } else {
        JugadorLocal.setImage(obtenerSkin(MiId));
    }
    
    // Position center hub
    JugadorLocal.x = 80;
    JugadorLocal.y = 60;

    game.splash("EN LOBBY (ESPERANDO)", "Eres el Jugador " + MiId);
}

// Llamar al Hub enseguida si abres el juego
cargarHub();

function iniciarPartida() {
    PartidaActiva = true;
    PartidaTerminada = false;
    tiles.setCurrentTilemap(tilemap`Level_1`);

    if (KillBtnUI) { sprites.destroy(KillBtnUI); KillBtnUI = null; }
    if (TaskBtnUI) { sprites.destroy(TaskBtnUI); TaskBtnUI = null; }

    // Reposicionar local
    let tileCentro = assets.tile`tile32`;
    if (tileCentro) {
        tiles.placeOnRandomTile(JugadorLocal, tileCentro);
    } else {
        JugadorLocal.x = 400; JugadorLocal.y = 150;
    }

    // Asegurarse que todos aparezcan en start (los creamos dinámicamente o aquí)
    if (TotalJugadores >= 2 && MiId != 1) { if(!Rival1) Rival1 = sprites.create(obtenerSkin(1), SpriteKind.P2PRival); Rival1.setPosition(400,150); }
    if (TotalJugadores >= 2 && MiId != 2) { if(!Rival2) Rival2 = sprites.create(obtenerSkin(2), SpriteKind.P2PRival); Rival2.setPosition(400,150); }
    if (TotalJugadores >= 3 && MiId != 3) { if(!Rival3) Rival3 = sprites.create(obtenerSkin(3), SpriteKind.P2PRival); Rival3.setPosition(400,150); }
    if (TotalJugadores >= 4 && MiId != 4) { if(!Rival4) Rival4 = sprites.create(obtenerSkin(4), SpriteKind.P2PRival); Rival4.setPosition(400,150); }

    crearUI();

    if (SoyImpostor) {
        game.splash("ERES EL IMPOSTOR", "Usa B para eliminar");
    } else {
        game.splash("ERES TRIPULANTE", "Usa A para tareas");
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
        KillBtnUI.setPosition(140, 120);
        KillBtnUI.z = 100;
    } else {
        let posiblesTareas: Image[] = [
            assets.tile`tile44`,
            assets.tile`tile117`,
            assets.tile`tile85`,
            assets.tile`tile84`,
            assets.tile`tile112`
        ];
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
        TaskBtnUI.setPosition(140, 120);
        TaskBtnUI.z = 100;
    }
}

function actualizarPosRival(idNum: number, xVal: number, yVal: number) {
    if (idNum == 1) { 
        if(!Rival1) Rival1 = sprites.create(obtenerSkin(1), SpriteKind.P2PRival);
        Rival1.x = xVal; Rival1.y = yVal; 
    } else if (idNum == 2) { 
        if(!Rival2) Rival2 = sprites.create(obtenerSkin(2), SpriteKind.P2PRival);
        Rival2.x = xVal; Rival2.y = yVal; 
    } else if (idNum == 3) { 
        if(!Rival3) Rival3 = sprites.create(obtenerSkin(3), SpriteKind.P2PRival);
        Rival3.x = xVal; Rival3.y = yVal; 
    } else if (idNum == 4) { 
        if(!Rival4) Rival4 = sprites.create(obtenerSkin(4), SpriteKind.P2PRival);
        Rival4.x = xVal; Rival4.y = yVal; 
    }
}

function aplicarMuerte(idNum: number) {
    Muertos[idNum] = true;
    if (idNum == MiId && JugadorLocal) {
        JugadorLocal.setImage(SPRITE_FANTASMA);
        JugadorLocal.setKind(SpriteKind.P2PCadaver);
        JugadorLocal.setFlag(SpriteFlag.GhostThroughWalls, true);
        controller.moveSprite(JugadorLocal, 150, 150);
        game.splash("HAS SIDO ASESINADO");
        
        if (Rival1 && Muertos[1]) Rival1.setFlag(SpriteFlag.Invisible, false);
        if (Rival2 && Muertos[2]) Rival2.setFlag(SpriteFlag.Invisible, false);
        if (Rival3 && Muertos[3]) Rival3.setFlag(SpriteFlag.Invisible, false);
        if (Rival4 && Muertos[4]) Rival4.setFlag(SpriteFlag.Invisible, false);
    } else {
        let rVal = idNum == 1 ? Rival1 : (idNum == 2 ? Rival2 : (idNum == 3 ? Rival3 : Rival4));
        if (rVal) {
            rVal.setImage(SPRITE_FANTASMA); 
            rVal.setKind(SpriteKind.P2PCadaver);
            if (!Muertos[MiId]) {
                rVal.setFlag(SpriteFlag.Invisible, true);
            }
        }
    }
}

redP2P.alRecibir(function (accion: string, valor: string) {
    if (accion == "set_player") {
        let pId = parseInt(valor);
        if (pId >= 1 && pId <= 4) {
            MiId = pId;
            SoyImpostor = (MiId == IdImpostor);
            cargarHub();
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
        PartidaTerminada = true;
        game.over(SoyImpostor ? false : true, effects.confetti);
    } else if (accion == "impostor_win") {
        PartidaTerminada = true;
        game.over(SoyImpostor ? true : false, effects.melt);
    }
});

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!SoyImpostor && PartidaActiva && !PartidaTerminada && !Muertos[MiId]) {
        let completada = false;
        
        for (let t of misTareasActivas) {
            if (JugadorLocal.tileKindAt(TileDirection.Center, t) || JugadorLocal.tileKindAt(TileDirection.Top, t)) {
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
                PartidaTerminada = true;
                game.over(true, effects.confetti);
            }
        }
    }
});

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SoyImpostor && PartidaActiva && !PartidaTerminada && JugadorLocal && !Muertos[MiId]) {
        if (game.runtime() < cooldownKill) return;

        let killRange = 35;
        let mato = false;
        if (Rival1 && !Muertos[1] && dist(JugadorLocal, Rival1) <= killRange) {
            aplicarMuerte(1); redP2P.enviarDatos("kill", "1"); mato = true;
        } else if (Rival2 && !Muertos[2] && dist(JugadorLocal, Rival2) <= killRange) {
            aplicarMuerte(2); redP2P.enviarDatos("kill", "2"); mato = true;
        } else if (Rival3 && !Muertos[3] && dist(JugadorLocal, Rival3) <= killRange) {
            aplicarMuerte(3); redP2P.enviarDatos("kill", "3"); mato = true;
        } else if (Rival4 && !Muertos[4] && dist(JugadorLocal, Rival4) <= killRange) {
            aplicarMuerte(4); redP2P.enviarDatos("kill", "4"); mato = true;
        }

        if (mato) {
            cooldownKill = game.runtime() + 10000;
        }
    }
});

game.onUpdateInterval(50, function () {
    if (JugadorLocal && !PartidaTerminada) {
        redP2P.enviarDatos("pos", MiId + "," + JugadorLocal.x + "," + JugadorLocal.y);
    }
});

game.onUpdate(function() {
    if (!PartidaActiva || PartidaTerminada) return;

    if (SoyImpostor && KillBtnUI) {
        let puedeMatar = false;
        let killRange = 35;
        if (game.runtime() >= cooldownKill) {
            if (Rival1 && !Muertos[1] && dist(JugadorLocal, Rival1) <= killRange) puedeMatar = true;
            if (Rival2 && !Muertos[2] && dist(JugadorLocal, Rival2) <= killRange) puedeMatar = true;
            if (Rival3 && !Muertos[3] && dist(JugadorLocal, Rival3) <= killRange) puedeMatar = true;
            if (Rival4 && !Muertos[4] && dist(JugadorLocal, Rival4) <= killRange) puedeMatar = true;
        }
        KillBtnUI.y = puedeMatar ? 98 + Math.sin(game.runtime()/100)*2 : 120;
    }

    if (!SoyImpostor && TaskBtnUI && !Muertos[MiId]) {
        let puedeHacerTarea = false;
        for (let t of misTareasActivas) {
            if (JugadorLocal.tileKindAt(TileDirection.Center, t) || JugadorLocal.tileKindAt(TileDirection.Top, t)) {
                puedeHacerTarea = true;
                break;
            }
        }
        TaskBtnUI.y = puedeHacerTarea ? 98 + Math.sin(game.runtime()/100)*2 : 120;
    }

    if (SoyImpostor) {
        let vivos = 0;
        if (1 <= TotalJugadores && IdImpostor != 1 && !Muertos[1]) vivos++;
        if (2 <= TotalJugadores && IdImpostor != 2 && !Muertos[2]) vivos++;
        if (3 <= TotalJugadores && IdImpostor != 3 && !Muertos[3]) vivos++;
        if (4 <= TotalJugadores && IdImpostor != 4 && !Muertos[4]) vivos++;
        
        if (TotalJugadores > 1 && vivos === 0) {
            PartidaTerminada = true;
            redP2P.enviarDatos("impostor_win", "1");
            game.over(true, effects.melt);
        }
    }
});
