//getting data1 after getting data2 4 second delay
function asyncFun1() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("data1");
      reslove("success");
    }, 4000);
  });
}

function asyncFun2() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("data2");
      reslove("success");
    }, 4000);
  });
}

console.log("fetching data1...");
asyncFun1().then((res) => {
  console.log("fetching data2...");
  asyncFun2().then((res) => {});
});
