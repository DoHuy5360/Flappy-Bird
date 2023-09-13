import { Bird } from "./Bird.js";
import { Canvas } from "./Canvas.js";
import { Pipe } from "./Pipe.js";
import { Plant } from "./Plant.js";

const gameOver: HTMLDivElement = document.querySelector(".game_over") as HTMLDivElement;
const groundHeight = 30;
const canvasDom = document.getElementById("gameCanvas") as HTMLCanvasElement;
const canvas = new Canvas(
	canvasDom, //* dom
	window.innerWidth, //* width
	window.innerHeight - groundHeight //* height
);

const bird = new Bird(
	50, //* x
	canvas.height / 2, //* y
	30, //* width
	30, //* height
	1, //* gravity
	0, //* velocity
	-15, //* initialJumpHeight
	"yellow", //* color
	"angryBird.svg" //* imagePath
);
let isGameOver = false;
let pipes: Pipe[] = [];
let trees: Plant[] = [];
let obstructions: (Pipe | Plant)[] = [];
setInterval(() => {
	const gap = 300;
	const topColHeight = Math.floor(Math.random() * Math.floor(canvas.height / 50)) * 50;
	const botColHeight = canvas.height - topColHeight - gap;
	const topPipe = new Pipe(
		canvas.width, //* x
		0, //* y
		50, //* width
		topColHeight, //* height
		2, //* speed
		"top", //* location
		"green", //* color
		"log_04.png", //* imagePath
		true //* isCollidable
	);
	const botPipe = new Pipe(
		canvas.width, //* x
		canvas.height - botColHeight, //* y
		50, //* width
		botColHeight, //* height
		2, //* speed
		"bottom", //* location
		"green", //* color
		"log_04.png", //* imagePath
		true //* isCollidable
	);
	// pipes.push(topPipe, botPipe);
	obstructions.push(topPipe, botPipe);
}, 2000);
setInterval(() => {
	const treeHeight01 = 300;
	const tree01 = new Plant(
		canvas.width, //* x
		canvas.height - treeHeight01 + groundHeight, //* y
		treeHeight01, //* width
		treeHeight01, //* height
		1, //* speed
		"bottom", //* location
		"green", //* color
		"/trees/tree_01.svg", //* imagePath
		false //* isCollidable
	);
	const treeHeight02 = 400;
	const tree02 = new Plant(
		canvas.width, //* x
		canvas.height - treeHeight02 + groundHeight, //* y
		treeHeight02, //* width
		treeHeight02, //* height
		1, //* speed
		"bottom", //* location
		"green", //* color
		"/trees/tree_02.svg", //* imagePath
		false //* isCollidable
	);
	const treeHeight03 = 500;
	const tree03 = new Plant(
		canvas.width, //* x
		canvas.height - treeHeight03 + groundHeight, //* y
		treeHeight03, //* width
		treeHeight03, //* height
		1, //* speed
		"bottom", //* location
		"green", //* color
		"/trees/tree_03.svg", //* imagePath
		false //* isCollidable
	);
	const grassHeight01 = 80;
	const grass01 = new Plant(
		canvas.width, //* x
		canvas.height - grassHeight01 + groundHeight, //* y
		grassHeight01, //* width
		grassHeight01, //* height
		1, //* speed
		"bottom", //* location
		"green", //* color
		"/grass/grass_01.svg", //* imagePath
		false //* isCollidable
	);
	const grassHeight02 = 80;
	const grass02 = new Plant(
		canvas.width, //* x
		canvas.height - grassHeight02 + groundHeight, //* y
		grassHeight02, //* width
		grassHeight02, //* height
		1, //* speed
		"bottom", //* location
		"green", //* color
		"/grass/grass_02.svg", //* imagePath
		false //* isCollidable
	);
	const grassHeight03 = 80;
	const grass03 = new Plant(
		canvas.width, //* x
		canvas.height - grassHeight03 + groundHeight, //* y
		grassHeight03, //* width
		grassHeight03, //* height
		1, //* speed
		"bottom", //* location
		"green", //* color
		"/grass/grass_03.svg", //* imagePath
		false //* isCollidable
	);
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
let scores: number = 0;
const score = document.querySelector(".score") as HTMLDivElement;

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
			scores += 0.5;
			score.textContent = scores.toString();
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
updateGame();
