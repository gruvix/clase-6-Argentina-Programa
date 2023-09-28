
document.querySelector("#siguiente").addEventListener("click", function () {
    if(Number(document.querySelector("#cantidad-personas").value) < 1){ return};
    agregarInputs();
})

document.querySelector("#calcular").addEventListener("click", function () {
    if(validarInputs()) {
        datos = calcularValores()
        actualizarValores(datos)
}
})

document.querySelector("#reiniciar").addEventListener("click", function () {reiniciarInputs()})

let datos = {
    maximo: 0,
    minimo: 0,
    promedio: 0
}

//Agregar cuadros de entrada de edades del grupo familiar
function agregarInputs(){
    document.querySelector("#siguiente").setAttribute("disabled", "disabled")
    document.querySelector("#cantidad-personas").setAttribute("disabled", "disabled")
    let cantidadPersonas = document.querySelector("#cantidad-personas").value
    for (let i = 0; i < cantidadPersonas; i++) {
        document.querySelector("#personas").innerHTML += `<input size="12" type="number" class="persona" placeholder="Persona ${(i+1)}"/><br>`
        //Hay otra manera mas correcta con nodos pero me pareció interesante solucionarlo así
    }
  document.querySelector('#calcular').className = '';

}

function validarInputs(){
    let gente = document.querySelectorAll(".persona")
    for (let i = 0; i < gente.length; i++) {    
        if (Number(gente[i].value) == ""){
            document.querySelector("#campos-incompletos").className = ""
            console.log("inputs vacios")
            return false
        }
    }
            console.log("inputs llenos")
            return true
}

//Calcula maximo minimo y promedio
function calcularValores(){

    let maximo = 0
    let minimo = 0
    let promedio = 0
    let gente = document.querySelectorAll(".persona")

    maximo = Number(gente[0].value)
    minimo = Number(gente[0].value)
    let suma = 0
    gente.forEach(persona => {
        valor = Number(persona.value)
        if(persona.value > maximo){
            maximo = valor
        }
        if(persona.value < minimo){
            minimo = valor
        }
        suma += valor
    });
    promedio = suma/gente.length

    return  {
        maximo: maximo,
        minimo: minimo,
        promedio: promedio
    }
}

//Actualiza los valores en pantalla
function actualizarValores(datosFuncion){
    document.querySelector("#mayor-edad").innerText = datosFuncion.maximo
    document.querySelector("#menor-edad").innerText = datosFuncion.minimo
    document.querySelector("#promedio-edad").innerText = datosFuncion.promedio
    document.querySelector("#valores-edad").className = ""
    document.querySelector("#campos-incompletos").className = "oculto"
}

//reinicia el formulario de edades
function reiniciarInputs(){
    document.querySelector("#valores-edad").className = "oculto"
    document.querySelector("#calcular").className = "oculto"
    document.querySelector("#campos-incompletos").className = "oculto"
    document.querySelector("#personas").innerHTML = ""
    document.querySelector("#siguiente").removeAttribute("disabled")
    document.querySelector("#cantidad-personas").removeAttribute("disabled")
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
