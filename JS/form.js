document.addEventListener("DOMContentLoaded", () => { 
const form = document.getElementById("form");
const boton = document.querySelector(".submit-btn-md3-button");

boton.addEventListener("click", () => {
    const datos = {
      nombre: document.getElementById("nombre").value,
      correo: document.getElementById("correo").value,
      pais: document.getElementById("pais").value,
      tipo_experiencia: document.getElementById("expe").value,
      Fecha_Nac: document.getElementById("fechaNacimiento").value,
      telefono: document.getElementById("telefono").value,
      apellido: document.getElementById("apellido").value,
    };

    localStorage.setItem("usuario", JSON.stringify(datos));
    alert("Datos guardados correctamente");
  });
});

