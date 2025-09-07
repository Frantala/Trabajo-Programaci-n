document.addEventListener('DOMContentLoaded', function() {
    const listaCompletadas = document.querySelector('.lista-completadsa');

    function obtenerCompletadas() {
        return JSON.parse(localStorage.getItem("tareasCompletadas")) || [];
    }

    function mostrarCompletadas() {
        listaCompletadas.innerHTML = "";
        const completadas = obtenerCompletadas();
        completadas.forEach(tarea => {
            const li = document.createElement("li");
            li.className = "tarea-completada";
            li.textContent = tarea;
            listaCompletadas.appendChild(li);
        });
    }

    mostrarCompletadas();
});