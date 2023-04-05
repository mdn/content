---
title: Assignment (=)
slug: Web/JavaScript/Reference/Operators/Assignment
page-type: javascript-operator
browser-compat: javascript.operators.assignment
---

{{jsSidebar("Operators")}}

The **assignment (`=`)** operator is used to assign a value to a
variable. The assignment operation evaluates to the assigned value. Chaining the
assignment operator is possible in order to assign a single value to multiple variables.

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

## Syntax

```js-nolint
x = y
```

## Examples

### Simple assignment and chaining

```js
let x = 5;
let y = 10;
let z = 25;

x = y; // x is 10
x = y = z; // x, y and z are all 25
```

### Value of assignment expressions

The assignment expression itself evaluates to the value of the right-hand side, so you can log the value and assign to a variable at the same time.

```js
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
