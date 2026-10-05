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
let tareasCompletadas = 0; TareasGlobales = 0;
let TareasGlobales = 0;
let MaxTareasGlobales = 3;
let totalTareas = 3;
let cooldownKill = 0;
let EnVotacion = false;
let VotosRecibidos = 0;
let MisVotos: number[] = [0, 0, 0, 0, 0];
let VotoSeleccionado = 0;
let UI_Votacion: Sprite = null;
let YaVote = false;


let misTareasActivas: Image[] = [];

// Inicio por defecto en Hub
function cargarHub() {
    MapaActual = "hub";
    PartidaActiva = false;
    PartidaTerminada = false;
    tiles.setCurrentTilemap(assets.tilemap`Level_0`);
    scene.setBackgroundColor(11); // Fondo celeste

    if (KillBtnUI) { sprites.destroy(KillBtnUI); KillBtnUI = null; }
    if (TaskBtnUI) { sprites.destroy(TaskBtnUI); TaskBtnUI = null; }
    if (BarraTareasUI) { sprites.destroy(BarraTareasUI); BarraTareasUI = null; }
    tareasCompletadas = 0;

    if (!JugadorLocal) {
        JugadorLocal = sprites.create(obtenerSkin(MiId), SpriteKind.P2PLocal);
        controller.moveSprite(JugadorLocal, 90, 90);
        scene.cameraFollowSprite(JugadorLocal);
    } else {
        JugadorLocal.setImage(obtenerSkin(MiId));
    }
    
    // Intentar buscar una baldosa de piso válida en el Hub para no caer en el vacío negro
    let pisoHub = assets.tile`tile9`;
    if (pisoHub) {
        tiles.placeOnTile(JugadorLocal, tiles.getTileLocation(5, 5));
    } else {
        tiles.placeOnTile(JugadorLocal, tiles.getTileLocation(5, 5));
    }
    controller.moveSprite(JugadorLocal, 90, 90);

    
}

// Llamar al Hub enseguida si abres el juego
cargarHub();

function iniciarPartida() {
    MapaActual = "skeld";
    PartidaActiva = true;
    PartidaTerminada = false;
    tiles.setCurrentTilemap(assets.tilemap`Level_2`);
    scene.setBackgroundColor(15); // Fondo negro para The Skeld

    if (KillBtnUI) { sprites.destroy(KillBtnUI); KillBtnUI = null; }
    if (TaskBtnUI) { sprites.destroy(TaskBtnUI); TaskBtnUI = null; }

    // Reposicionar local
    let tileCentro = assets.tile`tile32`;
    if (tileCentro) {
        tiles.placeOnRandomTile(JugadorLocal, tileCentro);
    } else {
        JugadorLocal.x = 400; JugadorLocal.y = 150;
    }
    controller.moveSprite(JugadorLocal, 90, 90);

    // Asegurarse que todos aparezcan en start (los creamos dinámicamente o aquí)
    if (TotalJugadores >= 2 && MiId != 1) { if(!Rival1) { Rival1 = sprites.create(obtenerSkin(1), SpriteKind.P2PRival); Rival1.setFlag(SpriteFlag.GhostThroughWalls, true); } Rival1.setPosition(400,150); }
    if (TotalJugadores >= 2 && MiId != 2) { if(!Rival2) { Rival2 = sprites.create(obtenerSkin(2), SpriteKind.P2PRival); Rival2.setFlag(SpriteFlag.GhostThroughWalls, true); } Rival2.setPosition(400,150); }
    if (TotalJugadores >= 3 && MiId != 3) { if(!Rival3) { Rival3 = sprites.create(obtenerSkin(3), SpriteKind.P2PRival); Rival3.setFlag(SpriteFlag.GhostThroughWalls, true); } Rival3.setPosition(400,150); }
    if (TotalJugadores >= 4 && MiId != 4) { if(!Rival4) { Rival4 = sprites.create(obtenerSkin(4), SpriteKind.P2PRival); Rival4.setFlag(SpriteFlag.GhostThroughWalls, true); } Rival4.setPosition(400,150); }

    crearUI();

    if (SoyImpostor) {
        JugadorLocal.sayText("IMPOSTOR (Usa B para matar)", 5000);
    } else {
        JugadorLocal.sayText("TRIPULANTE (Usa A para tareas)", 5000);
    }
}

function actualizarBarraTareas() {
    if (!BarraTareasUI) return;
    let imgBarra = image.create(100, 8);
    imgBarra.fillRect(0, 0, 100, 8, 15); // Borde negro
    let fillW = Math.round((TareasGlobales / MaxTareasGlobales) * 98);
    if (fillW > 0) imgBarra.fillRect(1, 1, fillW, 6, 7); // Relleno verde
    BarraTareasUI.setImage(imgBarra);
}

function crearUI() {
    if (!SoyImpostor) {
        BarraTareasUI = sprites.create(image.create(100, 8), SpriteKind.Player);
        BarraTareasUI.setFlag(SpriteFlag.RelativeToCamera, true);
        BarraTareasUI.setPosition(80, 10);
        BarraTareasUI.z = 100;
        actualizarBarraTareas();
    }
    
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

function aplicarMuerte(idNum: number) {
    Muertos[idNum] = true;
    if (idNum == MiId && JugadorLocal) {
        JugadorLocal.setImage(SPRITE_FANTASMA);
        JugadorLocal.setKind(SpriteKind.P2PCadaver);
        JugadorLocal.setFlag(SpriteFlag.GhostThroughWalls, true);
        controller.moveSprite(JugadorLocal, 150, 150);
        JugadorLocal.sayText("HAS SIDO ASESINADO", 5000);
        
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
    } else if (accion == "task_sync") {
        TareasGlobales++;
        actualizarBarraTareas();
        if (MiId == 1 && TareasGlobales >= MaxTareasGlobales) {
            redP2P.enviarDatos("task_win", "1");
            terminarPartida(true);
        }
    } else if (accion == "task_win") {
        PartidaTerminada = true;
        game.over(SoyImpostor ? false : true, effects.confetti);
    } else if (accion == "impostor_win") {
        PartidaTerminada = true;
        game.over(SoyImpostor ? true : false, effects.melt);
    }
});

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (EnVotacion && !YaVote) {
        YaVote = true;
        actualizarImagenVotacion();
        redP2P.enviarDatos("vote", VotoSeleccionado.toString());
        registrarVoto(VotoSeleccionado);
        return;
    }
    
    if (PartidaActiva && !PartidaTerminada && !Muertos[MiId] && !EnVotacion) {
        let distCafeteria = Math.sqrt((JugadorLocal.x - 400)**2 + (JugadorLocal.y - 150)**2);
        let puedeReportar = (distCafeteria < 60);
        if (Muertos[1] && Rival1 && Math.sqrt((JugadorLocal.x - Rival1.x)**2 + (JugadorLocal.y - Rival1.y)**2) < 40) puedeReportar = true;
        if (Muertos[2] && Rival2 && Math.sqrt((JugadorLocal.x - Rival2.x)**2 + (JugadorLocal.y - Rival2.y)**2) < 40) puedeReportar = true;
        if (Muertos[3] && Rival3 && Math.sqrt((JugadorLocal.x - Rival3.x)**2 + (JugadorLocal.y - Rival3.y)**2) < 40) puedeReportar = true;
        if (Muertos[4] && Rival4 && Math.sqrt((JugadorLocal.x - Rival4.x)**2 + (JugadorLocal.y - Rival4.y)**2) < 40) puedeReportar = true;
        
        if (puedeReportar) {
            redP2P.enviarDatos("report", MiId.toString());
            iniciarReunion(MiId);
            return;
        }
    }
    
    if (EnVotacion) return;
    if (!PartidaActiva && MiId == 1) {
        redP2P.enviarDatos("req_start", "1");
        // Fallback para probar offline dentro del editor de MakeCode
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
            actualizarBarraTareas();
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

MiId = 1;
cargarHub();


function revisarVictoriaImpostor() {
    if (MiId != 1) return;
    let vivos = 0;
    for(let i=1; i<=TotalJugadores; i++) if(!Muertos[i]) vivos++;
    
    if (vivos <= 2) {
        redP2P.enviarDatos("imp_win", "1");
        terminarPartida(false);
    }
}

function terminarPartida(tripulantesGanan: boolean) {
    if (PartidaTerminada) return;
    PartidaTerminada = true;
    
    let colorFondo = tripulantesGanan ? 8 : 2;
    scene.setBackgroundColor(colorFondo);
    
    let txt = tripulantesGanan ? "VICTORIA TRIPULANTES" : "VICTORIA IMPOSTOR";
    let txt2 = tripulantesGanan ? "Tareas listas / Impostor fuera" : "Tripulacion eliminada";
    
    game.splash(txt, txt2);
    
    for(let i=1; i<=4; i++) Muertos[i] = false;
    cargarHub();
}

function iniciarReunion(reporterId: number) {
    if (PartidaTerminada) return;
    EnVotacion = true;
    YaVote = false;
    VotosRecibidos = 0;
    MisVotos = [0, 0, 0, 0, 0];
    VotoSeleccionado = 0;
    
    JugadorLocal.setPosition(400, 150);
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
    let img = image.create(160, 40);
    img.fillRect(0, 0, 160, 40, 15);
    img.fillRect(1, 1, 158, 38, 1);
    
    let txt = VotoSeleccionado == 0 ? "OMITIR" : "JUGADOR " + VotoSeleccionado;
    let colorTexto = VotoSeleccionado == 0 ? 1 : VotoSeleccionado == 1 ? 2 : VotoSeleccionado == 2 ? 8 : VotoSeleccionado == 3 ? 7 : 5;
    
    img.printCenter("VOTAR A: " + txt, 5, colorTexto, image.font8);
    img.printCenter("< IZQUIERDA | DERECHA >", 18, 1, image.font5);
    img.printCenter("Presiona A para confirmar", 28, 1, image.font5);
    
    if (YaVote) {
        img.fillRect(0, 0, 160, 40, 15);
        img.printCenter("ESPERANDO VOTOS...", 15, 1, image.font8);
    }
    
    UI_Votacion.setImage(img);
}

controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    if (EnVotacion && !YaVote) {
        VotoSeleccionado--;
        if (VotoSeleccionado < 0) VotoSeleccionado = TotalJugadores;
        while(VotoSeleccionado > 0 && Muertos[VotoSeleccionado]) {
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
        while(VotoSeleccionado > 0 && Muertos[VotoSeleccionado]) {
            VotoSeleccionado++;
            if (VotoSeleccionado > TotalJugadores) VotoSeleccionado = 0;
        }
        actualizarImagenVotacion();
    }
});

function registrarVoto(votoId: number) {
    VotosRecibidos++;
    MisVotos[votoId]++;
    
    let vivos = 0;
    for(let i=1; i<=TotalJugadores; i++) if(!Muertos[i]) vivos++;
    
    if (VotosRecibidos >= vivos) {
        procesarResultadoVotacion();
    }
}

function procesarResultadoVotacion() {
    let maxVotos = 0;
    let expulsado = -1;
    let empate = false;
    
    for(let i=0; i<=4; i++) {
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
    
    if (empate || expulsado == 0) {
        game.splash("NADIE FUE EXPULSADO", "Empate o saltaron el voto");
    } else {
        game.splash("JUGADOR " + expulsado + " EXPULSADO", expulsado == IdImpostor ? "Era el Impostor" : "No era el Impostor");
        
        if (MiId == expulsado) {
            JugadorLocal.setKind(SpriteKind.P2PCadaver);
            JugadorLocal.setFlag(SpriteFlag.GhostThroughWalls, true);
            JugadorLocal.sayText("FANTASMA", 5000);
        } else if (expulsado == 1 && Rival1) { Rival1.setFlag(SpriteFlag.Invisible, false); Rival1.setImage(SPRITE_FANTASMA); }
        else if (expulsado == 2 && Rival2) { Rival2.setFlag(SpriteFlag.Invisible, false); Rival2.setImage(SPRITE_FANTASMA); }
        else if (expulsado == 3 && Rival3) { Rival3.setFlag(SpriteFlag.Invisible, false); Rival3.setImage(SPRITE_FANTASMA); }
        else if (expulsado == 4 && Rival4) { Rival4.setFlag(SpriteFlag.Invisible, false); Rival4.setImage(SPRITE_FANTASMA); }
        
        Muertos[expulsado] = true;
    }
    
    if (MiId == 1) {
        if (expulsado == IdImpostor) {
            redP2P.enviarDatos("task_win", "1"); terminarPartida(true);
        } else {
            revisarVictoriaImpostor();
        }
    }
}


game.onUpdateInterval(2000, function() {
    if (!JugadorLocal) return;
    
    // Si la red o las colisiones rompieron el teletransporte, lo forzamos.
    if (MapaActual == "hub") {
        if (JugadorLocal.x > 250 || JugadorLocal.y > 250) {
            JugadorLocal.setPosition(90 + MiId * 10, 90);
            JugadorLocal.setFlag(SpriteFlag.GhostThroughWalls, false);
        }
    } else if (MapaActual == "skeld" && !EnVotacion) {
        if (JugadorLocal.x < 100 && JugadorLocal.y < 100) {
            JugadorLocal.setPosition(400 + (MiId * 10 - 20), 150);
        }
    }
});
