// HTML
/*<div class="box">This is div
<ul>
    List
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
</ul>
</div>
<p class="para">this is a simple line</p>*/

// CSS
/*.box{
    height: 250px;
    width: 100px;
    background-color: dodgerblue;
    color: white;
    border: 1px solid black;
}*/

let newBtn=document.createElement("button")
newBtn.innerText="Click Me!";
console.log(newBtn);

let div=document.querySelector("div");
// div.append(newBtn);
div.after(newBtn);
