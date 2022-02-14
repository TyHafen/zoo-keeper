export class Bat {
    constructor(isNocturnal, size, mood, favFood, gender) {
        this.isNocturnal = isNocturnal
        this.size = size
        this.mood = mood
        this.favFood = favFood
        this.gender = gender
    }
    feed() {
        console.log(`It is time to feed the bat ${this.favFood} because ${this.gender} is ${this.mood}`)
    }
}