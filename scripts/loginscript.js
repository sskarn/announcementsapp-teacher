/* 
Karnbir Saini
ICS3UR-B
April 25, 2019
Teacher Announcement Creator Login Page JS - proof of concept login page
https://github.com/sskarn/announcementsapp-teacher
*/

var password;
// create password variable
var login = "";
// create login variable as a string

/*
function passwordCheck()
- sets password var to value from HTML password input
- if statement tests for input of "NPSS" and if true:
	- login variable gets set to <a> tag which links to creator.html
	- login div in HTML gets set to login variable to display link on the HTML page
*/

function passwordCheck() {
	password = document.getElementById("password").value;
	if (password === "NPSS") {
		login = "<a href='creator.html'>Login</a>";
		document.getElementById("login").innerHTML = login;
	}
}
