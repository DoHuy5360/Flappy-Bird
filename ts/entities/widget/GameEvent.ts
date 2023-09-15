import { Bird } from "../../Bird.js";
import { ControllE } from "./ControllE.js";
import { Game } from "./Game.js";
import { GameStatus } from "./GameStatus.js";
import { ObstructionE } from "./ObstructionE.js";

export class GameEvent {
	private controllE: ControllE;
	private gameStatusE: GameStatus;
	private obstructionE: ObstructionE;
	private gameE: Game;
	private bird: Bird;
	constructor(
		controllE: ControllE,
		gameStatusE: GameStatus,
		obstructionE: ObstructionE,
		gameE: Game,
		bird: Bird
	) {
		this.controllE = controllE;
		this.gameStatusE = gameStatusE;
		this.obstructionE = obstructionE;
		this.gameE = gameE;
		this.bird = bird;
	}
	apply = () => {
		document.addEventListener("keydown", (event) => {
			if (event.key === this.controllE.getJumpKey().getKey()) {
				if (this.gameStatusE.getGameOver()) {
					this.obstructionE.clearObstructions();
					this.gameStatusE.setGameReplayed();
					this.gameE.implement();
				}
				this.bird.jump();
			}
		});
	};
}
