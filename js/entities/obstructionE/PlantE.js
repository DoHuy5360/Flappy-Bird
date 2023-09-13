import { Plant } from "../../Plant.js";
export class PlantE {
    constructor(canvas, groundHeight) {
        this.imagePath = "imgs/objects/obstructions/trees/";
        this.canvas = canvas;
        this.groundHeight = groundHeight;
    }
    getPlant01() {
        const treeHeight01 = 300;
        const tree01 = new Plant(this.canvas.width, this.canvas.height - treeHeight01 + this.groundHeight, treeHeight01, treeHeight01, 1, "bottom", "green", "/trees/tree_01.svg", false);
        return tree01;
    }
    getPlant02() {
        const treeHeight02 = 400;
        const tree02 = new Plant(this.canvas.width, this.canvas.height - treeHeight02 + this.groundHeight, treeHeight02, treeHeight02, 1, "bottom", "green", "/trees/tree_02.svg", false);
        return tree02;
    }
    getPlant03() {
        const treeHeight03 = 500;
        const tree03 = new Plant(this.canvas.width, this.canvas.height - treeHeight03 + this.groundHeight, treeHeight03, treeHeight03, 1, "bottom", "green", "/trees/tree_03.svg", false);
        return tree03;
    }
    getPlant04() {
        const grassHeight01 = 80;
        const grass01 = new Plant(this.canvas.width, this.canvas.height - grassHeight01 + this.groundHeight, grassHeight01, grassHeight01, 1, "bottom", "green", "/grass/grass_01.svg", false);
        return grass01;
    }
    getPlant05() {
        const grassHeight02 = 80;
        const grass02 = new Plant(this.canvas.width, this.canvas.height - grassHeight02 + this.groundHeight, grassHeight02, grassHeight02, 1, "bottom", "green", "/grass/grass_02.svg", false);
        return grass02;
    }
    getPlant06() {
        const grassHeight03 = 80;
        const grass03 = new Plant(this.canvas.width, this.canvas.height - grassHeight03 + this.groundHeight, grassHeight03, grassHeight03, 1, "bottom", "green", "/grass/grass_03.svg", false);
        return grass03;
    }
}
//# sourceMappingURL=PlantE.js.map