export class GroundE {
    constructor(doms) {
        this.stopClassName = "stop";
        this.doms = doms;
    }
    moving() {
        this.doms[0].classList.remove(this.stopClassName);
        this.doms[1].classList.remove(this.stopClassName);
    }
    stopMoving() {
        this.doms[0].classList.add(this.stopClassName);
        this.doms[1].classList.add(this.stopClassName);
    }
}
//# sourceMappingURL=GroundE.js.map