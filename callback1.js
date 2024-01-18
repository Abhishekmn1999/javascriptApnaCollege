function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumcallback) {
  sumcallback(a, b);
}

// calculator(1, 2, sum); // pass function name with parathesis

calculator(1, 2, (a, b) => {
  console.log(a + b);
});
