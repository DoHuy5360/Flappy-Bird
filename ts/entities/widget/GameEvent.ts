import { Canvas } from "../../Canvas.js";
import { Bird } from "../obstruction/Bird.js";
import { CloudE } from "../obstruction/CloudE.js";
import { GroundE } from "../obstruction/GroundE.js";
import { Game } from "./Game.js";
import { GameStatus } from "./GameStatus.js";
import { ObstructionE } from "./ObstructionE.js";

export class GameEvent {
	private canvasE: Canvas;
	private groundE: GroundE;
	private cloudE: CloudE;
	private birdE: Bird;
	private gameStatusE: GameStatus;
	private gameE: Game;
	constructor(canvasE: Canvas, groundE: GroundE,cloudE: CloudE, birdE: Bird, gameStatusE: GameStatus, gameE: Game) {
		this.canvasE = canvasE;
		this.groundE = groundE;
		this.cloudE = cloudE;
		this.birdE = birdE;
		this.gameStatusE = gameStatusE;
		this.gameE = gameE;
	}
	applyKeyboardAndMouse = () => {
		document.addEventListener("keydown", (event) => {
			if (event.key === this.birdE.getJumpValue()) {
				if (this.gameStatusE.getGameOver()) {
					this.gameStatusE.setGameReplayed();
					this.gameE.implement();
					this.gameE.createScene();
				}
				this.birdE.jump();
			}
			console.log(event.key);
			if(["F12"].includes(event.key)){
				event.preventDefault()
			}
		});
		this.canvasE.getDom().addEventListener("click", (event) => {
			this.birdE.jump();
		});
		this.canvasE.getDom().addEventListener("contextmenu", (event) => {
			event.preventDefault()
			this.birdE.jump();
		});
		window.addEventListener("blur", e=>{
			e.preventDefault()
			this.gameStatusE.setGameRunning(false)
			this.groundE.stopMoving()
			this.cloudE.stopMoving()
		})
		window.addEventListener("focus", e=>{
			e.preventDefault()
			this.gameStatusE.setGameRunning(true)
			this.groundE.moving()
			this.cloudE.moving()
		})
	};
	allowResize() {
		let temp: number;
		window.addEventListener("resize", (event) => {
			if (this.gameStatusE.isRunning()) this.gameStatusE.setGameRunning(false);
			this.canvasE.setWidth(window.innerWidth);
			this.canvasE.setHeight(window.innerHeight - this.groundE.getHeight());
			this.gameE.updateScene()
			clearTimeout(temp);
			temp = setTimeout(() => {
				this.gameStatusE.setGameRunning(true);
			}, 1000);
		});
	}
}
