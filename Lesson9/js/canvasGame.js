var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var startScreen = document.getElementById("start_screen");
var startButton = document.getElementById("start_button");
var lossScreen = document.getElementById("player_loss");
var score = 0;
var highScore = 0;

canvas.width = 600;
canvas.height = 350;

class Player {
    constructor() {
        this.position = {
            x: 25,
            y: (canvas.height / 2) - 25
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 40
        this.height = 40
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update() {
        this.position.y += this.velocity.y;
    }
}
class Tube {
    constructor() {
        this.r = Math.floor(Math.random() * (250 - 75) + 50);
        this.width = 50
        this.height = 75
        this.position = {
            x: 600, 
            y: 0
        }
        this.velocity = {
            x: -5,
            y: 0
        }
        this.top = {
            height: 0,
            y: 0
        }
        this.bot = {
            height: 0,
            y: 0
        }
    }
    drawTop() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, 0, this.width, this.r); //522
        this.top.height = this.r;
        this.top.y = 0;
    }
    drawBot() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.r + 75, this.width, canvas.height - this.r + 75);
        this.bot.height = canvas.height - this.r + 75;
        this.bot.y = this.r + 75;
    }
    update() {
        this.position.x += this.velocity.x;
    }
}
const player = new Player();
tubeArray = [];
setInterval(function() {tubeArray.push(new Tube())}, 800); // adding new anonymous item to tube array every second

function animate() {
    const animation = window.requestAnimationFrame(animate);
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // drawing new tubes in tubeArray
    tubeArray.forEach(function(tube) {
        tube.drawTop();
        tube.drawBot();
        tube.update();
        if (tube.position.x < -50) { // removing tube once it leaves the screen
            tubeArray.shift();
        }

        // handling collisions
            // handling top tube collisions
        if (player.position.y <= tube.top.height &&
            player.position.x + player.width == tube.position.x ||
            player.position.x >= tube.position.x && 
            player.position.x <= tube.position.x + tube.width &&
            player.position.y <= tube.top.height ||
            // handling bottom tube collisions
            player.position.y + player.height >= tube.bot.y &&
            player.position.x + player.width == tube.position.x ||
            player.position.x >= tube.position.x &&
            player.position.x <= tube.position.x + tube.width &&
            player.position.y + player.height >= tube.bot.y ||
            // handling canvas collisions
            player.position.y <= 0 ||
            player.position.y + player.height >= canvas.height) { // this tehcnically shouldn't be here, yet it works (handling canvas collisions through the tube array)
                console.log("touch");
                window.cancelAnimationFrame(animation);
                startScreen.style.backgroundColor = "rgba(0, 0, 0, 0.514)";
                lossScreen.style.display = "block";
                document.getElementById("final_score").innerText = "Final score: " + score;
        }
        if (player.position.x == tube.position.x) {
            score++;
            document.getElementById("score").innerText = "S: " + score;
        }
    });
    // handling score keeping
    if (score > highScore) {
        highScore = score;
        document.getElementById("high_score").innerText = "HI: " + highScore;
    }
    player.draw();
    player.update();
    // adding movement to player
    document.addEventListener("keydown", (e) => {
        if (e.key == "ArrowUp") {
            player.velocity.y = -6;
        }
        if (e.key == "ArrowDown") {
            player.velocity.y = 6;
        }
    });
    document.addEventListener("keyup", (e) => {
        if (e.key == "ArrowUp") {
            player.velocity.y = 0;
        }
        if (e.key == "ArrowDown") {
            player.velocity.y = 0;
        }
    });
}
// game start
document.getElementById("start_button").addEventListener("click", function() {
    animate();
    startScreen.style.backgroundColor = "rgba(0, 0, 0, 0)";
    startButton.style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("high_score").style.display = "block";
});
// game reset and retry
document.getElementById("retry_button").addEventListener("click", function() {
    score = 0;
    document.getElementById("score").innerText = "S: " + score;
    tubeArray = [];
    startScreen.style.backgroundColor = "rgba(0, 0, 0, 0)";
    lossScreen.style.display = "none";
    animate();
})