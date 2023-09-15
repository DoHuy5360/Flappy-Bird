import { FlyingObject } from "../../FlyingObject.js";
export class Bird extends FlyingObject {
    constructor(x, y, width, height, gravity, velocity, initialJumpHeight, color, image, actions) {
        super(x, y, width, height, gravity, velocity, initialJumpHeight, color, image);
        this.actions = actions;
    }
    getJumpKey() {
        return this.actions.jump.key;
    }
    getJumpValue() {
        return this.actions.jump.value;
    }
    setJumpValue(newValue) {
        this.actions.jump.value = newValue;
    }
}
//# sourceMappingURL=Bird.js.map