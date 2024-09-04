const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }

    if(guess == random){
        console.log("you are right! Congrats!! random number was",random);
        break;
        
    }else if(guess< random)
        {
            guess = prompt("your guess is too small, Try Again!!");
        }else 
        {
            guess = prompt("your guess is too high, Try Again!!");
        }
     
    }

