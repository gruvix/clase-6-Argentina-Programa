
document.querySelector("#siguiente").addEventListener("click", function () {
    if(Number(document.querySelector("#cantidad-personas").value) < 1){ return};
    agregarInputs();
})
document.querySelector("#calcular").addEventListener("click", function () {
    datos = calcularValores()
    actualizarValores(datos)
})
document.querySelector("#reiniciar").addEventListener("click", function () {reiniciarInputs()})

let datos = {
    maximo: 0,
    minimo: 0,
    promedio: 0
}

// let maximo = 0
// let minimo = 0
// let promedio = 0

function mostrarValores(){

}

//Agregar cuadros de entrada de edades del grupo familiar
function agregarInputs(){
    document.querySelector("#siguiente").setAttribute("disabled", "disabled")
    document.querySelector("#cantidad-personas").setAttribute("disabled", "disabled")
    let cantidadPersonas = document.querySelector("#cantidad-personas").value
    for (let i = 0; i < cantidadPersonas; i++) {
        document.querySelector("#personas").innerHTML += `<input size="12" type="number" class="persona" placeholder="Persona ${(i+1)}"/><br>`


        //Esta es la manera que encontré de hacerlo ^, abajo está hecho como el ejemplo de Fabricio, ambas funcionan

        /*
        const $nodoInput = document.createElement('div');
        $nodoInput.className = "persona"
        document.querySelector('#personas').appendChild($nodoInput);

        const $label = document.createElement('label');
        $label.textContent = `Edad persona ${(i+1)} `;
        const $input = document.createElement('input');
        $input.type = 'number';
      
        $nodoInput.appendChild($label);
        $nodoInput.appendChild($input);
      
        const $nodoIntegrantes = document.querySelector('#personas');
        $nodoIntegrantes.appendChild($nodoInput);
        */
    }
  document.querySelector('#calcular').className = '';

}

//Calcula maximo minimo y promedio
function calcularValores(){

    let maximo = 0
    let minimo = 0
    let promedio = 0
    let salir = false
    let gente = document.querySelectorAll(".persona")
    for (let i = 0; i < gente.length; i++) {    
        if (Number(gente[i].value) == ""){
            document.querySelector("#campos-incompletos").className = ""
            salir = true
        }
    }

    if(salir){return  {
        maximo,
        minimo,
        promedio
    }}

    maximo = Number(gente[0].value)
    minimo = Number(gente[0].value)
    let suma = 0
    gente.forEach(persona => {
        if(persona.value > maximo){
            maximo = Number(persona.value)
        }
        if(persona.value < minimo){
            minimo = Number(persona.value)
        }
        suma += Number(persona.value)
    });
    promedio = suma/gente.length

    return  {
        maximo: maximo,
        minimo: minimo,
        promedio: promedio
    }

    // document.querySelector("#mayor-edad").innerText = maximo
    // document.querySelector("#menor-edad").innerText = minimo
    // document.querySelector("#promedio-edad").innerText = promedio
    // document.querySelector("#valores-edad").className = ""
    // document.querySelector("#campos-incompletos").className = "oculto"


}

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
