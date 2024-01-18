// function getData(dataID, getNextData) {
//     //2s
//     setTimeout(() => {
//       console.log("data", dataID);
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000); //2s interval
//   }

//   //callback hell
//   getData(1, () => {
//     console.log("getting data2.....");
//     getData(2, () => {
//       console.log("getting data3.....");
//       getData(3, () => {
//         console.log("Getting Data4....");
//         getData(4);
//       });
//     });
//   });

//promise chian
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 3000);
  });
}

getData(1).then((res) => {
  return getData(2);
}).then((res)=>{
  console.log("Sucess");
})
