var chessButton = document.getElementById("chess");
chessButton.addEventListener("click", function() {
    console.log("Tea");
    var xhr1 = new XMLHttpRequest();
    xhr1.onreadystatechange = function() {
        if(xhr1.readyState == 4 && xhr1.status === 200) {
            responseObject = JSON.parse(xhr1.responseText);
            var newContent = "";
            for (var i = 0; i < responseObject.chess.length; i++) {
                newContent += "<p>Day: " + responseObject.chess[i].Day + "<br>";
                newContent += "<p>Time: " + responseObject.chess[i].Time + "<br>";
                newContent += "<p>Location: " + responseObject.chess[i].Location + "<br>";
                newContent += "<p>Skill Level: " + responseObject.chess[i].Skill + "</p>";
                newContent += "<hr>";
            }
            document.getElementById("content").innerHTML = newContent;
            chessButton.style.visibility = "hidden";
            roboButton.style.visibility = "visible";
            esportButton.style.visibility = "visible";
        }
    }
    xhr1.open('GET', 'js/chess_times.json', true);
    xhr1.send();
})
var roboButton = document.getElementById("robotic");
roboButton.addEventListener("click", function() {
    console.log("Tea");
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function() {
        if(xhr2.readyState == 4 && xhr2.status === 200) {
            responseObject = JSON.parse(xhr2.responseText);
            var newContent = "";
            for (var i = 0; i < responseObject.robotic.length; i++) {
                newContent += "<p>Day: " + responseObject.robotic[i].Day + "<br>";
                newContent += "<p>Time: " + responseObject.robotic[i].Time + "<br>";
                newContent += "<p>Location: " + responseObject.robotic[i].Location + "<br>";
                newContent += "<p>Skill Level: " + responseObject.robotic[i].Skill + "</p>";
                newContent += "<hr>";
            }
            document.getElementById("content").innerHTML = newContent;
            roboButton.style.visibility = "hidden";
            chessButton.style.visibility = "visible";
            esportButton.style.visibility = "visible";
        }
    }
    xhr2.open('GET', 'js/robotic_times.json', true);
    xhr2.send();
})
var esportButton = document.getElementById("esport");
esportButton.addEventListener("click", function() {
    console.log("Tea");
    var xhr3 = new XMLHttpRequest();
    xhr3.onreadystatechange = function() {
        if(xhr3.readyState == 4 && xhr3.status === 200) {
            responseObject = JSON.parse(xhr3.responseText);
            var newContent = "";
            for (var i = 0; i < responseObject.esport.length; i++) {
                newContent += "<p>Day: " + responseObject.esport[i].Day + "<br>";
                newContent += "<p>Time: " + responseObject.esport[i].Time + "<br>";
                newContent += "<p>Location: " + responseObject.esport[i].Location + "<br>";
                newContent += "<p>Skill Level: " + responseObject.esport[i].Skill + "</p>";
                newContent += "<hr>";
            }
            document.getElementById("content").innerHTML = newContent;
            roboButton.style.visibility = "visible";
            chessButton.style.visibility = "visible";
            esportButton.style.visibility = "hidden";
        }
    }
    xhr3.open('GET', 'js/esport_times.json', true);
    xhr3.send();
})