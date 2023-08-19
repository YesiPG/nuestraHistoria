(function () {
  "use strict";
  const d = document,
    l = localStorage,
    w = window;

  const fondoOscuro = d.querySelector("[data-darkModeFondo]");
  const darkParrafo = d.querySelectorAll("[data-darkModeParrafo]");
  const btnDark = d.querySelector(".hContBmoon");
  const imgDark = d.querySelector(".hContBmoonImg");
  const btnDark2 = d.querySelector(".iconMode");
  const imgDark2 = d.querySelector(".iconImg");


  btnDark.addEventListener("click", (e) => {
    if (imgDark.getAttribute("src") === "image/moon-stars-fill.svg") temaOscuro();
    else temaClaro();
  });
  btnDark2.addEventListener("click", (e) => {
    if (imgDark2.getAttribute("src") === "image/moon-stars-fill.svg") temaOscuro();
    else temaClaro();
  });

  const temaOscuro = () => {
    console.log("hola1");
    fondoOscuro.classList.add("darkModeFondo");
    darkParrafo.forEach((i) => i.classList.add("darkModeParrafo"));

    imgDark.removeAttribute("src")
    imgDark.setAttribute("src", "image/sun-fill.svg")

    imgDark2.removeAttribute("src")
    imgDark2.setAttribute("src", "image/sun-fill.svg")

    l.setItem("tema", "oscuro");
  };

  const temaClaro = () => {
    console.log("hola2");

    fondoOscuro.classList.remove("darkModeFondo");
    darkParrafo.forEach((i) => i.classList.remove("darkModeParrafo"));
    imgDark.removeAttribute("src")
    imgDark.setAttribute("src", "image/moon-stars-fill.svg")
    imgDark2.removeAttribute("src")
    imgDark2.setAttribute("src", "image/moon-stars-fill.svg")

    l.setItem("tema", "claro");
  };

  d.addEventListener("DOMContentLoaded", (e) => {
    if (l.getItem("tema") === null) temaClaro();
    if (l.getItem("tema") === "claro") temaClaro();
    if (l.getItem("tema") === "oscuro") temaOscuro();
  });
})();
