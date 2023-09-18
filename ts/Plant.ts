import { Canvas } from "./Canvas.js";
import { ObstructionObject } from "./ObstructionObject.js";

export class Plant extends ObstructionObject {
	private canvasE: Canvas;
	constructor(
		canvasE: Canvas,
		x: number,
		y: number,
		width: number,
		height: number,
		speed: number,
		location: string,
		color: string,
		imagePath: string,
		isCollidable: boolean
	) {
		super(x, y, width, height, speed, location, color, imagePath, isCollidable);
		this.image.src = "./imgs/objects/obstructions/" + this.imagePath;
		this.canvasE = canvasE;
	}
	draw(context: CanvasRenderingContext2D) {
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
	updateY() {
		this.y = this.canvasE.getHeight() - this.height;
	}
}
