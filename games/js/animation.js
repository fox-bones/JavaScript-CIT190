// defining canvas elements and resources
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const background = document.getElementById("background");
var sprite = document.getElementById("sprite");
var mSprite = document.getElementById("m-sprite");
var rat = document.getElementById("rat");
var upRat = document.getElementById("up-rat");
var leftRat = document.getElementById("left-rat");
var rightRat = document.getElementById("right-rat");
var startButton = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
canvas.width = 1280;
canvas.height = 650;
canvas.style.border = "solid 1px black"

class Player {
    // defining spawn point and player dimensions
    constructor() {
        this.width = 70;
        this.height = 100;
        this.position = { // spawning player in center of canvas
            x: (canvas.width / 2) - (this.width / 2),
            y: (canvas.height / 2) - (this.height / 2)
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.image = sprite;
    }
    // spawns player based on constructor inputs
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
    // the update method allows for continuous movement
    update() {
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
    }
    // checks whether the player is on the edge of the canvas
    checkCollision() {
        if (this.position.x < 0) {
            this.position.x = 0;
        } 
        else if (this.position.x > (canvas.width - this.width)) {
            this.position.x = canvas.width - this.width;
        } 
        else if (this.position.y < 0) {
            this.position.y = 0;
        }
        else if (this.position.y > canvas.height - this.height) {
            this.position.y = canvas.height - this.height;
        }
    }
}

class Enemy {
    // similar to player, utilizing randomization to spawn
    constructor(direction, image) {
        this.width = 70,
        this.height = 100,
        this.position = {
            x: 0,
            y: 0
        },
        this.velocity = {
            x: 0,
            y: 0
        },
        this.rX = Math.floor(Math.random() * (canvas.width - this.width)), // generating random X value within canvas
        this.rY = Math.floor(Math.random() * (canvas.height - this.height)), // generating random Y value within canvas
        this.direction = direction, 
        this.image = image;
    }
    // trnaslates enemy direction, up, down, left, or right type into movement
    update() {
        if (this.direction == "down") { // properties of downward moving enemy
            this.velocity.y = 7;
            c.drawImage(this.image, this.rX, this.position.y, this.width, this.height);
            this.position.y += this.velocity.y;
            this.position.x = this.rX;
        }
        else if (this.direction == "up") { // properties of upward moving enemy
            this.velocity.y = -7;
            c.drawImage(this.image, this.rX, this.position.y, this.width, this.height);
            this.position.y += this.velocity.y;
            this.position.x = this.rX;
        }
        else if (this.direction == "left") {  // properties of leftward moving enemy
            this.velocity.x = -7;
            c.drawImage(this.image, this.position.x, this.rY, this.width, this.height);
            this.position.x += this.velocity.x;
            this.position.y = this.rY;
            this.width = 100;
            this.height = 70;
        }
        else if (this.direction == "right") {
            this.velocity.x = 7;
            c.drawImage(this.image, this.position.x, this.rY, this.width, this.height);
            this.position.x += this.velocity.x;
            this.position.y = this.rY;
            this.width = 100;
            this.height = 70;
        }
    }
    // rerolls random x and y values
    randomize() {
        //this.rY = Math.floor(Math.random() * (canvas.height - this.height));
        this.rY = Math.floor(Math.random() * (canvas.height));
        //this.rX = Math.floor(Math.random() * (canvas.width - this.width));
        this.rX = Math.floor(Math.random() * (canvas.width));
    }
    // resets enemy to a new, random point based on direction
    reset() {
        if (this.direction == "down") {
            if (this.position.y > canvas.height + this.height) {
                this.randomize();
                this.position.y = 0 - this.height;
                playerScore++;
            }
        }
        else if (this.direction == "up") {
            if (upEnemy.position.y < (0 - upEnemy.height)) {
                this.randomize();
                this.position.y = canvas.height;
                playerScore++;
            }
        }
        else if (this.direction =="left") {
            if (leftEnemy.position.x < (0 - leftEnemy.width)) {
                this.randomize();
                this.position.x = canvas.width;
                playerScore++;
            }
        }
        else if (this.direction == "right") {
            if (rightEnemy.position.x > canvas.width + rightEnemy.width) {
                this.randomize();
                this.position.x = 0 - this.width;
                playerScore++;
            }
        }
    }
}

// defining player and enemies 
var player = new Player();
const downEnemy = new Enemy("down", rat);
const upEnemy = new Enemy("up", upRat);
const leftEnemy = new Enemy("left", leftRat);
const rightEnemy = new Enemy("right", rightRat);
var enemyList = [downEnemy, upEnemy, leftEnemy, rightEnemy];
// player score increments as rats respawn -- found in Enemy.reset()
var playerScore = 0;

function game() { 
    var animate = window.requestAnimationFrame(game);
    c.drawImage(background, 0, 0, canvas.width, canvas.height); // redrawing canvas each frame
    c.font = "32px serif";
    c.strokeText("Rats survived: " + playerScore, 15, 30);

    // adding controls on arrow keys. Player velocity directly corresponds to player position. Movements are more fluid...
    document.addEventListener("keydown", (e) => {
        switch(e.key) {
            case "ArrowUp":
                player.velocity.y = -5;
                break;
            case "ArrowDown":
                player.velocity.y = 5;
                break;
            case "ArrowLeft":
                player.velocity.x = -5;
                player.image = mSprite;
                break;
            case "ArrowRight": 
                player.velocity.x = 5;
                player.image = sprite;
                break;
        }
    })
    document.addEventListener("keyup", (e) => {
        switch(e.key) {
            case "ArrowUp":
                player.velocity.y = 0;
                break;
            case "ArrowDown":
                player.velocity.y = 0;
                break;
            case "ArrowLeft":
                player.velocity.x = 0;
                break;
            case "ArrowRight": 
                player.velocity.x = 0;
                break;
        }
    })

    // redrawing player and checking for collisions 
    player.draw();
    player.update();
    player.checkCollision();

    // spawning enemies from list, and checking for respawn position
    for (i = 0; i < enemyList.length; i++) {
        enemyList[i].update();
        enemyList[i].reset();
        // coding collisions -- hitboxes reduced by 10 for visual accuracy 
        if (enemyList[i].position.x + enemyList[i].width - 10 >= player.position.x + 10 &&
            enemyList[i].position.x + 10<= player.position.x + player.width - 10 &&
            enemyList[i].position.y + enemyList[i].height -10 >= player.position.y + 10 &&
            enemyList[i].position.y + 10 <= player.position.y + player.height - 10) {
                window.cancelAnimationFrame(animate);
                document.getElementById("end-screen").style.display = "flex";
                document.getElementById("player-score").innerText = "You survived " + playerScore + " rats.";
        }
    }
    console.log("Rats survived:" + playerScore);
}

// running the game
startButton.addEventListener("click", function() {
    game();
    startScreen.style.display = "none";
});
document.getElementById("reset-button").addEventListener("click", function() {
    document.getElementById("end-screen").style.display = "none";
    player = new Player();
    playerScore = 0;
    for (i = 0; i < enemyList.length; i++) {
        enemyList[i].position.x = 0;
        enemyList[i].position.y = 0;
    }
    game();
});