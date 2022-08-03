// game start 
let player ;
let computer ;
const game = true;
const OPTIONS = ["rock", "paper", "scissors"]
let score = 0;
// selection at random for the computer
function random_option(options){
    let option = Math.round((Math.random()*2));
    return options[option];
}
// selection for the user
function display_an_option(options, display_element){
    display_element.innerText = "";
    for(let i=0; i<options.length; i++){
        let option = options[i];
        display_element.innerText += ` ${i+1} -> ${option} `
    }
}
function pick_an_option(){
   
    let repeat_until_result = true;

    while (repeat_until_result){
        let option = prompt("what option do you want (1,2,3)");
        if (+option){
            option = +option;
        }else{
            alert("please write a number between 1, 2, 3");
            continue;
        }
        if (+option<=0 || +option>3){
            alert("sorry this option is not valid");
            continue;
        }else{
            return option;
        }
    }
   
}
// function to determine the winner
function the_winer_is(computer, player){
    let wings;
    if ( computer === "paper" && player === "rock"){
        wings = "computer"
    }else{
        wings = "player"
    }
    if ( computer === "rock" && player === "scissors"){
        wings = "computer"
    }else{
        wings = player
    }
    if ( computer === "scissors" && player === "paper"){
        wings = "computer"
    }else{
        wings = "player"
    }
    return wings;
}

// loop of the game

while(game){ 
    // scores
   
    let attempts = document.getElementById("attempts");
    let display_options = document.getElementById("options");
    let winner = document.querySelector("h2");
    // number ot attempts
    score += 1;
    attempts.innerText = score;
    
    // computer selection
    computer = random_option(OPTIONS);
    // player selection
    display_an_option(OPTIONS, display_options);
    player = pick_an_option();
    player = OPTIONS[player];
    // compare computer and player selection
    if ( computer === player){
        // if they are equal star again
        console.log(`repeat both of you have the same option computer -> ${computer} and player -> ${player}`);
        score += 1;
        continue;
    }else{
        // else  determine how wins
        winner.innerText += "and the winer is " + the_winer_is(computer, player);
        console.log("congratulations :)")
        break;
    }
}

        

        

 
    