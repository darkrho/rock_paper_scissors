// game start 
let player ;
let computer ;
const OPTIONS = ["rock", "paper", "scissors"]
let winner = document.querySelector("h2");
let play1 = document.querySelector("#player");
let comp = document.querySelector("#computer");
// selection at random for the computer
function random_option(options){
    let option = Math.round((Math.random()*2));
    return options[option];
}
// selection for the user with buttons new branch
function playerSelection(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach( (but) => but.addEventListener("click", game_logic));
}
// the logic of the game is execute every time the user push a button
function game_logic(event) {
    // intilaize game
    winner.textContent = "";
    play1.textContent = "";
    comp.textContent = "";
    // player push button
    player = event.target.outerText.toLowerCase();
    // computer option
    computer = random_option(OPTIONS);
    //  winner
    win = the_winer_is(computer, player);
    // show the results
    play1.textContent = `Player selection: ${player}`;
    comp.textContent = `Computer selection: ${computer}`;
    if ( win == "computer"){
        winner.textContent = "Sorry you lose";
    }else if ( win == "player"){
        winner.textContent = "Congratulations you have win";
    }else{
        winner.textContent = "Start again";
    }
    
}

// function to determine the winner
function the_winer_is(computer, player){
    let wings;
    if ( computer === "paper" && player === "rock"){
        wings = "computer"
    }else if ( computer == "rock" && player === "paper"){
        wings = "player"
    }else if ( computer === "rock" && player === "scissors"){
        wings = "computer"
    }else if ( computer === "scissors" && player === "rock"){
        wings = player
    }
    if ( computer === "scissors" && player === "paper"){
        wings = "computer"
    }else if ( computer === "paper" && player == "scissors"){
        wings = "player"
    }else{
        wings = null;
    }
    return wings;
}

playerSelection();
    