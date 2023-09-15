import { GameLobby } from "../GameLobby.js";
import { GameSetting } from "../GameSetting.js";

export class SaveSetting {
	private dom: HTMLButtonElement;
	private gameLobbyE: GameLobby;
	private gameSettingE: GameSetting;
	constructor(dom: HTMLButtonElement, gameLobbyE: GameLobby, gameSettingE: GameSetting) {
		this.dom = dom;
		this.gameLobbyE = gameLobbyE;
		this.gameSettingE = gameSettingE;
	}
	apply() {
		this.dom.addEventListener("click", (e) => {
			this.gameSettingE.setInvisible();
			this.gameLobbyE.setVisible();
		});
	}
}
