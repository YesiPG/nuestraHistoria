(function () {
  "use strict";
  const d = document,
    l = localStorage,
    w = window;

  const fondoOscuro = d.querySelector("[data-darkModeFondo]");
  const darkParrafo = d.querySelectorAll("[data-darkModeParrafo]");
  const btnDark = d.querySelectorAll(".hContBmoon");
  const imgDark = d.querySelectorAll(".hContBmoonImg");

  btnDark.forEach(i => i.addEventListener("click", (e)=>{

    imgDark.forEach(l => {
        if(l.getAttribute("src")=== "image/moon-stars-fill.svg") temaOscuro();
        else temaClaro();
    })

  }))

//   btnDark.addEventListener("click", (e) => {
//     if (imgDark.getAttribute("src") === "image/moon-stars-fill.svg") temaOscuro();
//     else temaClaro();
//   });

  const temaOscuro = () => {
    console.log("hola1");
    fondoOscuro.classList.add("darkModeFondo");
    darkParrafo.forEach((i) => i.classList.add("darkModeParrafo"));

    imgDark.forEach(i => i.removeAttribute("src"))
    imgDark.forEach(i => i.setAttribute("src", "image/sun-fill.svg"))

    l.setItem("tema", "oscuro");
  };

  const temaClaro = () => {
    console.log("hola2");

    fondoOscuro.classList.remove("darkModeFondo");
    darkParrafo.forEach((i) => i.classList.remove("darkModeParrafo"));
    imgDark.forEach(i => i.removeAttribute("src"))
    imgDark.forEach(i => i.setAttribute("src", "image/moon-stars-fill.svg"))

    l.setItem("tema", "claro");
  };

  d.addEventListener("DOMContentLoaded", (e) => {
    if (l.getItem("tema") === null) temaClaro();
    if (l.getItem("tema") === "claro") temaClaro();
    if (l.getItem("tema") === "oscuro") temaOscuro();
  });
})();
