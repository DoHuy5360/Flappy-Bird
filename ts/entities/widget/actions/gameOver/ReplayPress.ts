import { Bird } from "../../../obstruction/Bird.js";

export class ReplayPress {
	private dom: HTMLDivElement;
	private birdE: Bird;
	constructor(dom: HTMLDivElement, birdE: Bird) {
		this.dom = dom;
		this.birdE = birdE;
		this.dom.textContent = this.birdE.getJumpValue();
	}
	getDom() {
		return this.dom;
	}
	setTextContent(newText: string) {
		this.dom.textContent = newText;
	}
}
