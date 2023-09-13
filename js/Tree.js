import { ObstructionObject } from "./ObstructionObject.js";
export class Tree extends ObstructionObject {
    constructor(x, y, width, height, speed, location, color, imagePath, isCollidable) {
        super(x, y, width, height, speed, location, color, imagePath, isCollidable);
        this.image.src = "./imgs/objects/obstructions/trees/" + this.imagePath;
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
//# sourceMappingURL=Tree.js.map