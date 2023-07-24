document.addEventListener("DOMContentLoaded", function() {
  // Obtener todas las secciones que tienen la clase "fade-in"
  const sections = document.querySelectorAll(".fade-in");

  function checkVisibility() {
    // Obtener la altura de la ventana del navegador
    const windowHeight = window.innerHeight;
    
    // Iterar a través de cada sección con la clase "fade-in"
    sections.forEach(section => {
      // Obtener la posición vertical de la sección con respecto a la ventana
      const sectionTop = section.getBoundingClientRect().top;
      
      // Calcular el punto en el que la sección debe aparecer (80% de la altura de la ventana)
      const triggerPoint = windowHeight * 0.8;
      
      // Si la parte superior de la sección está por encima del punto de aparición, agregar la clase "visible"
      if (sectionTop < triggerPoint) {
        section.classList.add("visible");
      } else {
        // Si la parte superior de la sección está por debajo del punto de aparición, quitar la clase "visible"
        section.classList.remove("visible");
      }
    });
  }

  // Añadir un evento de scroll para comprobar la visibilidad al hacer scroll
  window.addEventListener("scroll", checkVisibility);

  // Comprobar visibilidad inicial al cargar la página
  checkVisibility();
});
