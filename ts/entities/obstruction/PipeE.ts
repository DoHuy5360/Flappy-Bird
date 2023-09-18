import { Canvas } from "../../Canvas.js";
import { Pipe } from "../../Pipe.js";

export class PipeE {
	private canvasE: Canvas;
	private colCellHeight: number;
	private gap: number;
	private topColHeight: number;
	private botColHeight: number;
	private totalColCell: number;
	private startAxistX: number;
	constructor(canvasE: Canvas) {
		this.canvasE = canvasE;
		this.colCellHeight = 50;
		this.gap = 5;
		this.totalColCell = Math.floor(this.canvasE.getHeight() / this.colCellHeight); // * 14 cells ~ 100% zoom
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
	addRangeOfAxistX(gap: number) {
		this.startAxistX += gap;
	}
	getTopPipe() {
		const topPipe = new Pipe(
			this.canvasE, //* canvasE
			this.startAxistX, //* x
			0, //* y
			this.colCellHeight, //* width
			this.topColHeight, //* height
			2, //* speed
			"top", //* location
			"green", //* color
			"log_04.png", //* imagePath
			true //* isCollidable
		);
		return topPipe;
	}
	getBotPipe() {
		const botPipe = new Pipe(
			this.canvasE, //* canvasE
			this.startAxistX, //* x
			this.canvasE.getHeight() - this.botColHeight, //* y
			this.colCellHeight, //* width
			this.botColHeight, //* height
			2, //* speed
			"bottom", //* location
			"green", //* color
			"log_04.png", //* imagePath
			false //* isCollidable
		);
		return botPipe;
	}
}
