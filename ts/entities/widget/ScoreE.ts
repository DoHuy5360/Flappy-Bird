export class ScoreE {
	public dom: HTMLDivElement;
	private score: number = 0;
	constructor(dom: HTMLDivElement, score: number) {
		this.dom = dom;
		this.score = score;
	}
	addScore(bonus: number): void {
		this.score += bonus;
		this.updateDom();
	}
	getScore(): number {
		return this.score;
	}
	getStringScore(): string {
		return this.score.toString();
	}
	setScore(newScore: number): void {
		this.score = newScore;
		this.updateDom();
	}
	private updateDom() {
		this.dom.textContent = this.getStringScore();
	}
}
