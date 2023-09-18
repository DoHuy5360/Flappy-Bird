import { Bird } from "../obstruction/Bird.js";
import { Canvas } from "../../Canvas.js";
import { Pipe } from "../../Pipe.js";
import { Plant } from "../../Plant.js";
import { GameStatus } from "./GameStatus.js";
import { ScoreE } from "./ScoreE.js";
import { ObstructionE } from "./ObstructionE.js";

export class Game {
	private canvas: Canvas;
	private birdE: Bird;
	private scoreE: ScoreE;
	private gameStatusE: GameStatus;
	private obstructionE: ObstructionE;
	private obstructions: (Pipe | Plant)[];

	constructor(
		canvas: Canvas,
		birdE: Bird,
		scoreE: ScoreE,
		gameStatusE: GameStatus,
		obstructionE: ObstructionE
	) {
		this.canvas = canvas;
		this.birdE = birdE;
		this.scoreE = scoreE;
		this.gameStatusE = gameStatusE;
		this.obstructionE = obstructionE;
		this.obstructions = this.obstructionE.getOstruction();
	}
	implement = () => {
		this.canvas.clearScreen();

		for (var i = 0; i < this.obstructions.length; i++) {
			var obs = this.obstructions[i];
			obs.draw(this.canvas.getContext());
			if (this.gameStatusE.isRunning()) {
				obs.backLeft();

				//todo: Track pipe is out of frame then remove from array
				if (obs.x + obs.width < 0) {
					this.obstructions.splice(i, 1);
					i--;
				}
				if (
					obs.isCollidable &&
					this.birdE.x >= obs.x + obs.width &&
					this.birdE.x + this.birdE.width <= obs.x + obs.width + this.birdE.width + 1
				) {
					this.scoreE.addScore(0.5);
				}
				//todo: Track bird is collide the pipe
				if (obs.isCollidable) {
					if (
						(this.birdE.x + this.birdE.width > obs.x &&
							this.birdE.x + this.birdE.width < obs.x + obs.width) ||
						(this.birdE.x + this.birdE.width > obs.x && this.birdE.x < obs.x + obs.width)
					) {
						if (obs.location === "top" && this.birdE.y < obs.height) {
							console.log("Hiting top");
							this.gameStatusE.setGameOver();
							return;
						}
						if (obs.location === "bottom" && this.birdE.y + this.birdE.height > obs.y) {
							console.log("Hiting bottom");
							this.gameStatusE.setGameOver();
							return;
						}
					}
				}
			}
		}

		this.birdE.update(this.canvas.getDom());
		this.birdE.draw(this.canvas.getContext());

		requestAnimationFrame(this.implement);
	};
	createScene() {
		this.obstructionE.clearObstructions()
		this.obstructionE.generateObstructions();
	}
	updateScene() {
		this.obstructionE.getOstruction().forEach((obs) => {
			obs.updateY();
		});
	}
}
