# 🚀 Among Us Arcade P2P (The Skeld)

[![MakeCode Arcade](https://img.shields.io/badge/MakeCode-Arcade-red.svg)](https://arcade.makecode.com/)
[![WebRTC Direct P2P](https://img.shields.io/badge/Networking-WebRTC%20PeerJS-00d26a.svg)](https://peerjs.com/)
[![GitHub Pages](https://img.shields.io/badge/Play%20Online-GitHub%20Pages-38bdf8.svg)](https://capigamer888.github.io/arcade-amongus-p2p/)
[![Players](https://img.shields.io/badge/Players-1%20a%204-f59e0b.svg)](#)

¡Una recreación completa de **Among Us** en **MakeCode Arcade** con soporte multijugador en **pantallas separadas** gracias a conexiones directas **WebRTC P2P (PeerJS)**! Cada jugador ve únicamente su propia perspectiva y campo de visión en su dispositivo, exactamente como en el juego original.

---

## 🎮 Modos de Juego: Cómo Jugar

Tienes dos formas de disfrutar el juego: **Multijugador Online (en la Web / .io)** o **Modo Local / Práctica (directamente en MakeCode Arcade)**.

---

### 🌐 Opción 1: Jugar Online Multijugador (Web / .io)

Esta es la forma recomendada para jugar con hasta 4 amigos en pantallas separadas y sincronización en tiempo real.

> 🔗 **Acceso directo a la web:** [https://capigamer888.github.io/arcade-amongus-p2p/](https://capigamer888.github.io/arcade-amongus-p2p/)

#### 👑 Como Anfitrión (Host - Jugador 1 Rojo):
1. Entra al enlace de la web.
2. En la barra inferior, haz clic en **👑 Host Game**.
3. Tu identificador único de sala aparecerá en pantalla. Haz clic en **📋 Copy Code** para copiarlo.
4. Envía ese código a tus amigos (hasta 3 personas).
5. Observa cómo tus amigos se conectan en el panel lateral derecho (**Escuadrón en Sala**).
6. Cuando todos estén listos, haz clic en el botón verde **`🚀 Iniciar Partida`** (o presiona la tecla `A` / Espacio dentro de la pantalla del juego).
7. ¡La partida iniciará asignando roles en secreto (Tripulantes o Impostor)!

#### 🔗 Como Invitado (Tripulantes 2 Azul, 3 Verde, 4 Amarillo):
1. Entra al enlace de la web.
2. En la barra inferior, haz clic en **🔗 Join Room**.
3. Pega el código de sala que te compartió el Host en el campo de texto y haz clic en **Unirse**.
4. El sistema te asignará automáticamente tu color y posición en el escuadrón.
5. Espera a que el Host inicie la partida.
6. ¡Haz clic dentro de la pantalla de juego para enfocar los controles y comienza a jugar!

---

### 🕹️ Opción 2: Jugar Offline / Práctica en MakeCode Arcade

Si deseas probar el mapa, explorar las mecánicas tú solo, o editar y modificar el código del juego:

1. Ve a [MakeCode Arcade](https://arcade.makecode.com/).
2. Haz clic en el botón **Importar** y selecciona **Importar URL / Repositorio de GitHub**.
3. Pega la URL del repositorio:
   ```text
   https://github.com/Capigamer888/arcade-amongus-p2p
   ```
4. Se abrirá el proyecto completo con el editor de bloques o TypeScript.
5. En el simulador de MakeCode (modo Lobby), presiona la tecla **Espacio** o el botón virtual **(A)**.
6. Al cabo de medio segundo sin otros jugadores en red, el juego iniciará automáticamente en **Modo Práctica Solo** como Impostor para que explores libremente:
   * Probar el botón de emergencia en la mesa de Cafetería `(400, 150)`.
   * Probar las ubicaciones de tareas por todo el mapa The Skeld.
   * Probar la velocidad de movimiento, colisiones de paredes y cooldowns.

---

## ⌨️ Controles del Juego

| Acción | Teclado (PC) | MakeCode / Gamepad |
| :--- | :--- | :--- |
| **Moverse** | `W`, `A`, `S`, `D` o Flechas de Dirección | D-Pad / Stick |
| **Interactuar / Tarea / Reportar** | `Espacio` o Tecla `Z` / `A` | Botón **(A)** |
| **Asesinar (Impostor)** | Tecla `B` o Tecla `X` | Botón **(B)** |
| **Navegar en Votaciones** | Flecha `Izquierda` / Flecha `Derecha` | D-Pad Izq / Der |
| **Confirmar Voto** | `Espacio` o Tecla `Z` / `A` | Botón **(A)** |

> [!TIP]
> **Activar Controles en la Web:** Al cargar la página web, haz clic una vez dentro del marco de la pantalla de juego para asegurar que tu navegador envíe las pulsaciones del teclado al simulador.

---

## 🌟 Características y Mecánicas Principales

### 🗺️ Mapa The Skeld Completo
* Área de juego amplia (200x100 baldosas) con todas las salas icónicas: Cafetería, Electricidad, O2, Almacén, pasillos y navegación.
* Sistema de colisiones reales que delimita paredes y salas.

### 🧭 Sistema Inteligente de Tareas (Tripulantes)
* **Brújula y Radar HUD:** La barra superior indica en tiempo real la distancia y dirección exacta de tu tarea más cercana (por ejemplo: `TAREA: 8m -->` o `TAREA: 12m ARRIBA-IZQ`).
* **Marcadores visuales:** Baldosas interactivas marcadas con el icono `!` en el mapa.
* **Barra de Tareas Global:** Barra de progreso sincronizada en la esquina superior que escala dinámicamente según el número de tripulantes de la partida.
* **Fantasmas hacen tareas:** Si mueres o eres expulsado, ¡te conviertes en un fantasma que puede atravesar paredes y seguir completando tareas para ayudar a tu equipo a ganar!

### 🔪 Mecánicas del Impostor
* **Cooldown de Asesinato:**
  * 15 segundos al comenzar la partida.
  * 20 segundos de recarga tras asesinar o salir de una reunión.
  * Aviso dinámico de cuenta regresiva en pantalla (`Kill en Xs`) al acercarte a una víctima.
* **Botón de Muerte Flotante:** El botón de asesinato en pantalla se eleva y rebota automáticamente cuando estás a distancia de ataque y tu cooldown está listo.
* **Asesinatos con Spawn de Cadáver:** Al matar, la víctima se divide en un cadáver con hueso visible en las coordenadas exactas de la muerte para que cualquiera pueda reportarlo.

### 🚨 Reuniones de Emergencia y Votaciones
* **Reportar Cadáveres:** Pulsa `(A)` cerca de cualquier cuerpo en el mapa para llamar a una reunión urgente.
* **Botón de Cafetería:** Botón de emergencia en el centro de Cafetería con 1 uso por partida y 25s de cooldown.
* **Votación de 30 Segundos:** Sistema visual con selección entre los tripulantes vivos u opción de **OMITIR**.
* **Protección contra Bucles y Debounce:** Cooldowns automáticos y reposicionamiento que evitan reactivaciones accidentales al salir de la pantalla de expulsión.
* **Modo Espectador para Fantasmas:** Los jugadores fallecidos ven el estado de la votación pero no pueden votar ni alterar los resultados.
* **Visión entre Fantasmas:** Los fantasmas pueden verse y volar juntos libremente.

### 🏆 Condiciones de Victoria
* **Tripulantes ganan:**
  * Si completan el 100% de las tareas globales.
  * O si descubren y expulsan al Impostor en la votación.
* **Impostor gana:**
  * Si elimina a los tripulantes hasta igualar su número (1 vs 1 en partidas de 3-4 jugadores, o eliminar al único tripulante en partidas de 2).

---

## 🛠️ Arquitectura Técnica

* **Motor:** MakeCode Arcade (Static TypeScript).
* **Protocolo P2P:** WebRTC a través de [PeerJS](https://peerjs.com/) para intercambio de datos cifrado y directo entre navegadores sin servidores centrales intermediarios de juego.
* **Intercomunicación Web $\leftrightarrow$ Simulador:** Paquetes binarios `messagepacket` sobre canal `amogus` vía `postMessage` libre de errores cross-origin.
* **Hosting:** GitHub Pages con despliegue automático desde la carpeta `/docs`.

---

## 🤝 Créditos y Licencia

Desarrollado con ❤️ para la comunidad de MakeCode Arcade y fans de Among Us.
Inspirado en *Among Us* de Innersloth.
Código fuente bajo licencia [MIT](LICENSE).
