export class Frog {
    constructor(isJumpFar, canDefend, color) {
        this.isJumpFar = isJumpFar
        this.canDefend = canDefend
        this.color = color
    }
    frogFight() {
        console.log(`the frog ${this.isJumpFar ? 'can jump far' : 'cannot jump far'}. Maybe in time he will ${this.canDefend ? 'kill all the bad guys' : 'barely survive because he is weak'}`);
    }
}