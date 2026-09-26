function mostrarPreguntas() {
	const cuestionario = document.getElementById("minicuestionario");
	const botonRegalo = document.getElementById("boton");

	if (!cuestionario || !botonRegalo) return;

	cuestionario.hidden = false;
	botonRegalo.setAttribute("aria-expanded", "true");
	cuestionario.scrollIntoView({ behavior: "smooth", block: "center" });
}

function mostrarRegalo() {
	const respuestasCorrectas = {
		pregunta1: "Santiago Ezequiel Gomez",
		pregunta2: "11/06/2003",
		pregunta3: "Ambos"
	};
	const resultado = document.getElementById("resultado-cuestionario");
	const carta = document.getElementById("carta");

	if (!resultado || !carta) return;

	const todasCorrectas = Object.entries(respuestasCorrectas).every(([pregunta, respuesta]) => {
		return document.querySelector(`input[name="${pregunta}"]:checked`)?.value === respuesta;
	});

	if (!todasCorrectas) {
		resultado.textContent = "Revisa tus respuestas e inténtalo de nuevo 💜";
		resultado.classList.add("resultado-error");
		return;
	}

	resultado.textContent = "¡Todas correctas! Aquí tienes tu regalo 🌻";
	resultado.classList.remove("resultado-error");
	carta.hidden = false;
	carta.scrollIntoView({ behavior: "smooth", block: "start" });
}