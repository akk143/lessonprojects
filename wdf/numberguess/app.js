// UI

const minnum = document.querySelector('.minnumber'),
	maxnum = document.querySelector('.maxnumber'),
	getinput = document.querySelector('#guessnumber'),
	getbtn = document.querySelector('#btn'),
	message1 = document.querySelector('.message1'),
	message2 = document.querySelector('.message2'),
	getgameform = document.getElementById('gameform');

const min = 1,
	  max = 20,
	  winningnum = randomnum(min,max);

let gameleft = 5;

minnum.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener('click',function(e){

	let guess = parseInt(getinput.value);

	if(guess < min || guess > max || isNaN(guess)){
		setmessage2(`Please enter a number between ${min} to ${max}`, "red");
	}


	if(guess === winningnum){

		getinput.disabled = true;
		getinput.style.borderColor = "green";

		gameover(true, `${winningnum} is correct!! You Won!!!`);
        
	}else {
		//Gameover LOST
		gameleft--;


		if(gameleft === 0){
		// Gameover LOST
		gameover(false, `Game Over, You Lose, The correct number is ${winningnum}`);

		}else{

		// Continue Game

		getinput.style.borderColor = "red";

		setmessage1(`${guess} is not correct!, ${gameleft} guess left.`,"blue");

		getinput.value ="";

		getinput.focus();

		}
	}

	e.preventDefault();

});

function setmessage1(msg,color){
	message1.textContent = msg;
	message1.style.color = color;
}

function setmessage2(msg,color){
	message2.textContent = msg;
	message2.style.color = color;

	setTimeout(function(){
		message2.textContent = "";
	},2000);
}

function gameover(won,msg){

	let color;

	won === true ? color ="green" : color = "red";

	getinput.disabled = true;
	getinput.style.borderColor = color;

	setmessage1(msg,color);

	getbtn.value = "Play Again";

	getbtn.classList.add('playagain');
}
	

getgameform.addEventListener('mousedown', function(e){

	if(e.target.className === "btn playagain"){

			window.location.reload();
		}

	});

function randomnum(min,max){
	let getrdm = Math.floor(Math.random()*(max-min)+min);
	return getrdm;
}

// console.log(randomnum(1,10));
// console.log(winningnum);