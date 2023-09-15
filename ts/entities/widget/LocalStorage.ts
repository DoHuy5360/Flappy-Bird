import { Bird } from "../obstruction/Bird.js";

export class LocalStorage {
	private birdE: Bird;
	constructor(birdE: Bird) {
		this.birdE = birdE;
	}
	apply() {
		const birdJumpKeyInLocalStorage = localStorage.getItem(this.birdE.getJumpKey());
		if (birdJumpKeyInLocalStorage !== null) {
			this.birdE.setJumpValue(birdJumpKeyInLocalStorage);
		}
	}
}
