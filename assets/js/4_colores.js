//1º evento 
const azul = document.getElementById("blue")
const rojo = document.getElementById("red")
const verde = document.getElementById("green")
const amarillo = document.getElementById("yellow")
let dkey = document.getElementById ("key")

let blackbt = (changebg) => {
    changebg.target.style.backgroundColor= "black";

}

azul.addEventListener("click", blackbt);
rojo.addEventListener("click",blackbt );
verde.addEventListener("click",blackbt );
amarillo.addEventListener("click",blackbt );

// 2º Evento

function createNewDiv (bgcolor) {
    let newdiv = document.createElement("div");
    newdiv.style.height = "200px";
    newdiv.style.width = "200px";
    newdiv.style.margin = "40px";

    let newContent = document.createElement ("div")
    newdiv.appendChild (newContent);
    newdiv.style.backgroundColor = bgcolor;
    document.body.appendChild (newdiv);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        dkey.style.backgroundColor = "pink";
    } else if (event.key === "s") {
        dkey.style.backgroundColor = "orange";
    } else if (event.key === "d") {
        dkey.style.backgroundColor = "skyblue";
   
    } else if (event.key === "q") {
       createNewDiv ("purple");
    } else if (event.key === "w") {
        createNewDiv("gray");
    }else if (event.key === "e") {
        createNewDiv("brown");
    }

} );

