import { Game } from "../../Game.js";
import { GameEvent } from "../../GameEvent.js";
import { GameLobby } from "../../GameLobby.js";
import { GameStatus } from "../../GameStatus.js";

export class PlayGame {
	private dom: HTMLButtonElement;
	private gameStatusE: GameStatus;
	private gameLobby: GameLobby;
	private gameE: Game;
	private gameEventE: GameEvent;
	constructor(
		dom: HTMLButtonElement,
		gameStatusE: GameStatus,
		gameLobby: GameLobby,
		gameE: Game,
		gameEventE: GameEvent
	) {
		this.dom = dom;
		this.gameStatusE = gameStatusE;
		this.gameLobby = gameLobby;
		this.gameE = gameE;
		this.gameEventE = gameEventE;
	}
	apply() {
		this.dom.addEventListener("click", (e) => {
			this.gameLobby.setInvisible();
			this.gameStatusE.setGameRunning(true);
			this.gameE.implement();
			this.gameE.createScene();
			this.gameEventE.applyKeyboardAndMouse();
			this.gameEventE.allowResize();
		});
	}
}
