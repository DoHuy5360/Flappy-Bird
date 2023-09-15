export class ReplayPress {
    constructor(dom, birdE) {
        this.dom = dom;
        this.birdE = birdE;
        this.dom.textContent = this.birdE.getJumpValue();
    }
    getDom() {
        return this.dom;
    }
    setTextContent(newText) {
        this.dom.textContent = newText;
    }
}
//# sourceMappingURL=ReplayPress.js.map