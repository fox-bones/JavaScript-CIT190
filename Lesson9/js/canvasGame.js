var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");

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
            x: -3,
            y: 0
        }
    }
    drawTop() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, 0, this.width, this.r); //522
    }
    drawBot() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.r + 75, this.width, canvas.height - this.position.y);
    }
    update() {
        this.position.x += this.velocity.x;
    }
}
const player = new Player();
const tube = new Tube();
function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
    tube.drawTop();
    tube.drawBot();
    tube.update();
}
animate();
console.log(tube.r);