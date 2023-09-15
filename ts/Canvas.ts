export class Canvas {
	public dom: HTMLCanvasElement;
	public width: number;
	public height: number;
	public halfHeight: number;
	public context!: CanvasRenderingContext2D;
	constructor(dom: HTMLCanvasElement, width: number, height: number) {
		this.dom = dom;
		this.width = width;
		this.height = height;
		dom.width = width;
		dom.height = height;
		this.halfHeight = this.height / 2
		this.context = this.dom!.getContext("2d") as CanvasRenderingContext2D;
	}
	clearScreen() {
		this.context.clearRect(0, 0, this.width, this.height);
	}
	getDom(){
		return this.dom
	}
	getContext(){
		return this.context
	}
	getHalfHeight(){
		return this.halfHeight
	}
}
