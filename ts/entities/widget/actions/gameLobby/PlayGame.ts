import { Game } from "../../Game.js";
import { GameEvent } from "../../GameEvent.js";
import { GameLobby } from "../../GameLobby.js";
import { ObstructionE } from "../../ObstructionE.js";

export class PlayGame {
	private dom: HTMLButtonElement;
	private gameLobby: GameLobby;
	private obstructionE: ObstructionE;
	private gameE: Game;
	private gameEventE: GameEvent;
	constructor(
		dom: HTMLButtonElement,
		gameLobby: GameLobby,
		obstructionE: ObstructionE,
		gameE: Game,
		gameEventE: GameEvent
	) {
		this.dom = dom;
		this.gameLobby = gameLobby;
		this.obstructionE = obstructionE;
		this.gameE = gameE;
		this.gameEventE = gameEventE;
	}
	apply() {
		this.dom.addEventListener("click", (e) => {
			this.gameLobby.setInvisible();
			this.obstructionE.generateObstruction();
			this.gameE.implement();
			this.gameEventE.apply();
		});
	}
}
