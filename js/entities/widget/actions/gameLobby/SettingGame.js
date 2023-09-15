export class SettingGame {
    constructor(dom, gameLobbyE, gameSettingE) {
        this.dom = dom;
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