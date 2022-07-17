const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");  //Target for button
const color = document.querySelector("color")       //This is for my color span 

btn.addEventListener("click", function () {
 //get random number between 0-3 colors [3] -->This is the goal
 const randomNumber = 2;
 document.body.style.backgroundColor = colors[randomNumber];
 color.textContent  = colors[randomNumber];
}); //Passed a callback function 