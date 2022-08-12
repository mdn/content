---
title: Right shift assignment (>>=)
slug: Web/JavaScript/Reference/Operators/Right_shift_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.right_shift_assignment
---
{{jsSidebar("Operators")}}

The right shift assignment operator (`>>=`) moves the specified amount
of bits to the right and assigns the result to the variable.

{{EmbedInteractiveExample("pages/js/expressions-right-shift-assignment.html")}}

## Syntax

```js
x >>= y // x = x >> y
```

## Examples

### Using right shift assignment

```js
let a = 5; //   (00000000000000000000000000000101)
a >>= 2;   // 1 (00000000000000000000000000000001)

let b = -5; //  (-00000000000000000000000000000101)
b >>= 2;  // -2 (-00000000000000000000000000000010)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [Right shift operator](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)
