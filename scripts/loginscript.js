var password;

function passwordCheck() {
    var password = document.getElementById("password").value;
    if (password === "NPSS") {
        login = "<a href='creator.html'>Login</a>";
        document.getElementById("login").innerHTML = login;
    }
}