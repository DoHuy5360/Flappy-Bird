import { Pipe } from "../../Pipe.js";
export class PipeE {
    constructor(canvasE) {
        this.canvasE = canvasE;
        this.colCellHeight = 50;
        this.gap = 5;
        this.totalColCell = Math.floor(this.canvasE.getHeight() / this.colCellHeight);
        this.topColHeight = this.setRanTopColHeight();
        this.botColHeight = this.setRanBotColHeight();
        this.startAxistX = this.canvasE.getWidth();
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
        return this.canvasE.getHeight() - this.topColHeight - this.colCellHeight * this.gap;
    }
    addRangeOfAxistX(gap) {
        this.startAxistX += gap;
    }
    getTopPipe() {
        const topPipe = new Pipe(this.canvasE, this.startAxistX, 0, this.colCellHeight, this.topColHeight, 2, "top", "green", "log_04.png", true);
        return topPipe;
    }
    getBotPipe() {
        const botPipe = new Pipe(this.canvasE, this.startAxistX, this.canvasE.getHeight() - this.botColHeight, this.colCellHeight, this.botColHeight, 2, "bottom", "green", "log_04.png", true);
        return botPipe;
    }
}
//# sourceMappingURL=PipeE.js.map