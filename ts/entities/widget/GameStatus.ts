import { Bird } from "../obstruction/Bird.js";
import { Canvas } from "../../Canvas.js";
import { GroundE } from "../obstruction/GroundE";
import { GameOver } from "./GameOver.js";
import { ScoreE } from "./ScoreE.js";

export class GameStatus {
	private isGameOver: boolean;
	private gameOverScreen: GameOver;
	private gameScore: ScoreE;
	private canvas: Canvas;
	private birdE: Bird;
	private groundE: GroundE;
	constructor(
		isGameOver: boolean,
		gameOverScreen: GameOver,
		gameScore: ScoreE,
		canvas: Canvas,
		birdE: Bird,
		groundE: GroundE
	) {
		this.isGameOver = isGameOver;
		this.gameOverScreen = gameOverScreen;
		this.gameScore = gameScore;
		this.canvas = canvas;
		this.birdE = birdE;
		this.groundE = groundE;
	}
	getGameOver() {
		return this.isGameOver;
	}
	setGameOver() {
		this.isGameOver = true;
		this.birdE.update(this.canvas.getDom());
		this.birdE.draw(this.canvas.getContext());
		this.groundE.stopMoving();
		this.gameOverScreen.setVisible();
	}
	setGameReplayed() {
		this.isGameOver = false;
		this.gameScore.setScore(0);
		this.birdE.setY(this.canvas.getHalfHeight());
		this.birdE.setVelocity(0);
		this.groundE.moving();
		this.gameOverScreen.setInvisible();
	}
}
