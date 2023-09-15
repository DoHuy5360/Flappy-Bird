import { Bird } from "../../../obstruction/Bird.js";
import { ReplayPress } from "../gameOver/ReplayPress.js";

export class SellectBirdJumpKey {
	private dom: HTMLInputElement;
	private bird: Bird;
	private replayPressE: ReplayPress;
	constructor(dom: HTMLInputElement, bird: Bird, replayPressE: ReplayPress) {
		this.dom = dom;
		this.bird = bird;
		this.replayPressE = replayPressE;
		this.dom.value = this.bird.getJumpValue();
	}
	apply() {
		this.dom.addEventListener("keydown", (e) => {
			e.preventDefault();
			const event = e as KeyboardEvent;
			const keyDown = event.key;
			this.dom.value = keyDown;
			this.bird.setJumpValue(keyDown);
			this.replayPressE.setTextContent(this.bird.getJumpValue());
			localStorage.setItem(this.bird.getJumpKey(), keyDown);
		});
	}
}
