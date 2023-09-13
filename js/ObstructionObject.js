export class ObstructionObject {
    constructor(x, y, width, height, speed, location, color, imagePath, isCollidable) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.location = location;
        this.color = color;
        this.imagePath = imagePath;
        this.image = new Image();
        this.isCollidable = isCollidable;
    }
    backLeft() {
        this.x -= this.speed;
    }
}
//# sourceMappingURL=ObstructionObject.js.map