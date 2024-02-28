let playerTurn = true;
let computerMoveTimeout = 0;

const gamecurrStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gamecurrStatus.HUMAN_WINS;
			}
			else {
				return gamecurrStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gamecurrStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gamecurrStatus.DRAW_GAME;
}

function newGame() {
	// TODO: Complete the function

	let turnInfo = document.getElementById("turnInfo");

	clearTimeout(computerMoveTimeout);
	computerMoveTimeout = 0;

	const buttons = getGameBoardButtons();

	buttons.forEach(button => {
		button.innerHTML = "";
		button.removeAttribute("class");
		button.removeAttribute("disabled");
	});

	playerTurn = true;
	turnInfo.innerHTML = "Your turn";
}

function boardButtonClicked(button) {
	// TODO: Complete the function
	if (playerTurn) {
		button.innerHTML = "X";
		button.setAttribute("class", "x");
		button.setAttribute("disabled", "true");
		switchTurn();
	}
}

function switchTurn() {
	// TODO: Complete the function
	let currStatus = checkForWinner();

	if (currStatus == gamecurrStatus.MORE_MOVES_LEFT) 
	{

		if (playerTurn) 
		{
			computerMoveTimeout = setTimeout(() => {
				makeComputerMove();
			}, 1000);
		}

		playerTurn = !playerTurn;
		turnInfo.innerHTML = playerTurn ? "Your turn" : "Computer's turn";
	} 
	
	else 
	{
		playerTurn = false;

		if (currStatus == gamecurrStatus.HUMAN_WINS) 
		{
			turnInfo.innerHTML = "You win!";
		} 
		
		else if (currStatus == gamecurrStatus.COMPUTER_WINS) 
		{
			turnInfo.innerHTML = "Computer wins!";
		} 
		
		else if (currStatus == gamecurrStatus.DRAW_GAME) 
		{
			turnInfo.innerHTML = "Draw game";
		}
	}
}

function makeComputerMove() {
	// TODO: Complete the function
	const buttons = getGameBoardButtons();
	let availableChoice = [];

	// check which are the available moves
	let idx = 0;
	for (let button of buttons) 
	{
		if (button.innerHTML !== "X" && button.innerHTML !== "O") 
		{
			availableChoice.push(idx);
		}

		idx++;
	}

	// pick a random available button
	let randomchoice = Math.floor(Math.random() * (availableChoice.length));

	// set button properties to computer's action
	buttons[availableChoice[randomchoice]].innerHTML = 'O';
	buttons[availableChoice[randomchoice]].classList.add('o');
	buttons[availableChoice[randomchoice]].disabled = true;

	switchTurn();
}