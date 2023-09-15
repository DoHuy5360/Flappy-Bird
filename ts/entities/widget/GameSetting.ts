export class GameSetting {
	private dom: HTMLDivElement;
	constructor(dom: HTMLDivElement) {
		this.dom = dom;  
	}
	getDom() {
		return this.dom;
	}
    setVisible() {
		this.dom.style.display = "grid";
	}
	setInvisible() {
		this.dom.style.display = "none";
	}
}
