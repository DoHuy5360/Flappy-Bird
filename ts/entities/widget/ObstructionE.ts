import { Pipe } from "../../Pipe.js";
import { Plant } from "../../Plant.js";
import { PipeE } from "../obstruction/PipeE.js";
import { PlantE } from "../obstruction/PlantE.js";
import { GameStatus } from "./GameStatus.js";

export class ObstructionE {
	private gameStatusE: GameStatus;
	private obstructions: (Pipe | Plant)[] = [];
	private trees: Plant[] = [];
	private pipeE: PipeE;
	private plantE: PlantE;
	constructor(gameStatusE: GameStatus, pipeE: PipeE, plantE: PlantE) {
		this.gameStatusE = gameStatusE;
		this.pipeE = pipeE;
		this.plantE = plantE;
	}
	getOstruction() {
		return this.obstructions;
	}
	clearObstructions() {
		this.obstructions.length = 0;
	}
	generateObstructions() {
		setInterval(() => {
			if (this.gameStatusE.isRunning()) {
				this.obstructions.push(this.pipeE.getTopPipe(), this.pipeE.getBotPipe());
				this.pipeE.setRandomPipeHeight();
				this.pipeE.addRangeOfAxistX(150);
			}
		}, 2000);

		setInterval(() => {
			if (this.gameStatusE.isRunning()) {
				this.trees = [
					this.plantE.getPlant01(),
					this.plantE.getPlant02(),
					this.plantE.getPlant03(),
					this.plantE.getPlant04(),
					this.plantE.getPlant05(),
					this.plantE.getPlant06(),
					this.plantE.getPlant07(),
					this.plantE.getPlant08(),
					this.plantE.getPlant09(),
				];
				this.obstructions.unshift(this.trees[Math.floor(Math.random() * this.trees.length)]);
				this.plantE.addRangeOfAxistX(200);
			}
		}, 7000);
	}
}
