const userInput = document.querySelector("#input");
const form = document.querySelector("form");
let resultMsg = document.querySelector("#msg");
let yourGuess = document.querySelector("#guess");
const submitBtn = document.querySelector("#submit");
const restartGame = document.querySelector("#gamestart");



;(function () {
let allYourGuess = [];
let randomNum = Math.floor(Math.random() * 100);
const maxGuesses = 10; // set the maximum number of guesses

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInputValue = parseInt(userInput.value);
  if (allYourGuess.length >= maxGuesses) {
    resultMsg.innerText = "You lost! The number was " + randomNum;
    restartGame.disabled = false
    submitBtn.disabled = true;
    return;
  }
  if (userInputValue < randomNum) {
    resultMsg.innerText = "To low!!";
  } else if (userInputValue > randomNum) {
    resultMsg.innerText = "To High!!";
  } 

   else {
    resultMsg.innerText = "You got it Congratulations!!!!!!";
    restartGame.disabled = false
    submitBtn.disabled = true;
    
    
  }
  allYourGuess.push(userInputValue);
  yourGuess.innerText = `Your Gusses :` + allYourGuess.join(',');
  allYourGuess
  form.reset();
});


restartGame.addEventListener('click',()=>{
    randomNum = Math.floor(Math.random() * 100);
    restartGame.disabled = true;
    submitBtn.disabled = false;
    yourGuess.innerText = '';
    resultMsg.innerText = '';
    allYourGuess = []; 
})

})()