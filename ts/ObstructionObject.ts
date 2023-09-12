export class ObstructionObject {
	public x: number;
	public y: number;
	public width: number;
	public height: number;
	public speed: number;
	public location: string;
	public color: string;
	constructor(x: number, y: number, width: number, height: number, speed: number, location: string, color: string) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.location = location;
		this.color = color;
	}
	draw(context: CanvasRenderingContext2D) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	}
	backLeft(){
		this.x -= this.speed;
	}
}
