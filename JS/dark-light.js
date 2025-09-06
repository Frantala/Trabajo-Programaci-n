function cambiarModo() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

window.addEventListener("storage", (e) => {
  if (e.key === "theme") {
    const esOscuro = e.newValue === "dark";
    document.body.classList.toggle("dark-mode", esOscuro);
  }
});

const oscuro = localStorage.getItem("theme");
if(oscuro === "dark")
{
    document.body.classList.add("dark-mode");
}
