 let items=[250,645,300,900,50];

// for(let i=0;i<items.length;i++){
//     let offer = items[i]/10;
//     let val=items[i]-offer;
//     console.log("After offer",val);
// }

let i=0;
for(let val of items){
    let offer = val /10;
    items[i] = items[i]-offer;
    console.log(`value after offer= ${items[i]}`);
    i++;
}

