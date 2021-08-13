const doWorkCallBack = (callback) =>{
setTimeout(()=>{
    callback("Error")
}, 2000)
}

doWorkCallBack((error, result)=>{
    if(error){
       return console.log(error);
    }
    console.log(result);
})