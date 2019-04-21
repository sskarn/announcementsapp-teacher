var annTitle = [];
var annDetails = [];
var annGrade = [];
var annGender = [];
var annClub = [];
var annDateTime = [];
var annStudentNumber = [];
var index = 0;

function getAnnInfo() {
    annTitle[index] = document.getElementById("title").value;
    annDetails[index] = document.getElementById("details").value;
    annGrade[index] = document.getElementById("grade").value;
    annGender[index] = document.getElementById("gender").value;
    annClub[index] = document.getElementById("club").value;
	annStudentNumber[index] = document.getElementById("student#").value;
    annDateTime[index] = new Date().toLocaleString();
}

function storeAnn() {
    localStorage.setItem("AnnCount:", index);
    localStorage.setItem("AnnTitle:", JSON.stringify(annTitle));
    localStorage.setItem("AnnDetails:", JSON.stringify(annDetails));
    localStorage.setItem("AnnGrade:", JSON.stringify(annGrade));
    localStorage.setItem("AnnGender:", JSON.stringify(annGender));
    localStorage.setItem("AnnClub:", JSON.stringify(annClub));
	localStorage.setItem("AnnStudentNumber:", JSON.stringify(annStudentNumber));
    localStorage.setItem("AnnDateTime:", JSON.stringify(annDateTime));
}

function retrieveAnn() {
    annTitle = JSON.parse(localStorage.getItem("AnnTitle:"));
    annDetails = JSON.parse(localStorage.getItem("AnnDetails:"));
    annGrade = JSON.parse(localStorage.getItem("AnnGrade:"));
    annGender = JSON.parse(localStorage.getItem("AnnGender:"));
    annClub = JSON.parse(localStorage.getItem("AnnClub:"));
	annStudentNumber = JSON.parse(localStorage.getItem("AnnStudentNumber:"));
    annDateTime = JSON.parse(localStorage.getItem("AnnDateTime:"));
}

function createAnn() {
    if (localStorage.getItem("AnnCount:")) {
        index = JSON.parse(localStorage.getItem("AnnCount:"));
        retrieveAnn();
        index += 1;
        getAnnInfo();
        storeAnn();
        alert("Your announcement has been posted.");
    } else {
        getAnnInfo();
        storeAnn();
        alert("Your announcement has been posted.");
    }
}


