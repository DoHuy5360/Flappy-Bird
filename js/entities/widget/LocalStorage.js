export class LocalStorage {
    constructor(birdE) {
        this.birdE = birdE;
    }
    apply() {
        const birdJumpKeyInLocalStorage = localStorage.getItem(this.birdE.getJumpKey());
        if (birdJumpKeyInLocalStorage !== null) {
            this.birdE.setJumpValue(birdJumpKeyInLocalStorage);
        }
    }
}
//# sourceMappingURL=LocalStorage.js.map