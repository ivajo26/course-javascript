function Animal(name) {
    this.nombre = name
    const ref = this
    setTimeout(() => {
        console.log(`${this.nombre} esta ladrando`)
    }, 2000)
}

let miMascota = new Animal("Sasha")
let miMascota2 = new Animal("Brako")

console.log(miMascota.nombre)
console.log(miMascota2.nombre)

let nombre = () => {}