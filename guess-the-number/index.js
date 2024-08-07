const userInput = document.querySelector("#input");
const form = document.querySelector("form");
let resultMsg = document.querySelector("#msg");
let yourGuess = document.querySelector("#guess");
const submitBtn = document.querySelector("#submit");
const restartGame = document.querySelector("#gamestart");



;(function () {
const allYourGuess = [];
let randomNum = Math.floor(Math.random() * 100);


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInputValue = parseInt(userInput.value);
  if (userInputValue < randomNum) {
    resultMsg.innerText = "To low!!";
  } else if (userInputValue > randomNum) {
    resultMsg.innerText = "To High!!";
  } else {
    resultMsg.innerText = "You got it Congratulations!!!!!!";
    restartGame.disabled = false
    submitBtn.disabled = true;
    
    
  }
  allYourGuess.push(userInputValue);
  yourGuess.innerText = `Your Gusses :` + allYourGuess.join(',');
  form.reset();
});

restartGame.addEventListener('click',()=>{
    yourGuess.innerText = '';
    resultMsg.innerText = '';
    restartGame.disabled = true;
    submitBtn.disabled = false;
    randomNum = Math.floor(Math.random() * 100);
})

})()