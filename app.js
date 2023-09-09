const options = ["rock", "paper", "scissors"];
        let playerScore = 0;
        let computerScore = 0;
        let isGameOver = true;

        document.getElementById("play").addEventListener("click", playGame);
        document.getElementById("restart").addEventListener("click", restartGame);

        function playGame() {
            if (isGameOver) {
                resetScore();
            }

            const playerChoice = getRandomChoice();
            const computerChoice = getRandomChoice();
            const result = determineWinner(playerChoice, computerChoice);
            updateScore(result);
            displayResult(playerChoice, computerChoice, result);
            isGameOver = false;
        }

        function getRandomChoice() {
            const randomIndex = Math.floor(Math.random() * options.length);
            return options[randomIndex];
        }

        function determineWinner(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) return "It's a tie!";
            if (
                (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissors" && computerChoice === "paper")
            ) {
                playerScore++;
                return "Player wins!";
            }
            computerScore++;
            return "Computer wins!";
        }

        function updateScore(result) {
            const scoreElement = document.querySelector(".score");
            scoreElement.textContent = `คะแนน ${playerScore} : ${computerScore}`;
        }

        function displayResult(playerChoice, computerChoice, result) {
            const resultElement = document.querySelector(".result");
            resultElement.innerHTML = `${playerChoice}, ${computerChoice}. ${result}`;
            resultElement.innerHTML = `${playerChoice}, ${computerChoice}. ${result}`;
        }

        function resetScore() {
            playerScore = 0;
            computerScore = 0;
            updateScore();
        }

        function restartGame() {
            resetScore();
            isGameOver = true;
            const resultElement = document.querySelector(".result");
            resultElement.innerHTML = "Choose an option to start the game.";
        }