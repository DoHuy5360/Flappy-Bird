export class ObstructionE {
    constructor(pipeE, plantE) {
        this.obstructions = [];
        this.trees = [];
        this.pipeE = pipeE;
        this.plantE = plantE;
    }
    getOstruction() {
        return this.obstructions;
    }
    clearObstructions() {
        this.obstructions.length = 0;
    }
    generateObstruction() {
        setInterval(() => {
            this.obstructions.push(this.pipeE.getTopPipe(), this.pipeE.getBotPipe());
            this.pipeE.setRandomPipeHeight();
        }, 2000);
        setInterval(() => {
            this.trees = [
                this.plantE.getPlant01(),
                this.plantE.getPlant02(),
                this.plantE.getPlant03(),
                this.plantE.getPlant04(),
                this.plantE.getPlant05(),
                this.plantE.getPlant06(),
                this.plantE.getPlant07(),
                this.plantE.getPlant08(),
                this.plantE.getPlant09(),
            ];
            this.obstructions.push(this.trees[Math.floor(Math.random() * this.trees.length)]);
        }, 7000);
    }
}
//# sourceMappingURL=ObstructionE.js.map