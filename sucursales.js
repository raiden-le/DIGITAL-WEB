// Datos de las sucursales
const sucursales = [
  {
    id: 1,
    nombre: "Sucursal Miraflores",
    direccion: "Av. José Larco 742, Miraflores",
    telefono: "+51 (01) 234-5678",
    horario: "Lun - Sáb: 9:00 AM - 8:00 PM",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.982348123456!2d-77.0298!3d-12.1215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81f3b000000%3A0x1!2sAv.%20Jos%C3%A9%20Larco%20742!5e0!3m2!1ses!2spe!4v1600000000000"
  },
  {
    id: 2,
    nombre: "Sucursal San Isidro",
    direccion: "Av. Camino Real 456, San Isidro",
    telefono: "+51 (01) 876-5432",
    horario: "Lun - Sáb: 8:30 AM - 7:30 PM",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.321456789012!2d-77.0365!3d-12.0984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85a1a000000%3A0x2!2sAv.%20Camino%20Real%20456!5e0!3m2!1ses!2spe!4v1600000000000"
  },
  {
    id: 3,
    nombre: "Sucursal Santiago de Surco",
    direccion: "Av. Primavera 1020, Chacarilla, Surco",
    telefono: "+51 (01) 555-0192",
    horario: "Lun - Dom: 10:00 AM - 9:00 PM",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.567890123456!2d-76.9854!3d-12.1102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c78b2b000000%3A0x3!2sAv.%20Primavera%201020!5e0!3m2!1ses!2spe!4v1600000000000"
  }
];

// Elementos del DOM
const cardsContainer = document.getElementById('cardsContainer');
const mapFrame = document.getElementById('mapFrame');
const searchInput = document.getElementById('searchInput');

// Función para renderizar las tarjetas
function renderCards(lista) {
  cardsContainer.innerHTML = '';
  
  if (lista.length === 0) {
    cardsContainer.innerHTML = '<p style="text-align:center; color:#888;">No se encontraron sucursales.</p>';
    return;
  }

  lista.forEach((sucursal, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    if (index === 0) card.classList.add('active'); // Seleccionar la primera por defecto

    card.innerHTML = `
      <h3>${sucursal.nombre}</h3>
      <p><i class="fa-solid fa-location-dot"></i> ${sucursal.direccion}</p>
      <p><i class="fa-solid fa-phone"></i> ${sucursal.telefono}</p>
      <p><i class="fa-solid fa-clock"></i> ${sucursal.horario}</p>
      <div class="card-actions">
        <a href="https://maps.google.com/?q=${encodeURIComponent(sucursal.direccion)}" target="_blank" class="btn-route">
          <i class="fa-solid fa-route"></i> Cómo llegar
        </a>
      </div>
    `;

    // Evento al hacer clic en una tarjeta para cambiar el mapa
    card.addEventListener('click', () => {
      document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      mapFrame.src = sucursal.mapEmbed;
    });

    cardsContainer.appendChild(card);
  });
}

// Evento para el buscador dinámico
searchInput.addEventListener('input', (e) => {
  const text = e.target.value.toLowerCase();
  const filtradas = sucursales.filter(sucursal => 
    sucursal.nombre.toLowerCase().includes(text) ||
    sucursal.direccion.toLowerCase().includes(text)
  );
  renderCards(filtradas);
});

// Inicializar la vista
document.addEventListener('DOMContentLoaded', () => {
  renderCards(sucursales);
});