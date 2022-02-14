export class Emu {
    constructor(age, name, intelligence) {
        this.age = age
        this.name = name
        this.intelligence = intelligence
    }
    callMeDumb() {
        console.log(`${this.name} is an Emu. Even though they are ${this.age}, they are very ${this.intelligence}`);
    }
}