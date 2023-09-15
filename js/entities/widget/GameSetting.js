export class GameSetting {
    constructor(dom) {
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
//# sourceMappingURL=GameSetting.js.map