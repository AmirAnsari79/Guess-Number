"use strict";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent='jafar';

// document.querySelector('.number').textContent='12';

// document.querySelector('.guess').value=23;
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore=0;




document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    number = Math.trunc(Math.random() * 20 + 1);
  
    document.querySelector(".message").textContent = "Starting Guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });

  
document.querySelector(".check").addEventListener("click", function () {
  //   console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "❌No number";
  } else if (guess === number) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    if (score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }

    document.querySelector(".message").textContent = "Correct Number!";
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

