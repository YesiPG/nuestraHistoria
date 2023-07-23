document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in");
  
    function checkVisibility() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.8) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    }
  
    // Añadir evento de scroll
    window.addEventListener("scroll", checkVisibility);
  
    // Comprobar visibilidad inicial al cargar la página
    checkVisibility();
  });
  