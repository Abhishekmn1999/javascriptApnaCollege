let marks = [85,97,44,37,76,60];
let sum = 0;

for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}
 
// for(let val of marks){
//     sum = sum+val;
// }

console.log("SUM of Marks :",sum);
console.log("Number of subject :",marks.length);
let avg=sum/marks.length;

console.log("Average of Marks :",avg);