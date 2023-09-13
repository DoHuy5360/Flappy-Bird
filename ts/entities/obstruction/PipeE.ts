import { Canvas } from "../../Canvas.js";
import { Pipe } from "../../Pipe.js";

export class PipeE {
	private canvas: Canvas;
	private gap: number;
	private topColHeight: number;
	private botColHeight: number;
	constructor(canvas: Canvas) {
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
		const topPipe = new Pipe(
			this.canvas.width, //* x
			0, //* y
			50, //* width
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
			this.canvas.width, //* x
			this.canvas.height - this.botColHeight, //* y
			50, //* width
			this.botColHeight, //* height
			2, //* speed
			"bottom", //* location
			"green", //* color
			"log_04.png", //* imagePath
			true //* isCollidable
		);
		return botPipe;
	}
}
