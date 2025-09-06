document.addEventListener("DOMContentLoaded", () => { 
const form = document.getElementById("form");

const datos = {
    nombre: document.getElementById("nombre"),
    correo: document.getElementById("correo"), 
    pais: document.getElementById("pais"),
    tipo_experiencia: getElementById("expe"),
    Fecha_Nac: document.getElementById("FechaNacimiento"),
    telefono: document.getElementById("telefono"),
    apellido: document.getElementById("apellido"),
};

    localStorage.setItem("usuario", JSON.stringify(datos));
});