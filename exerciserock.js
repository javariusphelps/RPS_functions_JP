var userWins = 0;
var computerWins = 0;

/*

var myObj = {
	name: 'JP',
	eyeColor: getEyeColor(),	
};

*/
var computer = {
	name: 'computer',
	choice: '',
};

var user = {
	name: 'user1',
	choice:'',
};


function playGame(player1, player2, numberOfRounds) {

	while(userWins < numberOfRounds && computerWins < numberOfRounds) {

		var choice = ['rock' , 'paper' , 'scissors'];

		//var randomNumber = Math.random();
		//console.log(randomNumber);
		// function myFunction() { ... }
		// () parenthesis
		// [] bracket
		// {} curly braces

		function getChoice() {
			var randomNumber = Math.random();
			//console.log(randomNumber);

			if ( randomNumber < 0.34 ) {
				return choice[0];
			}
			else if (randomNumber < 0.67) {
				return choice[1];
			}
			else {
				return choice[2]; 
			}
		}

		computer.choice = getChoice();
		user.choice = getChoice();

		//console.log(computer.choice);
		//console.log(user.choice);

		function playRound() {
			var computerChoice = computer.choice;
			var userChoice = user.choice; 

			if (computerChoice == userChoice){
				return 'Computer:' + computerChoice + '\nUser:'+ userChoice +'\nIt is a tie';
			}

			if (computerChoice == 'rock'){
				if (userChoice == 'scissors'){
					computerWins++;	
					return 'Computer:' + computerChoice + '\nUser:'+ userChoice +'\nYou Lost!';
				}
				else {
					userWins++;
					return 'Computer:' + computerChoice + '\nUser:'+ userChoice +'\nYou Won!';
				}
			}

			if (computerChoice == 'paper'){
				if (userChoice == 'scissors'){
					userWins++;
					return 'Computer:' + computerChoice + '\nUser:'+ userChoice +'\nYou Won!';
				}
				else {
					computerWins++;
					return 'Computer:' + computerChoice + '\nUser:'+ userChoice +'\nYou Lost!';
				}
			}

			if (computerChoice == 'scissors'){
				if (userChoice == 'paper'){
					computerWins++;
					return 'Computer:' + computerChoice + '\nUser:'+ userChoice +'\nYou Lost!';
				}
				else {
					userWins++;
					return 'Computer:' + computerChoice + '\nUser:'+ userChoice +'\nYou Won!';
				}
			}
		}
			
		console.log(playRound() + '\n');
	}

	console.log('Game over: You had ' + userWins + ' wins and the Computer had ' + computerWins);
}

playGame(computer, user, 5);