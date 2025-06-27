let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScoreEl = document.querySelector("#user-score");
const compScoreEl = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "scissor", "paper"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreEl.innerText = userScore;
    msg.innerText = `You Win! 🏆 (${userChoice} beats ${compChoice})`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreEl.innerText = compScore;
    msg.innerText = `You Lose! ❌ (${compChoice} beats ${userChoice})`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    msg.innerText = `It's a Draw! 🤝 (Both chose ${userChoice})`;
    msg.style.backgroundColor = "black";
    return;
  }

  let userWin = false;

  if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    userWin = true;
  }

  showWinner(userWin, userChoice, compChoice);
};

// Add click listeners to all choices
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
