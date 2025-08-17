document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".puntero");
  const foto = document.querySelector(".foto-principal");

  if (!button || !foto) return;

  button.addEventListener("mouseenter", () => {
    foto.classList.add("mostrar-foto");
  });

  button.addEventListener("mouseleave", () => {
    foto.classList.remove("mostrar-foto");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el) => el.classList.add("visible"));
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.9;

  reveals.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("active"); // activa animación
    } else {
      el.classList.remove("active"); // opcional: desaparece si subís
    }
  });
});

function descDesplegable(button) {
  let descripcion = button.nextElementSibling;

  if (descripcion.style.display === "none") {
    descripcion.style.display = "block";
  } else {
    descripcion.style.display = "none";
  }
}
