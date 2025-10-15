import { Operator } from './operator.js';

export class PreToPostfix {
    #outputList = [];
    #opStack = [];

    constructor(tokens) {
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];

            if (token.isNumber === true) {
                this.#outputList.push(token.value);
            }
            else if (token.isFunct === true) {
                this.#opStack.push(token);
            }
            else if (token.value === "(") {
                this.#opStack.push(token);
            }
            else if (token.value === ")") {
                while (this.peek() && this.peek().value !== "(") {
                    this.#outputList.push(this.#opStack.pop().value);
                }
                this.#opStack.pop(); // remove '('
                if (this.peek() && this.peek().isFunct === true) {
                    this.#outputList.push(this.#opStack.pop().value);
                }
            }
            else {
                while (
                    this.peek() &&
                    this.peek().precedence >= token.precedence &&
                    this.peek().isLeftAssociative === true
                ) {
                    this.#outputList.push(this.#opStack.pop().value);
                }
                this.#opStack.push(token);
            }
        }

        // flush remaining operators
        while (this.#opStack.length > 0) {
            this.#outputList.push(this.#opStack.pop().value);
        }
    }

    peek() {
        return this.#opStack[this.#opStack.length - 1] || null;
    }

    getOutput() {
        return this.#outputList;
    }
}
