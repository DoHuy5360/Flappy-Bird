export class SellectBirdJumpKey {
    constructor(dom, bird, replayPressE) {
        this.dom = dom;
        this.bird = bird;
        this.replayPressE = replayPressE;
        this.dom.value = this.bird.getJumpValue();
    }
    apply() {
        this.dom.addEventListener("keydown", (e) => {
            e.preventDefault();
            const event = e;
            const keyDown = event.key;
            this.dom.value = keyDown;
            this.bird.setJumpValue(keyDown);
            this.replayPressE.setTextContent(this.bird.getJumpValue());
            localStorage.setItem(this.bird.getJumpKey(), keyDown);
        });
    }
}
//# sourceMappingURL=SellectBirdJumpKey.js.map