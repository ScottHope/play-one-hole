let params = [];
document.getElementById("launch").addEventListener("click",rungame,false);
for (i=0; i<4; i++){
document.getElementsByTagName("select")[i].addEventListener("change",selection,false);
}



function rungame(){
	options();
	window.open("http://www.wgt.com/gameclient.aspx?view=practiceHole&JSON=%7B%22HoleNum%22%3A%22"+params[1]+"%22%2C%22GameType%22%3A1%2C%22GameMode%22%3A2%2C%22Wind%22%3A%22"+params[3]+"%22%2C%22TeeID%22%3A%22Tee_"+params[2]+"%22%2C%22GameCourseId%22%3A%22"+params[0]+"%22%2C%22Brand%22%3A%22%22%7D","","channelmode=1,fullscreen=1,width=3000,height=2000")
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

selection();

var music = new Audio();
music.src = "https://brianbennettmusic.co.uk/web/wp-content/uploads/2015/02/BBC-Golf-Theme.mp3";
music.volume = "0.5";
