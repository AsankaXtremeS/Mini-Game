    let score = JSON.parse(localStorage.getItem("sco")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };

      // if (!score) {
      //   score = {
      //     wins: 0,
      //     losses: 0,
      //     ties: 0,
      //   };
      // }

      updateScoreElement();

      function playGame(playerMove) {
        var computerMove = pickComputerMove();
        var resultElement = document.querySelector(".js-result");
        var result = "";

        if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "You lose.";
          } else if (computerMove === "paper") {
            result = "You win.";
          } else if (computerMove === "scissors") {
            result = "Tie";
          }
        } else if (playerMove === "paper") {
          if (computerMove === "rock") {
            result = "You win.";
          } else if (computerMove === "paper") {
            result = "Tie.";
          } else if (computerMove === "scissors") {
            result = "You lose";
          }
        } else {
          if (computerMove === "rock") {
            result = "Tie.";
          } else if (computerMove === "paper") {
            result = "You lose.";
          } else if (computerMove === "scissors") {
            result = "You win";
          }
        }

        if (result === "You win.") {
          score.wins += 1;
          resultElement.style.color = "green";
        } else if (result === "You lose.") {
          score.losses += 1;
          resultElement.style.color = "red";
        } else {
          score.ties += 1;
          resultElement.style.color = "white";
        }

        //save score data in Localstorage as a JSON buz they store only Strings
        localStorage.setItem("sco", JSON.stringify(score));

        updateScoreElement();

        document.querySelector(".js-result").innerHTML = result;

        document.querySelector(
          ".js-move"
        ).innerHTML = `You ${playerMove} - ${computerMove} computer`;

        // alert(
        //   `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`
        // );
      }

      function updateScoreElement() {
        document.querySelector(
          ".js-score"
        ).innerHTML = `Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}`;
      }

      function pickComputerMove() {
        var computerMove = "";
        var randomNumber = Math.random();
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "scissors";
        }
        return computerMove;
      }