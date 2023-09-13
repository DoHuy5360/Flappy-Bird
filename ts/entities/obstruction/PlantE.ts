import { Canvas } from "../../Canvas.js";
import { Plant } from "../../Plant.js";

export class PlantE {
	private imagePath: string = "imgs/objects/obstructions/trees/";
	private canvas: Canvas;
	private groundHeight: number;
	constructor(canvas: Canvas, groundHeight: number) {
		this.canvas = canvas;
		this.groundHeight = groundHeight;
	}
	getPlant01() {
		const treeHeight01 = 300;
		const tree01 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - treeHeight01 + this.groundHeight, //* y
			treeHeight01, //* width
			treeHeight01, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/trees/tree_01.svg", //* imagePath
			false //* isCollidable
		);
		return tree01;
	}
	getPlant02() {
		const treeHeight02 = 400;
		const tree02 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - treeHeight02 + this.groundHeight, //* y
			treeHeight02, //* width
			treeHeight02, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/trees/tree_02.svg", //* imagePath
			false //* isCollidable
		);
		return tree02;
	}
	getPlant03() {
		const treeHeight03 = 500;
		const tree03 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - treeHeight03 + this.groundHeight, //* y
			treeHeight03, //* width
			treeHeight03, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/trees/tree_03.svg", //* imagePath
			false //* isCollidable
		);
		return tree03;
	}
	getPlant04() {
		const grassHeight01 = 80;
		const grass01 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - grassHeight01 + this.groundHeight, //* y
			grassHeight01, //* width
			grassHeight01, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_01.svg", //* imagePath
			false //* isCollidable
		);
		return grass01;
	}
	getPlant05() {
		const grassHeight02 = 80;
		const grass02 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - grassHeight02 + this.groundHeight, //* y
			grassHeight02, //* width
			grassHeight02, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_02.svg", //* imagePath
			false //* isCollidable
		);
		return grass02;
	}
	getPlant06() {
		const grassHeight03 = 80;
		const grass03 = new Plant(
			this.canvas.width, //* x
			this.canvas.height - grassHeight03 + this.groundHeight, //* y
			grassHeight03, //* width
			grassHeight03, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_03.svg", //* imagePath
			false //* isCollidable
		);
		return grass03;
	}
}
