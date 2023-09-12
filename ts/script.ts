import { Bird } from "./Bird.js";
import { Canvas } from "./Canvas.js";
import { Pipe } from "./Pipe.js";

const gameOver: HTMLDivElement = document.querySelector(".game_over") as HTMLDivElement;

const canvasDom = document.getElementById("gameCanvas") as HTMLCanvasElement;
const canvas = new Canvas(
	canvasDom, //* dom
	window.innerWidth, //* width
	window.innerHeight //* height
);

const bird = new Bird(
	50, //* x
	canvas.height / 2, //* y
	30, //* width
	30, //* height
	1, //* gravity
	0, //* velocity
	-15, //* initialJumpHeight
	"yellow" //* color
);

let isGameOver = false;
let pipes: Pipe[] = [];

setInterval(() => {
	const gap = 300;
	const topColHeight = Math.floor((Math.random() * canvas.height) / 2 + 20);
	const botColHeight = canvas.height - topColHeight - gap;
	const topPipe = new Pipe(
		canvas.width, //* x
		0, //* y
		50, //* width
		topColHeight, //* height
		2, //* speed
		"top", //* location
		"green" //* color
	);
	const botPipe = new Pipe(
		canvas.width, //* x
		canvas.height - botColHeight, //* y
		50, //* width
		botColHeight, //* height
		2, //* speed
		"bottom", //* location
		"green" //* color
	);
	pipes.push(topPipe, botPipe);
}, 2000);

function handleGameOver() {
	bird.update(canvas.dom);
	bird.draw(canvas.context);
	isGameOver = true;
	gameOver.style.display = "grid";
}
let scores: number = 0;
const score = document.querySelector(".score") as HTMLDivElement;
function updateGame() {
	canvas.clearScreen();

	for (var i = 0; i < pipes.length; i++) {
		var p = pipes[i];
		p.draw(canvas.context);

		p.backLeft();

		//todo: Track pipe is out of frame then remove from array
		if (p.x + p.width < 0) {
			pipes.splice(i, 1);
			i--;
		}
		if (bird.x >= p.x + p.width && bird.x + bird.width <= p.x + p.width + bird.width + 1) {
			scores += 0.5;
			score.textContent = scores.toString();
		}
		//todo: Track bird is collide the pipe
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

	bird.update(canvas.dom);
	bird.draw(canvas.context);

	requestAnimationFrame(updateGame);
}
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowUp") {
		if (isGameOver) {
			scores = 0;
			score.textContent = "0"
			pipes = [];
			bird.y = canvas.height / 2;
			bird.velocity = 0;
			updateGame();
			isGameOver = false;
			gameOver.style.display = "none";
		}
		bird.jump();
	}
});
updateGame();
