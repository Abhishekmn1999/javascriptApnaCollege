// HTML Code
/* <img id="myImage" src="example.jpg" alt="Example Image"> */



// Get the element by its ID
var myImg = document.getElementById("myImage");

// Get the value of the 'src' attribute using getAttribute()
var srcValue = myImg.getAttribute("src");
console.log(srcValue); // Output: example.jpg

// Get the value of the 'alt' attribute using getAttribute()
var altValue = myImg.getAttribute("alt");
console.log(altValue); // Output: Example Image
