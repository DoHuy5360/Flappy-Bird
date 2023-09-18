import { Canvas } from "../../Canvas.js";
import { Pipe } from "../../Pipe.js";

export class PipeE {
	private canvas: Canvas;
	private colCellHeight: number;
	private gap: number;
	private topColHeight: number;
	private botColHeight: number;
	private totalColCell: number;
	private startAxistX: number;
	constructor(canvas: Canvas) {
		this.canvas = canvas;
		this.colCellHeight = 50;
		this.gap = 5;
		this.totalColCell = Math.floor(this.canvas.getHeight() / this.colCellHeight); // * 14 cells ~ 100% zoom
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
	addRangeOfAxistX(gap: number) {
		this.startAxistX += gap;
	}
	getTopPipe() {
		const topPipe = new Pipe(
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
			this.startAxistX, //* x
			this.canvas.getHeight() - this.botColHeight, //* y
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
