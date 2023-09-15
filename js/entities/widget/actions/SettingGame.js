import { BaseAction } from "./BaseAction.js";
export class SettingGame extends BaseAction {
    constructor(dom, gameLobbyE, gameSettingE) {
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
//# sourceMappingURL=SettingGame.js.map