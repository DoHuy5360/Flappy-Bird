export class ScoreE {
    constructor(dom, score) {
        this.score = 0;
        this.dom = dom;
        this.score = score;
    }
    addScore(bonus) {
        this.score += bonus;
        this.updateDom();
    }
    getScore() {
        return this.score;
    }
    getStringScore() {
        return this.score.toString();
    }
    setScore(newScore) {
        this.score = newScore;
        this.updateDom();
    }
    updateDom() {
        this.dom.textContent = this.getStringScore();
    }
}
//# sourceMappingURL=ScoreE.js.map