---
title: Less than or equal (<=)
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.less_than_or_equal
---
{{jsSidebar("Operators")}}

The less than or equal operator (`<=`) returns `true` if the left operand is less than or equal to the right operand, and `false` otherwise.

{{EmbedInteractiveExample("pages/js/expressions-less-than-or-equal.html")}}

## Syntax

```js
x <= y
```

## Description

The operands are compared using the same algorithm as the [Less than](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) operator, except that equal values return `true`.

## Examples

### String to string comparison

```js
console.log("a" <= "b");     // true
console.log("a" <= "a");     // true
console.log("a" <= "3");     // false
```

### String to number comparison

```js
console.log("5" <= 3);       // false
console.log("3" <= 3);       // true
console.log("3" <= 5);       // true

console.log("hello" <= 5);   // false
console.log(5 <= "hello");   // false
```

### Number to Number comparison

```js
console.log(5 <= 3);         // false
console.log(3 <= 3);         // true
console.log(3 <= 5);         // true
```

### Number to BigInt comparison

```js
console.log(5n <= 3);        // false
console.log(3 <= 3n);        // true
console.log(3 <= 5n);        // true
```

### Comparing Boolean, null, undefined, NaN

```js
console.log(true <= false);  // false
console.log(true <= true);   // true
console.log(false <= true);  // true

console.log(true <= 0);      // false
console.log(true <= 1);      // true

console.log(null <= 0);      // true
console.log(1 <= null);      // false

console.log(undefined <= 3); // false
console.log(3 <= undefined); // false

console.log(3 <= NaN);       // false
console.log(NaN <= 3);       // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Greater than operator](/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Greater than or equal operator](/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Less than operator](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
