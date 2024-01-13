let btn = document.querySelector("button");

btn.onmouseover=()=>{
    setTimeout(() => {
        alert("Button Clicked");
    }, 2000);
};

let div=document.querySelector("div");

div.onmouseover = () => {
    setTimeout(() => {
        alert("Mouse Over the div");
    }, 2000);
};
