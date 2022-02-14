export class Cat {
    constructor(name, age, isOld, isSad) {
        this.name = name
        this.age = age
        this.isOld = isOld
        this.isSad = isSad
    }
    catFacts() {
        console.log(`${this.name} is a ${this.age} year old ${this.isSad ? 'sad' : ''} boy.`)
    }
}