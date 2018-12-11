var params = [];
document.getElementById("launch").addEventListener("click",rungame,false);



function rungame(){
	for (i=0; i<4; i++){
	params[i] = document.querySelectorAll("select")[i].value;
}	
	window.open("http://www.wgt.com/gameclient.aspx?view=practiceHole&JSON=%7B%22HoleNum%22%3A%22"+params[1]+"%22%2C%22GameType%22%3A1%2C%22GameMode%22%3A2%2C%22Wind%22%3A%22"+params[3]+"%22%2C%22TeeID%22%3A%22Tee_"+params[2]+"%22%2C%22GameCourseId%22%3A%22"+params[0]+"%22%2C%22Brand%22%3A%22%22%7D","","channelmode=1,fullscreen=0,width=300,height=200")
}
