import { BaseAction } from "./BaseAction.js";
export class PlayGame extends BaseAction {
    constructor(dom, gameLobby, obstructionE, gameE, gameEventE) {
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
//# sourceMappingURL=PlayGame.js.map