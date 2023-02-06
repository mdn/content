---
title: Greater than (>)
slug: Web/JavaScript/Reference/Operators/Greater_than
page-type: javascript-operator
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.greater_than
---

{{jsSidebar("Operators")}}

The **greater than (`>`)** operator returns `true` if the left
operand is greater than the right operand, and `false` otherwise.

{{EmbedInteractiveExample("pages/js/expressions-greater-than.html")}}

## Syntax

```js-nolint
x > y
```

## Description

The operands are compared using the same algorithm as the [Less than](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) operator, except the two operands are swapped.

## Examples

### String to string comparison

```js
"a" > "b"; // false
"a" > "a"; // false
"a" > "3"; // true
```

### String to number comparison

```js
"5" > 3; // true
"3" > 3; // false
"3" > 5; // false

"hello" > 5; // false
5 > "hello"; // false

"5" > 3n; // true
"3" > 5n; // false
```

### Number to Number comparison

```js
5 > 3; // true
3 > 3; // false
3 > 5; // false
```

### Number to BigInt comparison

```js
5n > 3; // true
3 > 5n; // false
```

### Comparing Boolean, null, undefined, NaN

```js
true > false; // true
false > true; // false

true > 0; // true
true > 1; // false

null > 0; // false
1 > null; // true

undefined > 3; // false
3 > undefined; // false

3 > NaN; // false
NaN > 3; // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Greater than or equal operator](/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Less than operator](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
- [Less than or equal operator](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
