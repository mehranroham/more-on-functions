const startGameBtn = document.querySelector('#start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
// const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

// console.dir(startGame);

// getting player choice

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We choose ${ROCK} for you!`);
    return;
  }
  return selection;
};

// getting computer choice

const getComputerChoice = () => {
  const choices = [ROCK, PAPER, SCISSORS];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

// get the winer

const getWinner = (pChoice = ROCK, cChoice) =>
  pChoice === cChoice
    ? RESULT_DRAW
    : (pChoice === ROCK && cChoice === SCISSORS) ||
      (pChoice === PAPER && cChoice === ROCK) ||
      (pChoice === SCISSORS && cChoice === PAPER)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

//   if (pChoice === cChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (pChoice === ROCK && cChoice === SCISSORS) ||
//     (pChoice === PAPER && cChoice === ROCK) ||
//     (pChoice === SCISSORS && cChoice === PAPER)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }

startGameBtn.addEventListener('click', function startGame() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('game started...');
  const playerChoice = getPlayerChoice();
  //   console.log(playerChoice);
  const computerChoice = getComputerChoice();
  //   console.log(computerChoice);
  const winner = getWinner(playerChoice, computerChoice);
  //   console.log(winner);
  let message = `You picked ${
    playerChoice ?? ROCK
  } ,Computer picked ${computerChoice} and You `;
  if (winner === RESULT_DRAW) {
    message += 'had a DRAW!';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'WON!';
  } else {
    message += 'LOST!';
  }
  console.log(message);
  gameIsRunning = false;
});

// not related to game

const combined = (resultHandler, operation, ...array) => {
  const validateNumbers = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const item of array) {
    if (operation === 'add') {
      sum += validateNumbers(item);
    } else {
      sum -= validateNumbers(item);
    }
  }
  resultHandler(sum);
};

// only in function decleration

// const subtract = function () {
//   let sub = 0;
//   for (item of arguments) {
//     sub -= item;
//   }
//   console.log(sub);
// };

const showResult = (message, result) => {
  console.log(`the result of ${message} the numbers is ${result}`);
};

combined(showResult.bind(this, 'adding'), 'add', 1, 2, -6, 5, 2, 80, 13, -33);
combined(showResult.bind(this, 'subtracting'), 'subtract', 3, 4, 5);
