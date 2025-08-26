document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('nueva-nota');

    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; // Restablece la altura a "auto" para recalcularla
        this.style.height = (this.scrollHeight) + 'px'; // Ajusta la altura a la del contenido
    });
});