// Arreglo con rutas a la carpeta 'presentacion/' y enlaces personalizados
const redesSociales = [
  {
    nombre: "Instagram",
    imagen: "presentacion/instagram.png",
    url: "https://instagram.com/digitalalvarolacuta"
  },
  {
    nombre: "TikTok",
    imagen: "presentacion/tiktok.png",
    url: "https://tiktok.com/@digitalalvarolacuta"
  },
  {
    nombre: "LinkedIn",
    imagen: "presentacion/linkedin.png",
    url: "https://linkedin.com/in/digitalalvarolacuta"
  },
  {
    nombre: "YouTube",
    imagen: "presentacion/youtube.png",
    url: "https://youtube.com/@digitalalvarolacuta"
  },
  {
    nombre: "Facebook",
    imagen: "presentacion/facebook.png",
    url: "https://facebook.com/digitalalvarolacuta"
  },
  {
    nombre: "X (Twitter)",
    imagen: "presentacion/x.png",
    url: "https://x.com/digitalalvarolacuta"
  }
];

// Función para renderizar las tarjetas simplificadas
function cargarRedesSociales() {
  const container = document.getElementById('cardsGrid');
  container.innerHTML = '';

  redesSociales.forEach(red => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <h2 class="card-title">${red.nombre}</h2>
      <img src="${red.imagen}" alt="Logo ${red.nombre}" class="card-icon">
      <a href="${red.url}" target="_blank" class="card-btn">Click aquí</a>
    `;

    container.appendChild(card);
  });
}

// Cargar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarRedesSociales);