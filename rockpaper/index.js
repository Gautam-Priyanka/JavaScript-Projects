let userScore = 0;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userNum = document.querySelector("#user-score");
const compNum = document.querySelector("#comp-score");
const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
    // rock,paper,scissors
}

const drawGame = ()=>{
     msg.innerText = "Game Draw!!"
     msg.style.backgroundColor = "gray";

}

const showWinner = (userWin ,userChoice,genCompChoice)=>{
    if(userWin){
        userScore++;
        userNum.innerText   = userScore;     
        msg.innerText = `You win!!`;
        msg.style.backgroundColor = "green";
        msg.style.color = "#fff";

        
    }else{
         compScore++;
         compNum.innerText = compScore;
         msg.innerText = `You Lose!!`;
         msg.style.color = "#fff";

        
    }
}
const playGame = (userChoice)=>{
    // Genrate Computer choice;
    const compChoice = genCompChoice();
    console.log("comp was clicked",compChoice);
    if(userChoice === compChoice)
    {   
        //draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper,scissors
           userWin =  compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock,scissors
            userWin =  compChoice === "scissors" ? false : true;
        } else{
            // rock,paper
            compChoice === "rock"? false : true;
        }
        showWinner(userWin);
    }
    
};

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
      const userChoice = choice.getAttribute("id");
      console.log("choice was clicked",userChoice);
        
       playGame(userChoice); 
    });
});