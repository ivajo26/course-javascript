let array1 = [30,60,70,20,45]

let array2 = array1.map(item => item * 2)
console.log("El array2: ", array2)

let array3 = array1.filter(item => item % 2 === 0)
console.log("El array3: ", array3)

let array4 = array1.find(item => item === 70)
console.log("El array4: ", array4)

let array5 = array1.shift()
console.log("El array5: ", array5)
console.log("El array1: ", array1)