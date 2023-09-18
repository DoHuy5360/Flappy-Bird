export class Canvas {
	private dom: HTMLCanvasElement;
	private width: number;
	private height: number;
	private halfHeight: number;
	private context!: CanvasRenderingContext2D;
	constructor(dom: HTMLCanvasElement, width: number, height: number) {
		this.dom = dom;
		this.width = width;
		this.height = height;
		dom.width = width;
		dom.height = height;
		this.halfHeight = this.height / 2;
		this.context = this.dom!.getContext("2d") as CanvasRenderingContext2D;
	}
	clearScreen() {
		this.context.clearRect(0, 0, this.width, this.height);
	}
	getDom() {
		return this.dom;
	}
	getContext() {
		return this.context;
	}
	getHalfHeight() {
		return this.halfHeight;
	}
	getWidth() {
		return this.width;
	}
	getHeight() {
		return this.height;
	}
	setWidth(newWidth: number) {
		this.dom.width = newWidth;
		this.width = newWidth;
	}
	setHeight(newHeight: number) {
		this.dom.height = newHeight;
		this.height = newHeight;
	}
}
