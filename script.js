/**
 * 1. needs user input. use js prompt
 * 2.capture that input
 * 3. Have an array with [r, p, s]
 * 4. randomly generate a number 0 to 1 and select one index
 * 5. alert saying computer played this.
 * 6. compare the result and alert if win or lose
 * 7. based on who win , the stats need to be stored and displayed
 * 8. ask if player wants to play again
 * 9. if yes then ask the prompt again
 * 10. this will continue in a loop.
 * 11. Store this in the stats variable.
 * 12. display the stats.
 * 
 * 
 * 
 * 
 * 
 */

// initialise the stats
var stats = {
    wins: 0,
    losses: 0,
    ties: 0
}
var options = ["ROCK", "PAPER", "SCISSORS"]

function playGame() {
    var userChoice = window.prompt("ROCK, PAPER, SCISSORS");
    if (options.includes(userChoice.toUpperCase())) {

        var randomIndex = Math.floor(Math.random() * options.length);
        var computerChoice = options[randomIndex];
        alert ("computer played " + computerChoice)
        switch (userChoice.toUpperCase()) {
            case 'ROCK':
                {
                    if (computerChoice == 'ROCK') {
                        stats.ties ++;
                        alert("Its a Tie!")
                    } else if (computerChoice == 'PAPER') {
                        stats.losses ++;
                        alert("You lost!")
                    } else if (computerChoice == 'SCISSORS') {
                        stats.wins ++;
                        alert("You Win!")
                    }
                    break;
                }
            case 'PAPER':
                {
                    if (computerChoice == 'ROCK') {
                        stats.wins ++;
                        alert("You Win!")
                    } else if (computerChoice == 'PAPER') {
                        stats.ties ++;
                        alert("Its a Tie!")
                    } else if (computerChoice == 'SCISSORS') {
                        stats.losses ++;
                        alert("You lost!")
                    }
                    break;
                }    
            case 'SCISSORS':
                {
                    if (computerChoice == 'ROCK') {
                        stats.losses ++;
                        alert("You lost!")
                    } else if (computerChoice == 'PAPER') {
                        stats.wins ++;
                        alert("You Win!")
                    } else if (computerChoice == 'SCISSORS') {
                        stats.ties ++;
                        alert("Its a Tie!")
                    }
                    break;
                }        
        }

        alert('Heres the stats \n wins: ' + stats.wins + '\n losses: ' + stats.losses + '\n ties ' + stats.ties )
        var toPlay = window.confirm('click ok to keep playing');
        if(toPlay){
            playGame();
        }
        console.log("game ended")


    }
}

document.addEventListener("DOMContentLoaded", playGame);


