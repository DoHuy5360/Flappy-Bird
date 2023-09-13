import { Bird } from "../../Bird.js";
import { Canvas } from "../../Canvas.js";

export class BirdE {
	private canvas: Canvas;
	constructor(canvas: Canvas) {
		this.canvas = canvas;
	}
	getBird() {
		const bird = new Bird(
			50, //* x
			this.canvas.height / 2, //* y
			30, //* width
			30, //* height
			1, //* gravity
			0, //* velocity
			-15, //* initialJumpHeight
			"yellow", //* color
			"angryBird.svg" //* imagePath
		);
		return bird;
	}
}
