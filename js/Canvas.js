export class Canvas {
    constructor(dom, width, height) {
        this.dom = dom;
        this.width = width;
        this.height = height;
        dom.width = width;
        dom.height = height;
        this.halfHeight = this.height / 2;
        this.context = this.dom.getContext("2d");
    }
    clearScreen() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    getDom() {
        return this.dom;
    }
    getContext() {
        return this.context;
    }
    getHalfHeight() {
        return this.halfHeight;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(newWidth) {
        this.dom.width = newWidth;
        this.width = newWidth;
    }
    setHeight(newHeight) {
        this.dom.height = newHeight;
        this.height = newHeight;
    }
}
//# sourceMappingURL=Canvas.js.map