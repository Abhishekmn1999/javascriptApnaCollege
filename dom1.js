// let h2 = document.getElementsByTagName("h2");
// console.dir(h2);

// h2.innerText = h2.innerText + " from apna College"

let divs = document.querySelectorAll(".class");

let idx= 1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";