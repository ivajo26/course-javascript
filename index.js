let var1 = {vagon1: 90, gato1: 67}

let students = [
    {name: "Jaimito", apellido: "Jalal", points: [4.5, 5, 3.2]},
    {name: "Pepita", apellido: "Perez", points: [1.5, 2, 2.2]},
]

Object.keys(var1).map(key => console.log(var1[key]))

console.log(Object.entries(var1))

let array1 = [1,4,5,2]

for(let [key, value] of Object.entries(var1)) {
    console.log(`${key} - ${value}`)
}

let obj1 = {a:2, b:4,c:6}
let obj2 = {z:2, x:4,w:6}

let obj3 = Object.assign(obj1, obj2)

console.log(obj3)