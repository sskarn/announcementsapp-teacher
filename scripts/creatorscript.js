var annTitle = [];
var annDetails = [];
var annGrade = [];
var annGender = [];
var annClub = [];
var index = 0;

function getData() {
	annTitle[index] = document.getElementById("title").value;
	annDetails[index] = document.getElementById("details").value;
	annGrade[index] = document.getElementById("grade").value;
	annGender[index] = document.getElementById("gender").value;
	annClub[index] = document.getElementById("club").value;
	index += 1;
	// alert(annTitle + annDetails + annGrade + annGender + annClub);
	localStorage.setItem("Title:", JSON.stringify(annTitle));
	localStorage.setItem("Details:", JSON.stringify(annDetails));
	localStorage.setItem("Grade:", JSON.stringify(annGrade));
	localStorage.setItem("Gender:", JSON.stringify(annGender));
	localStorage.setItem("Club:", JSON.stringify(annClub));
}


