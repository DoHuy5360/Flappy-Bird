import { GameLobby } from "../GameLobby.js";
import { GameSetting } from "../GameSetting.js";
import { BaseAction } from "./BaseAction.js";

export class SettingGame extends BaseAction {
	private gameLobbyE: GameLobby;
	private gameSettingE: GameSetting;
	constructor(dom: HTMLButtonElement, gameLobbyE: GameLobby, gameSettingE: GameSetting) {
		super(dom);
		this.gameLobbyE = gameLobbyE;
		this.gameSettingE = gameSettingE;
	}
	apply() {
		this.dom.addEventListener("click", (e) => {
			this.gameLobbyE.setInvisible();
			this.gameSettingE.setVisible();
		});
	}
}
