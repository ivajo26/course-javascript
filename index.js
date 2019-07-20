let var1 = {vagon1: 90, gato1: 67}
let key1 = 'vagon1'
console.log(JSON.stringify(var1))

let students = [
    {name: "Jaimito", apellido: "Jalal", points: [4.5, 5, 3.2]},
    {name: "Pepita", apellido: "Perez", points: [1.5, 2, 2.2]},
    true,
    50,
    "Hola Mundo"
]

let json = JSON.stringify(students)

console.log(json)

console.log(JSON.parse(json))