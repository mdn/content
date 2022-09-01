---
title: Greater than or equal (>=)
slug: Web/JavaScript/Reference/Operators/Greater_than_or_equal
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.greater_than_or_equal
---
{{jsSidebar("Operators")}}

The greater than or equal operator (`>=`) returns `true` if
the left operand is greater than or equal to the right operand, and `false`
otherwise.

{{EmbedInteractiveExample("pages/js/expressions-greater-than-or-equal.html")}}

## Syntax

```js
x >= y
```

## Description

The operands are compared using the same algorithm as the [Less than](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) operator, except the two operands are swapped, and equal values return `true`.

## Examples

### String to string comparison

```js
console.log("a" >= "b");     // false
console.log("a" >= "a");     // true
console.log("a" >= "3");     // true
```

### String to number comparison

```js
console.log("5" >= 3);       // true
console.log("3" >= 3);       // true
console.log("3" >= 5);       // false

console.log("hello" >= 5);   // false
console.log(5 >= "hello");   // false
```

### Number to Number comparison

```js
console.log(5 >= 3);         // true
console.log(3 >= 3);         // true
console.log(3 >= 5);         // false
```

### Number to BigInt comparison

```js
console.log(5n >= 3);        // true
console.log(3 >= 3n);        // true
console.log(3 >= 5n);        // false
```

### Comparing Boolean, null, undefined, NaN

```js
console.log(true >= false);  // true
console.log(true >= true);   // true
console.log(false >= true);  // false

console.log(true >= 0);      // true
console.log(true >= 1);      // true

console.log(null >= 0);      // true
console.log(1 >= null);      // true

console.log(undefined >= 3); // false
console.log(3 >= undefined); // false

console.log(3 >= NaN);       // false
console.log(NaN >= 3);       // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Greater than operator](/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Less than operator](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
- [Less than or equal operator](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
