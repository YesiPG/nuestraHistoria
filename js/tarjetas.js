(function(){
    "use strict";
    const d = document;
    const contenedor = d.querySelectorAll(".tarjetasCont");
    const parrafo = d.querySelectorAll(".tarjetasContP");
   

    contenedor.forEach( (dato, i) =>{
        dato.addEventListener("mouseover",(e)=>{
            
         parrafo[i].classList.add("tarjetasContPShow");
            
        })
        dato.addEventListener("mouseout",(e)=>{
            parrafo[i].classList.remove("tarjetasContPShow");
            
        })
        dato.addEventListener("touchstart",(e)=>{
            parrafo[i].classList.add("touchTarjetas");
        })
        dato.addEventListener("touchend",(e)=>{
            parrafo[i].classList.remove("touchTarjetas");
        })
        
    } )


})();