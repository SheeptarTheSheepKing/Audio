//JavaScript audiotest.js
var audio, playbtn, seek_bar;
	function initAudioPlayer(){
		audio = new Audio();
		audio.src = "WHIH.mp3";
		audio.loop = true;
		audio.play();
		//Set object references
		playbtn = document.getElementById("playpausebtn");
		mutebtn = document.getElementById("mutebtn");
		//Add Event Handling
		playbtn.addEventListener("click", playPause);
		mutebtn.addEventListener("click", mute);
		//functions
		function playPause() {
			if(audio.paused) {
				audio.play();
				playbtn.style.background = "url(Images/pause.png) no-repeat";
			} else {
				audio.pause();
				playbtn.style.background = "url(Images/play.png) no-repeat";
			}
			
		}
		function mute() {
			if(audio.muted) {
				audio.muted = false;
				mutebtn.style.background = "url(Images/speaker.png) no-repeat";
			} else {
				audio.muted = true;
				mutebtn.style.background = "url(Images/muted.png) no-repeat";
			}
		}
	}
	window.addEventListener("load", initAudioPlayer);