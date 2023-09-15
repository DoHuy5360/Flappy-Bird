export class GroundE{
    private height: number;
    private stopClassName = "stop"
    public doms: NodeListOf<Element>;
    constructor(doms: NodeListOf<Element>, height: number) {
        this.doms = doms
        this.height = height;
    }
    moving(){
        this.doms[0].classList.remove(this.stopClassName);
        this.doms[1].classList.remove(this.stopClassName);
    }
    stopMoving(){
        this.doms[0].classList.add(this.stopClassName);
        this.doms[1].classList.add(this.stopClassName);
    }
    getHeight() {
		return this.height;
	}
}