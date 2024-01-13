let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Button Clicked!-HANDLER 1");
});

btn.addEventListener("click", () => {
  console.log("Button Clicked!-HANDLER 2");
});

let handler3 = () => {
  console.log("Button Clicked!-HANDLER 3");
};

btn.addEventListener("click", handler3); //removeing Handler3 Event

btn.addEventListener("click", () => {
  console.log("Button Clicked!-HANDLER 4");
});

btn.removeEventListener("click", handler3);
