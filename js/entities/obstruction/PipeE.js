import { Pipe } from "../../Pipe.js";
export class PipeE {
    constructor(canvas) {
        this.canvas = canvas;
        this.colCellHeight = 50;
        this.gap = 5;
        this.totalColCell = Math.floor(this.canvas.height / this.colCellHeight);
        this.topColHeight = this.setRanTopColHeight();
        this.botColHeight = this.setRanBotColHeight();
    }
    setRandomPipeHeight() {
        this.topColHeight = this.setRanTopColHeight();
        this.botColHeight = this.setRanBotColHeight();
    }
    setRanTopColHeight() {
        const minColCell = 2;
        const maxColCell = this.totalColCell - 8;
        return (Math.round(Math.random() * maxColCell) + minColCell) * this.colCellHeight;
    }
    setRanBotColHeight() {
        return this.canvas.height - this.topColHeight - this.colCellHeight * this.gap;
    }
    getTopPipe() {
        const topPipe = new Pipe(this.canvas.width, 0, this.colCellHeight, this.topColHeight, 2, "top", "green", "log_04.png", true);
        return topPipe;
    }
    getBotPipe() {
        const botPipe = new Pipe(this.canvas.width, this.canvas.height - this.botColHeight, this.colCellHeight, this.botColHeight, 2, "bottom", "green", "log_04.png", false);
        return botPipe;
    }
}
//# sourceMappingURL=PipeE.js.map