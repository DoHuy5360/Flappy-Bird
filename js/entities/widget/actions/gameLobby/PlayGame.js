export class PlayGame {
    constructor(dom, gameStatusE, gameLobby, gameE, gameEventE) {
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
//# sourceMappingURL=PlayGame.js.map