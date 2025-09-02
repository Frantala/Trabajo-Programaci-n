const music = document.getElementById('bgMusic');
const btn = document.getElementById('musicBtn');

btn.addEventListener('click', () => 
    {
    if (music.paused) 
        {
    music.play();
    btn.textContent = '⏸️ Pausar música';
        } 
    else 
        {
    music.pause();
    btn.textContent = '▶️ Reproducir música';
        }
});