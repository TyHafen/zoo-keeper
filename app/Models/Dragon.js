export class Dragon {
    constructor(isRoyalty, color, isScary, isDormant) {
        this.isRoyalty = isRoyalty
        this.color = color
        this.isScary = isScary
        this.isDormant = isDormant
    }
    scary() {
        console.log(`the Dragon ${this.isRoyalty ? 'is of royal descent' : 'is not of pure blood'}. They are ${this.color}. ${this.isDormant ? 'luckily they are dormant' : 'good luck living broh. they are coming for you'}`);
    }
}