import { Operator } from './operator.js';
import { PreToPostfix } from './preToPostfix.js';

const tokens = [
  new Operator("3", true, 0, false, false),
  new Operator("+", false, 2, true, false),
  new Operator("4", true, 0, false, false),
  new Operator("*", false, 3, true, false),
  new Operator("2", true, 0, false, false)
];

const converter = new PreToPostfix(tokens);
console.log(converter.getOutput()); // Expected: ["3", "4", "2", "*", "+"]
