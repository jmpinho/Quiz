const startQuizButton = document.querySelector("#start-quiz");
const finishQuizButton = document.querySelector("#finish-quiz");
const question1 = document.querySelector("#question-1");
const question2 = document.querySelector("#question-2");
const question3 = document.querySelector("#question-3");

startQuizButton.addEventListener("click", () => {
  console.log("Iniciando o quiz teste...");
  startQuizButton.classList.add("quiz__start--hidden");
  question1.classList.remove("quiz__question--hidden");
});

question1.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Questão 1 respondida teste...");

  question1.querySelectorAll(".quiz__option").forEach((option) => {
    option.disabled = true;
  });

  question2.classList.remove("quiz__question--hidden");
});

question2.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Questão 2 respondida teste...");

  question2.querySelectorAll(".quiz__option").forEach((option) => {
    option.disabled = true;
  });

  question3.classList.remove("quiz__question--hidden");
});

question3.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Questão 3 respondida teste...");

  question3.querySelectorAll(".quiz__option").forEach((option) => {
    option.disabled = true;
  });

  finishQuizButton.classList.remove("quiz__start--hidden");
});

finishQuizButton.addEventListener("click", () => {
  console.log("Finalizando o quiz teste...");
});
