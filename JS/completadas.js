document.addEventListener('DOMContentLoaded', function () {
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
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.alignItems = "center";

      const span = document.createElement("span");
      span.textContent = tarea;

      const botonBorrar = document.createElement("button");
      botonBorrar.textContent = "X";
      botonBorrar.className = "btn-circ";
      botonBorrar.style.marginLeft = "10px";

      botonBorrar.addEventListener("click", () => {
        const tareas = obtenerCompletadas();
        tareas.splice(index, 1);
        localStorage.setItem("tareasCompletadas", JSON.stringify(tareas));
        mostrarCompletadas();
      });

      //creo el boton de editar tarea
      const botonEditar = document.createElement("button");
      botonEditar.textContent = "E";
      botonEditar.className = "btn-circ";
      botonEditar.style.marginLeft = "5px";

      //cuando le doy click, crea un input para modificar la tarea
      botonEditar.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = tarea;
        li.replaceChild(input, span);
        botonEditar.textContent = "✔"; //remplazo el boton con el ✔ 

        // cuando le doy click de vuelta, confirmo la tarea y la guardo en el LS
        botonEditar.addEventListener("click", () => {
          const tareas = obtenerCompletadas();
          tareas[index] = input.value.trim();
          localStorage.setItem("tareasCompletadas", JSON.stringify(tareas));
          mostrarCompletadas();
        }, { once: true });
      });

      //creo un div para poder poner los dos botones a la derecha juntos
      const contenedorBotones = document.createElement("div");
      contenedorBotones.style.display = "flex";
      contenedorBotones.appendChild(botonBorrar);
      contenedorBotones.appendChild(botonEditar);

      li.appendChild(span);
      li.appendChild(contenedorBotones);
      listaCompletadas.appendChild(li);
    });
  }

  mostrarCompletadas();
});