document.querySelector("#agregar-salario").addEventListener("click", function (){
     agregarSalario(indice); 
     indice++;
     mostrarBotonCalculo();
})
document.querySelector("#quitar-salario").addEventListener("click", function(){
    if(indice === 0) {return}
    quitarSalario()
    indice--;
    if(indice === 0) {reiniciar()}
})
document.querySelector("#calcular").addEventListener("click", function(){
    datos = calcular()
    imprimirValores()
})
document.querySelector("#reiniciar").addEventListener("click", function (){ indice = reiniciar()})

let indice = 0
let datos = {
    salarioMaximo: 0,
    salarioMinimo: 0,
    promedioAnual: 0,
    promedioMensual: 0
}

function imprimirValores(){
    document.querySelector()
}

function calcular(){
    let maximo = 0
    let minimo = 0
    let promedioAnual = 0
    let promedioMensual = 0
    let salarios = document.querySelectorAll(".salario")

    maximo = Number(salarios[0].value)
    minimo = Number(salarios[0].value)
    let suma = 0
    salarios.forEach(salario => {
        valor = Number(salario.value)
        if(salario.value > maximo){
            maximo = valor
        }
        if(salario.value < minimo){
            minimo = valor
        }
        suma += valor
    });
    promedio = suma/salarios.length

    return  {
        maximo: maximo,
        minimo: minimo,
        Anual: promedioAnual,
        Mensual: promedioMensual
    }
}

function mostrarBotonCalculo(){
  document.querySelector('#calcular').className = '';
}

function reiniciar(){
  document.querySelector('#calcular').className = 'oculto';
  salarios = document.querySelectorAll(".salario")
  salarios.forEach(salario => {
    salario.remove()
  });  
  return 0;
}

function quitarSalario(){
    salarios = document.querySelectorAll(".salario")
    salario = salarios[salarios.length-1]
    salario.remove()
}

function agregarSalario(){
    const $div = document.createElement('div');
    $div.className = 'salario';
    
    const $label = document.createElement('label');
    $label.textContent = `Salario # ${(indice + 1)} ` ;
    const $input = document.createElement('input');
    $input.type = 'number';
    
    $div.appendChild($label);
    $div.appendChild($input);
    
    const $salarios = document.querySelector('#salarios');
    $salarios.appendChild($div);
}






//funcion con boton de volver a menu de seleccion
const $botonVolverASelector = document.querySelector("#volver-a-selector")
$botonVolverASelector.addEventListener("click", volverASelector) 
function volverASelector(){
    window.location = "index.html"
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/