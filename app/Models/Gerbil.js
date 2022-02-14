export class Gerbil {
    constructor(name, color, isRich, isTame) {
        this.name = name
        this.color = color
        this.isRich = isRich
        this.isTame = isTame
    }
    getGerb() {
        console.log(`${this.name} is the best boy ever, he is also very ${this.isRich ? 'rich' : 'penniless'} which doesnt mattwer to me`);
    }
}