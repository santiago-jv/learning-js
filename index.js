const promise = new Promise((resolve, reject)=>{
    const error = true;
    setTimeout(()=>{
        if(error){

            reject("Ha habido un error")
        }
        
        resolve("Este es el valor")
    },5000)
})

//console.log(promise)

/* promise.then((resolve)=>{
    console.log(resolve)
}).catch((error)=>{
    console.log(error)
}) */


//async-await

async function runPromise() {
    const value = await promise

    console.log(value)
}
runPromise()

