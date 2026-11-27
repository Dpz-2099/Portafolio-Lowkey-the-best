"""
Laberinto aleatorio con niveles y colores que cambian
-----------------------------------------------------
Cada vez que ejecutas el programa se genera un laberinto distinto.
Al completar un nivel (o al presionar R) cambian los colores.

Controles:
  Flechas o W A S D -> mover
  R                 -> laberinto nuevo con otros colores
                       (si ya ganaste, también sube de nivel)
  Enter / Espacio   -> pasar al siguiente nivel cuando ganas
  Esc               -> salir

Solo usa la biblioteca estándar de Python (tkinter).
"""

import random
import tkinter as tk

COLUMNAS = 25      # usa números impares para que se vea mejor
FILAS = 19
TAMANO = 28        # tamaño de cada celda en píxeles

PARED, CAMINO = 1, 0

# Paletas de colores: cada nivel usa una distinta
TEMAS = [
    {"nombre": "Océano",    "pared": "#1b3a5c", "camino": "#e8f4fa", "rastro": "#a9d6ec", "jugador": "#ff6b6b", "meta": "#ffd166", "fondo": "#0b1d30"},
    {"nombre": "Bosque",    "pared": "#2d5a3d", "camino": "#f0f7e6", "rastro": "#bfe0a8", "jugador": "#e76f51", "meta": "#f4d35e", "fondo": "#112619"},
    {"nombre": "Atardecer", "pared": "#6a2c5a", "camino": "#fff1e6", "rastro": "#ffc9a8", "jugador": "#2a9d8f", "meta": "#ffe066", "fondo": "#2b0f26"},
    {"nombre": "Neón",      "pared": "#1a1a2e", "camino": "#16213e", "rastro": "#0f3460", "jugador": "#ff2e63", "meta": "#08d9d6", "fondo": "#0a0a14"},
    {"nombre": "Desierto",  "pared": "#9c5a2b", "camino": "#fbefd5", "rastro": "#f0cf9a", "jugador": "#3a86ff", "meta": "#6a994e", "fondo": "#3a2110"},
    {"nombre": "Dulce",     "pared": "#d6477f", "camino": "#fff0f6", "rastro": "#ffc2dc", "jugador": "#5f27cd", "meta": "#1dd1a1", "fondo": "#4a1230"},
    {"nombre": "Hielo",     "pared": "#4a6fa5", "camino": "#f4fbff", "rastro": "#c9e6f7", "jugador": "#d62828", "meta": "#f77f00", "fondo": "#14253d"},
    {"nombre": "Lava",      "pared": "#7a1f1f", "camino": "#2b2b2b", "rastro": "#4a3030", "jugador": "#ffd60a", "meta": "#4cc9f0", "fondo": "#150808"},
]


def generar_laberinto(columnas, filas):
    """Genera un laberinto con el algoritmo de backtracking (DFS).

    Como se usa random, el resultado cambia en cada ejecución.
    """
    mapa = [[PARED] * columnas for _ in range(filas)]

    # Se empieza en una celda impar aleatoria
    x = random.randrange(1, columnas, 2)
    y = random.randrange(1, filas, 2)
    mapa[y][x] = CAMINO
    pila = [(x, y)]

    while pila:
        x, y = pila[-1]
        direcciones = [(2, 0), (-2, 0), (0, 2), (0, -2)]
        random.shuffle(direcciones)

        for dx, dy in direcciones:
            nx, ny = x + dx, y + dy
            if 0 < nx < columnas - 1 and 0 < ny < filas - 1 and mapa[ny][nx] == PARED:
                mapa[y + dy // 2][x + dx // 2] = CAMINO  # rompe la pared intermedia
                mapa[ny][nx] = CAMINO
                pila.append((nx, ny))
                break
        else:
            pila.pop()  # sin salida: retrocede

    return mapa


class Juego:
    def __init__(self, raiz):
        self.raiz = raiz
        raiz.title("Laberinto aleatorio")
        self.nivel = 1
        self.tema = random.choice(TEMAS)
        self.ganado = False

        self.canvas = tk.Canvas(
            raiz, width=COLUMNAS * TAMANO, height=FILAS * TAMANO, highlightthickness=0
        )
        self.canvas.pack()
        self.info = tk.Label(raiz, font=("Arial", 12, "bold"), pady=6)
        self.info.pack(fill="x")

        for tecla in ("<Up>", "<w>"):
            raiz.bind(tecla, lambda e: self.mover(0, -1))
        for tecla in ("<Down>", "<s>"):
            raiz.bind(tecla, lambda e: self.mover(0, 1))
        for tecla in ("<Left>", "<a>"):
            raiz.bind(tecla, lambda e: self.mover(-1, 0))
        for tecla in ("<Right>", "<d>"):
            raiz.bind(tecla, lambda e: self.mover(1, 0))
        raiz.bind("<r>", lambda e: self.nuevo())
        raiz.bind("<Return>", lambda e: self.siguiente_si_gano())
        raiz.bind("<space>", lambda e: self.siguiente_si_gano())
        raiz.bind("<Escape>", lambda e: raiz.destroy())

        self.nuevo(primera_vez=True)

    def cambiar_tema(self):
        """Elige una paleta distinta a la actual."""
        otros = [t for t in TEMAS if t is not self.tema]
        self.tema = random.choice(otros)

    def siguiente_si_gano(self):
        if self.ganado:
            self.nuevo()

    def nuevo(self, primera_vez=False):
        if self.ganado:
            self.nivel += 1          # si ganó, sube de nivel
        if not primera_vez:
            self.cambiar_tema()      # colores nuevos

        self.mapa = generar_laberinto(COLUMNAS, FILAS)
        self.jugador = (1, 1)
        self.meta = (COLUMNAS - 2, FILAS - 2)
        self.mapa[1][1] = CAMINO
        self.mapa[self.meta[1]][self.meta[0]] = CAMINO
        self.visitadas = {self.jugador}
        self.pasos = 0
        self.ganado = False
        self.dibujar()

    def dibujar(self):
        t = self.tema
        self.raiz.configure(bg=t["fondo"])
        self.canvas.configure(bg=t["fondo"])
        self.canvas.delete("all")

        for y, fila in enumerate(self.mapa):
            for x, celda in enumerate(fila):
                if celda == PARED:
                    color = t["pared"]
                elif (x, y) in self.visitadas:
                    color = t["rastro"]      # camino ya recorrido
                else:
                    color = t["camino"]
                self.canvas.create_rectangle(
                    x * TAMANO, y * TAMANO, (x + 1) * TAMANO, (y + 1) * TAMANO,
                    fill=color, outline=color,
                )

        mx, my = self.meta
        self.celda(mx, my, t["meta"])
        px, py = self.jugador
        self.celda(px, py, t["jugador"], ovalo=True)

        if self.ganado:
            texto = f"¡Nivel {self.nivel} completado en {self.pasos} pasos!  Enter = siguiente nivel"
        else:
            texto = f"Nivel {self.nivel}  |  Tema: {t['nombre']}  |  Pasos: {self.pasos}  |  R = colores nuevos"
        self.info.config(text=texto, bg=t["fondo"], fg=t["meta"])

    def celda(self, x, y, color, ovalo=False):
        m = 4
        forma = self.canvas.create_oval if ovalo else self.canvas.create_rectangle
        forma(
            x * TAMANO + m, y * TAMANO + m, (x + 1) * TAMANO - m, (y + 1) * TAMANO - m,
            fill=color, outline=color,
        )

    def mover(self, dx, dy):
        if self.ganado:
            return
        x, y = self.jugador
        nx, ny = x + dx, y + dy
        if self.mapa[ny][nx] == CAMINO:
            self.jugador = (nx, ny)
            self.visitadas.add(self.jugador)
            self.pasos += 1
            if self.jugador == self.meta:
                self.ganado = True
            self.dibujar()


if __name__ == "__main__":
    ventana = tk.Tk()
    Juego(ventana)
    ventana.mainloop()