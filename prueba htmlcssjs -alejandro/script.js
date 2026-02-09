const wafles = [
  {
    nombre: "Waflebites",
    imagen: "imagenes/w1.jpeg",
    info: "Mini wafles con chocolate, frutilla y crema batida"
  },
  {
    nombre: "Waflecito",
    imagen: "imagenes/w3ghetis.jpeg",
    info: "Wafle clásico con miel y nueces caramelizadas"
  },
  {
    nombre: "Waflemaximus",
    imagen: "imagenes/w5b.jpeg",
    info: "Wafle XL con nutella, plátano y crema chantilly"
  },
  {
    nombre: "Wafleghuettis",
    imagen: "imagenes/w4m.jpeg",
    info: "Wafle relleno de frambuesa con glaseado de vainilla"
  }
];

// Renderizar tarjetas de forma dinámica
const container = document.getElementById("wafleContainer");

wafles.forEach(wafle => {
  const card = document.createElement("div");
  card.classList.add("wafle-card");

  card.innerHTML = `
    <div class="wafle-card-inner">
      <div class="wafle-front">
        <img src="${wafle.imagen}" alt="${wafle.nombre}">
        <p><strong>${wafle.nombre}</strong></p>
      </div>
      <div class="wafle-back">
        <h4>${wafle.nombre}</h4>
        <p>${wafle.info}</p>
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  container.appendChild(card);
});

// Mostrar resumen de armado de wafle
function mostrarResumenWafle() {
  const base = document.getElementById('base').value;
  const salsa = document.getElementById('salsa').value;
  const toping = document.getElementById('toping').value;

  const resumen = `Tu wafle es de base ${base}, con salsa de ${salsa} y topping de ${toping}. ¡Delicioso! 😋`;
  document.getElementById('resumen').textContent = resumen;
}

// Validación del formulario de pedido
document.getElementById('formPedido').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const base = document.getElementById('pedidoBase').value;
  const salsa = document.getElementById('pedidoSalsa').value;
  const toping = document.getElementById('pedidoToping').value;

  if (!nombre || !correo || !telefono || !base || !salsa || !toping) {
    alert("Por favor, completa todos los campos del pedido.");
    return;
  }

  const mensaje = `¡Gracias por tu pedido, ${nombre}! 🎉
Tu wafle será: ${base} con salsa de ${salsa} y topping de ${toping}.
Te contactaremos pronto al ${telefono} o por correo a ${correo}.`;

  document.getElementById('pedidoConfirmacion').textContent = mensaje;
  this.reset();
});
const wafles = [
  {
    nombre: "Waflebites",
    imagen: "imagenes/w1.jpeg",
    info: "Mini wafles con chocolate, frutilla y crema batida"
  },
  {
    nombre: "Waflecito",
    imagen: "imagenes/w3ghetis.jpeg",
    info: "Wafle clásico con miel y nueces caramelizadas"
  },
  {
    nombre: "Waflemaximus",
    imagen: "imagenes/w5b.jpeg",
    info: "Wafle XL con nutella, plátano y crema chantilly"
  },
  {
    nombre: "Wafleghuettis",
    imagen: "imagenes/w4m.jpeg",
    info: "Wafle relleno de frambuesa con glaseado de vainilla"
  }
];

// Renderizar tarjetas de forma dinámica
const container = document.getElementById("wafleContainer");

wafles.forEach(wafle => {
  const card = document.createElement("div");
  card.classList.add("wafle-card");

  card.innerHTML = `
    <div class="wafle-card-inner">
      <div class="wafle-front">
        <img src="${wafle.imagen}" alt="${wafle.nombre}">
        <p><strong>${wafle.nombre}</strong></p>
      </div>
      <div class="wafle-back">
        <h4>${wafle.nombre}</h4>
        <p>${wafle.info}</p>
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  container.appendChild(card);
});

// Mostrar resumen de armado de wafle
function mostrarResumenWafle() {
  const base = document.getElementById('base').value;
  const salsa = document.getElementById('salsa').value;
  const toping = document.getElementById('toping').value;

  const resumen = `Tu wafle es de base ${base}, con salsa de ${salsa} y topping de ${toping}. ¡Delicioso! 😋`;
  document.getElementById('resumen').textContent = resumen;
}

// Validación del formulario de pedido
document.getElementById('formPedido').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const base = document.getElementById('pedidoBase').value;
  const salsa = document.getElementById('pedidoSalsa').value;
  const toping = document.getElementById('pedidoToping').value;

  if (!nombre || !correo || !telefono || !base || !salsa || !toping) {
    alert("Por favor, completa todos los campos del pedido.");
    return;
  }

  const mensaje = `¡Gracias por tu pedido, ${nombre}! 🎉
Tu wafle será: ${base} con salsa de ${salsa} y topping de ${toping}.
Te contactaremos pronto al ${telefono} o por correo a ${correo}.`;

  document.getElementById('pedidoConfirmacion').textContent = mensaje;
  this.reset();
});