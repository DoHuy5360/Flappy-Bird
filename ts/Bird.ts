import { FlyingObject } from "./FlyingObject.js";

export class Bird extends FlyingObject {
	constructor(
		x: number,
		y: number,
		width: number,
		height: number,
		gravity: number,
		velocity: number,
		initialJumpHeight: number,
		color: string,
		image: string
	) {
		super(x, y, width, height, gravity, velocity, initialJumpHeight, color, image);
	}
}
