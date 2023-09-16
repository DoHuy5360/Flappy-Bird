import { Pipe } from "../../Pipe.js";
export class PipeE {
    constructor(canvas) {
        this.canvas = canvas;
        this.gap = 300;
        this.topColHeight = Math.floor(Math.random() * Math.floor(this.canvas.height / 50)) * 50;
        this.botColHeight = this.canvas.height - this.topColHeight - this.gap;
    }
    setRandomPipeHeight() {
        this.topColHeight = Math.floor(Math.random() * Math.floor(this.canvas.height / 50)) * 50;
        this.botColHeight = this.canvas.height - this.topColHeight - this.gap;
    }
    getTopPipe() {
        const topPipe = new Pipe(this.canvas.width, 0, 50, this.topColHeight, 2, "top", "green", "log_04.png", true);
        return topPipe;
    }
    getBotPipe() {
        const botPipe = new Pipe(this.canvas.width, this.canvas.height - this.botColHeight, 50, this.botColHeight, 2, "bottom", "green", "log_04.png", false);
        return botPipe;
    }
}
//# sourceMappingURL=PipeE.js.map