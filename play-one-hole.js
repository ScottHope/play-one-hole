let params = [],
phraseNum,
speaker = document.getElementsByClassName("fas")[0],
fadeSlider = document.querySelector("#fader"),
form = document.querySelector("form"),
mask = document.querySelector("#mask"),
checkBox = document.querySelector("#checkBox"),
colourKey = document.querySelector("#colourKey"),
launcher = document.getElementById("launch"),
sound = new Audio(),
teePic = document.getElementById("teepicture"),
aerialPic = document.getElementById("aerial"),
surfacePic = document.getElementById("surface"),
phrases = ["http://media5.wgt.com/versions/171580/uiassets/sounds/game/", "let_the_big_dog_eat.mp3", "beautiful_shot.mp3", "never_up_never_in.mp3", "choke.mp3", "thats_a_huge_drive.mp3", "that_one_is_wet.mp3", "get_in_the_hole.mp3", "garden_spot.mp3", "time_to_reload.mp3", "crushed_it.mp3", "nice_shot.mp3", "good_ball.mp3", "you_hit_that_one_tight.mp3", "now_thats_a_golf_shot.mp3", "going_to_have_some_beach_time.mp3", "come_on_be_right.mp3", "drained_it.mp3", "grip_it_and_rip_it.mp3", "amazing.mp3", "solid_putt.mp3", "knocked_right_in_the_cup.mp3", "good_read_great_stroke.mp3", "great_roll.mp3", "settled_in_very_nicely.mp3", "really_great_shot.mp3", "youre_going_to_like_that_one.mp3", "right_in_the_drink.mp3", "dance_floor.mp3", "solid_shot.mp3", "got_it.mp3", "very_nice_shot.mp3", "thats_a_beauty.mp3", "brilliant_shot.mp3", "good_bump_and_run.mp3", "that_looks_really_good.mp3", "bring_your_shovel.mp3","not_too_shabby.mp3","great_play_from_there.mp3","way_to_get_it_close.mp3"],
courseCode = ["BOBP3_13_FC", "BPB", "CAB_11_FC", "CHA_14_FC", "CON_10_FC", "ERH_16_FC", "KIOC", "MER_12_FC", "OAK_09_FC", "OLY_11_FC", "PEB_14_FC", "PH2_13_FC", "ROY_10_FC", "STA_09_FC", "WHI_12_FC", "WOL_18_FC"],
courseName = ["bestofbandonpar3_13_FC", "bethpageblack", "cabodelsol_11_FC", "chambersbay_14_FC", "congressional_10_FC", "erinhills_16_FC", "kiawah", "merion_12_FC", "oakmont_09_FC", "olympicclub_11_FC", "pebblebeach_14_FC", "pinehurst2_13_FC", "royalstgeorges_10_FC", "standrews_09_FC", "whistler_12_FC", "wolfcreek_18_FC"],
bandonCourse = ["bandondunes_13_FC/BD_13_FC_H12/BD_13_FC_H12", "oldmacdonald_13_FC/OMD_13_FC_H05/OMD_13_FC_H05", "bandonpreserve_13_FC/BP_13_FC_H02/BP_13_FC_H02", "bandontrails_13_FC/BT_13_FC_H02/BT_13_FC_H02", "pacificdunes_13_FC/PD_13_FC_H05/PD_13_FC_H05", "bandonpreserve_13_FC/BP_13_FC_H04/BP_13_FC_H04", "oldmacdonald_13_FC/OMD_13_FC_H08/OMD_13_FC_H08", "bandontrails_13_FC/BT_13_FC_H05/BT_13_FC_H05", "bandonpreserve_13_FC/BP_13_FC_H05/BP_13_FC_H05", "pacificdunes_13_FC/PD_13_FC_H10/PD_13_FC_H10", "pacificdunes_13_FC/PD_13_FC_H11/PD_13_FC_H11", "bandondunes_13_FC/BD_13_FC_H06/BD_13_FC_H06", "oldmacdonald_13_FC/OMD_13_FC_H12/OMD_13_FC_H12", "pacificdunes_13_FC/PD_13_FC_H14/PD_13_FC_H14", "bandontrails_13_FC/BT_13_FC_H17/BT_13_FC_H17", "bandondunes_13_FC/BD_13_FC_H15/BD_13_FC_H15", "pacificdunes_13_FC/PD_13_FC_H17/PD_13_FC_H17", "bandonpreserve_13_FC/BP_13_FC_H09/BP_13_FC_H09"],
zoomIn = document.querySelectorAll("#imgCont img");

for (i = 0; i < zoomIn.length; i++) {
	zoomIn[i].addEventListener("click", fullsize, false);
}

launcher.addEventListener("click", rungame, false);
fadeSlider.addEventListener("input", imgOpacity, false);
speaker.addEventListener("click", changeIcon, false);
checkBox.addEventListener("input", hideKey, false);

localStorage.key("audio") === null ? localStorage.setItem("audio", "fa-volume-up") : undefined;

for (i = 0; i < 4; i++) {
	document.getElementsByTagName("select")[i].addEventListener("change", selection, false);
}

sound.volume = "0.5";

function rungame() {
	options();
	window.open("http://www.wgt.com/gameclient.aspx?view=practiceHole&JSON=%7B%22HoleNum%22%3A%22" + params[1] + "%22%2C%22GameType%22%3A1%2C%22GameMode%22%3A2%2C%22Wind%22%3A%22" + params[3] + "%22%2C%22TeeID%22%3A%22Tee_" + params[2] + "%22%2C%22GameCourseId%22%3A%22" + courseCode[params[0]] + "%22%2C%22Brand%22%3A%22%22%7D", "", "channelmode=1,fullscreen=1,width=3000,height=2000");
	playMe();
}

function options() {
	for (i = 0; i < 4; i++) {
		params[i] = document.querySelectorAll("select")[i].value;
	}
}

function selection() {
	options();
	teePic.src = "images/" + courseCode[params[0]] + "/" + params[1] + ".jpg";
	if (courseCode[params[0]] !== "BOBP3_13_FC") {
		aerialPic.src = "http://media5.wgt.com/versions/169789/courses/" + courseName[params[0]] + "/" + courseCode[params[0]] + "_H" + params[1].padStart(2, 0) + "/" + courseCode[params[0]] + "_H" + params[1].padStart(2, 0) + "_aerial.jpg";
		surfacePic.src = "http://media5.wgt.com/versions/169789/courses/" + courseName[params[0]] + "/" + courseCode[params[0]] + "_H" + params[1].padStart(2, 0) + "/" + courseCode[params[0]] + "_H" + params[1].padStart(2, 0) + "_surface.gif";
	}	else {
	aerialPic.src = "http://media5.wgt.com/versions/169789/courses/" + bandonCourse[params[1] - 1] + "_aerial.jpg";
	surfacePic.src = "http://media5.wgt.com/versions/169789/courses/" + bandonCourse[params[1] - 1] + "_surface.gif"
	}
}

function playMe() {
	phraseNum = Math.floor(Math.random() * phrases.length - 1) + 1;
	sound.src = phrases[0] + phrases[phraseNum];
	sound.play();
}

function changeIcon() {
	localStorage["audio"] === "fa-volume-up" ? localStorage["audio"] = "fa-volume-mute" : localStorage["audio"] = "fa-volume-up";
	localStore();
}

function localStore() {
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

function fullsize() {
	aerialPic.classList.toggle("zoom");
	surfacePic.classList.toggle("zoom");

	if (aerialPic.classList.contains("zoom")){
		form.style.display = "block";
		colourKey.style.display = "block";
		mask.style.display = "block";
	} else {
		form.style.display = "none";
		colourKey.style.display = "none";
		surfacePic.style.opacity = "1";
		mask.style.display = "";
		surfacePic.style.transform = "";
		aerialPic.style.transform = "";
	}

	this.id === "aerial" ? (surfacePic.style.opacity = 0, fadeSlider.value = 0) : (surfacePic.style.opacity = 1, fadeSlider.value = 100);

	}

function imgOpacity() {
	surfacePic.style.opacity = this.value / 100;
}

function hideKey(){
	checkBox.checked === true ? colourKey.style.visibility = "hidden" : colourKey.style.visibility = "visible";
}

selection();
localStore();

$(document).ready(function(){

	$(colourKey).draggable({"revert":true});

});
