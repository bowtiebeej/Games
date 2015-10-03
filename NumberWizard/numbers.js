
//Declaring Global Variables
var max;
var min;
var guess;
var response;
var count;




//Start or restart the game
function StartGame() {
	//Initializing global variables
	max = 101;//Need to add 1 to max in order for max to be an option as it rounds down so will get stuck
	min = 1;
	guess = 50;
	count = 0;
	response = document.getElementById('wizardText');

	Guessing(max, min, guess, response);
	return;
}

//Main Gameplay
function Guessing(max, min, guess, response) {
	//Remove Got It Button
	var elem = document.getElementById('gotIt');
	elem.parentNode.removeChild(elem);

	//Initial Guess
	response.value = 'Is your number ' + guess.toString() + '?';

	//Creating Answer Buttons
	var low = document.createElement("input");
	low.id = "lower"
	low.type = "button";
	low.value = "LOWER";
	low.onclick =
	function () {
		Lower();
	};
	document.getElementById("guessingGame").appendChild(low);

	var high = document.createElement("input");
	high.id = "higher";
	high.type = "button";
	high.value = "HIGHER";
	high.onclick =
	function () {
		Higher();
	};
	document.getElementById("guessingGame").appendChild(high);

	var equal = document.createElement("input");
	equal.id = "thatsit";
	equal.type = "button";
	equal.value = "THAT'S IT";
	equal.onclick =
	function () {
		ThatsIt();
	};
	document.getElementById("guessingGame").appendChild(equal);

	//Button Responses
	function Higher() {
		CountCheck();
		min = guess;
		guess = (max + min) / 2;
		guess = parseInt(guess.toString());
		NextGuess();
		return;
	}

	function Lower() {
		//CountCheck();
		max = guess;
		guess = (max + min) / 2;
		guess = parseInt(guess.toString());
		NextGuess();
		return;

	}

	//Next Guess from Computer
	function NextGuess() {
		response.value = 'OK, Is your number ' + guess.toString() + '?';
		count++;
		CountCheck();
		TrickyYou();
		return;
	}

	//This should check for cheating and call you out if you cheat
	//I need to figure out the right formula for the if statement to work like in Unity
	function TrickyYou() {
		if (min == guess || max == guess) {
			response.value = "You're trying to trick me...\nI Win!\nCan you play fair?";
			YesNo("numbers.html", "index.html", "guessingGame");
		}
		else {
			return;
		}
	}

}

	//Win or Lose or Cheat Results
	function YouWin() {
		response.value = "You Win!\n\nDo You Want To Play Again?";
		YesNo("numbers.html", "index.html", "guessingGame");
	}

	function ThatsIt() {
		response.value = "I WIN!\n\nDo you want to play again?";
		YesNo("numbers.html", "index.html", "guessingGame");
	}


	//Checks the Counter, counter can be set here for more or less guesses
	//I may create a variable for use within the counter to allow user selection of guesses
	//Or set a function to calculate number of guesses based on user selection of max
	function CountCheck() {
		if (count >= 5) {
			YouWin();
		}
		else {
			return;
		}
	}


	//Yes and No buttons created
	//Create Code Snippit for future use
	function YesNo(yp, np, ids) {
		//remove buttons only on game page, if on front page function doesn't work why?
		if (ids === "guessingGame") {
			var elemh = document.getElementById('higher');
			elemh.parentNode.removeChild(elemh);
			var eleml = document.getElementById('lower');
			eleml.parentNode.removeChild(eleml);
			var eleme = document.getElementById('thatsit');
			eleme.parentNode.removeChild(eleme);
		}
		//initialize button variables
		var Si = document.createElement("input");
		var No = document.createElement("input");
		//Yes button
		Si.type = "button";
		Si.id = "YesButton";
		Si.value = "Yes";
		Si.onclick =
		function () {
			window.location.href = yp;
		};
		document.getElementById(ids).appendChild(Si);
		//No button
		No.type = "button";
		No.id = "NoButton";
		No.value = "No";
		No.onclick =
		function () {
			window.location.href = np;
		};
		document.getElementById(ids).appendChild(No);
	}


		//response.value = "Guess = " + guess.toString() + "\nMax = " + max.toString() + "\nMin = " + min.toString();//line of debuging code
