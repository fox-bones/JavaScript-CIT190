// defining canvas elements
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const background = document.getElementById("background");
const sprite = document.getElementById("sprite");
canvas.width = 1280;
canvas.height = 650;
canvas.style.border = "solid 1px black"

class Player {
    // defining spawn point and player dimensions
    constructor() {
        this.width = 70;
        this.height = 100;
        this.position = {
            x: 210,
            y: 210
        }
        this.velocity = {
            x: 0,
            y: 0
        }
    }
    // spawns player based on constructor inputs
    draw() {
        c.drawImage(sprite, this.position.x, this.position.y, this.width, this.height);
    }
    // the update method allows for continuous movement
    update() {
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
    }
    // checks whether the player is on the edge of the canvas
    checkCollision() {
        if (this.position.x === 0 ||
            this.position.y === 0 ||
            this.position.x === (canvas.width - this.width) ||
            this.position.y === (canvas.height - this.height)) 
            {
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
    }
}

const player = new Player();
const buttons = document.querySelectorAll(".buttons"); // all buttons in a collection
var playerX = document.getElementById("player-x"); // player position tracker
var playerY = document.getElementById("player-y"); // player position tracker

function animate() { 
    window.requestAnimationFrame(animate);
    c.drawImage(background, 0, 0, canvas.width, canvas.height); // redrawing canvas each frame

    buttons.forEach(function(button) { // adding event listeners on button clicks
        button.addEventListener("click", (e) => {
            switch(e.target.id) {
                case "up":
                    player.velocity.y = -5;
                    break;
                case "down":
                    player.velocity.y = 5;
                    break;
                case "left":
                    player.velocity.x = -5;
                    break;
                case "right":
                    player.velocity.x = 5;
                    break;
                case "stop":
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    break;
            }
        })
    })
    // redrawing player and checking position on each frame
    player.draw();
    player.update();
    player.checkCollision();
    // updating position trackers
    playerX.innerText = "Player X: " + player.position.x;
    playerY.innerText = "Player Y: " + player.position.y;
}

// running the "game"
animate();