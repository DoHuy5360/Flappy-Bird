export class GameEvent {
    constructor(controllE, gameStatusE, obstructionE, gameE, bird) {
        this.apply = () => {
            document.addEventListener("keydown", (event) => {
                if (event.key === this.controllE.getJumpKey().getKey()) {
                    if (this.gameStatusE.getGameOver()) {
                        this.obstructionE.clearObstructions();
                        this.gameStatusE.setGameReplayed();
                        this.gameE.implement();
                    }
                    this.bird.jump();
                }
            });
        };
        this.controllE = controllE;
        this.gameStatusE = gameStatusE;
        this.obstructionE = obstructionE;
        this.gameE = gameE;
        this.bird = bird;
    }
}
//# sourceMappingURL=GameEvent.js.map