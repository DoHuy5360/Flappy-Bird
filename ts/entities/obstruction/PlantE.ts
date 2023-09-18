import { Canvas } from "../../Canvas.js";
import { Plant } from "../../Plant.js";
import { GroundE } from "./GroundE.js";

export class PlantE {
	private canvasE: Canvas;
	private groundE: GroundE;
	private startAxistX: number;
	constructor(canvasE: Canvas, groundE: GroundE) {
		this.canvasE = canvasE;
		this.groundE = groundE;
		this.startAxistX = canvasE.getWidth();
	}
	addRangeOfAxistX(gap: number) {
		this.startAxistX += gap;
	}
	getPlant01() {
		const size = 300;
		return new Plant(
			this.canvasE, //* canvasE
			this.startAxistX, //* x
			this.canvasE.getHeight() - size, //* y
			size, //* width
			size, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/trees/tree_01.svg", //* imagePath
			false //* isCollidable
		);
	}
	getPlant02() {
		const size = 400;
		return new Plant(
			this.canvasE, //* canvasE
			this.startAxistX, //* x
			this.canvasE.getHeight() - size, //* y
			size, //* width
			size, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/trees/tree_02.svg", //* imagePath
			false //* isCollidable
		);
	}
	getPlant03() {
		const size = 500;
		return new Plant(
			this.canvasE, //* canvasE
			this.startAxistX, //* x
			this.canvasE.getHeight() - size, //* y
			size, //* width
			size, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/trees/tree_03.svg", //* imagePath
			false //* isCollidable
		);
	}
	getPlant04() {
		const size = 50;
		return new Plant(
			this.canvasE, //* canvasE
			this.startAxistX, //* x
			this.canvasE.getHeight() - size, //* y
			size, //* width
			size, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_01.png", //* imagePath
			false //* isCollidable
		);
	}
	getPlant05() {
		const size = 50;
		return new Plant(
			this.canvasE, //* canvasE
			this.startAxistX, //* x
			this.canvasE.getHeight() - size, //* y
			size, //* width
			size, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_02.png", //* imagePath
			false //* isCollidable
		);
	}
	getPlant06() {
		const size = 50;
		return new Plant(
			this.canvasE, //* canvasE
			this.startAxistX, //* x
			this.canvasE.getHeight() - size, //* y
			size, //* width
			size, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_03.png", //* imagePath
			false //* isCollidable
		);
	}
	getPlant07() {
		const size = 50;
		return new Plant(
			this.canvasE, //* canvasE
			this.startAxistX, //* x
			this.canvasE.getHeight() - size, //* y
			size, //* width
			size, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_04.svg", //* imagePath
			false //* isCollidable
		);
	}
	getPlant08() {
		const size = 50;
		return new Plant(
			this.canvasE, //* canvasE
			this.startAxistX, //* x
			this.canvasE.getHeight() - size, //* y
			size, //* width
			size, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_05.svg", //* imagePath
			false //* isCollidable
		);
	}
	getPlant09() {
		const size = 50;
		return new Plant(
			this.canvasE, //* canvasE
			this.startAxistX, //* x
			this.canvasE.getHeight() - size, //* y
			size, //* width
			size, //* height
			1, //* speed
			"bottom", //* location
			"green", //* color
			"/grass/grass_06.svg", //* imagePath
			false //* isCollidable
		);
	}
}
