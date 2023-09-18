import { ObstructionObject } from "./ObstructionObject.js";
export class Plant extends ObstructionObject {
    constructor(canvasE, x, y, width, height, speed, location, color, imagePath, isCollidable) {
        super(x, y, width, height, speed, location, color, imagePath, isCollidable);
        this.image.src = "./imgs/objects/obstructions/" + this.imagePath;
        this.canvasE = canvasE;
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    updateY() {
        this.y = this.canvasE.getHeight() - this.height;
    }
}
//# sourceMappingURL=Plant.js.map