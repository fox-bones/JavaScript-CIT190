var eyes = document.getElementsByClassName("eye");
var laser = new Audio("./media/laser_sfx.mp3");
// adding shooting gallery to main page
for (let i = 0; i < eyes.length; i++) {
    eyes[i].addEventListener("click", function() {
        this.style.background = "black";
        laser.play();
    })
    eyes[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "white";
    })
    eyes[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "black";
    })
}

// adding moving game discriptions to main anchor links
var d = document.getElementsByClassName("description"); // returns an array object with each class element 
var g = document.getElementsByClassName("game"); // returns an array object with each class element 
function moveDescrip(event, descr)
{
    var x = event.clientX + 5; // accessing mouse X poisition on movement, with offset
    var y = event.clientY + 5; // accessing mouse Y poisition on movement, with offest
    descr.style.top = y + "px";
    descr.style.left = x + "px";
}
function showDescrip(show, game)
{
    if (show == true) {
        game.style.visibility = "visible";
    } else {
        game.style.visibility = "hidden";
    }
}
for (let i = 0; i < g.length; i++) { // adding eventListeners to array object g
    g[i].addEventListener("mouseover", function() {
        showDescrip(true, d[i]);
    })
    g[i].addEventListener("mouseout", function() {
        showDescrip(false, d[i]);
    })
    g[i].addEventListener("mousemove", function() {
        moveDescrip(event, d[i]);
    })
}