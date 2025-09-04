function cambiarModo() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    } else {
    localStorage.setItem('theme', 'light');
    }
}




