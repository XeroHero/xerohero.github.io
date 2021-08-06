//1. Main method
//2. Game method
//2.1 getRandomChoiceInt() function to get the position in the array of action by cpu
//2.2 getComputerChoice() to get the choice of action by CPU from array
//3. Win, lose, draw functions
//4. Output to the webpage
//5. Tidy up with convertToReadable(param) function

var userScore = 0;
var cpuScore =0;

const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('cpu-score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('rock-choice');
const paper_div = document.getElementById('paper-choice');
const scissor_div = document.getElementById('scissors-choice');

function getRandomChoiceInt(){
  const cpuChoice = Math.random();
  const cpuChoiceTimes10 = cpuChoice*10;
  const cpuChoiceInt = Math.floor(cpuChoiceTimes10);
  const cpuChoiceModThree = cpuChoiceInt%3;
  // console.log(cpuChoiceModThree);
  return cpuChoiceModThree;
}

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  var cpuChoice = getRandomChoiceInt();
  console.log(choices[cpuChoice]);
  return choices[cpuChoice];
}

function convertToReadable(param) {
  switch (param) {
    case 'p':
      return 'Paper';
      break;
    case 'r':
      return "Rock";
      break;
    case 's':
      return "Scrissors"
      break;
    default:
    return null;
  }

}

// user, computer comes  after
function win(user, computer) {
  // console.log("YOU WIN 🙂");
  userScore++;
  userScore_span.innerHTML=userScore;
  result_p.innerHTML = convertToReadable(user) + " beats " + convertToReadable(computer) + "! You win!";
}

function lose(user, computer) {
  // console.log("YOU LOSE 🙁");
  cpuScore++;
  cpuScore_span.innerHTML=cpuScore;
  result_p.innerHTML = convertToReadable(computer) + " beats " + convertToReadable(user) + "! You lose!";

}

function draw(user) {
  // console.log("IT'S A DRAW 😐");
  result_p.innerHTML = "It's a draw!";

}
function game(userChoice) {
  const cpuChoice = getComputerChoice();
  if (cpuChoice === 'r'){
    switch(userChoice){
      case 'r':
        // console.log("Draw: R-R");
        draw(userChoice);
        break;
      case 'p':
        // console.log("User Wins: P-R");
        win(userChoice, cpuChoice);
        break;
      case 's':
        // console.log("CPU Wins: S-R");
        lose(userChoice, cpuChoice);
        break;
     }
  }

  if (cpuChoice === 'p'){
    switch(userChoice){
      case 'p':
        // console.log("Draw: P-P");
        draw(userChoice);
        break;
      case 's':
        // console.log("User Wins: P-S");
        win(userChoice, cpuChoice);
        break;
      case 'r':
        // console.log("CPU Wins: S-R");
        lose(userChoice, cpuChoice);
        break;
     }
  }

  if (cpuChoice === 's'){
    switch(userChoice){
      case 's':
        // console.log("Draw: S-S");
        draw(userChoice);
        break;
      case 'r':
        // console.log("User Wins: R-S");
        win(userChoice, cpuChoice);
        break;
      case 'p':
        // console.log("CPU Wins: P-S");
        lose(userChoice, cpuChoice);
        break;
     }
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    // console.log("Click Rock");
    game("r");

  });

  paper_div.addEventListener('click', function() {
    // console.log("Click Paper");
    game("p");
  });

  scissor_div.addEventListener('click', function() {
    // console.log("Click Scissors");
    game("s");
  });
}

main();
