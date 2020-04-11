//anonymous function called at the very begin of the code loading.
document.addEventListener("DOMContentLoaded", function(){
	//global atribute, used to control the play and pause events
	this.timer = "";

	//creating listeners for the minus and plus buttons
	document.querySelector('#minus_btn').addEventListener('click', subtract, false)
	document.querySelector('#plus_btn').addEventListener('click', increase, false)
	document.querySelector('#play_btn').addEventListener('click', direction , false)

	console.log("DOM completamente carregado e analisado");

	function getButtonName(){
		return document.querySelector('#play_btn').innerHTML.toLowerCase();
	}

	function changeButtonName(){
		var name = getButtonName();
		if(name == "play")
			document.querySelector('#play_btn').innerHTML = "Pause";
		if(name == "pause")
			document.querySelector('#play_btn').innerHTML = "Play";
	}

	//called by the listener when button pressed
	function subtract(){
		clearInterval(timer); // stops audio in case it's playing
		if(getButtonName() == "pause")
			changeButtonName();

		let speed = document.querySelector('#speed').innerHTML;
		if(speed > 1)
			document.querySelector('#speed').innerHTML = parseInt(speed) -1;
	}
	//called by the listener when button pressed
	function increase(){
		clearInterval(timer); // stops audio in case it's playing
		if(getButtonName() == "pause")
			changeButtonName();
		
		let speed = document.querySelector('#speed').innerHTML;
		document.querySelector('#speed').innerHTML = parseInt(speed) + 1;
	}

	function direction(){
		var buttonName = getButtonName();

		if(buttonName == "play")
			start();

		if(buttonName == "pause")
			stop()
	}

	function stop(){
		changeButtonName();
		clearInterval(timer);
	}

	//called when play_btn is pressed
	function start(){
		changeButtonName();
		var speed = parseInt(document.querySelector('#speed').innerHTML);
		var ms = 60000;
		var interval = ms / speed;

		function player(){
			var audio = document.querySelector('#sound_low');
			audio.play();
			audio.currentTime = 0;
		} 

		timer = setInterval(player, interval);
		
	}

},false)
