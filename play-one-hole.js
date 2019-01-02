let params = [];
let phraseNum;
let phrases = ["https://media5.wgt.com/versions/174509/versions/174509/uiassets/sounds/game/","let_the_big_dog_eat.mp3","beautiful_shot.mp3","never_up_never_in.mp3","choke.mp3","thats_a_huge_drive.mp3","that_one_is_wet.mp3","get_in_the_hole.mp3","garden_spot.mp3","time_to_reload.mp3","crushed_it.mp3","nice_shot.mp3","good_ball.mp3"];

document.getElementById("launch").addEventListener("click",rungame,false);

for (i=0; i<4; i++){
document.getElementsByTagName("select")[i].addEventListener("change",selection,false);
}

var sound = new Audio();
sound.volume = "0.5";


function rungame(){
	options();
	window.open("http://www.wgt.com/gameclient.aspx?view=practiceHole&JSON=%7B%22HoleNum%22%3A%22"+params[1]+"%22%2C%22GameType%22%3A1%2C%22GameMode%22%3A2%2C%22Wind%22%3A%22"+params[3]+"%22%2C%22TeeID%22%3A%22Tee_"+params[2]+"%22%2C%22GameCourseId%22%3A%22"+params[0]+"%22%2C%22Brand%22%3A%22%22%7D","","channelmode=1,fullscreen=1,width=3000,height=2000");
	playMe();
}

function options(){
	
	for (i=0; i<4; i++){
	params[i] = document.querySelectorAll("select")[i].value;
}		
}

function selection(){
	
	options();
	document.getElementById("teepicture").src = "images/"+params[0]+"/"+params[1]+".jpg";
	
}

function playMe(){
	
	phraseNum = Math.floor(Math.random()*phrases.length) + 1;
	sound.src = phrases[0] + phrases[phraseNum];
	sound.play();
	
}

selection();