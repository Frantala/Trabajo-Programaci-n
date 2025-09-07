document.addEventListener('DOMContentLoaded', function() {
    const listaCompletadas = document.querySelector('.lista-completadas');

    function obtenerCompletadas() {
        return JSON.parse(localStorage.getItem("tareasCompletadas")) || [];
    }

    function mostrarCompletadas() {
        listaCompletadas.innerHTML = "";
        const completadas = obtenerCompletadas();
        completadas.forEach(tarea => {
        const li = document.createElement("li");
        li.className = "lista-tareas";
        li.textContent = tarea;
        listaCompletadas.appendChild(li);
        });
    }

    mostrarCompletadas();
});