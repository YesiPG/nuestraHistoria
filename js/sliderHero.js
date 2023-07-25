(function () {
  "use strict";

  const d = document;
  const carrusel =d.querySelector(".carrusel");

  let intervalo = null;
  let step = 2;
  let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;

  const empezar = ()=>{
    intervalo = setInterval(()=>{
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if(carrusel.scrollLeft === maxScrollLeft){
            step = step * -1;
        } else if(carrusel.scrollLeft === 0){
            step = step * -1;
        }
    },10);
  }

  empezar();

})();
