
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


asyncFunction1()
.then(()=> asyncFunction2())
.then(()=> asyncFunction3())
.then(()=>{
    console.log("All functions are completed"); 
})