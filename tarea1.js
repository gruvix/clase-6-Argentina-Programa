
document.querySelector("#siguiente").addEventListener("click", function () {agregarInputs()})
document.querySelector("#reiniciar").addEventListener("click", function () {reiniciarInputs()})
let maximo = 0
let minimo = 0
let promedio = 0

function agregarInputs(){
    document.querySelector("#siguiente").setAttribute("disabled", "disabled")
    document.querySelector("#cantidad-personas").setAttribute("disabled", "disabled")
    let cantidadPersonas = document.querySelector("#cantidad-personas").value
    for (let i = 0; i < cantidadPersonas; i++) {
        document.querySelector("#personas").innerHTML += `<input size="12" type="number" class="persona" placeholder="Persona ${(i+1)}"/><br>`


        //Esta es la manera que encontré de hacerlo ^, abajo está hecho como el ejemplo de Fabricio, ambas funcionan

        // const $nodoInput = document.createElement('div');
        // $nodoInput.className = "persona"
        // document.querySelector('#personas').appendChild($nodoInput);

        // const $label = document.createElement('label');
        // $label.textContent = `Edad persona ${(i+1)} `;
        // const $input = document.createElement('input');
        // $input.type = 'number';
      
        // $nodoInput.appendChild($label);
        // $nodoInput.appendChild($input);
      
        // const $nodoIntegrantes = document.querySelector('#personas');
        // $nodoIntegrantes.appendChild($nodoInput);

    }
    document.querySelector("#personas").innerHTML += `<button type="button" id="calcular">Calcular</button>`
    document.querySelector("#calcular").addEventListener("click", function () {calcularValores()})

}

function calcularValores(){
    let gente = document.querySelectorAll(".persona")
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
    document.querySelector("#mayor-edad").innerText = maximo
    document.querySelector("#menor-edad").innerText = minimo
    document.querySelector("#promedio-edad").innerText = promedio

}


//reinicia el formulario de edades
function reiniciarInputs(){
    document.querySelector("#valores-edad").className = "oculto"
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
