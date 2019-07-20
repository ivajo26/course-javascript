function function1(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time)
    })

}

async function ejecutando() {
    let [fun1, fun2, fun3, fun4] = await Promise.all([
        function1("Function 1", 2000),
        function1("Function 2", 1000),
        function1("Function 3", 5000),
        function1("Function 4", 3000)
    ])
    
    console.log(fun1)
    console.log(fun2)
    console.log(fun3)
    console.log(fun4)
}

ejecutando()