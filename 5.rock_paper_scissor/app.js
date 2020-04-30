// Import Modules
import { ui } from "./ui.js";
import { Players } from "./players.js";

// Player Choice event listener (RPS)
ui.options.addEventListener("click", playerPlay);

// Player Play
function playerPlay(e) {
	if (e.target.id != "options") {
		const choice = e.target.id;

		// human player plays
		const player = Players.humanPlayer.play(choice);

		// Computer player plays
		const computer = Players.computerPlayer.play();

		// Display both players choice
		ui.displayChoice(player, computer);

		// Calculate Results
		const result = Players.getResult(player, computer);
		// console.log(result);

		// Display Results
		ui.displayResult(result);
	}

	e.preventDefault();
}
