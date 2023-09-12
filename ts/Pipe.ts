import { ObstructionObject } from "./ObstructionObject.js";

export class Pipe extends ObstructionObject {
	constructor(x: number, y: number, width: number, height: number, speed: number, location: string) {
		super(x, y, width, height, speed, location);
	}
}
