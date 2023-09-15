export class SaveSetting {
    constructor(dom, gameLobbyE, gameSettingE) {
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
//# sourceMappingURL=SaveSetting.js.map