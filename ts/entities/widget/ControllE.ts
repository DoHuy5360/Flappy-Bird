import { Controll } from "../../Controll.js";

export class ControllE{
    private birdJump = new Controll("bird-jump", "ArrowUp")
    constructor(){

    }
    getJumpKey(){
        return this.birdJump
    }
}