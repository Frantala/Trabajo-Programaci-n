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
    //const botonTilde = this.documentElement.getElementById("btn-circular");
    const botonBorrar = document.getElementById('Borrar');

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

    // Mostrar tareas en la lista
    function mostrarTareas() {
        lista.innerHTML = "";
        const tareas = TareasGuardadas();
        tareas.forEach((tarea, idx) => {
            const li = document.createElement("li");
            li.className = "tarea-item";
            const botonTilde = document.createElement("button");
            botonTilde.className = "btn-circular";
            botonTilde.textContent = "✔️";
            const span = document.createElement("span");
            span.textContent = tarea;
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

    botonBorrar.addEventListener("click", function() { 
        const tarea = 
        
        localStorage.setItem("tareas", JSON.stringify(tareas));
    })
    

    mostrarTareas();


});


