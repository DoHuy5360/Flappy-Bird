export class FlyingObject {
    constructor(x, y, width, height, gravity, velocity, initialJumpHeight, color, imagePath) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gravity = gravity;
        this.velocity = velocity;
        this.initialJumpHeight = initialJumpHeight;
        this.color = color;
        this.imagePath = imagePath;
        this.image = new Image();
        this.image.src = "./imgs/objects/flyings/" + this.imagePath;
    }
    update(canvas) {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y >= canvas.height - this.height) {
            this.y = canvas.height - this.height;
            this.velocity = 0;
        }
        if (this.y <= 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
    jump() {
        if (this.velocity >= 0) {
            this.velocity = this.initialJumpHeight;
        }
        else {
            this.velocity += this.initialJumpHeight / 2;
        }
    }
    draw(context) {
        context.fillStyle = this.color;
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    setY(newY) {
        this.y = newY;
    }
    setVelocity(newVelocity) {
        this.velocity = newVelocity;
    }
}
//# sourceMappingURL=FlyingObject.js.map