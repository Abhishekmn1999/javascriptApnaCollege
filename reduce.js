let n = prompt("Enter the nth number : ");

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
  return res + curr;
});
console.log("sum of array element",sum);

let factorial = arr.reduce((res, curr) => {
    return res* curr;
  });
  console.log("factorial of array element",factorial);