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
		let speed = document.querySelector('#speed').innerHTML;
		if(speed > 1)
			document.querySelector('#speed').innerHTML = parseInt(speed) -1;
	}
	//called by the listener when button pressed
	function increase(){
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

		document.getElementById("led_1").style.color = "black";
		document.getElementById("led_1").style.backgroundColor = "#b6ead4";
		document.getElementById("led_1").style.boxShadow = "0 0 0";

		document.getElementById("led_2").style.color = "black";
		document.getElementById("led_2").style.backgroundColor = "#b6ead4";
		document.getElementById("led_2").style.boxShadow = "0 0 0";

		clearInterval(timer);
	}

	//called when play_btn is pressed
	function start(){
		this.counter = 0;
		this.audio_id = ["#sound_high", "#sound_low"];

		changeButtonName();
		var speed = parseInt(document.querySelector('#speed').innerHTML);
		var ms = 60000;
		var interval = ms / speed;

		function getCounter(){
			return (this.counter++)%2;
		}

		function changeLedColor(counter){
			if(counter == 0){
				document.getElementById("led_1").style.color = "white";
				document.getElementById("led_1").style.backgroundColor = "#00ea00";
				document.getElementById("led_1").style.boxShadow = "1px 1px 3px green";

				document.getElementById("led_2").style.color = "black";
				document.getElementById("led_2").style.backgroundColor = "#b6ead4";
				document.getElementById("led_2").style.boxShadow = "0 0 0";

			}
			else{
				document.getElementById("led_2").style.color = "white";
				document.getElementById("led_2").style.backgroundColor = "#00ea00";
				document.getElementById("led_2").style.boxShadow = "1px 1px 3px green";

				document.getElementById("led_1").style.color = "black";
				document.getElementById("led_1").style.backgroundColor = "#b6ead4";
				document.getElementById("led_1").style.boxShadow = "0 0 0";
			}
		}

		function player(){
			var counter = getCounter();
			var audio = document.querySelector(audio_id[counter]);
			audio.play();
			changeLedColor(counter);
			audio.currentTime = 0;
		} 

		timer = setInterval(player, interval);
		
	}

},false)
