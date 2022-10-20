"use strict";

let number = Math.trunc(Math.random() * 21);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "enter something booi";
  } else if (guess == number) {
    document.querySelector(".message").textContent = "you r Goat 🐐";
    document.querySelector(".number").textContent = number;

    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "i'ts low you dump bitch";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOSTTTT😂🤣";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "i'ts high you dump bitch";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOSTTTT😂🤣";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 21);
  document.querySelector(".message").textContent = "Start Guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// "use strict";

// const number = Math.trunc(Math.random() * 21);

// let score = 20;

// document.querySelector(".number").textContent = number;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = document.querySelector(".guess").value;

//   if (!guess) {
//     document.querySelector(".message").textContent = "enter a number";
//   } else if (guess == number) {
//     document.querySelector(".message").textContent = "you are goat";
//   } else if (guess < number) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "you lost";
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess > number) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "high";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "you lost";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });
