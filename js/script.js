// Opciones disponibles
const opciones = ["piedra", "papel", "tijera"];

// Variables para los puntos
let puntosUsuario = 0;
let puntosOrdenador = 0;

// Captura los elementos del DOM
const botones = document.querySelectorAll(".boton-jugada");
const resultadosDiv = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

// Función para obtener la jugada aleatoria del ordenador
function obtenerJugadaOrdenador() {
  const indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio];
}

// Función para determinar el resultado
function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
  if (jugadaUsuario === jugadaOrdenador) {
    return "Empate";
  }
  if (
    (jugadaUsuario === "piedra" && jugadaOrdenador === "tijera") ||
    (jugadaUsuario === "papel" && jugadaOrdenador === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaOrdenador === "papel")
  ) {
    return "Ganaste";
  }
  return "Perdiste";
}

// Función para actualizar la puntuación
function actualizarPuntuacion(resultado) {
  if (resultado === "Ganaste") {
    puntosUsuario++;
    contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
  } else if (resultado === "Perdiste") {
    puntosOrdenador++;
    contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
  }
}

// Función para mostrar el resultado
function mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado) {
  resultadosDiv.textContent = `Tú elegiste ${jugadaUsuario}. El ordenador eligió ${jugadaOrdenador}. Resultado: ${resultado}.`;
}

// Agregar eventos de clic a los botones
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const jugadaUsuario = boton.dataset.jugada; // Captura la jugada seleccionada
    const jugadaOrdenador = obtenerJugadaOrdenador(); // Genera la jugada aleatoria del ordenador
    const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador); // Determina el resultado
    mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado); // Muestra el resultado en el div
    actualizarPuntuacion(resultado); // Actualiza los puntos
  });
});
