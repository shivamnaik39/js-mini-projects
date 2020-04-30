// Human Player
class HumanPlayer {
	constructor() {
		this.score = 0;
		this.choice;
	}

	play(choice) {
		this.choice = choice;
		// console.log(this.choice);
		return this.choice;
	}

	getScore() {
		return this.score;
	}

	winScore() {
		this.score++;
		return this.score;
	}
}

// Computer Player

const options = ["rock", "paper", "scissor"];

// Function to generate random number
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

class ComputerPlayer {
	constructor() {
		this.score = 0;
		this.choice;
	}

	play() {
		this.choice = options[randomInt(0, 2)];
		// console.log(this.choice);
		return this.choice;
	}

	getScore() {
		return this.score;
	}

	winScore() {
		this.score++;
		return this.score;
	}
}

const humanPlayer = new HumanPlayer();
const computerPlayer = new ComputerPlayer();

function getResult(player, computer) {
	player = player.toLowerCase();
	computer = computer.toLowerCase();

	if (player === computer) {
		// draw
		const playerScore = humanPlayer.getScore();
		const computerScore = computerPlayer.getScore();

		return {
			playerScore,
			computerScore,
		};
	} else if (player === "rock" && computer === "paper") {
		// Computer Wins
		const playerScore = humanPlayer.getScore();
		const computerScore = computerPlayer.winScore();
		return {
			playerScore,
			computerScore,
		};
	} else if (player === "rock" && computer === "scissor") {
		// Playerr Wins
		const playerScore = humanPlayer.winScore();
		const computerScore = computerPlayer.getScore();
		return {
			playerScore,
			computerScore,
		};
	} else if (player === "paper" && computer === "rock") {
		// Player Wins
		const playerScore = humanPlayer.winScore();
		const computerScore = computerPlayer.getScore();
		return {
			playerScore,
			computerScore,
		};
	} else if (player === "paper" && computer === "scissor") {
		// Computer Wins
		const playerScore = humanPlayer.getScore();
		const computerScore = computerPlayer.winScore();
		return {
			playerScore,
			computerScore,
		};
	} else if (player === "scissor" && computer === "rock") {
		// Computer Wins
		const playerScore = humanPlayer.getScore();
		const computerScore = computerPlayer.winScore();
		return {
			playerScore,
			computerScore,
		};
	} else if (player === "scissor" && computer === "paper") {
		// Player Wins
		const playerScore = humanPlayer.winScore();
		const computerScore = computerPlayer.getScore();
		return {
			playerScore,
			computerScore,
		};
	}
}

export const Players = {
	humanPlayer,
	computerPlayer,
	getResult,
};
