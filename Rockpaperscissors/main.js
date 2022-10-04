const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");
const playerScore_span = document.querySelector(".player__score");
const computerScore_span = document.querySelector(".computer__score");
const user_span = document.querySelector("#userr");
const comp_span = document.querySelector("#compp");
const outcome_div = document.querySelector(".outcome");
const resetGame_button = document.querySelector(".reset__btn");
const help_button = document.querySelector(".help__btn");
const openModal_dialog = document.querySelector("#modal");
const closeModal_button = document.querySelector(".close__modal");
const screen_img = document.querySelector(".screen__evil");
const screen_img2 = document.querySelector(".screen__good");
const newGame_modal = document.querySelector("#new__game");
const newGame_button = document.querySelector(".newGame__btn");
const W_L_or_D_h1 = document.querySelector(".game__outcome");
const round_div = document.querySelector(".round");
const round_span = document.querySelector(".round__span");
const userFinalScore_span = document.querySelector(".final__user__score");
const compFinalScore_span = document.querySelector(".final__comp__score");

const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let round = 0;

function win(user, comp) {
  const borderColor = document.getElementById(user);
  playerScore++;
  round++;
  playerScore_span.innerText = playerScore;
  round_span.innerText = round;
  user_span.innerText = `${user}`;
  comp_span.innerText = `${comp}`;
  user_span.style.color = "black";
  comp_span.style.color = "black";
  outcome_div.innerText = "WIN";
  userFinalScore_span.setAttribute("style", "color:#1f88e9;");
  compFinalScore_span.setAttribute("style", "color: #d64343;");
  outcome_div.setAttribute("style", "color:limegreen; font-size:1.5rem; ");
  borderColor.classList.add("user_win");
  setTimeout(() => borderColor.classList.remove("user_win"), 200);
}

function lose(user, comp) {
  const borderColor = document.getElementById(user);
  computerScore++;
  round++;
  computerScore_span.innerText = computerScore;
  round_span.innerHTML = round;
  user_span.innerText = `${user}`;
  comp_span.innerText = `${comp}`;
  user_span.style.color = "black";
  comp_span.style.color = "black";
  outcome_div.innerText = "LOSE";
  userFinalScore_span.setAttribute("style", "color: #d64343;");
  compFinalScore_span.setAttribute("style", "color:#1f88e9;");
  outcome_div.setAttribute("style", "color:red; font-size:1.5rem;");
  borderColor.classList.add("user_lose");
  setTimeout(() => borderColor.classList.remove("user_lose"), 200);
}

function draw(user, comp) {
  const borderColor = document.getElementById(user);
  round++;
  playerScore_span.innerText = playerScore;
  computerScore_span.innerText = computerScore;
  round_span.innerHTML = round;
  user_span.innerText = `${user}`;
  comp_span.innerText = `${comp}`;
  user_span.style.color = "black";
  comp_span.style.color = "black";
  outcome_div.innerText = "DRAW";
  userFinalScore_span.setAttribute("style", "color: #1f88e9;");
  compFinalScore_span.setAttribute("style", "color: #1f88e9;");
  outcome_div.setAttribute("style", "color:grey; font-size:1.5rem;");
  borderColor.classList.add("user_draw");
  setTimeout(() => borderColor.classList.remove("user_draw"), 200);
}

function game(userChoice) {
  const computer = computerChoice();
  switch (userChoice + " " + computer) {
    case "rock scissors":
    case "paper rock":
    case "scissors paper":
      win(userChoice, computer);
      break;
    case "rock paper":
    case "paper scissors":
    case "scissors rock":
      lose(userChoice, computer);
      break;
    case "rock rock":
    case "paper paper":
    case "scissors scissors":
      draw(userChoice, computer);
      break;
  }
  if (playerScore === 5 || computerScore === 5) {
    resetGame();
  }
}

function playerChoice() {
  rock_div.addEventListener("click", () => {
    game("rock");
  });
  paper_div.addEventListener("click", () => {
    game("paper");
  });
  scissors_div.addEventListener("click", () => {
    game("scissors");
  });
}

function computerChoice() {
  let compInput = choices[Math.floor(Math.random() * choices.length)];
  return compInput;
}

function resetGame() {
  playerScore_span.innerText = playerScore;
  computerScore_span.innerText = computerScore;
  outcome_div.innerText = "";
  userFinalScore_span.innerText = playerScore;
  compFinalScore_span.innerText = computerScore;

  if (playerScore === computerScore) {
    W_L_or_D_h1.innerHTML = "IT'S A DRAW!";
  } else if (playerScore > computerScore) {
    W_L_or_D_h1.innerHTML = "WINNER!!!";
  } else {
    W_L_or_D_h1.innerHTML = "YOU'VE LOST!";
  }

  newGame_modal.showModal();
  newGame_button.addEventListener("click", () => {
    newGame_modal.close();
    playerScore = 0;
    computerScore = 0;
    round = 0;
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
    round_span.innerText = "";
    user_span.innerText = "";
    comp_span.innerText = "";
    outcome_div.innerText = "";
  });
}

function reset() {
  resetGame_button.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
    round_span.innerText = "";
    user_span.innerText = "";
    comp_span.innerText = "";
    outcome_div.innerText = "";
  });
}

function helpDialog() {
  help_button.addEventListener("click", () => {
    openModal_dialog.showModal();
  });
  closeModal_button.addEventListener("click", () => {
    openModal_dialog.close();
  });
}

screen_img.addEventListener("click", () => {
  screen_img.classList.add("evil_img");
  screen_img2.classList.add("good_img");
});
screen_img2.addEventListener("click", () => {
  screen_img2.classList.remove("good_img");
  screen_img.classList.remove("evil_img");
});

function play() {
  playerChoice();
  reset();
  helpDialog();
}

play();
