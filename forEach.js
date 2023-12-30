let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((val) => {
//   console.log(val);
// });

let calCSquare = (num) => {
  console.log(num * num);
};

arr.forEach(calCSquare); //higher order function
