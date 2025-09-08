document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const boton = document.querySelector(".submit-btn-md3-button");

  boton.addEventListener("click", (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const pais = document.getElementById("pais").value.trim();
    const tipo_experiencia = document.querySelector('input[name="rol"]:checked')?.value || "";
    const Fecha_Nac = document.getElementById("fechaNacimiento").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const apellido = document.getElementById("apellido").value.trim();

    if (!nombre || !correo || !pais || !tipo_experiencia || !Fecha_Nac || !telefono || !apellido) {
      alert("Por favor, completá todos los campos antes de continuar.");
      return;
    }

    const datos = {
      nombre,
      correo,
      pais,
      tipo_experiencia,
      Fecha_Nac,
      telefono,
      apellido,
    };

    localStorage.setItem("usuario", JSON.stringify(datos));
    alert("Datos guardados correctamente");
  });
});

