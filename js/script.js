import { Canvas } from "./Canvas.js";
import { BirdE } from "./entities/obstruction/BirdE.js";
import { GroundE } from "./entities/obstruction/GroundE.js";
import { PipeE } from "./entities/obstruction/PipeE.js";
import { PlantE } from "./entities/obstruction/PlantE.js";
import { ScoreE } from "./entities/widget/ScoreE.js";
import { ControllE } from "./entities/widget/ControllE.js";
const gameOver = document.querySelector(".game_over");
const groundHeight = 30;
const canvasDom = document.getElementById("gameCanvas");
const canvas = new Canvas(canvasDom, window.innerWidth, window.innerHeight - groundHeight);
const birdE = new BirdE(canvas);
const bird = birdE.getBird();
const controllE = new ControllE();
const scoreDom = document.querySelector(".score");
const scoreE = new ScoreE(scoreDom, 0);
let isGameOver = false;
let pipes = [];
let trees = [];
let obstructions = [];
const pipeE = new PipeE(canvas);
const plantE = new PlantE(canvas, groundHeight);
const grounds = document.querySelectorAll(".ground");
const groundE = new GroundE(grounds);
const startGame = document.querySelector(".start_game");
const gameLobby = document.querySelector(".game_lobby");
function generateObstruction() {
    setInterval(() => {
        obstructions.push(pipeE.getTopPipe(), pipeE.getBotPipe());
        pipeE.setRandomPipeHeight();
    }, 2000);
    setInterval(() => {
        trees = [
            plantE.getPlant01(),
            plantE.getPlant02(),
            plantE.getPlant03(),
            plantE.getPlant04(),
            plantE.getPlant05(),
            plantE.getPlant06(),
        ];
        obstructions.push(trees[Math.floor(Math.random() * trees.length)]);
    }, 7000);
}
function handleGameOver() {
    bird.update(canvas.dom);
    bird.draw(canvas.context);
    isGameOver = true;
    gameOver.style.display = "grid";
    groundE.stopMoving();
}
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
            scoreE.addScore(0.5);
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
    obstructions = [];
    isGameOver = false;
    scoreE.setScore(0);
    bird.setY(canvas.halfHeight);
    bird.setVelocity(0);
    gameOver.style.display = "none";
    groundE.moving();
    updateGame();
}
function applyEvent() {
    document.addEventListener("keydown", function (event) {
        if (event.key === controllE.getJumpKey().getKey()) {
            if (isGameOver) {
                handleReplay();
            }
            bird.jump();
        }
    });
}
startGame.addEventListener("click", (e) => {
    gameLobby.style.display = "none";
    generateObstruction();
    updateGame();
    applyEvent();
});
const optionDoms = document.querySelectorAll(".setting_option_choice");
optionDoms.forEach((opt) => {
    opt.addEventListener("keydown", (e) => {
        e.preventDefault();
        const event = e;
        const dom = e.target;
        dom.value = event.key;
        switch (dom.getAttribute("data-action")) {
            case controllE.getJumpKey().getName():
                controllE.getJumpKey().setKey(event.key);
                break;
            default:
                break;
        }
    });
});
const settingGameDom = document.querySelector(".setting_game");
const gameSettingDom = document.querySelector(".game_setting");
const settingSaveDom = document.querySelector(".setting_save");
settingSaveDom.addEventListener("click", (e) => {
    gameSettingDom.style.display = "none";
    gameLobby.style.display = "grid";
});
settingGameDom.addEventListener("click", e => {
    gameLobby.style.display = "none";
    gameSettingDom.style.display = "grid";
});
//# sourceMappingURL=script.js.map