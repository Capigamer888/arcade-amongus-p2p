# Arcade Among Us P2P (Pantallas Separadas)

Puente de comunicación WebRTC para ejecutar MakeCode Arcade en pantallas completas separadas mediante un iframe contenedor.

## Cómo usarlo

1. **Importar la extensión en MakeCode:**
   - Abre MakeCode Arcade.
   - Ve a **Extensiones** y pega la URL de este repositorio en GitHub.
2. **Cargar el juego:**
   - Pega el código de `game/main.py` en el editor de MakeCode.
   - Exporta o publica tu juego para obtener su URL web.
3. **Desplegar la Web:**
   - Ve a Settings -> Pages en este repositorio y activa GitHub Pages desde la carpeta `/docs`.
   - Modifica `docs/index.html` cambiando el `src` del iframe por la URL de tu juego.
