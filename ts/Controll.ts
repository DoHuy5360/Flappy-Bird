export class Controll {
	private name: string;
	private key: string;
	constructor(name: string, key: string) {
		this.name = name;
		this.key = key;
	}
	getName() {
		return this.name;
	}
	getKey() {
		return this.key;
	}
	setKey(newKey: string): void {
		this.key = newKey;
	}
}
