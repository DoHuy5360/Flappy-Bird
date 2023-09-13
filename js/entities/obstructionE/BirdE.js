import { Bird } from "../../Bird.js";
export class BirdE {
    constructor(canvas) {
        this.canvas = canvas;
    }
    getBird() {
        const bird = new Bird(50, this.canvas.height / 2, 30, 30, 1, 0, -15, "yellow", "angryBird.svg");
        return bird;
    }
}
//# sourceMappingURL=BirdE.js.map