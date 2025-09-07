document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('nueva-nota');

    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; // Restablece la altura a "auto" para recalcularla
        this.style.height = (this.scrollHeight) + 'px'; // Ajusta la altura a la del contenido
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('nueva-nota');
    const botonAgregar = document.getElementById('agregar');
    const lista = document.querySelector('.lista-tareas');
    const botonBorrar = document.getElementById('Borrar');
    const listaCompletadas = document.querySelector('.lista-completadas'); // Debes tener este elemento en tu HTML

    // Ajuste automático del textarea
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // Recuperar tareas del localStorage
    function TareasGuardadas() {
        return JSON.parse(localStorage.getItem("tareas")) || [];
    }

    // Guardar tareas en localStorage
    function guardarNotas(tareas) {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    // Recuperar tareas completadas
    function TareasCompletadasGuardadas() {
        return JSON.parse(localStorage.getItem("tareasCompletadas")) || [];
    }

    // Guardar tareas completadas
    function guardarCompletadas(tareas) {
        localStorage.setItem("tareasCompletadas", JSON.stringify(tareas));
    }

    // Mostrar tareas en la lista principal
    function mostrarTareas() {
        lista.innerHTML = "";
        const tareas = TareasGuardadas();
        tareas.forEach((tarea, idx) => {
            const li = document.createElement("li");
            li.className = "tarea-item";
            const botonTilde = document.createElement("button");
            botonTilde.className = "btn-circular";
            botonTilde.textContent = "✔";
            botonTilde.style.display= "inline-block";
            botonTilde.style.marginRight= "20px";
            const span = document.createElement("span");
            span.textContent = tarea;

            // Evento para mover a completadas
            botonTilde.addEventListener("click", function() {
                // Eliminar de tareas pendientes
                const tareas = TareasGuardadas();
                const tareaCompletada = tareas.splice(idx, 1)[0];
                guardarNotas(tareas);

                // Agregar a tareas completadas
                const completadas = TareasCompletadasGuardadas();
                completadas.push(tareaCompletada);
                guardarCompletadas(completadas);

                mostrarTareas();
                mostrarCompletadas();
            });

            li.appendChild(botonTilde);
            li.appendChild(span);
            lista.appendChild(li);
        });
    }


    // Agregar nueva tarea
    botonAgregar.addEventListener("click", function() {
        const tarea = textarea.value.trim();
        if (tarea) {
            const tareas = TareasGuardadas();
            tareas.push(tarea);
            guardarNotas(tareas);
            textarea.value = "";
            mostrarTareas();
        }
    });

    mostrarTareas();
    mostrarCompletadas();
});
