import { Canvas } from "../../Canvas.js";
import { Bird } from "../obstruction/Bird.js";
import { Game } from "./Game.js";
import { GameStatus } from "./GameStatus.js";
import { ObstructionE } from "./ObstructionE.js";

export class GameEvent {
	private birdE: Bird;
	private gameStatusE: GameStatus;
	private obstructionE: ObstructionE;
	private canvasE: Canvas;
	private gameE: Game;
	constructor(
		canvasE: Canvas,
		birdE: Bird,
		gameStatusE: GameStatus,
		obstructionE: ObstructionE,
		gameE: Game
	) {
		this.canvasE = canvasE;
		this.birdE = birdE;
		this.gameStatusE = gameStatusE;
		this.obstructionE = obstructionE;
		this.gameE = gameE;
	}
	apply = () => {
		document.addEventListener("keydown", (event) => {
			if (event.key === this.birdE.getJumpValue()) {
				if (this.gameStatusE.getGameOver()) {
					this.obstructionE.clearObstructions();
					this.gameStatusE.setGameReplayed();
					this.gameE.implement();
				}
				this.birdE.jump();
			}
		});
		this.canvasE.getDom().addEventListener("click", (event) => {
			this.birdE.jump();
		});
	};
}
