document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos los cuadros de la galería del hijo4
    const cuadros = document.querySelectorAll(".cuadro-foto");

    // Efecto visual llamativo: aparecen uno tras otro en cascada al cargar la página
    cuadros.forEach((cuadro, indice) => {
        setTimeout(() => {
            cuadro.classList.add("visible");
        }, indice * 150); // 150 milisegundos de retraso entre cada cuadro
    });
});