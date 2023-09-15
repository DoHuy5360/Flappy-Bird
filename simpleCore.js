const gameOver = document.querySelector(".game_over");
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
canvas.height = 400;
canvas.width = window.innerWidth;
var bird = {
	x: 50,
	y: canvas.height / 2,
	width: 30,
	height: 30,
	gravity: 1,
	velocity: 0,
	initialJumpHeight: -15,

	update: function () {
		this.velocity += this.gravity;
		this.y += this.velocity;

		// todo: Track jump then fall to bottom
		if (this.y >= canvas.height - this.height) {
			// todo: Set bird y to bottom frame
			this.y = canvas.height - this.height;
			this.velocity = 0;
		}

		// todo: Track collide to top of frame
		if (this.y <= 0) {
			this.y = 0;
			this.velocity = 0;
		}
	},

	jump: function () {
		if (this.velocity >= 0) {
			this.velocity = this.initialJumpHeight;
		} else {
			this.velocity += this.initialJumpHeight / 2;
		}
		this.canJump = false;
	},

	draw: function () {
		context.fillStyle = "yellow";
		context.fillRect(this.x, this.y, this.width, this.height);
	},
};

class Pipe {
	constructor(x, y, w, h, s, l) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.speed = s;
		this.location = l;
	}
}
let isGameOver = false;
var pipes = [];
// todo: Adding a column every 2 seconds
setInterval(function () {
	const gap = 300;
	const botColHeight = Math.floor((Math.random() * canvas.height) / 2 + 20);
	const topColHeight = canvas.height - botColHeight - gap;
	const topPipe = new Pipe(canvas.width, 0, 50, topColHeight, 2, "top");
	const botPipe = new Pipe(canvas.width, canvas.height - botColHeight, 50, botColHeight, 2, "bottom");
	pipes.push(botPipe, topPipe);
}, 2000);

function updateGame() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < pipes.length; i++) {
		var p = pipes[i];

		p.x -= p.speed;

		//todo: Track pipe is out of frame then remove from array
		if (p.x + p.width < 0) {
			pipes.splice(i, 1);
			i--;
		}
		//todo: Track bird is collide the pipe
		if (
			(bird.x + bird.width > p.x && bird.x + bird.width < p.x + p.width) ||
			(bird.x + bird.width > p.x && bird.x < p.x + p.width)
		) {
			if (p.location === "top" && bird.y < p.height) {
				console.log("Hiting top");
				isGameOver = true;
				gameOver.style.display = "block";
				return;
			}
			if (p.location === "bottom" && bird.y + bird.height > p.y) {
				console.log("Hiting bottom");
				isGameOver = true;
				gameOver.style.display = "block";
				return;
			}
		}
	}

	bird.update();
	bird.draw();

	for (var i = 0; i < pipes.length; i++) {
		var p = pipes[i];
		context.fillStyle = "green";
		context.fillRect(p.x, p.y, p.width, p.height);
	}

	requestAnimationFrame(updateGame);
}

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowUp") {
		if (isGameOver) {
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
