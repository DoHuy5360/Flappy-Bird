export class GameOver{
    private dom : HTMLDivElement
    constructor(dom : HTMLDivElement) {
        this.dom = dom
    }
    setVisible(){
        this.dom.style.display = "grid"
    }
    setInvisible(){
        this.dom.style.display = "none"
    }
}