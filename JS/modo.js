const cambioModo = document.getElementById('dark_mode');

const body = document.body;

cambioModo.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }
});



//setearInicio();
//cambiarModo.addEventListener('click', cambiarModo);
