// Your code herelet dodger = document.getElementById("dodger"); 
let dodger = document.getElementById("dodger"); 
dodger.style.backgroundColor = "#FF69B4"; 
console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); // "0px" 
dodger.style.bottom = "0px"; 
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
} 
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let right = parseInt(leftNumbers, 10);

  if (right > 0) {
    dodger.style.left = `${right + 1}px`;
  }
} 

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
}); 