---
title: Less than or equal (<=)
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
page-type: javascript-operator
browser-compat: javascript.operators.less_than_or_equal
---

{{jsSidebar("Operators")}}

The **less than or equal (`<=`)** operator returns `true` if the left operand is less than or equal to the right operand, and `false` otherwise.

{{EmbedInteractiveExample("pages/js/expressions-less-than-or-equal.html")}}

## Syntax

```js-nolint
x <= y
```

## Description

The operands are compared using the same algorithm as the [Less than](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) operator, with the operands swapped and the result negated.

## Examples

### String to string comparison

```js
"a" <= "b"; // true
"a" <= "a"; // true
"a" <= "3"; // false
```

### String to number comparison

```js
"5" <= 3; // false
"3" <= 3; // true
"3" <= 5; // true

"hello" <= 5; // false
5 <= "hello"; // false
```

### Number to Number comparison

```js
5 <= 3; // false
3 <= 3; // true
3 <= 5; // true
```

### Number to BigInt comparison

```js
5n <= 3; // false
3 <= 3n; // true
3 <= 5n; // true
```

### Comparing Boolean, null, undefined, NaN

```js
true <= false; // false
true <= true; // true
false <= true; // true

true <= 0; // false
true <= 1; // true

null <= 0; // true
1 <= null; // false

undefined <= 3; // false
3 <= undefined; // false

3 <= NaN; // false
NaN <= 3; // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Greater than operator](/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Greater than or equal operator](/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Less than operator](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
