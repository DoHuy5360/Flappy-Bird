import { ObstructionObject } from "./ObstructionObject.js";

export class Plant extends ObstructionObject {
	constructor(
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
	}
	draw(context: CanvasRenderingContext2D) {
		// context.fillStyle = this.color;
		// context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
}
