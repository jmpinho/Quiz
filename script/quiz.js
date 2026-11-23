const startQuizButton = document.querySelector("#start-quiz");
const finishQuizButton = document.querySelector("#finish-quiz");

const scoreboard = document.querySelector(".quiz__scoreboard");
const score = document.querySelector("#score");

const question1 = document.querySelector("#question-1");
const question2 = document.querySelector("#question-2");
const question3 = document.querySelector("#question-3");

let totalScore = 0;

startQuizButton.addEventListener("click", () => {
  console.log("Iniciando o quiz teste...");
  startQuizButton.classList.add("quiz__start--hidden");
  question1.classList.remove("quiz__question--hidden");
});

question1.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Questão 1 respondida teste...");

  const isCorrect = event.submitter.hasAttribute("data-correct");
  console.log("Resposta correta?", isCorrect);

  if (isCorrect) {
    event.submitter.classList.add("quiz__option--correct");
    totalScore += 10;
  } else {
    event.submitter.classList.add("quiz__option--incorrect");
  }

  question1.querySelectorAll(".quiz__option").forEach((option) => {
    option.disabled = true;
  });

  question2.classList.remove("quiz__question--hidden");
});

question2.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Questão 2 respondida teste...");

  const isCorrect = event.submitter.hasAttribute("data-correct");
  console.log("Resposta correta?", isCorrect);

  if (isCorrect) {
    event.submitter.classList.add("quiz__option--correct");
    totalScore += 10;
  } else {
    event.submitter.classList.add("quiz__option--incorrect");
  }

  question2.querySelectorAll(".quiz__option").forEach((option) => {
    option.disabled = true;
  });

  question3.classList.remove("quiz__question--hidden");
});

question3.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Questão 3 respondida teste...");

  const isCorrect = event.submitter.hasAttribute("data-correct");
  console.log("Resposta correta?", isCorrect);

  if (isCorrect) {
    event.submitter.classList.add("quiz__option--correct");
    totalScore += 10;
  } else {
    event.submitter.classList.add("quiz__option--incorrect");
  }

  question3.querySelectorAll(".quiz__option").forEach((option) => {
    option.disabled = true;
  });

  score.textContent = totalScore;

  scoreboard.classList.remove("quiz__scoreboard--hidden");

  finishQuizButton.classList.remove("quiz__start--hidden");
});

finishQuizButton.addEventListener("click", () => {
  console.log("Finalizando o quiz teste...");
  window.location.reload();
});
