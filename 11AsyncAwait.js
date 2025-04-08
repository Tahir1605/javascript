function asyncFunction1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Async function 1 Done");
            resolve()
        },2000)
    })
}

function asyncFunction2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
          console.log("Async function 2 Done");
          resolve()
        },2000)
    })
}
function asyncFunction3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
           console.log("async function 3 Done");
           resolve()
        },2000)
    })
}

async function asyncFunctions() {
      
    await asyncFunction1()
    await asyncFunction2()
    await asyncFunction3()
    console.log("All functions are Done");
}

asyncFunctions()