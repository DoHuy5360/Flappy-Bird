import { Plant } from "../../Plant.js";
export class PlantE {
    constructor(canvas, groundHeight) {
        this.imagePath = "imgs/objects/obstructions/trees/";
        this.canvas = canvas;
        this.groundHeight = groundHeight;
        this.tree01 = new Plant(this.canvas.width, this.canvas.height - 300 + this.groundHeight, 300, 300, 1, "bottom", "green", "/trees/tree_01.svg", false);
        this.tree02 = new Plant(this.canvas.width, this.canvas.height - 400 + this.groundHeight, 400, 400, 1, "bottom", "green", "/trees/tree_02.svg", false);
        this.tree03 = new Plant(this.canvas.width, this.canvas.height - 500 + this.groundHeight, 500, 500, 1, "bottom", "green", "/trees/tree_03.svg", false);
        this.grass01 = new Plant(this.canvas.width, this.canvas.height - 80 + this.groundHeight, 80, 80, 1, "bottom", "green", "/grass/grass_01.svg", false);
        this.grass02 = new Plant(this.canvas.width, this.canvas.height - 90 + this.groundHeight, 90, 90, 1, "bottom", "green", "/grass/grass_02.svg", false);
        this.grass03 = new Plant(this.canvas.width, this.canvas.height - 100 + this.groundHeight, 100, 100, 1, "bottom", "green", "/grass/grass_03.svg", false);
    }
    getPlant01() {
        return this.tree01;
    }
    getPlant02() {
        return this.tree02;
    }
    getPlant03() {
        return this.tree03;
    }
    getPlant04() {
        return this.grass01;
    }
    getPlant05() {
        return this.grass02;
    }
    getPlant06() {
        return this.grass03;
    }
}
//# sourceMappingURL=PlantE.js.map