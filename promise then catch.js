const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        // resolve("Sucess");
        reject("Network Error")
    });
};

let promise = getPromise();  //fullfilled
promise.then((res)=>{
    console.log("Promise fulfilled",res);
});

promise.catch((err)=>{      //reject
    console.log("rejected",err);
})


