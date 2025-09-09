document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('nueva-nota');

    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; 
        this.style.height = (this.scrollHeight) + 'px'; 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('nueva-nota');
    const botonAgregar = document.getElementById('agregar');
    const lista = document.querySelector('.lista-tareas');
    const botonBorrar = document.getElementById('Borrar');
    const listaCompletadas = document.querySelector('.lista-tareas'); 

    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    function TareasGuardadas() {
        return JSON.parse(localStorage.getItem("tareas")) || [];
    }

    function guardarNotas(tareas) {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function TareasCompletadasGuardadas() {
        return JSON.parse(localStorage.getItem("tareasCompletadas")) || [];
    }

    function guardarCompletadas(tareas) {
        localStorage.setItem("tareasCompletadas", JSON.stringify(tareas));
    }

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

            botonTilde.addEventListener("click", function() {

                const tareas = TareasGuardadas();
                const tareaCompletada = tareas.splice(idx, 1)[0];
                guardarNotas(tareas);

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
});
