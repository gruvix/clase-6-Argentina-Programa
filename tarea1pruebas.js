document.querySelector("#siguiente").addEventListener("click", function () {
    const cantidad = Number(document.querySelector("#cantidad-personas").value)
    console.assert(validarInputInicial(0) === "el valor debe ser igual o mayor a 1", "validar input gente no validó que el numero sea mayor a 0")
    console.assert(validarInputInicial(101) === "el valor debe ser menor de 100", "validar input gente no validó que sea menor a 50")
})