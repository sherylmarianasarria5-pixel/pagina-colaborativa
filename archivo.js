console.log("Página cargada correctamente.");

const inicio = document.getElementById("seccion-inicio");
const destinos = document.getElementById("seccion-destinos");
const contacto = document.getElementById("seccion-contacto");

// Botones del menú
document.getElementById("btn-inicio").addEventListener("click", () => mostrar("inicio"));
document.getElementById("btn-destinos").addEventListener("click", () => mostrar("destinos"));
document.getElementById("btn-contacto").addEventListener("click", () => mostrar("contacto"));

function mostrar(vista) {
    inicio.classList.add("oculto");
    destinos.classList.add("oculto");
    contacto.classList.add("oculto");

    if (vista === "inicio") inicio.classList.remove("oculto");
    if (vista === "destinos") destinos.classList.remove("oculto");
    if (vista === "contacto") contacto.classList.remove("oculto");
}

// Acción del botón enviar
document.getElementById("btn-enviar").addEventListener("click", () => {
    alert("¡Tu mensaje ha sido enviado! Nos comunicaremos pronto contigo.");
});

