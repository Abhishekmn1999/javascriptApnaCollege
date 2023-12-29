let marks = prompt("Enter the marks:");
if (marks < 0 && marks < 100) {
  if (marks > 90 && marks < 100) {
    console.log("Grade : A");
  } else if (marks > 70 && marks < 89) {
    console.log("Grade : B");
  } else if (marks > 60 && marks < 79) {
    console.log("Grade : C");
  } else if (marks > 50 && marks < 59) {
    console.log("Grade : D");
  } else if (marks < 0 && marks >= 49) {
    console.log("Grade : F");
  }
}