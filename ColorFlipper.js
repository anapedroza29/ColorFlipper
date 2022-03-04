
// create an arrays of color
const colors = ["Red","Blue","Green","Violet","Brown"]
 //console.log(colors)

// document.getElementById()
  // create a function "ChangeColor" 
  // create a varible "elem" with the value of a specific ID 
  // change the color of the variable "elem" to the color that was passed to the function
function changeColor(blue) {
const elem = document.getElementById("button");
elem.style.backgroundColor = blue
 //console.log (elem)


// create a const color and asing document.querySelector()
// asing first Element in the document that matches the specified selector ".color"
const color = document.querySelector(".color");


//call the var elem and execute a function when a user clicks on a button
elem.addEventListener("click", getRandomNumber);

// create a function getRandomNumber
// return Math floor random colors

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);

}

// create a const randomNumber and asing getRandomNumber
const randomNumber = getRandomNumber();

// Change the color of the background with a ramdom colors
document.body.style.backgroundColor = colors[randomNumber];
//console.log (randomNumber)

// call const color and change the text of the first element with class="color"r with a ramdom colors
color.textContent = colors[randomNumber];
}






