export class Operator {
    constructor(value, isNumber, precedence, isLeftAssociative, isFunct) {
        this.value = value;
        this.isNumber = isNumber;
        this.precedence = precedence;
        this.isLeftAssociative = isLeftAssociative;
        this.isFunct = isFunct;
    }
}
