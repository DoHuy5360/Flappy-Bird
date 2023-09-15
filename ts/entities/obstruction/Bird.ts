import { FlyingObject } from "../../FlyingObject.js";

type keyValue = {
	key: string;
	value: string;
};

type Actions = {
	jump: keyValue;
};

export class Bird extends FlyingObject {
	private actions: Actions;
	constructor(
		x: number,
		y: number,
		width: number,
		height: number,
		gravity: number,
		velocity: number,
		initialJumpHeight: number,
		color: string,
		image: string,
		actions: Actions
	) {
		super(x, y, width, height, gravity, velocity, initialJumpHeight, color, image);
		this.actions = actions;
	}
	getJumpKey() {
		return this.actions.jump.key;
	}
	getJumpValue() {
		return this.actions.jump.value;
	}
	setJumpValue(newValue: string) {
		this.actions.jump.value = newValue;
	}
}
