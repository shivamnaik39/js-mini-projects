class UI {
	constructor() {
		this.options = document.querySelector("#options");
		this.playerChoice = document.querySelector("#player-choice");
		this.computerChoice = document.querySelector("#computer-choice");

		// Scores
		this.playerScore = document.querySelector("#player-score");
		this.computerScore = document.querySelector("#computer-score");
	}

	displayChoice(player1, computer) {
		this.playerChoice.textContent = player1;
		this.computerChoice.textContent = computer;
	}

	scoreColor(score1, score2) {
		const s1 = parseInt(score1.textContent);
		const s2 = parseInt(score2.textContent);

		if (s1 !== s2) {
			if (s1 > s2) {
				score1.className = "text-green-500";
				score2.className = "text-red-500";
			} else {
				score1.className = "text-red-500";
				score2.className = "text-green-500";
			}
		} else {
			score1.className = "text-gray-900";
			score2.className = "text-gray-900";
		}
	}

	displayResult(result) {
		this.playerScore.textContent = result.playerScore;
		this.computerScore.textContent = result.computerScore;

		this.scoreColor(this.playerScore, this.computerScore);
	}
}

export const ui = new UI();
