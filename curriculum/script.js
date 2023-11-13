document.addEventListener('DOMContentLoaded', function () {
    const navBg = document.querySelector('.nav-bg');
    const headerH1 = document.querySelector('header h1');

    // Agregar clase al hacer clic en el título del encabezado
    headerH1.addEventListener('click', function () 
    {
        navBg.classList.toggle('bg-transition');});
});