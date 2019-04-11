var annTitle = [];
var annDetails = [];
var annGrade = [];
var annGender = [];
var annClub = [];
var i = 0;

function getData() {
	annTitle[i] = document.getElementById("title").value;
	annDetails[i] = document.getElementById("details").value;
	annGrade[i] = document.getElementById("grade").value;
	annGender[i] = document.getElementById("gender").value;
	annClub[i] = document.getElementById("club").value;
	i += 1;
	// alert(annTitle + annDetails + annGrade + annGender + annClub);
	localStorage.setItem("Title:", JSON.stringify(annTitle));
	localStorage.setItem("Details:", JSON.stringify(annDetails));
	localStorage.setItem("Grade:", JSON.stringify(annGrade));
	localStorage.setItem("Gender:", JSON.stringify(annGender));
	localStorage.setItem("Club:", JSON.stringify(annClub));
}


