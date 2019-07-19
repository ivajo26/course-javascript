function residuo() {
    // console.log("El residuo de 11 / 2 = ", 11 % 2)
    return 11 % 2
}

let residuo2 = function() {
    return 11 % 2
}

for(let i = 0; i <= 10; i++) {
    let result = residuo2()
    console.log("El residuo de 11 / 2 = ", result)
}
