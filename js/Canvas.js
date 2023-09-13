export class Canvas {
    constructor(dom, width, height) {
        this.dom = dom;
        this.width = width;
        this.height = height;
        dom.width = width;
        dom.height = height;
        this.context = this.dom.getContext("2d");
    }
    clearScreen() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
}
//# sourceMappingURL=Canvas.js.map