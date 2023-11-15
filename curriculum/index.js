const colores = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF','#000000'];


function cambiarColor() {
    const colorIndex = Math.floor(Math.random() * colores.length);
    const nuevoColor = colores[colorIndex];
    document.body.style.backgroundColor = nuevoColor;
}
