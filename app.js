//selectors 
const playerInput = document.querySelector('.player-input'); 
const submitBtn = document.querySelector('.submit-guess'); 
const gameResolution = document.querySelector("#game-answer"); 

//event listeners
submitBtn.addEventListener('click', playerGuess); 

//functions 

function playerGuess(e){
    e.preventDefault(); 
    // storing the player-input
    const guess = playerInput.value;
    // change the guess to lower case
    const playerGuess = guess.toLowerCase();
    let result = ""; 
    // if there is no value that was input into the input bar, alert fill out a task 
    if(!guess){
        alert("You didn't choose your weapon!"); 
        return; 
    }

    if(playerGuess !== "rock" && playerGuess !== "paper" && playerGuess !== "scissors"){
        alert(playerGuess + " is not a correct option, choose again!"); 
        return; 
    }

    // checking to see who won 
    const computerGuess = generateComputerGuess(); 
    console.log("computer guess: " + computerGuess + " " + "player guess: " + playerGuess); 
    if(computerGuess == playerGuess){
        result = "You tied with the computer."; 
        playerInput.value = ""; 
    }
    else if(computerGuess == "rock" && playerGuess == "scissors" || computerGuess == "paper" && playerGuess == "rock" || computerGuess == "scissors" && playerGuess == "paper"){
        result = "You chose " + playerGuess + " & the computer chose " + computerGuess + " you lose.."; 
        playerInput.value = "";
    }
    else{
        result = "You chose " + playerGuess + " & the computer chose " + computerGuess + " you won!";  
        playerInput.value = "";
    }

    // display who won on the screen 
    gameResolution.innerText = result; 
}

function generateComputerGuess(){
    let choices = ["rock", "paper", "scissors"]; 
    let randomNum = Math.floor(Math.random() * choices.length); 
    
    return(choices[randomNum]); 
}