import { Plant } from "../../Plant.js";
export class PlantE {
    constructor(canvasE, groundE) {
        this.canvasE = canvasE;
        this.groundE = groundE;
        this.startAxistX = canvasE.getWidth();
    }
    addRangeOfAxistX(gap) {
        this.startAxistX += gap;
    }
    getPlant01() {
        const size = 300;
        return new Plant(this.canvasE, this.startAxistX, this.canvasE.getHeight() - size, size, size, 1, "bottom", "green", "/trees/tree_01.svg", false);
    }
    getPlant02() {
        const size = 400;
        return new Plant(this.canvasE, this.startAxistX, this.canvasE.getHeight() - size, size, size, 1, "bottom", "green", "/trees/tree_02.svg", false);
    }
    getPlant03() {
        const size = 500;
        return new Plant(this.canvasE, this.startAxistX, this.canvasE.getHeight() - size, size, size, 1, "bottom", "green", "/trees/tree_03.svg", false);
    }
    getPlant04() {
        const size = 50;
        return new Plant(this.canvasE, this.startAxistX, this.canvasE.getHeight() - size, size, size, 1, "bottom", "green", "/grass/grass_01.png", false);
    }
    getPlant05() {
        const size = 50;
        return new Plant(this.canvasE, this.startAxistX, this.canvasE.getHeight() - size, size, size, 1, "bottom", "green", "/grass/grass_02.png", false);
    }
    getPlant06() {
        const size = 50;
        return new Plant(this.canvasE, this.startAxistX, this.canvasE.getHeight() - size, size, size, 1, "bottom", "green", "/grass/grass_03.png", false);
    }
    getPlant07() {
        const size = 50;
        return new Plant(this.canvasE, this.startAxistX, this.canvasE.getHeight() - size, size, size, 1, "bottom", "green", "/grass/grass_04.svg", false);
    }
    getPlant08() {
        const size = 50;
        return new Plant(this.canvasE, this.startAxistX, this.canvasE.getHeight() - size, size, size, 1, "bottom", "green", "/grass/grass_05.svg", false);
    }
    getPlant09() {
        const size = 50;
        return new Plant(this.canvasE, this.startAxistX, this.canvasE.getHeight() - size, size, size, 1, "bottom", "green", "/grass/grass_06.svg", false);
    }
}
//# sourceMappingURL=PlantE.js.map