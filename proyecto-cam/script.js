// Animación de entrada para el header: aparece con efecto fade-in y deslizamiento desde arriba
function animarEntrada() {
  const header = document.querySelector(".header");
  if (header) {
    header.style.opacity = 0;
    header.style.transform = "translateY(-30px)";
 
    setTimeout(() => {
      header.style.transition = "opacity 1s ease, transform 1s ease";
      header.style.opacity = 1;
      header.style.transform = "translateY(0)";
    }, 100);
  }
}

// Carrusel manual: controla la navegación entre elementos con botones "siguiente" y "anterior"
let index = 0;
const carrusel = document.querySelector(".carrusel");
if (carrusel) {
  const total = carrusel.children.length;

  // Botón para ir a la siguiente imagen
  document.querySelector(".next")?.addEventListener("click", () => {
    index = (index + 1) % total; // vuelve al inicio si llega al final
    updateCarrusel();
  });

  // Botón para ir a la imagen anterior
  document.querySelector(".prev")?.addEventListener("click", () => {
    index = (index - 1 + total) % total; // vuelve al final si está en el inicio
    updateCarrusel();
  });

  // Actualiza la posición del carrusel moviendo el contenedor horizontalmente
  function updateCarrusel() {
    carrusel.style.transform = `translateX(-${index * 100}%)`;
  }
}

// Control de modales: abrir y cerrar ventanas modales al hacer clic en botones correspondientes
document.addEventListener("DOMContentLoaded", () => {
  const leerMasBtns = document.querySelectorAll(".leer-mas-btn");
  const cerrarBtns = document.querySelectorAll(".cerrar-modal");

  // Mostrar modal al hacer clic en botones "Leer más"
  leerMasBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  // Cerrar modal al hacer clic en botones de cerrar
  cerrarBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // Cerrar modal al hacer clic fuera del contenido (en el fondo oscuro)
  window.addEventListener("click", (e) => {
    const modales = document.querySelectorAll(".modal");
    modales.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

// Scroll horizontal automático para contenedores con tarjetas (cards)
document.addEventListener("DOMContentLoaded", () => {
  const autoScrollContainer = document.querySelector('[data-scroll="autoScrollContainer"]');

  if (autoScrollContainer) {
    let scrollAmount = 0;
    const scrollSpeed = 2; // velocidad del scroll en píxeles
    const intervalo = 30; // intervalo en milisegundos para la animación

    setInterval(() => {
      scrollAmount += scrollSpeed;
      // Si llega al final del scroll, regresa al inicio
      if (scrollAmount >= autoScrollContainer.scrollWidth - autoScrollContainer.clientWidth) {
        scrollAmount = 0;
      }
      autoScrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "auto"
      });
    }, intervalo);
  }
});

// Carrusel de imágenes con botones para navegar a izquierda y derecha
const imagenes = document.querySelectorAll('.carrusel-imagenes .imagenes img');
const btnIzquierda = document.querySelector('.btn-carrusel.izquierda');
const btnDerecha = document.querySelector('.btn-carrusel.derecha');
let indice = 0;

// Muestra la imagen activa según el índice, ocultando las demás
function mostrarImagen(i) {
  imagenes.forEach(img => img.classList.remove('activa'));
  if (imagenes[i]) {
    imagenes[i].classList.add('activa');
  }
}

// Botón para mostrar la imagen anterior
if (btnIzquierda) {
  btnIzquierda.addEventListener('click', () => {
    indice = (indice === 0) ? imagenes.length - 1 : indice - 1;
    mostrarImagen(indice);
  });
}

// Botón para mostrar la siguiente imagen
if (btnDerecha) {
  btnDerecha.addEventListener('click', () => {
    indice = (indice === imagenes.length - 1) ? 0 : indice + 1;
    mostrarImagen(indice);
  });
}

// Mostrar la primera imagen al cargar la página
mostrarImagen(indice);

// Animaciones específicas al cargar la ventana para elementos con clase bola, cereza y cono
window.addEventListener("load", () => {
  const bola = document.querySelector(".bola");
  const cereza = document.querySelector(".cereza");
  const cono = document.querySelector(".cono-triangulo");

  // Animación con retraso para la bola (aparecer y deslizar hacia arriba)
  if (bola) {
    setTimeout(() => {
      bola.style.opacity = "1";
      bola.style.transform = "translateY(0)";
    }, 300);
  }

  // Animación con retraso para la cereza
  if (cereza) {
    setTimeout(() => {
      cereza.style.opacity = "1";
      cereza.style.transform = "translateY(0)";
    }, 700);
  }

  // Animación con retraso para el cono
  if (cono) {
    setTimeout(() => {
      cono.style.opacity = "1";
      cono.style.transform = "translateY(0)";
    }, 1100);
  }
});

// Scroll suave y centrado al hacer clic en enlace que lleva a la sección "eventos"
document.addEventListener("DOMContentLoaded", () => {
  const linkEventos = document.querySelector('a[href="#eventos"]');
  const seccionEventos = document.getElementById('eventos');

  if (linkEventos && seccionEventos) {
    linkEventos.addEventListener('click', (e) => {
      e.preventDefault();

      // Calcula la posición para centrar la sección en la pantalla menos 100px para espacio
      const offsetTop = seccionEventos.getBoundingClientRect().top + window.scrollY;
      const alturaVentana = window.innerHeight;
      const alturaElemento = seccionEventos.offsetHeight;

      const scrollCentrado = offsetTop - (alturaVentana / 2) + (alturaElemento / 2) - 100;

      window.scrollTo({
        top: scrollCentrado,
        behavior: 'smooth'
      });

      // Animación sencilla que escala la sección para destacar
      seccionEventos.style.transition = "transform 0.6s ease, scale 0.6s ease";
      seccionEventos.style.transform = "scale(1.05)";
      setTimeout(() => {
        seccionEventos.style.transform = "scale(1)";
      }, 600);
    });
  }
});

// Scroll suave y centrado para el enlace a la sección "delicias"
document.addEventListener("DOMContentLoaded", () => {
  const linkEventos = document.querySelector('a[href="#delicias"]');
  const seccionEventos = document.getElementById('delicias');

  if (linkEventos && seccionEventos) {
    linkEventos.addEventListener('click', (e) => {
      e.preventDefault();

      const offsetTop = seccionEventos.getBoundingClientRect().top + window.scrollY;
      const alturaVentana = window.innerHeight;
      const alturaElemento = seccionEventos.offsetHeight;

      const scrollCentrado = offsetTop - (alturaVentana / 2) + (alturaElemento / 2) - 100;

      window.scrollTo({
        top: scrollCentrado,
        behavior: 'smooth'
      });

      // Animación sencilla de escala para dar énfasis al llegar
      seccionEventos.style.transition = "transform 0.6s ease, scale 0.6s ease";
      seccionEventos.style.transform = "scale(1.05)";
      setTimeout(() => {
        seccionEventos.style.transform = "scale(1)";
      }, 600);
    });
  }
});

// Scroll suave y centrado para el enlace a la sección "nosotros"
document.addEventListener("DOMContentLoaded", () => {
  const linkEventos = document.querySelector('a[href="#nosotros"]');
  const seccionEventos = document.getElementById('nosotros');

  if (linkEventos && seccionEventos) {
    linkEventos.addEventListener('click', (e) => {
      e.preventDefault();

      const offsetTop = seccionEventos.getBoundingClientRect().top + window.scrollY;
      const alturaVentana = window.innerHeight;
      const alturaElemento = seccionEventos.offsetHeight;

      const scrollCentrado = offsetTop - (alturaVentana / 2) + (alturaElemento / 2) - 100;

      window.scrollTo({
        top: scrollCentrado,
        behavior: 'smooth'
      });

      // Animación sencilla de escala para dar énfasis al llegar
      seccionEventos.style.transition = "transform 0.6s ease, scale 0.6s ease";
      seccionEventos.style.transform = "scale(1.05)";
      setTimeout(() => {
        seccionEventos.style.transform = "scale(1)";
      }, 600);
    });
  }
});

// Scroll suave y centrado para el enlace a la sección "instalaciones"
document.addEventListener("DOMContentLoaded", () => {
  const linkEventos = document.querySelector('a[href="#instalaciones"]');
  const seccionEventos = document.getElementById('instalaciones');

  if (linkEventos && seccionEventos) {
    linkEventos.addEventListener('click', (e) => {
      e.preventDefault();

      const offsetTop = seccionEventos.getBoundingClientRect().top + window.scrollY;
      const alturaVentana = window.innerHeight;
      const alturaElemento = seccionEventos.offsetHeight;

      const scrollCentrado = offsetTop - (alturaVentana / 2) + (alturaElemento / 2) - 100;

      window.scrollTo({
        top: scrollCentrado,
        behavior: 'smooth'
      });

      // Scroll suave y centrado para el enlace a la sección "talleres"
document.addEventListener("DOMContentLoaded", () => {
  const linkEventos = document.querySelector('a[href="#talleres"]');
  const seccionEventos = document.getElementById('talleres');

  if (linkEventos && seccionEventos) {
    linkEventos.addEventListener('click', (e) => {
      e.preventDefault();

      const offsetTop = seccionEventos.getBoundingClientRect().top + window.scrollY;
      const alturaVentana = window.innerHeight;
      const alturaElemento = seccionEventos.offsetHeight;

      const scrollCentrado = offsetTop - (alturaVentana / 2) + (alturaElemento / 2) - 100;

      window.scrollTo({
        top: scrollCentrado,
        behavior: 'smooth'
      });

      // Scroll suave y centrado para el enlace a la sección "foros"
document.addEventListener("DOMContentLoaded", () => {
  const linkEventos = document.querySelector('a[href="#foros"]');
  const seccionEventos = document.getElementById('foros');

  if (linkEventos && seccionEventos) {
    linkEventos.addEventListener('click', (e) => {
      e.preventDefault();

      const offsetTop = seccionEventos.getBoundingClientRect().top + window.scrollY;
      const alturaVentana = window.innerHeight;
      const alturaElemento = seccionEventos.offsetHeight;

      const scrollCentrado = offsetTop - (alturaVentana / 2) + (alturaElemento / 2) - 100;

      window.scrollTo({
        top: scrollCentrado,
        behavior: 'smooth'
      });

      // Animación sencilla de escala para dar énfasis al llegar
      seccionEventos.style.transition = "transform 0.6s ease, scale 0.6s ease";
      seccionEventos.style.transform = "scale(1.05)";
      setTimeout(() => {
        seccionEventos.style.transform = "scale(1)";
      }, 600);
    });
  }
});

      // Animación sencilla de escala para dar énfasis al llegar
      seccionEventos.style.transition = "transform 0.6s ease, scale 0.6s ease";
      seccionEventos.style.transform = "scale(1.05)";
      setTimeout(() => {
        seccionEventos.style.transform = "scale(1)";
      }, 600);
    });
  }
});

      // Animación sencilla de escala para dar énfasis al llegar
      seccionEventos.style.transition = "transform 0.6s ease, scale 0.6s ease";
      seccionEventos.style.transform = "scale(1.05)";
      setTimeout(() => {
        seccionEventos.style.transform = "scale(1)";
      }, 600);
    });
  }
});

// Funciones para abrir y cerrar el modal específico del foro
function abrirModalForo() {
  document.getElementById('modalForo').style.display = 'block';
}

function cerrarModalForo() {
  document.getElementById('modalForo').style.display = 'none';
}

// Cerrar modal foro si se hace clic fuera del contenido del modal
window.onclick = function(event) {
  const modal = document.getElementById('modalForo');
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const tarjetas = document.querySelectorAll(".carrusel-nosotros .tarjeta");
  let indiceActual = 0;

  function mostrarTarjeta(indice) {
    tarjetas.forEach((tarjeta, i) => {
      tarjeta.classList.remove("activa");
      if (i === indice) tarjeta.classList.add("activa");
    });
  }

  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
      indiceActual = (indiceActual + 1) % tarjetas.length;
      mostrarTarjeta(indiceActual);
    });
  });

  mostrarTarjeta(indiceActual); // Mostrar la primera tarjeta al cargar
});


