function esPar(value) {
    const residuo = value % 2
    return `${value} - ${residuo === 0 ? "Es par" : "Es Impar"} -> Esto es con template Strings`
}



for(let i = 1; i <= 20; i++) {
    let result = esPar()
    console.log(result)
}
