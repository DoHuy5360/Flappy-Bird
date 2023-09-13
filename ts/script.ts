import { Bird } from "./Bird.js";
import { Canvas } from "./Canvas.js";
import { Pipe } from "./Pipe.js";
import { Plant } from "./Plant.js";
import { BirdE } from "./entities/obstruction/BirdE.js";
import { GroundE } from "./entities/obstruction/GroundE.js";
import { PipeE } from "./entities/obstruction/PipeE.js";
import { PlantE } from "./entities/obstruction/PlantE.js";
import { ScoreE } from "./entities/widget/ScoreE.js";

const gameOver: HTMLDivElement = document.querySelector(".game_over") as HTMLDivElement;
const groundHeight = 30;
const canvasDom = document.getElementById("gameCanvas") as HTMLCanvasElement;

const canvas = new Canvas(
	canvasDom, //* dom
	window.innerWidth, //* width
	window.innerHeight - groundHeight //* height
);
const birdE = new BirdE(canvas);
const bird = birdE.getBird();

const scoreDom = document.querySelector(".score") as HTMLDivElement;
const scoreE = new ScoreE(scoreDom, 0)
let isGameOver = false;
let pipes: Pipe[] = [];
let trees: Plant[] = [];
let obstructions: (Pipe | Plant)[] = [];
const pipeE = new PipeE(canvas);
const plantE = new PlantE(canvas, groundHeight);
const grounds = document.querySelectorAll(".ground") as NodeListOf<Element>;
const groundE = new GroundE(grounds)
const startGame = document.querySelector(".start_game") as HTMLButtonElement;
const gameLobby = document.querySelector(".game_lobby") as HTMLDivElement;

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
	groundE.stopMoving()
}

function updateGame() {
	canvas.clearScreen();

	for (var i = 0; i < obstructions.length; i++) {
		var p = obstructions[i];
		p.draw(canvas.context);

		p.backLeft();

		//todo: Track pipe is out of frame then remove from array
		if (p.x + p.width < 0) {
			obstructions.splice(i, 1);
			i--;
		}
		if (p.isCollidable && bird.x >= p.x + p.width && bird.x + bird.width <= p.x + p.width + bird.width + 1) {
			scoreE.addScore(0.5);
		}
		//todo: Track bird is collide the pipe
		if (p.isCollidable) {
			if (
				(bird.x + bird.width > p.x && bird.x + bird.width < p.x + p.width) ||
				(bird.x + bird.width > p.x && bird.x < p.x + p.width)
			) {
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
	groundE.moving()
	updateGame();
}
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowUp") {
		if (isGameOver) {
			handleReplay();
		}
		bird.jump();
	}
});

startGame.addEventListener("click", (e) => {
	gameLobby.style.display = "none";
	generateObstruction();
	updateGame();
});
