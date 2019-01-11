let params = [];
let phraseNum;
let speaker = document.getElementsByClassName("fas")[0];
let phrases = ["http://media5.wgt.com/versions/174509/versions/174509/uiassets/sounds/game/","let_the_big_dog_eat.mp3","beautiful_shot.mp3","never_up_never_in.mp3","choke.mp3","thats_a_huge_drive.mp3","that_one_is_wet.mp3","get_in_the_hole.mp3","garden_spot.mp3","time_to_reload.mp3","crushed_it.mp3","nice_shot.mp3","good_ball.mp3","you_hit_that_one_tight.mp3","now_thats_a_golf_shot.mp3","going_to_have_some_beach_time.mp3","come_on_be_right.mp3","drained_it.mp3","grip_it_and_rip_it.mp3","amazing.mp3","solid_putt.mp3","knocked_right_in_the_cup.mp3","good_read_great_stroke.mp3","great_roll.mp3","settled_in_very_nicely.mp3","really_great_shot.mp3","youre_going_to_like_that_one.mp3","right_in_the_drink.mp3","dance_floor.mp3","solid_shot.mp3","got_it.mp3","very_nice_shot.mp3","thats_a_beauty.mp3"];

document.getElementById("launch").addEventListener("click",rungame,false);

speaker.addEventListener("click", changeIcon);

localStorage.key("audio") === null ? localStorage.setItem("audio","fa-volume-up") : undefined;

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
	
	phraseNum = Math.floor(Math.random()*phrases.length - 1) + 1;
	sound.src = phrases[0] + phrases[phraseNum];
	sound.play();
	
}

function changeIcon(){
	
	localStorage["audio"] === "fa-volume-up" ? localStorage["audio"] = "fa-volume-mute" : localStorage["audio"] = "fa-volume-up";
	localStore();
}

function localStore(){
	
	if (localStorage["audio"] === "fa-volume-up") {
		speaker.classList.add("fa-volume-up");
		speaker.classList.remove("fa-volume-mute");
		sound.muted = false;
	} else {
		speaker.classList.remove("fa-volume-up");
		speaker.classList.add("fa-volume-mute");
		sound.muted = true;
	}
	
}

selection();
localStore();