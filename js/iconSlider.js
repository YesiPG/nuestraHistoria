(function () {
  "use strict";

  const d = document,
    w = window;

  const contenedor = d.querySelector(".icon");


  w.addEventListener("scroll", (e) => {
    if (scrollY > 400) contenedor.classList.add("iconShow");
    else contenedor.classList.remove("iconShow");
  });

})();
