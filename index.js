/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const convertTime = timeString.split(':').join("")
  const intTime = parseInt(convertTime)

  if (intTime < 1159){ 
    return "Good Morning"
  }
  if (intTime >= 1200 && intTime < 1700){
    return "Good Afternoon"}
  if (intTime >= 1700){
    return "Good Evening"}


}
/* Write your implementation of displayMessage() */

function displayMessage(greet) {
 const response = document.getElementById('greeting')
 response.innerText = greet
}