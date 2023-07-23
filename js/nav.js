(function(){
    "use strict";

    const d = document;
    const contNav = d.querySelector(".hNav");
    const btnClose = d.querySelector(".hNavClose")
    
    d.addEventListener("click",(e)=>{
        if(e.target.matches(".hMenu")){
            contNav.classList.add("hNavShow");
            btnClose.classList.add("hNavShow");
        }

        if(e.target.matches(".hNavClose")){
            
            contNav.classList.remove("hNavShow");
            btnClose.classList.remove("hNavShow");
        }
    })
})();