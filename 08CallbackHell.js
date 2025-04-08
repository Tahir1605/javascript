function asyncFunction1(callback){
      setTimeout(() => {
         console.log("Function 1 Done");
         callback()
      },2000)
}
function asyncFunction2(callback){
    setTimeout(() => {
        console.log("Function 2 Done");
        callback()
     },2000)
}
function asyncFunction3(callback){
    setTimeout(() => {
        console.log("Function 3 Done");
        callback()
     },2000)
}

asyncFunction1(()=>{
    asyncFunction2(()=>{
        asyncFunction3(()=>{
            console.log("All functions are complete");
            
        })
    })
})