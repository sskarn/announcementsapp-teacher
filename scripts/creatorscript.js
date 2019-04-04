var annTitle;
var annDetails;
var annGrade;
var annGender;
var annClub;

function getData() {
annTitle = document.getElementById("title").value;
annDetails = document.getElementById("details").value;
annGrade = document.getElementById("grade").value;
annGender = document.getElementById("gender").value;
annClub = document.getElementById("club").value;
// alert(annTitle + annDetails + annGrade + annGender + annClub);
localStorage.setItem("Title:", annTitle);
localStorage.setItem("Details:", annDetails);
localStorage.setItem("Grade:", annGrade);
localStorage.setItem("Gender:", annGender);
localStorage.setItem("Club:", annClub);
}


