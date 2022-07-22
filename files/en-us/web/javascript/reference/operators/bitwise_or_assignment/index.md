---
title: Bitwise OR assignment (|=)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.bitwise_or_assignment
---
{{jsSidebar("Operators")}}

The bitwise OR assignment operator (`|=`) uses the binary representation of
both operands, does a bitwise OR operation on them and assigns the result to the
variable.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or-assignment.html", "shorter")}}

## Syntax

```js
x |= y // x = x | y
```

## Examples

### Using bitwise OR assignment

```js
let a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [Bitwise OR operator](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- [Logical OR assignment (`||=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
