var annTitle = [];
var annDetails = [];
var annGrade = [];
var annGender = [];
var annClub = [];
var annDateTime = [];
var index = 0;

function getAnnInfo() {
    annTitle[index] = document.getElementById("title").value;
    annDetails[index] = document.getElementById("details").value;
    annGrade[index] = document.getElementById("grade").value;
    annGender[index] = document.getElementById("gender").value;
    annClub[index] = document.getElementById("club").value;
    annDateTime[index] = new Date().toLocaleString();
}

function storeAnn() {
    localStorage.setItem("AnnCount:", index);
    localStorage.setItem("Title:", JSON.stringify(annTitle));
    localStorage.setItem("Details:", JSON.stringify(annDetails));
    localStorage.setItem("Grade:", JSON.stringify(annGrade));
    localStorage.setItem("Gender:", JSON.stringify(annGender));
    localStorage.setItem("Club:", JSON.stringify(annClub));
    localStorage.setItem("DateTime:", JSON.stringify(annDateTime));
}

function retrieveAnn() {
    annTitle = JSON.parse(localStorage.getItem("Title:"));
    annDetails = JSON.parse(localStorage.getItem("Details:"));
    annGrade = JSON.parse(localStorage.getItem("Grade:"));
    annGender = JSON.parse(localStorage.getItem("Gender:"));
    annClub = JSON.parse(localStorage.getItem("Club:"));
    annDateTime = JSON.parse(localStorage.getItem("DateTime:"));
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


