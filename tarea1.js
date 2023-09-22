
document.querySelector("#calcular").addEventListener("click", function () {agregarInputs()})
document.querySelector("#reiniciar").addEventListener("click", function () {reiniciarInputs()})



function agregarInputs(){
    let cantidadPersonas = document.querySelector("#cantidad-personas").value
    for (let i = 0; i < cantidadPersonas; i++) {
        document.querySelector("#inputs").innerHTML += `<input size="9" type="number" placeholder="Persona ${(i+1)}"/>`
    }
}

function reiniciarInputs(){
    document.querySelector("#inputs").innerHTML = ""
}





//funcion con boton de volver a menu de seleccion
const $botonVolverASelector = document.querySelector("#volver-a-selector")
$botonVolverASelector.addEventListener("click", volverASelector) 
function volverASelector(){
    window.location = "index.html"
}




/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
