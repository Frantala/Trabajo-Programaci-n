document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    // Escuchamos el evento 'submit' del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtener los valores de los campos y eliminamos los espacios en blanco
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const pais = document.getElementById("pais").value.trim();
        const tipo_experiencia = document.querySelector('input[name="rol"]:checked')?.value || "";
        const fechaNac = document.getElementById("fechaNacimiento").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        

        const terminosAceptados = document.querySelector('input[type="checkbox"]').checked; 

        if (!nombre || !apellido || !correo || !pais || !tipo_experiencia || !fechaNac || !telefono || !terminosAceptados) {
            alert("Por favor, completa todos los campos obligatorios y acepta los términos.");
            return;
        }

        // 2. Validación de formato del correo electrónico (RegExp)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        
        const fechaNacimiento = new Date(fechaNac);
        const hoy = new Date();
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth();
        const dia = hoy.getDate() - fechaNacimiento.getDate();
        if (edad < 18 || (edad === 18 && mes < 0) || (edad === 18 && mes === 0 && dia < 0)) {
            alert("Debes ser mayor de 18 años para registrarte.");
            return;
        }

        //datos para guardar luego en el localStorage
        const datos = {
            nombre,
            apellido,
            correo,
            pais,
            tipo_experiencia,
            fechaNac,
            telefono,
        };

        localStorage.setItem("usuario", JSON.stringify(datos));
        alert("¡Datos guardados correctamente!");
    });
});