const startQuizButton = document.querySelector("#start-quiz");
const finishQuizButton = document.querySelector("#finish-quiz");

const scoreboard = document.querySelector(".quiz__scoreboard");
const score = document.querySelector("#score");

const questions = document.querySelectorAll(".quiz__question");

let totalScore = 0;

startQuizButton.addEventListener("click", () => {
  console.log("Iniciando o quiz teste...");
  startQuizButton.classList.add("quiz__start--hidden");
  questions[0].classList.remove("quiz__question--hidden");
});

questions.forEach((question, index) => {
  question.addEventListener("submit", (event) => {
    event.preventDefault();

    const isCorrect = event.submitter.hasAttribute("data-correct");

    if (isCorrect) {
      event.submitter.classList.add("quiz__option--correct");
      totalScore += 10;
    } else {
      event.submitter.classList.add("quiz__option--incorrect");
    }

    question.querySelectorAll(".quiz__option").forEach((option) => {
      option.disabled = true;
    });

    const nextQuestion = questions[index + 1];
    if (nextQuestion) {
      nextQuestion.classList.remove("quiz__question--hidden");
    } else {
      score.textContent = totalScore;
      scoreboard.classList.remove("quiz__scoreboard--hidden");
      finishQuizButton.classList.remove("quiz__start--hidden");
    }
  });
});
finishQuizButton.addEventListener("click", () => {
  window.location.reload();
});
