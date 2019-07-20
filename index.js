function function1(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time)
    })

}

let todos = Promise.all([
    function1("Function 1", 2000),
    function1("Function 2", 1000),
    function1("Function 3", 5000),
    function1("Function 4", 3000)
])

console.log(todos)