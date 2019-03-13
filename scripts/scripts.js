var annTitle;
var annDetails;
var annGrade;
var annGender;
var annClubs;

function getData() {
annTitle = document.getElementById("title").value;
annDetails = document.getElementById("details").value;
annGrade = document.getElementById("grade").value;
annGender = document.getElementById("gender").value;
annClubs = document.getElementById("clubs").value;
alert(annTitle + annDetails + annGrade + annGender + annClubs);
}


