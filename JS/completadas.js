document.addEventListener('DOMContentLoaded', function() {

    const listaCompletadas = document.querySelector('.lista-tareas');
    

    function obtenerCompletadas() {
        return JSON.parse(localStorage.getItem("tareasCompletadas")) || [];
    }

    function mostrarCompletadas() {
    listaCompletadas.innerHTML = "";
    const completadas = obtenerCompletadas();

        completadas.forEach((tarea, index) => {
            const li = document.createElement("li");
            li.className = "tarea";

            const span = document.createElement("span");
            span.textContent = tarea;

            const botonBorrar = document.createElement("button");
            botonBorrar.textContent = "X";
            botonBorrar.className = "btn-circ";
            botonBorrar.style.display = "inline-block";

            botonBorrar.addEventListener("click", () => {
            const tareas = obtenerCompletadas(); //llamo a la tarea del inicio que se mandaron
            tareas.splice(index, 1); //elimina de tareas el elemento donde esta el boton
            localStorage.setItem("tareasCompletadas", JSON.stringify(tareas));
            mostrarCompletadas();
            });

            li.appendChild(span);
            li.appendChild(botonBorrar);
            listaCompletadas.appendChild(li);
        });
    }
    mostrarCompletadas();


    
    

});


