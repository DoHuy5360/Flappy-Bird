export class GameStatus {
    constructor(isGameOver, gameOverScreen, gameScore, canvas, birdE, groundE) {
        this.isGameOver = isGameOver;
        this.gameOverScreen = gameOverScreen;
        this.gameScore = gameScore;
        this.canvas = canvas;
        this.birdE = birdE;
        this.groundE = groundE;
    }
    getGameOver() {
        return this.isGameOver;
    }
    setGameOver() {
        this.isGameOver = true;
        this.birdE.update(this.canvas.getDom());
        this.birdE.draw(this.canvas.getContext());
        this.groundE.stopMoving();
        this.gameOverScreen.setVisible();
    }
    setGameReplayed() {
        this.isGameOver = false;
        this.gameScore.setScore(0);
        this.birdE.setY(this.canvas.getHalfHeight());
        this.birdE.setVelocity(0);
        this.groundE.moving();
        this.gameOverScreen.setInvisible();
    }
}
//# sourceMappingURL=GameStatus.js.map