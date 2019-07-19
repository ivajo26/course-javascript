function residuo() {
    // console.log("El residuo de 11 / 2 = ", 11 % 2)
    function text() {
        return "El residuo es = "
    }
    let value = 11 % 2
    return value
}

let residuo2 = function() {
    return 11 % 2
}


for(let i = 0; i <= 10; i++) {
    let result = residuo()
    console.log(text(), result)
}
