function getData(dataID, getNextData) {
  //2s
  setTimeout(() => {
    console.log("data", dataID);
    if (getNextData) {
      getNextData();
    }
  }, 2000);//2s interval
}

//callback hell
getData(1, () => {
    console.log("getting data2.....");
  getData(2, () => {
    console.log("getting data3.....");
    getData(3);
  });
});
