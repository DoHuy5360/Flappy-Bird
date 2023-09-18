import { ObstructionObject } from "./ObstructionObject.js";
export class Pipe extends ObstructionObject {
    constructor(canvasE, x, y, width, height, speed, location, color, imagePath, isCollidable) {
        super(x, y, width, height, speed, location, color, imagePath, isCollidable);
        this.image.src = "./imgs/objects/obstructions/woodenLog/" + this.imagePath;
        this.canvasE = canvasE;
    }
    draw(context) {
        for (let i = 0; i < this.height / this.width; i++) {
            context.drawImage(this.image, this.x, this.y + this.width * i, this.width, this.width);
        }
    }
    updateY() {
        if (this.location === "bottom")
            this.y = this.canvasE.getHeight() - this.height;
    }
}
//# sourceMappingURL=Pipe.js.map