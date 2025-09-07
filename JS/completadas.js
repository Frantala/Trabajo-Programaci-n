document.addEventListener('DOMContentLoaded', function() {
    const tareaCompletada = localStorage.getItem("marcadaCompletada");
});

const listaCompletadas = document.getElementById("lista-tareas");
function mostrarCompletadas() {
    const lista = document.createElement("li");
    lista.className = "tarea";
    lista.textContent = tareaCompletada;

}

mostrarCompletadas();