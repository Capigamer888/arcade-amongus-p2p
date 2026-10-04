# Lógica de Among Us en MakeCode Arcade (Ejecución independiente por cliente)

@namespace
class SpriteKind:
    JugadorLocal = SpriteKind.create()
    JugadorRival = SpriteKind.create()
    Muerto = SpriteKind.create()

SoyHost = False
SoyImpostor = False
PartidaActiva = False
JugadorLocal: Sprite = None
JugadorRival: Sprite = None

def procesar_red(accion: str, valor: str):
    global SoyHost, SoyImpostor, PartidaActiva, JugadorRival, JugadorLocal
    
    if accion == "setup_red":
        SoyHost = (valor == "host")
        iniciar_partida()
        
    elif accion == "set_impostor":
        SoyImpostor = (valor == "1")
        anunciar_rol()
        
    elif accion == "pos":
        if JugadorRival:
            coords = valor.split(",")
            JugadorRival.x = parse_float(coords[0])
            JugadorRival.y = parse_float(coords[1])
            
    elif accion == "kill":
        if JugadorLocal:
            JugadorLocal.set_kind(SpriteKind.Muerto)
            game.splash("¡HAS SIDO ASESINADO!")

redOnline.al_recibir(procesar_red)

def iniciar_partida():
    global PartidaActiva, JugadorLocal, JugadorRival, SoyImpostor
    PartidaActiva = True
    
    tiles.set_current_tilemap(tilemap("""level1"""))
    
    # Personaje local: la cámara lo sigue a pantalla completa
    JugadorLocal = sprites.create(assets.image("skin_local"), SpriteKind.JugadorLocal)
    controller.move_sprite(JugadorLocal, 100, 100)
    scene.camera_follow_sprite(JugadorLocal)
    
    # Avatar del rival en tu pantalla (se actualiza solo por red)
    JugadorRival = sprites.create(assets.image("skin_rival"), SpriteKind.JugadorRival)
    
    if SoyHost:
        if randint(1, 2) == 1:
            SoyImpostor = True
            redOnline.enviar_datos("set_impostor", "0")
        else:
            SoyImpostor = False
            redOnline.enviar_datos("set_impostor", "1")
        anunciar_rol()

def anunciar_rol():
    if SoyImpostor:
        game.splash("ERES EL IMPOSTOR", "Presiona B cerca del rival para eliminarlo")
    else:
        game.splash("ERES TRIPULANTE", "Completa las tareas y sobrevive")

def on_b_pressed():
    if SoyImpostor and PartidaActiva and JugadorLocal and JugadorRival:
        if JugadorLocal.overlaps_with(JugadorRival):
            JugadorRival.set_kind(SpriteKind.Muerto)
            redOnline.enviar_datos("kill", "1")
            game.splash("Eliminaste al tripulante")

controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def sincronizar_posicion():
    if PartidaActiva and JugadorLocal:
        redOnline.enviar_datos("pos", str(JugadorLocal.x) + "," + str(JugadorLocal.y))

game.on_update_interval(50, sincronizar_posicion)
