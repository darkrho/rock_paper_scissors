// Initial values
let player ;
let computer ;
let player_score = 0;
let computer_score = 0;
let limit = 5;
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
    // if score is less than 5
    if(player_score  <limit && computer_score < limit){
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
            computer_score += 1;
        }else if ( win == "player"){
            winner.textContent = "Congratulations you have win";
            player_score += 1;
        }else{
            winner.textContent = "Start again";
        }
    }else{
        winner.textContent = "Sorry the context is over";
        if (player_score < computer_score){
            comp.textContent = `Computers win with a score of ${computer_score}`;
        }else{
            play1.textContent = `Players win with a score of ${player_score}`;
        }
    }
    
}

// function to determine the winner
function the_winer_is(computer, player){
    let wings;
    if ( computer === "paper" && player === "rock"){
        wings = "computer"
    }else if ( computer === "paper" && player == "scissors"){
        wings = "player"

    }else if ( computer == "rock" && player === "paper"){
        wings = "player"
    }else if ( computer === "rock" && player === "scissors"){
        wings = "computer"
    }else if ( computer === "scissors" && player === "rock"){
        wings = "player"
    }else if ( computer === "scissors" && player === "paper"){
        wings = "computer"
   
    }else{
        wings = null;
    }
    return wings;
}

playerSelection();
    