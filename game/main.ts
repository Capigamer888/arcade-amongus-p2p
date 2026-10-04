// Among Us Arcade P2P - Soporte para 4 jugadores (Pantallas Separadas)

// --- Sistema de Red Online Nativo (Sin dependencias externas ni shims) ---
namespace redOnline {
    let _handlers: ((accion: string, valor: string) => void)[] = [];

    export function alRecibir(handler: (accion: string, valor: string) => void): void {
        _handlers.push(handler);
    }

    export function enviarDatos(accion: string, valor: string): void {
        try {
            if (control && control.simmessages) {
                let msg = accion + "|" + valor;
                control.simmessages.send("amogus", Buffer.fromUTF8(msg));
            }
        } catch (e) {}
    }

    export function despachar(accion: string, valor: string): void {
        for (let h of _handlers) {
            h(accion, valor);
        }
    }

    try {
        if (control && control.simmessages) {
            control.simmessages.onReceived("amogus", function (data: Buffer) {
                let str = data.toString();
                let sep = str.indexOf("|");
                if (sep >= 0) {
                    let acc = str.substr(0, sep);
                    let val = str.substr(sep + 1);
                    despachar(acc, val);
                }
            });
        }
    } catch (e) {}
}

namespace SpriteKind {
    export const JugadorLocal = SpriteKind.create()
    export const JugadorRival = SpriteKind.create()
    export const Muerto = SpriteKind.create()
}

// --- Sprites de Jugadores (Pixel Art 16x16) ---
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

function spawnX(idNum: number): number {
    if (idNum == 1) return 60;
    if (idNum == 2) return 120;
    if (idNum == 3) return 60;
    return 120;
}

function spawnY(idNum: number): number {
    if (idNum == 1) return 60;
    if (idNum == 2) return 60;
    if (idNum == 3) return 120;
    return 120;
}

// --- Variables de Estado ---
let MiId = 1;
let TotalJugadores = 2;
let IdImpostor = 1;
let SoyImpostor = false;
let PartidaActiva = false;

let Muerto1 = false;
let Muerto2 = false;
let Muerto3 = false;
let Muerto4 = false;

let JugadorLocal: Sprite = null;
let Rival1: Sprite = null;
let Rival2: Sprite = null;
let Rival3: Sprite = null;
let Rival4: Sprite = null;

function iniciarPartida() {
    PartidaActiva = true;
    scene.setBackgroundColor(15);

    if (JugadorLocal) {
        sprites.destroy(JugadorLocal);
    }
    if (Rival1) { sprites.destroy(Rival1); Rival1 = null; }
    if (Rival2) { sprites.destroy(Rival2); Rival2 = null; }
    if (Rival3) { sprites.destroy(Rival3); Rival3 = null; }
    if (Rival4) { sprites.destroy(Rival4); Rival4 = null; }

    JugadorLocal = sprites.create(obtenerSkin(MiId), SpriteKind.JugadorLocal);
    JugadorLocal.x = spawnX(MiId);
    JugadorLocal.y = spawnY(MiId);
    controller.moveSprite(JugadorLocal, 100, 100);
    scene.cameraFollowSprite(JugadorLocal);

    if (TotalJugadores >= 2) {
        if (MiId != 1) {
            Rival1 = sprites.create(obtenerSkin(1), SpriteKind.JugadorRival);
            Rival1.x = spawnX(1);
            Rival1.y = spawnY(1);
        }
        if (MiId != 2) {
            Rival2 = sprites.create(obtenerSkin(2), SpriteKind.JugadorRival);
            Rival2.x = spawnX(2);
            Rival2.y = spawnY(2);
        }
    }
    if (TotalJugadores >= 3 && MiId != 3) {
        Rival3 = sprites.create(obtenerSkin(3), SpriteKind.JugadorRival);
        Rival3.x = spawnX(3);
        Rival3.y = spawnY(3);
    }
    if (TotalJugadores >= 4 && MiId != 4) {
        Rival4 = sprites.create(obtenerSkin(4), SpriteKind.JugadorRival);
        Rival4.x = spawnX(4);
        Rival4.y = spawnY(4);
    }

    anunciarRol();
}

function anunciarRol() {
    if (SoyImpostor) {
        game.splash("ERES EL IMPOSTOR", "Presiona B cerca de un rival para eliminarlo");
    } else {
        game.splash("ERES TRIPULANTE (" + obtenerColorNombre(MiId) + ")", "Sobrevive al impostor");
    }
}

function actualizarPosRival(idNum: number, xVal: number, yVal: number) {
    if (idNum == 1 && Rival1) { Rival1.x = xVal; Rival1.y = yVal; }
    else if (idNum == 2 && Rival2) { Rival2.x = xVal; Rival2.y = yVal; }
    else if (idNum == 3 && Rival3) { Rival3.x = xVal; Rival3.y = yVal; }
    else if (idNum == 4 && Rival4) { Rival4.x = xVal; Rival4.y = yVal; }
}

function aplicarMuerte(idNum: number) {
    if (idNum == 1) Muerto1 = true;
    else if (idNum == 2) Muerto2 = true;
    else if (idNum == 3) Muerto3 = true;
    else if (idNum == 4) Muerto4 = true;

    if (idNum == MiId) {
        if (JugadorLocal) {
            JugadorLocal.setImage(SPRITE_FANTASMA);
            JugadorLocal.setKind(SpriteKind.Muerto);
            game.splash("¡HAS SIDO ASESINADO!");
        }
    } else if (idNum == 1 && Rival1) {
        Rival1.setImage(SPRITE_MUERTO);
        Rival1.setKind(SpriteKind.Muerto);
    } else if (idNum == 2 && Rival2) {
        Rival2.setImage(SPRITE_MUERTO);
        Rival2.setKind(SpriteKind.Muerto);
    } else if (idNum == 3 && Rival3) {
        Rival3.setImage(SPRITE_MUERTO);
        Rival3.setKind(SpriteKind.Muerto);
    } else if (idNum == 4 && Rival4) {
        Rival4.setImage(SPRITE_MUERTO);
        Rival4.setKind(SpriteKind.Muerto);
    }
}

redOnline.alRecibir(function (accion: string, valor: string) {
    if (accion == "setup_partida") {
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
            if (idRemoto != MiId) {
                actualizarPosRival(idRemoto, parseFloat(partesPos[1]), parseFloat(partesPos[2]));
            }
        }
    } else if (accion == "kill") {
        let idMuerto = parseInt(valor);
        aplicarMuerte(idMuerto);
    }
});

// --- Ataque del Impostor con botón B ---
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SoyImpostor && PartidaActiva && JugadorLocal) {
        if (Rival1 && JugadorLocal.overlapsWith(Rival1) && !Muerto1) {
            aplicarMuerte(1);
            redOnline.enviarDatos("kill", "1");
            game.splash("Eliminaste a Rojo");
        } else if (Rival2 && JugadorLocal.overlapsWith(Rival2) && !Muerto2) {
            aplicarMuerte(2);
            redOnline.enviarDatos("kill", "2");
            game.splash("Eliminaste a Azul");
        } else if (Rival3 && JugadorLocal.overlapsWith(Rival3) && !Muerto3) {
            aplicarMuerte(3);
            redOnline.enviarDatos("kill", "3");
            game.splash("Eliminaste a Verde");
        } else if (Rival4 && JugadorLocal.overlapsWith(Rival4) && !Muerto4) {
            aplicarMuerte(4);
            redOnline.enviarDatos("kill", "4");
            game.splash("Eliminaste a Amarillo");
        }
    }
});

// --- Sincronización continua de posición ---
game.onUpdateInterval(50, function () {
    if (PartidaActiva && JugadorLocal) {
        redOnline.enviarDatos("pos", JugadorLocal.x + "," + JugadorLocal.y);
    }
});

// Iniciar de inmediato el juego para que la pantalla NUNCA quede en negro
iniciarPartida();
