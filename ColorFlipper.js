
// arrays 
const colors = ["Red","Blue","Green","Violet","Brown"]
//console.log(option)

// document.getElementById()
  // create a function "ChangeColor" 
  // create a varible "elem" with the value of a specific ID 
  // change the color of the variable "elem" to the color that was passed to the function
function changeColor(firstColor) {
var elem = document.getElementById("button");
//elem.style.backgroundColor = firstColor
const color = document.querySelector(".color");
//document.body.style.backgroundColor = firstColor

elem.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
 })
};


// document.querySelector()


// addEventListener()


  //Math.random
  

//  Math.floor()
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}



// array.length
