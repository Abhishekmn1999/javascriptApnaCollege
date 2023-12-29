let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((val) => {
//   console.log(val * val);
// });

let calsSquare = (num) => {
  console.log(num * num);
};

arr.forEach(calsSquare); //higher order function
