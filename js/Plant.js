import { ObstructionObject } from "./ObstructionObject.js";
export class Plant extends ObstructionObject {
    constructor(x, y, width, height, speed, location, color, imagePath, isCollidable) {
        super(x, y, width, height, speed, location, color, imagePath, isCollidable);
        this.image.src = "./imgs/objects/obstructions/" + this.imagePath;
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
//# sourceMappingURL=Plant.js.map