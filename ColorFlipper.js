
// create an arrays of color
const colors = ["Red","Blue","Green","Violet","Brown"]
 //console.log(colors)

// document.getElementById()
  // create a function "ChangeColor" 
  // create a varible "elem" with the value of a specific ID 
  // change the color of the variable "elem" to the color that was passed to the function
function changeColor(firstColor) {
const elem = document.getElementById("button");
elem.style.backgroundColor = ( firstColor)
 //console.log (elem)


// create a const color and asing document.querySelector()
// Returns the first Element within the document that matches the specified selector ".color"
const color = document.querySelector(".color");
// console.log (color)

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);

}

//call the var elem and execute a function when a user clicks on a button
elem.addEventListener("click", getRandomNumber);
const randomNumber = getRandomNumber();
document.body.style.backgroundColor = colors[randomNumber];
console.log (randomNumber)
color.textContent = colors[randomNumber];
}




// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
// console.log(colors.length)



