var video = document.querySelector("#player1"); 
var vidVolume = document.querySelector("#volume");
var vidMute = document.getElementById("mute");


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	console.log(video.currentTime);
	vidVolume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log(video.currentTime + "s");
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		vidMute.innerHTML = "Unmute";
	} else {
		video.muted = false;
		vidMute.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function(){
	console.log(video.volume);
	video.volume = document.querySelector("input").value/100;
	vidVolume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.className += " oldSchool";
});

document.querySelector("#orig").addEventListener("click", function(){
	video.className = "video";
});