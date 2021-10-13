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
var options = ["R", "P", "S"]

function playGame() {
    var userChoice = window.prompt("R, P, S");
    if (userChoice != undefined) {
       
        var randomIndex = Math.floor(Math.random() * options.length);
        var computerChoice = options[randomIndex];
      
      switch (userChoice.toUpperCase){
          case 'R':
              {
                  if (computerChoice == 'R'){
                      stats.ties ++
                  }
              }
              
      }

        }
    }


        playGame();

