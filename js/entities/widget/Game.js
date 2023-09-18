export class Game {
    constructor(canvas, birdE, scoreE, gameStatusE, obstructionE) {
        this.implement = () => {
            this.canvas.clearScreen();
            for (var i = 0; i < this.obstructions.length; i++) {
                var obs = this.obstructions[i];
                obs.draw(this.canvas.getContext());
                if (this.gameStatusE.isRunning()) {
                    obs.backLeft();
                    if (obs.x + obs.width < 0) {
                        this.obstructions.splice(i, 1);
                        i--;
                    }
                    if (obs.isCollidable &&
                        this.birdE.x >= obs.x + obs.width &&
                        this.birdE.x + this.birdE.width <= obs.x + obs.width + this.birdE.width + 1) {
                        this.scoreE.addScore(0.5);
                    }
                    if (obs.isCollidable) {
                        if ((this.birdE.x + this.birdE.width > obs.x &&
                            this.birdE.x + this.birdE.width < obs.x + obs.width) ||
                            (this.birdE.x + this.birdE.width > obs.x && this.birdE.x < obs.x + obs.width)) {
                            if (obs.location === "top" && this.birdE.y < obs.height) {
                                console.log("Hiting top");
                                this.gameStatusE.setGameOver();
                                return;
                            }
                            if (obs.location === "bottom" && this.birdE.y + this.birdE.height > obs.y) {
                                console.log("Hiting bottom");
                                this.gameStatusE.setGameOver();
                                return;
                            }
                        }
                    }
                }
            }
            this.birdE.update(this.canvas.getDom());
            this.birdE.draw(this.canvas.getContext());
            requestAnimationFrame(this.implement);
        };
        this.canvas = canvas;
        this.birdE = birdE;
        this.scoreE = scoreE;
        this.gameStatusE = gameStatusE;
        this.obstructionE = obstructionE;
        this.obstructions = this.obstructionE.getOstruction();
    }
    createScene() {
        this.obstructionE.clearObstructions();
        this.obstructionE.generateObstructions();
    }
    updateScene() {
        this.obstructionE.getOstruction().forEach((obs) => {
            obs.updateY();
        });
    }
}
//# sourceMappingURL=Game.js.map