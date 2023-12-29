let a = 8;
let b = 3;
let condi1 = a < b;
let condi2 = b > a;
console.log("OR logical opertor");
console.log(condi1 || condi2);

// condi1      condi2      Result
//    T           T           T
//    T           F           T
//    F           T           T
//    F           F           F