import { BaseAction } from "../BaseAction.js";
export class SellectKey extends BaseAction {
    constructor(dom, birdKey) {
        super(dom);
        this.birdKey = birdKey;
    }
    apply() {
        this.dom.addEventListener("keydown", (e) => {
            e.preventDefault();
            const event = e;
            const dom = e.target;
            dom.value = event.key;
            switch (dom.getAttribute("id")) {
                case this.birdKey.getName():
                    this.birdKey.setKey(event.key);
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=SellectKey.js.map