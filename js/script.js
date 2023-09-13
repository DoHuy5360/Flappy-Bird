import { Bird } from "./Bird.js";
import { Canvas } from "./Canvas.js";
import { Pipe } from "./Pipe.js";
import { Plant } from "./Plant.js";
const gameOver = document.querySelector(".game_over");
const groundHeight = 30;
const canvasDom = document.getElementById("gameCanvas");
const canvas = new Canvas(canvasDom, window.innerWidth, window.innerHeight - groundHeight);
const bird = new Bird(50, canvas.height / 2, 30, 30, 1, 0, -15, "yellow", "angryBird.svg");
let isGameOver = false;
let pipes = [];
let trees = [];
let obstructions = [];
setInterval(() => {
    const gap = 300;
    const topColHeight = Math.floor(Math.random() * Math.floor(canvas.height / 50)) * 50;
    const botColHeight = canvas.height - topColHeight - gap;
    const topPipe = new Pipe(canvas.width, 0, 50, topColHeight, 2, "top", "green", "log_04.png", true);
    const botPipe = new Pipe(canvas.width, canvas.height - botColHeight, 50, botColHeight, 2, "bottom", "green", "log_04.png", true);
    obstructions.push(topPipe, botPipe);
}, 2000);
setInterval(() => {
    const treeHeight01 = 300;
    const tree01 = new Plant(canvas.width, canvas.height - treeHeight01 + groundHeight, treeHeight01, treeHeight01, 1, "bottom", "green", "/trees/tree_01.svg", false);
    const treeHeight02 = 400;
    const tree02 = new Plant(canvas.width, canvas.height - treeHeight02 + groundHeight, treeHeight02, treeHeight02, 1, "bottom", "green", "/trees/tree_02.svg", false);
    const treeHeight03 = 500;
    const tree03 = new Plant(canvas.width, canvas.height - treeHeight03 + groundHeight, treeHeight03, treeHeight03, 1, "bottom", "green", "/trees/tree_03.svg", false);
    const grassHeight01 = 80;
    const grass01 = new Plant(canvas.width, canvas.height - grassHeight01 + groundHeight, grassHeight01, grassHeight01, 1, "bottom", "green", "/grass/grass_01.svg", false);
    const grassHeight02 = 80;
    const grass02 = new Plant(canvas.width, canvas.height - grassHeight02 + groundHeight, grassHeight02, grassHeight02, 1, "bottom", "green", "/grass/grass_02.svg", false);
    const grassHeight03 = 80;
    const grass03 = new Plant(canvas.width, canvas.height - grassHeight03 + groundHeight, grassHeight03, grassHeight03, 1, "bottom", "green", "/grass/grass_03.svg", false);
    trees = [tree01, tree02, tree03, grass01, grass02, grass03];
    obstructions.push(trees[Math.floor(Math.random() * trees.length)]);
}, 7000);
const grounds = document.querySelectorAll(".ground");
function handleGameOver() {
    bird.update(canvas.dom);
    bird.draw(canvas.context);
    isGameOver = true;
    gameOver.style.display = "grid";
    grounds[0].classList.add("stop");
    grounds[1].classList.add("stop");
}
let scores = 0;
const score = document.querySelector(".score");
function updateGame() {
    canvas.clearScreen();
    for (var i = 0; i < obstructions.length; i++) {
        var p = obstructions[i];
        p.draw(canvas.context);
        p.backLeft();
        if (p.x + p.width < 0) {
            obstructions.splice(i, 1);
            i--;
        }
        if (p.isCollidable && bird.x >= p.x + p.width && bird.x + bird.width <= p.x + p.width + bird.width + 1) {
            scores += 0.5;
            score.textContent = scores.toString();
        }
        if (p.isCollidable) {
            if ((bird.x + bird.width > p.x && bird.x + bird.width < p.x + p.width) ||
                (bird.x + bird.width > p.x && bird.x < p.x + p.width)) {
                if (p.location === "top" && bird.y < p.height) {
                    console.log("Hiting top");
                    handleGameOver();
                    return;
                }
                if (p.location === "bottom" && bird.y + bird.height > p.y) {
                    console.log("Hiting bottom");
                    handleGameOver();
                    return;
                }
            }
        }
    }
    bird.update(canvas.dom);
    bird.draw(canvas.context);
    requestAnimationFrame(updateGame);
}
function handleReplay() {
    scores = 0;
    score.textContent = "0";
    obstructions = [];
    bird.y = canvas.height / 2;
    bird.velocity = 0;
    updateGame();
    isGameOver = false;
    gameOver.style.display = "none";
    grounds[0].classList.remove("stop");
    grounds[1].classList.remove("stop");
}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        if (isGameOver) {
            handleReplay();
        }
        bird.jump();
    }
});
const startGame = document.querySelector(".start_game");
const gameLobby = document.querySelector(".game_lobby");
startGame.addEventListener("click", (e) => {
    gameLobby.style.display = "none";
    updateGame();
});
//# sourceMappingURL=script.js.map