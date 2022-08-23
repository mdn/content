---
title: Unsigned right shift assignment (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.unsigned_right_shift_assignment
---
{{jsSidebar("Operators")}}

The **unsigned right shift assignment operator** (`>>>=`)
moves the specified amount of bits to the right and assigns the result to the variable.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift-assignment.html")}}

## Syntax

```js
x >>>= y // x = x >>> y
```

## Examples

### Using unsigned right shift assignment

```js
let a = 5; //   (00000000000000000000000000000101)
a >>>= 2;  // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2;   // 1073741822 (00111111111111111111111111111110)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [Unsigned right shift operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
