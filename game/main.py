# Among Us Arcade P2P - Soporte para 4 jugadores (Pantallas Separadas)

@namespace
class SpriteKind:
    JugadorLocal = SpriteKind.create()
    JugadorRival = SpriteKind.create()
    Muerto = SpriteKind.create()

# --- Sprites de Jugadores (Pixel Art 16x16) ---
SPRITE_ROJO = img("""
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
""")

SPRITE_AZUL = img("""
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
""")

SPRITE_VERDE = img("""
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
""")

SPRITE_AMARILLO = img("""
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
""")

SPRITE_MUERTO = img("""
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
""")

SPRITE_FANTASMA = img("""
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
""")

def obtener_skin(id_num):
    if id_num == 1:
        return SPRITE_ROJO
    elif id_num == 2:
        return SPRITE_AZUL
    elif id_num == 3:
        return SPRITE_VERDE
    else:
        return SPRITE_AMARILLO

def obtener_color_nombre(id_num):
    if id_num == 1:
        return "Rojo"
    elif id_num == 2:
        return "Azul"
    elif id_num == 3:
        return "Verde"
    else:
        return "Amarillo"

def spawn_x(id_num):
    if id_num == 1:
        return 60
    elif id_num == 2:
        return 120
    elif id_num == 3:
        return 60
    else:
        return 120

def spawn_y(id_num):
    if id_num == 1:
        return 60
    elif id_num == 2:
        return 60
    elif id_num == 3:
        return 120
    else:
        return 120

# --- Variables de Estado de Red ---
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

def iniciar_partida():
    global PartidaActiva, JugadorLocal, Rival1, Rival2, Rival3, Rival4
    PartidaActiva = True

    scene.set_background_color(15)

    if JugadorLocal:
        sprites.destroy(JugadorLocal)
    if Rival1:
        sprites.destroy(Rival1)
        Rival1 = None
    if Rival2:
        sprites.destroy(Rival2)
        Rival2 = None
    if Rival3:
        sprites.destroy(Rival3)
        Rival3 = None
    if Rival4:
        sprites.destroy(Rival4)
        Rival4 = None

    JugadorLocal = sprites.create(obtener_skin(MiId), SpriteKind.JugadorLocal)
    JugadorLocal.x = spawn_x(MiId)
    JugadorLocal.y = spawn_y(MiId)
    controller.move_sprite(JugadorLocal, 100, 100)
    scene.camera_follow_sprite(JugadorLocal)

    if TotalJugadores >= 2:
        if 1 != MiId:
            Rival1 = sprites.create(obtener_skin(1), SpriteKind.JugadorRival)
            Rival1.x = spawn_x(1)
            Rival1.y = spawn_y(1)
        if 2 != MiId:
            Rival2 = sprites.create(obtener_skin(2), SpriteKind.JugadorRival)
            Rival2.x = spawn_x(2)
            Rival2.y = spawn_y(2)
    if TotalJugadores >= 3 and 3 != MiId:
        Rival3 = sprites.create(obtener_skin(3), SpriteKind.JugadorRival)
        Rival3.x = spawn_x(3)
        Rival3.y = spawn_y(3)
    if TotalJugadores >= 4 and 4 != MiId:
        Rival4 = sprites.create(obtener_skin(4), SpriteKind.JugadorRival)
        Rival4.x = spawn_x(4)
        Rival4.y = spawn_y(4)

    anunciar_rol()

def anunciar_rol():
    if SoyImpostor:
        game.splash("ERES EL IMPOSTOR", "Presiona B cerca de un rival para eliminarlo")
    else:
        game.splash("ERES TRIPULANTE (" + obtener_color_nombre(MiId) + ")", "Sobrevive al impostor")

def actualizar_pos_rival(id_num, x_val, y_val):
    if id_num == 1 and Rival1:
        Rival1.x = x_val
        Rival1.y = y_val
    elif id_num == 2 and Rival2:
        Rival2.x = x_val
        Rival2.y = y_val
    elif id_num == 3 and Rival3:
        Rival3.x = x_val
        Rival3.y = y_val
    elif id_num == 4 and Rival4:
        Rival4.x = x_val
        Rival4.y = y_val

def aplicar_muerte(id_num):
    global Muerto1, Muerto2, Muerto3, Muerto4
    if id_num == 1:
        Muerto1 = True
    elif id_num == 2:
        Muerto2 = True
    elif id_num == 3:
        Muerto3 = True
    elif id_num == 4:
        Muerto4 = True

    if id_num == MiId:
        if JugadorLocal:
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

    if accion == "setup_partida":
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
        id_muerto = parse_int(valor)
        aplicar_muerte(id_muerto)

redP2P.al_recibir(procesar_red)

# --- Ataque del Impostor con botón B ---
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

# --- Sincronización continua de posición ---
def sincronizar_posicion():
    if PartidaActiva and JugadorLocal:
        redP2P.enviar_datos("pos", str(JugadorLocal.x) + "," + str(JugadorLocal.y))

game.on_update_interval(50, sincronizar_posicion)

# Iniciar de inmediato el juego para que la pantalla NUNCA quede en negro
iniciar_partida()

