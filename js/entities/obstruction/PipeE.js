import { Pipe } from "../../Pipe.js";
export class PipeE {
    constructor(canvas) {
        this.canvas = canvas;
        this.colCellHeight = 50;
        this.gap = 5;
        this.totalColCell = Math.floor(this.canvas.getHeight() / this.colCellHeight);
        this.topColHeight = this.setRanTopColHeight();
        this.botColHeight = this.setRanBotColHeight();
        this.startAxistX = this.canvas.getWidth();
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
        return this.canvas.getHeight() - this.topColHeight - this.colCellHeight * this.gap;
    }
    addRangeOfAxistX(gap) {
        this.startAxistX += gap;
    }
    getTopPipe() {
        const topPipe = new Pipe(this.startAxistX, 0, this.colCellHeight, this.topColHeight, 2, "top", "green", "log_04.png", true);
        return topPipe;
    }
    getBotPipe() {
        const botPipe = new Pipe(this.startAxistX, this.canvas.getHeight() - this.botColHeight, this.colCellHeight, this.botColHeight, 2, "bottom", "green", "log_04.png", false);
        return botPipe;
    }
}
//# sourceMappingURL=PipeE.js.map