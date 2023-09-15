import { Canvas } from "../../Canvas.js";
import { Plant } from "../../Plant.js";

export class PlantE {
	private imagePath: string = "imgs/objects/obstructions/trees/";
	private canvas: Canvas;
	private groundHeight: number;
	private tree01: Plant;
	private tree02: Plant;
	private tree03: Plant;
	private grass01: Plant;
	private grass02: Plant;
	private grass03: Plant;
	constructor(canvas: Canvas, groundHeight: number) {
		this.canvas = canvas;
		this.groundHeight = groundHeight;
		this.tree01 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - 300 + this.groundHeight, //* y
			300, //* width
			300, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/trees/tree_01.svg", //* imagePath
			false //* isCollidable
		);
		this.tree02 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - 400 + this.groundHeight, //* y
			400, //* width
			400, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/trees/tree_02.svg", //* imagePath
			false //* isCollidable
		);
		this.tree03 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - 500 + this.groundHeight, //* y
			500, //* width
			500, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/trees/tree_03.svg", //* imagePath
			false //* isCollidable
		);
		this.grass01 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - 80 + this.groundHeight, //* y
			80, //* width
			80, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_01.svg", //* imagePath
			false //* isCollidable
		);
		this.grass02 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - 90 + this.groundHeight, //* y
			90, //* width
			90, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_02.svg", //* imagePath
			false //* isCollidable
		);
		this.grass03 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - 100 + this.groundHeight, //* y
			100, //* width
			100, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_03.svg", //* imagePath
			false //* isCollidable
		);
	}
	getPlant01() {
		return this.tree01;
	}
	getPlant02() {
		return this.tree02;
	}
	getPlant03() {
		return this.tree03;
	}
	getPlant04() {
		return this.grass01;
	}
	getPlant05() {
		return this.grass02;
	}
	getPlant06() {
		return this.grass03;
	}
}
