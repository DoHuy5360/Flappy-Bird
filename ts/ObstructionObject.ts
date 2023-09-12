export class ObstructionObject {
	public x: number;
	public y: number;
	public width: number;
	public height: number;
	public speed: number;
	public location: string;
	public color: string;
	public imagePath: string;
	public image: HTMLImageElement;
	constructor(
		x: number,
		y: number,
		width: number,
		height: number,
		speed: number,
		location: string,
		color: string,
		imagePath: string
	) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.location = location;
		this.color = color;
		this.imagePath = imagePath;
		this.image = new Image();
		this.image.src = "./imgs/objects/obstructions/woodenLog/" + this.imagePath;
	}
	// draw(context: CanvasRenderingContext2D) {
	// 	context.fillStyle = this.color;
	// 	context.fillRect(this.x, this.y, this.width, this.height);
	// }
	draw(context: CanvasRenderingContext2D) {
		context.fillStyle = this.color;
		// context.fillRect(this.x, this.y, this.width, this.height);
		for (let i = 0; i < this.height / this.width; i++) {
			context.drawImage(this.image, this.x, this.y + this.width * i, this.width, this.width);
		}
	}
	backLeft() {
		this.x -= this.speed;
	}
}
