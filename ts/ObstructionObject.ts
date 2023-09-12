export class ObstructionObject {
	public x: number;
	public y: number;
	public width: number;
	public height: number;
	public speed: number;
	public location: string;
	constructor(x: number, y: number, width: number, height: number, speed: number, location: string) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.location = location;
	}
}
