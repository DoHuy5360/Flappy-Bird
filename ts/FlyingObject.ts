export class FlyingObject {
	public x: number;
	public y: number;
	public width: number;
	public height: number;
	public gravity: number;
	public velocity: number;
	public initialJumpHeight: number;
	constructor(
		x: number,
		y: number,
		width: number,
		height: number,
		gravity: number,
		velocity: number,
		initialJumpHeight: number
	) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.gravity = gravity;
		this.velocity = velocity;
		this.initialJumpHeight = initialJumpHeight;
	}

	update(canvas: HTMLCanvasElement) {
		this.velocity += this.gravity;
		this.y += this.velocity;

		// todo: Track jump then fall to bottom
		if (this.y >= canvas.height - this.height) {
			// todo: Set bird y to bottom frame
			this.y = canvas.height - this.height;
			this.velocity = 0;
		}

		// todo: Track collide to top of frame
		if (this.y <= 0) {
			this.y = 0;
			this.velocity = 0;
		}
	}

	jump() {
		if (this.velocity >= 0) {
			this.velocity = this.initialJumpHeight;
		} else {
			this.velocity += this.initialJumpHeight / 2;
		}
	}

	draw(context: CanvasRenderingContext2D) {
		context.fillStyle = "yellow";
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}
