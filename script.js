Draggable.create("#dragme",{
    type: 'x',
    bounds: ".container",
});


function checkOverlap() {
    var div1=document.querySelector(".cir")
    var div2=document.querySelector("#dragme")
    var cir1=div1.getBoundingClientRect()
    var cir2=div2.getBoundingClientRect()

    if (cir1.left < cir2.right) {
        document.querySelector("#video1").style.opacity="0";
        document.querySelector(".container").style.background="linear-gradient(90deg,#fff,rgb(255, 234, 194),rgb(255, 193, 79),rgb(255, 185, 55),orange)";
    }else{
        document.querySelector("#video1").style.opacity="1";
        document.querySelector(".container").style.background="#111";
    }
}

window.addEventListener("mousemove",checkOverlap)
window.addEventListener("touchmove",checkOverlap)
