export class Ape {
    constructor(name, age, isSlow, isStrong) {
        this.name = name
        this.age = age
        this.isSlow = isSlow
        this.isStrong = isStrong
    }

    hello() {
        console.log(`${this.name} the ${this.age} year old ape says hello`)
    }
}