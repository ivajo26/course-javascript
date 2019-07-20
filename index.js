function function1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Hola")
        }, 2000)
    })
    
    // return "Hola"
}

function function2(text) {
    console.log(text)
}

function1()
.then((value) => {function2(value)})
.catch((err) => {console.log(err)})