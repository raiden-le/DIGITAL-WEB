/* --- DINÁMICA CON JAVASCRIPT --- */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Saludo dinámico de bienvenida al cargar la página
    console.log("¡El DOM ha sido cargado exitosamente!");
    
    // Podemos crear un pequeño mensaje flotante o simplemente saludar en consola
    setTimeout(() => {
        alert("¡Bienvenido a nuestra página web en construcción! Explora nuestros servicios.");
    }, 500);

    // 2. Interactividad en los botones de las tarjetas (.nieto)
    const botones = document.querySelectorAll(".btn-interactivo");

    botones.forEach((boton, indice) => {
        boton.addEventListener("click", (evento) => {
            // Encontramos el título de la tarjeta seleccionada
            const tarjeta = evento.target.closest(".nieto");
            const tituloServicio = tarjeta.querySelector("h2").textContent;

            // Cambiamos dinámicamente el estilo o texto del botón al hacerle clic
            boton.style.backgroundColor = "#28a745"; // Color verde de éxito
            boton.textContent = "¡Solicitado con éxito!";
            
            // Mostramos un mensaje personalizado
            alert(`¡Gracias por tu interés en "${tituloServicio}"! Pronto nos pondremos en contacto contigo.`);
        });
    });

});