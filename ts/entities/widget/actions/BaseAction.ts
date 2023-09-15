export class BaseAction{
    protected dom: HTMLButtonElement;
	constructor(dom: HTMLButtonElement) {
		this.dom = dom;
	}
	getDom() {
		return this.dom;
	}
}