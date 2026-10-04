# Among Us Arcade P2P - Mapa Polus & Soporte 4 Jugadores (Pantallas Separadas)

# --- Sistema de Red Online Nativo ---
class RedP2PNative:
    def __init__(self):
        self._handlers = []
        try:
            if control and control.simmessages:
                def _on_msg(data):
                    s = data.to_string()
                    sep = s.find("|")
                    if sep >= 0:
                        acc = s[0:sep]
                        val = s[sep + 1:]
                        self.despachar(acc, val)
                control.simmessages.on_received("amogus", _on_msg)
        except:
            pass

    def al_recibir(self, handler):
        self._handlers.append(handler)

    def enviar_datos(self, accion: str, valor: str):
        try:
            if control and control.simmessages:
                msg = accion + "|" + valor
                control.simmessages.send("amogus", Buffer.from_utf8(msg))
        except:
            pass

    def despachar(self, accion: str, valor: str):
        for h in self._handlers:
            h(accion, valor)

redP2P = RedP2PNative()

class SpriteKind:
    JugadorLocal = SpriteKind.create()
    JugadorRival = SpriteKind.create()
    Muerto = SpriteKind.create()

# --- Tiles Pixel Art (16x16) para el Mapa Polus ---
TILE_SUELO_INTERIOR = img"""
c c c c c c c c c c c c c c c c
c d d d d d d d d d d d d d d c
c d b b b b b b b b b b b b d c
c d b c c c c c c c c c c b d c
c d b c d d d d d d d d c b d c
c d b c d b b b b b b d c b d c
c d b c d b c c c c b d c b d c
c d b c d b c d d c b d c b d c
c d b c d b c d d c b d c b d c
c d b c d b c c c c b d c b d c
c d b c d b b b b b b d c b d c
c d b c d d d d d d d d c b d c
c d b c c c c c c c c c c b d c
c d b b b b b b b b b b b b d c
c d d d d d d d d d d d d d d c
c c c c c c c c c c c c c c c c
"""

TILE_NIEVE = img"""
b b d b b b b d b b b b d b b b
b b b b b b b b b b b b b b b b
b d b b b d b b b b d b b b d b
b b b b b b b b b b b b b b b b
b b b d b b b b d b b b b b b b
b b b b b b b b b b b b d b b b
d b b b b b d b b b b b b b b b
b b b b b b b b b b b b b b d b
b b d b b b b d b b b b d b b b
b b b b b b b b b b b b b b b b
b d b b b d b b b b d b b b d b
b b b b b b b b b b b b b b b b
b b b d b b b b d b b b b b b b
b b b b b b b b b b b b d b b b
d b b b b b d b b b b b b b b b
b b b b b b b b b b b b b b d b
"""

TILE_PARED = img"""
f f f f f f f f f f f f f f f f
f b b b b b b b b b b b b b b f
f b c c c c c c c c c c c c b f
f b c 1 1 1 1 1 1 1 1 1 1 c b f
f b c 1 b b b b b b b b 1 c b f
f b c 1 b c c c c c c b 1 c b f
f b c 1 b c 1 1 1 1 c b 1 c b f
f b c 1 b c 1 b b 1 c b 1 c b f
f b c 1 b c 1 b b 1 c b 1 c b f
f b c 1 b c 1 1 1 1 c b 1 c b f
f b c 1 b c c c c c c b 1 c b f
f b c 1 b b b b b b b b 1 c b f
f b c 1 1 1 1 1 1 1 1 1 1 c b f
f b c c c c c c c c c c c c b f
f b b b b b b b b b b b b b b f
f f f f f f f f f f f f f f f f
"""

TILE_MESA = img"""
. . . . f f f f f f f f . . . .
. . f f e e e e e e e e f f . .
. f e e e e 2 2 2 2 e e e e f .
. f e e e 2 2 2 2 2 2 e e e f .
f e e e 2 2 4 4 4 4 2 2 e e e f
f e e 2 2 4 4 4 4 4 4 2 2 e e f
f e e 2 2 4 4 4 4 4 4 2 2 e e f
f e e e 2 2 4 4 4 4 2 2 e e e f
. f e e e 2 2 2 2 2 2 e e e f .
. f e e e e 2 2 2 2 e e e e f .
. . f f e e e e e e e e f f . .
. . . . f f f f f f f f . . . .
. . . . . . d d d d . . . . . .
. . . . . . d d d d . . . . . .
. . . . . . d d d d . . . . . .
. . . . . . d d d d . . . . . .
"""

TILE_VENT = img"""
f f f f f f f f f f f f f f f f
f d d d d d d d d d d d d d d f
f d f f f f f f f f f f f f d f
f d f b b b b b b b b b b f d f
f d f f f f f f f f f f f f d f
f d f b b b b b b b b b b f d f
f d f f f f f f f f f f f f d f
f d f b b b b b b b b b b f d f
f d f f f f f f f f f f f f d f
f d f b b b b b b b b b b f d f
f d f f f f f f f f f f f f d f
f d f b b b b b b b b b b f d f
f d f f f f f f f f f f f f d f
f d d d d d d d d d d d d d d f
f f f f f f f f f f f f f f f f
. . . . . . . . . . . . . . . .
"""

MAPA_POLUS = img"""
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 3 1 1 1 1 1 1 1 1 3 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 3 1 1 1 1 1 1 1 1 3 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 3 1 1 1 1 1 1 1 1 3 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 1 1 3 3 3 3 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 3 3 3 3 3 1 1 3 3 3 3 3 2 2 2 2 2 2 2 2 2 3
3 2 3 3 3 3 3 3 3 2 3 1 1 1 1 1 1 1 1 1 1 3 2 3 3 3 3 3 3 3 2 3
3 2 3 5 1 1 1 1 3 2 3 1 1 1 1 1 1 1 1 1 1 3 2 3 1 1 1 1 5 3 2 3
3 2 3 1 1 1 1 1 1 1 1 1 1 1 1 4 4 1 1 1 1 1 1 1 1 1 1 1 1 3 2 3
3 2 3 1 1 1 1 1 1 1 1 1 1 1 1 4 4 1 1 1 1 1 1 1 1 1 1 1 1 3 2 3
3 2 3 1 1 1 1 1 3 2 3 1 1 1 1 1 1 1 1 1 1 3 2 3 1 1 1 1 1 3 2 3
3 2 3 1 1 1 1 1 3 2 3 1 1 1 1 1 1 1 1 1 1 3 2 3 1 1 1 1 1 3 2 3
3 2 3 3 3 3 3 3 3 2 3 3 3 3 3 1 1 3 3 3 3 3 2 3 3 3 3 3 3 3 2 3
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 1 1 3 3 3 3 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 3 1 1 1 1 1 1 1 1 3 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 3 1 1 1 1 1 1 1 1 3 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 3 1 1 1 1 1 1 5 1 3 2 2 2 2 2 2 2 2 2 2 3
3 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 2 2 2 2 2 2 2 2 2 2 3
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
"""

SPRITE_ROJO = img"""
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
"""

SPRITE_AZUL = img"""
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
"""

SPRITE_VERDE = img"""
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
"""

SPRITE_AMARILLO = img"""
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
"""

SPRITE_MUERTO = img"""
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
"""

SPRITE_FANTASMA = img"""
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
"""

def obtener_skin(id_num: int):
    if id_num == 1: return SPRITE_ROJO
    if id_num == 2: return SPRITE_AZUL
    if id_num == 3: return SPRITE_VERDE
    return SPRITE_AMARILLO

def obtener_color_nombre(id_num: int) -> str:
    if id_num == 1: return "Rojo"
    if id_num == 2: return "Azul"
    if id_num == 3: return "Verde"
    return "Amarillo"

def spawn_x(id_num: int) -> int:
    if id_num == 1: return 216
    if id_num == 2: return 232
    if id_num == 3: return 280
    return 296

def spawn_y(id_num: int) -> int:
    return 56

MiId = 1
TotalJugadores = 2
IdImpostor = 1
SoyImpostor = False
PartidaActiva = False

Muerto1 = False
Muerto2 = False
Muerto3 = False
Muerto4 = False

JugadorLocal: Sprite = None
Rival1: Sprite = None
Rival2: Sprite = None
Rival3: Sprite = None
Rival4: Sprite = None

def cargar_mapa_polus():
    scene.set_tile(1, TILE_SUELO_INTERIOR, False)
    scene.set_tile(2, TILE_NIEVE, False)
    scene.set_tile(3, TILE_PARED, True)
    scene.set_tile(4, TILE_MESA, True)
    scene.set_tile(5, TILE_VENT, False)
    scene.set_tile_map(MAPA_POLUS, TileScale.SIXTEEN)

def cambiar_jugador_local(nuevo_id: int):
    global MiId, SoyImpostor
    if nuevo_id < 1 or nuevo_id > 4: return
    MiId = nuevo_id
    SoyImpostor = (MiId == IdImpostor)
    iniciar_partida()

def iniciar_partida():
    global PartidaActiva, JugadorLocal, Rival1, Rival2, Rival3, Rival4
    PartidaActiva = True
    cargar_mapa_polus()

    if JugadorLocal:
        sprites.destroy(JugadorLocal)
    if Rival1: sprites.destroy(Rival1); Rival1 = None
    if Rival2: sprites.destroy(Rival2); Rival2 = None
    if Rival3: sprites.destroy(Rival3); Rival3 = None
    if Rival4: sprites.destroy(Rival4); Rival4 = None

    JugadorLocal = sprites.create(obtener_skin(MiId), SpriteKind.JugadorLocal)
    JugadorLocal.x = spawn_x(MiId)
    JugadorLocal.y = spawn_y(MiId)
    controller.move_sprite(JugadorLocal, 90, 90)
    scene.camera_follow_sprite(JugadorLocal)

    if TotalJugadores >= 2:
        if MiId != 1:
            Rival1 = sprites.create(obtener_skin(1), SpriteKind.JugadorRival)
            Rival1.x = spawn_x(1); Rival1.y = spawn_y(1)
        if MiId != 2:
            Rival2 = sprites.create(obtener_skin(2), SpriteKind.JugadorRival)
            Rival2.x = spawn_x(2); Rival2.y = spawn_y(2)
    if TotalJugadores >= 3 and MiId != 3:
        Rival3 = sprites.create(obtener_skin(3), SpriteKind.JugadorRival)
        Rival3.x = spawn_x(3); Rival3.y = spawn_y(3)
    if TotalJugadores >= 4 and MiId != 4:
        Rival4 = sprites.create(obtener_skin(4), SpriteKind.JugadorRival)
        Rival4.x = spawn_x(4); Rival4.y = spawn_y(4)

    anunciar_rol()

def anunciar_rol():
    if SoyImpostor:
        game.splash("ERES EL IMPOSTOR", "Presiona B cerca de un rival para eliminarlo")
    else:
        game.splash("ERES TRIPULANTE (" + obtener_color_nombre(MiId) + ")", "Completa tareas y sobrevive")

def actualizar_pos_rival(id_num: int, x_val: float, y_val: float):
    if id_num == 1 and Rival1: Rival1.x = x_val; Rival1.y = y_val
    elif id_num == 2 and Rival2: Rival2.x = x_val; Rival2.y = y_val
    elif id_num == 3 and Rival3: Rival3.x = x_val; Rival3.y = y_val
    elif id_num == 4 and Rival4: Rival4.x = x_val; Rival4.y = y_val

def aplicar_muerte(id_num: int):
    global Muerto1, Muerto2, Muerto3, Muerto4
    if id_num == 1: Muerto1 = True
    elif id_num == 2: Muerto2 = True
    elif id_num == 3: Muerto3 = True
    elif id_num == 4: Muerto4 = True

    if id_num == MiId and JugadorLocal:
        JugadorLocal.set_image(SPRITE_FANTASMA)
        JugadorLocal.set_kind(SpriteKind.Muerto)
        game.splash("¡HAS SIDO ASESINADO!")
    elif id_num == 1 and Rival1:
        Rival1.set_image(SPRITE_MUERTO)
        Rival1.set_kind(SpriteKind.Muerto)
    elif id_num == 2 and Rival2:
        Rival2.set_image(SPRITE_MUERTO)
        Rival2.set_kind(SpriteKind.Muerto)
    elif id_num == 3 and Rival3:
        Rival3.set_image(SPRITE_MUERTO)
        Rival3.set_kind(SpriteKind.Muerto)
    elif id_num == 4 and Rival4:
        Rival4.set_image(SPRITE_MUERTO)
        Rival4.set_kind(SpriteKind.Muerto)

def procesar_red(accion: str, valor: str):
    global MiId, TotalJugadores, IdImpostor, SoyImpostor
    if accion == "set_player":
        pid = parse_int(valor)
        if 1 <= pid <= 4:
            cambiar_jugador_local(pid)
    elif accion == "setup_partida":
        partes = valor.split(",")
        MiId = parse_int(partes[0])
        TotalJugadores = parse_int(partes[1])
        IdImpostor = parse_int(partes[2])
        SoyImpostor = (MiId == IdImpostor)
        iniciar_partida()
    elif accion == "pos":
        partes_pos = valor.split(",")
        if len(partes_pos) >= 3:
            id_remoto = parse_int(partes_pos[0])
            if id_remoto != MiId:
                actualizar_pos_rival(id_remoto, parse_float(partes_pos[1]), parse_float(partes_pos[2]))
    elif accion == "kill":
        aplicar_muerte(parse_int(valor))

redP2P.al_recibir(procesar_red)

def on_b_pressed():
    if SoyImpostor and PartidaActiva and JugadorLocal:
        if Rival1 and JugadorLocal.overlaps_with(Rival1) and not Muerto1:
            aplicar_muerte(1)
            redP2P.enviar_datos("kill", "1")
            game.splash("Eliminaste a Rojo")
        elif Rival2 and JugadorLocal.overlaps_with(Rival2) and not Muerto2:
            aplicar_muerte(2)
            redP2P.enviar_datos("kill", "2")
            game.splash("Eliminaste a Azul")
        elif Rival3 and JugadorLocal.overlaps_with(Rival3) and not Muerto3:
            aplicar_muerte(3)
            redP2P.enviar_datos("kill", "3")
            game.splash("Eliminaste a Verde")
        elif Rival4 and JugadorLocal.overlaps_with(Rival4) and not Muerto4:
            aplicar_muerte(4)
            redP2P.enviar_datos("kill", "4")
            game.splash("Eliminaste a Amarillo")

controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def sincronizar_posicion():
    if PartidaActiva and JugadorLocal:
        redP2P.enviar_datos("pos", str(JugadorLocal.x) + "," + str(JugadorLocal.y))

game.on_update_interval(50, sincronizar_posicion)

iniciar_partida()
