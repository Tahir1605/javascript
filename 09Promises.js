function asyncFunction(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Async function  Done");
            resolve()
        },2000)
    })
}

asyncFunction().then(()=>{
    console.log("Async operation performed.");
})
