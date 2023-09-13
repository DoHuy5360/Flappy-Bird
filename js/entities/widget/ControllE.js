import { Controll } from "../../Controll.js";
export class ControllE {
    constructor() {
        this.birdJump = new Controll("bird-jump", "ArrowUp");
    }
    getJumpKey() {
        return this.birdJump;
    }
}
//# sourceMappingURL=ControllE.js.map