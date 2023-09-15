import { Game } from "../Game.js";
import { GameEvent } from "../GameEvent.js";
import { GameLobby } from "../GameLobby.js";
import { GameSetting } from "../GameSetting.js";
import { ObstructionE } from "../ObstructionE.js";
import { BaseAction } from "./BaseAction.js";

export class PlayGame extends BaseAction {
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
		super(dom);
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
