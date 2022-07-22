let params = [],
	fadeSlider = document.querySelector("#fader"),
	form = document.querySelector("form"),
	mask = document.querySelector("#mask"),
	checkBox = document.querySelector("#checkBox"),
	colourKey = document.querySelector("#colourKey"),
	teePic = document.getElementById("teepicture"),
	holeInfo = document.getElementById("holeInfo"),
	aerialPic = document.getElementById("aerial"),
	surfacePic = document.getElementById("surface"),
	teePicCode = ["BOBP3", "BPB", "CAB", "CHA", "CON", "ERH", "KIOC", "MER", "OAK", "OLY", "PEB", "PGN", "PH2", "ROY", "STA", "TRP", "WHI", "WOL"],
	courseCode = ["BOBP3_13_FC", "BPB", "CAB_11_FC", "CHA_14_FC", "CON_10_FC", "ERH_16_FC", "KIOC", "MER_12_FC", "OAK_09_FC", "OLY_11_FC", "PEB_14_FC", "PGN_22_FC", "PH2_13_FC", "ROY_10_FC", "STA_09_FC", "TRP_20_FC", "WHI_12_FC", "WOL_18_FC"],
	courseName = ["bestofbandonpar3_13_FC", "bethpageblack", "cabodelsol_11_FC", "chambersbay_14_FC", "congressional_10_FC", "erinhills_16_FC", "kiawah", "merion_12_FC", "oakmont_09_FC", "olympicclub_11_FC", "pebblebeach_14_FC", "pganational_22_FC", "pinehurst2_13_FC", "royalstgeorges_10_FC", "standrews_09_FC", "torreypines_20_FC", "whistler_12_FC", "wolfcreek_18_FC"],
	bandonCourse = ["bandondunes_13_FC/BD_13_FC_H12/BD_13_FC_H12", "oldmacdonald_13_FC/OMD_13_FC_H05/OMD_13_FC_H05", "bandonpreserve_13_FC/BP_13_FC_H02/BP_13_FC_H02", "bandontrails_13_FC/BT_13_FC_H02/BT_13_FC_H02", "pacificdunes_13_FC/PD_13_FC_H05/PD_13_FC_H05", "bandonpreserve_13_FC/BP_13_FC_H04/BP_13_FC_H04", "oldmacdonald_13_FC/OMD_13_FC_H08/OMD_13_FC_H08", "bandontrails_13_FC/BT_13_FC_H05/BT_13_FC_H05", "bandonpreserve_13_FC/BP_13_FC_H05/BP_13_FC_H05", "pacificdunes_13_FC/PD_13_FC_H10/PD_13_FC_H10", "pacificdunes_13_FC/PD_13_FC_H11/PD_13_FC_H11", "bandondunes_13_FC/BD_13_FC_H06/BD_13_FC_H06", "oldmacdonald_13_FC/OMD_13_FC_H12/OMD_13_FC_H12", "pacificdunes_13_FC/PD_13_FC_H14/PD_13_FC_H14", "bandontrails_13_FC/BT_13_FC_H17/BT_13_FC_H17", "bandondunes_13_FC/BD_13_FC_H15/BD_13_FC_H15", "pacificdunes_13_FC/PD_13_FC_H17/PD_13_FC_H17", "bandonpreserve_13_FC/BP_13_FC_H09/BP_13_FC_H09"],
	zoomIn = document.querySelectorAll("#imgCont img");

for (i = 0; i < zoomIn.length; i++) {
	zoomIn[i].addEventListener("click", fullsize, false);
}

fadeSlider.addEventListener("input", imgOpacity, false);
checkBox.addEventListener("input", hideKey, false);

for (i = 0; i < 2; i++) {
	document.getElementsByTagName("select")[i].addEventListener("change", selection, false);
}

function options() {
	for (i = 0; i < 2; i++) {
		params[i] = document.querySelectorAll("select")[i].value;
	}
}

function selection() {
	options();
	teePic.src = `https://securewgt-a.akamaihd.net/assets/community/images/wgt/courses/${teePicCode[params[0]]}_H${params[1].padStart(2, 0)}_TeeShot.jpg`;
	if (courseCode[params[0]] !== "BOBP3_13_FC") {
		aerialPic.src = `https://securewgt-a.akamaihd.net/versions/169789/courses/${courseName[params[0]]}/${courseCode[params[0]]}_H${params[1].padStart(2, 0)}/${courseCode[params[0]]}_H${params[1].padStart(2, 0)}_aerial.jpg`;
		surfacePic.src = `https://securewgt-a.akamaihd.net/versions/169789/courses/${courseName[params[0]]}/${courseCode[params[0]]}_H${params[1].padStart(2, 0)}/${courseCode[params[0]]}_H${params[1].padStart(2, 0)}_surface.gif`;
	} else {
		aerialPic.src = `https://securewgt-a.akamaihd.net/versions/169789/courses/${bandonCourse[params[1] - 1]}_aerial.jpg`;
		surfacePic.src = `https://securewgt-a.akamaihd.net/versions/169789/courses/${bandonCourse[params[1] - 1]}_surface.gif`
	}
	fetch("courses.json")
	.then(response => response.json())
	.then(data => {
		holeInfo.innerHTML = data[courseName[params[0]]].Holes[params[1]-1];
	})
}

function fullsize() {
	aerialPic.classList.toggle("zoom");
	surfacePic.classList.toggle("zoom");

	if (aerialPic.classList.contains("zoom")) {
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

function hideKey() {
	checkBox.checked === true ? colourKey.style.visibility = "hidden" : colourKey.style.visibility = "visible";
}

selection();

$(document).ready(function () {

	$(colourKey).draggable({ "revert": true });

});