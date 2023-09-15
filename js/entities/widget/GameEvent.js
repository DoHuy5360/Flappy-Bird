export class GameEvent {
    constructor(canvasE, birdE, gameStatusE, obstructionE, gameE) {
        this.apply = () => {
            document.addEventListener("keydown", (event) => {
                if (event.key === this.birdE.getJumpValue()) {
                    if (this.gameStatusE.getGameOver()) {
                        this.obstructionE.clearObstructions();
                        this.gameStatusE.setGameReplayed();
                        this.gameE.implement();
                    }
                    this.birdE.jump();
                }
            });
            this.canvasE.getDom().addEventListener("click", (event) => {
                this.birdE.jump();
            });
        };
        this.canvasE = canvasE;
        this.birdE = birdE;
        this.gameStatusE = gameStatusE;
        this.obstructionE = obstructionE;
        this.gameE = gameE;
    }
}
//# sourceMappingURL=GameEvent.js.map