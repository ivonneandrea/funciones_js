const azul = document.getElementById("blue")
const rojo = document.getElementById("red")
const verde = document.getElementById("green")
const amarillo = document.getElementById("yellow")

let blackbt = (changebg) => {
    changebg.target.style.backgroundColor= "black";

}

azul.addEventListener("click", blackbt);
rojo.addEventListener("click",blackbt );
verde.addEventListener("click",blackbt );
amarillo.addEventListener("click",blackbt );