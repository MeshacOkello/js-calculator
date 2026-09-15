# JS Calculator

A calculator that does the parsing properly instead of calling `eval`.

Button input builds an infix expression, `preToPostfix.js` converts it to postfix
using operator precedence and associativity, and the evaluator walks the postfix
form with an operand stack. Each piece lives in its own module so the parsing step
can be read on its own.

## Files

| File | What it does |
| --- | --- |
| `preToPostfix.js` | Infix → postfix conversion (shunting-yard) |
| `operator.js` | Operator precedence, associativity and application |
| `main.js` | Stack-based evaluation of the postfix expression |
| `calc.js` | Button input, display state and wiring |

## Run

Open `index.html` in a browser. No build step, no dependencies.
