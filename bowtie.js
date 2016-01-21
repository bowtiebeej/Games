window.onload = function () {
    AirClear();
    Smelly();
}

//Creates Header text and top navigation menu
//Function name because it is the header so airhead and clear headed...also the footer is called Smelly
function AirClear() {
    var tophat = document.createElement("div");
    tophat.className = "col-md-12 banner";

//site title and subtitle
    tophat.innerHTML = "\<h1\> Games For You To Play\</h1\>\<h3\>Just A Few Treats From Uncle BJ\<\/h3\>"

    document.getElementById("gamesTitle").appendChild(tophat);

//blocked out code for nav menu
//    var menuMain = document.createElement("ul");

//main navigation menu
//     menuMain.innerHTML = "\<li\>\<a class=\"homenav\" href=\"index.html\"\>Home\</a\>\</li\>                \<li\>\<a class=\"aboutnav\" href=\"about.html\"\>About\</a\>\</li\>                \<li\>\<a class=\"blognav\" href=\"blog.html\"\>Blog\</a\>\</li\>                \<li\>\<a class=\"toolsnav\" href=\"tools.html\"\>Tools\</a\>\</li\>                \<li\>\<a class=\"learningnav\" href=\"learning.html\"\>Learning\</a\>\</li\>"
//
//     document.getElementById("top-menu").appendChild(menuMain);

}

//Footer with copyright to current year
//Function name because well feet stink
//Link to Impressum to come later
function Smelly() {
    var feet = document.createElement("div");

    feet.className = "copyright";

    var startYear = 2015;
    var now = new Date;
    var theYear = now.getYear();
    if (theYear < 1900)
        theYear = theYear + 1900;
    if (theYear > startYear) {
        feet.innerHTML = "\<h5\>\&copy 2015 - " + theYear + " BowTie Beej. All Rights Reserved Except Where Stated in \<a href=\"impressum.html\" rel=\"nofollow\"\>Impressum.\<\/a\>\<\/h5\>";
        document.getElementById("myFooter").appendChild(feet);
    }
    else {
        feet.innerHTML = "\<h5\>\&copy " + startYear + " BowTie Beej. All Rights Reserved Except Where Stated in \<a href=\"impressum.html\" rel=\"nofollow\"\>Impressum.\<\/a\>\<\/h5\>";
        document.getElementById("myFooter").appendChild(feet);
    }

//     if (CheckDate(theYear, startYear) === true)
//         NextYear(feet, startYear, theYear);
//     else
//         SameYear(feet, startYear);
//
// }
//
// Checks the current year against the start year and returns true if current year is later than start year
// function CheckDate(theYear, startYear) {
//     if (theYear > startYear)
//         return true;
//     else return false;
// }
//
// Footer information if both CDP and JDT are past start year
// function NextYear(feet, startYear, theYear) {
//     feet.innerHTML = "\<h5\>\&copy " + startYear + " - " + theYear + " BowTie Beej. All Rights Reserved Except Where Stated in \<a href=\"impressum.html\" rel=\"nofollow\"\>Impressum.\<\/a\>\<\/h5\>";
//     document.getElementById("footer").appendChild(feet);
// }
//
// function SameYear(feet, startYear) {
//     feet.innerHTML = "\<h5\>\&copy " + startYear + " BowTie Beej. All Rights Reserved Except Where Stated in \<a href=\"impressum.html\" rel=\"nofollow\"\>Impressum.\<\/a\>\<\/h5\>";
//     document.getElementById("footer").appendChild(feet);
// }