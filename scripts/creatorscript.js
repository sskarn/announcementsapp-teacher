/* 
Karnbir Saini
ICS3UR-B
April 25, 2019
Teacher Announcement Creator JS - Allows announcement to be pulled from HTML and set into LocalStorage keys with indexing
https://github.com/sskarn/announcementsapp-teacher
*/

var annTitle = [];
var annDetails = [];
var annGrade = [];
var annGender = [];
var annClub = [];
var annDateTime = [];
var annStudentNumber = [];
// creates Announcement vars of Title, Details, Grade, Gender, Club, Timestamp, and Student Number (if used) as arrays
var index = 0;
// creates index variable used to organize Announcement data in the array

/*
function retrieveAnn()
- used to retrieve past announcements (JSON.parse to allow for multiple) from localStorage keys
- set into JS vars to allow for indexing to continue even after page refresh/reopen to prevent null error
*/

function retrieveAnn() {
	annTitle = JSON.parse(localStorage.getItem("AnnTitle:"));
	annDetails = JSON.parse(localStorage.getItem("AnnDetails:"));
	annGrade = JSON.parse(localStorage.getItem("AnnGrade:"));
	annGender = JSON.parse(localStorage.getItem("AnnGender:"));
	annClub = JSON.parse(localStorage.getItem("AnnClub:"));
	annStudentNumber = JSON.parse(localStorage.getItem("AnnStudentNumber:"));
	annDateTime = JSON.parse(localStorage.getItem("AnnDateTime:"));
}

/*
function getAnnInfo()
- loads announcement data from HTML input into JS vars with indexing
- annDateTime:
	- sets a Date and Time stamp for the announcement using the Date object (MM/DD/YYYY, HH:MM:SS AM/PM)
	- .toLocaleString converts the object to a string
*/

function getAnnInfo() {
	annTitle[index] = document.getElementById("title").value;
	annDetails[index] = document.getElementById("details").value;
	annGrade[index] = document.getElementById("grade").value;
	annGender[index] = document.getElementById("gender").value;
	annClub[index] = document.getElementById("club").value;
	annStudentNumber[index] = document.getElementById("student#").value;
	annDateTime[index] = new Date().toLocaleString();
}

/*
function storeAnn()
- sets JS announcement vars into appropriate LocalStorage keys (using JSON.stringify to allow for multiple values in a key)
- AnnCount LS key stores the index variable to allow for index variable to be saved
*/

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

/*
function createAnn()
- if statement tests for existence of LocalStorage key of AnnCount and if true:
	- index is retrieved from the AnnCount key
	- retrieveAnn() function is ran
	- index is incremented up by 1 to allow for the creation of a new announcement without overwrite
	- getAnnInfo() and storeAnn() functions are ran in order
	- alert is shown to teacher confirming that the announcement they created has been posted
- else statement runs when if is false:
	- getAnnInfo() and storeAnn() functions are ran in order
	- alert is shown to teacher confirming that the announcement they created has been posted
	Note:
		else statement is only used when there are no past announcements.
		storeAnn() creates the AnnCount key from the index var which is used for every announcement created afterwards to allow for multiple announcements to be stored without overwrites 
*/

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
