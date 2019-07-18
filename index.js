// Ejemplo 1

let var1 = 20
let var2 = 40

if (var1 === var2) {
    console.log("Son iguales los valores.")
} else if (var1 > var2) {
    console.log("La variable 1 es mayor que la variable 2")
} else {
    console.log("Los valores no son iguales.")
}

// Ejemplo 2

let var1 = 20
let var2 = 40

let result = (var1 === var2) ? "Los valores son iguales" : "No son iguales los valores."

console.log(result)

// Ejemplo 3
let var1 = 20

let min = 10 
let max = 40

if ((var1 > min) && (var1 < max)) {
    console.log("Var1 esta en el rango")
}