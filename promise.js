// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     // resolve("success")
//     reject("Error occurred")
// })

function getData(dataId, getNextData) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      reslove("Success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
