function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 3000);
  });
}

//async await

async function getAllData() {
  console.log("Getting data1....."); //without async function we can't use await function
  await getData(1);
  console.log("Getting data2.....");
  await getData(2);
  console.log("Getting data3.....");
  await getData(3);
  console.log("Getting data4.....");
  await getData(4);
  console.log("Getting data5.....");
  await getData(5);
  console.log("Getting data6.....");
  await getData(6);
}

getAllData();