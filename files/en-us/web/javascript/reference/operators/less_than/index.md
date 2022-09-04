---
title: Less than (<)
slug: Web/JavaScript/Reference/Operators/Less_than
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.less_than
---
{{jsSidebar("Operators")}}

The less than operator (`<`) returns `true` if the left operand is less than the right operand, and `false` otherwise.

{{EmbedInteractiveExample("pages/js/expressions-less-than.html")}}

## Syntax

```js
x < y
```

## Description

The operands are compared with multiple rounds of coercion, which can be summarized as follows:

- First, objects are converted to primitives using [`@@toPrimitive()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (with `"number"` as hint), [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), and [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) methods, in that order. The left operand is always coerced before the right one.
- If both values are strings, they are compared as strings, based on the values of the Unicode code points they contain.
- Otherwise JavaScript attempts to convert non-numeric types to numeric values:
  - Boolean values `true` and `false` are converted to 1 and 0 respectively.
  - `null` is converted to 0.
  - `undefined` is converted to `NaN`.
  - Strings are converted based on the values they contain, and are converted as `NaN` if they do not contain numeric values.
- If either value is [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN), the operator returns `false`.
- Otherwise the values are compared as numeric values. BigInt and number values can be compared together.

## Examples

### String to string comparison

```js
console.log("a" < "b");        // true
console.log("a" < "a");        // false
console.log("a" < "3");        // false
```

### String to number comparison

```js
console.log("5" < 3);          // false
console.log("3" < 3);          // false
console.log("3" < 5);          // true

console.log("hello" < 5);      // false
console.log(5 < "hello");      // false

console.log("5" < 3n);         // false
console.log("3" < 5n);         // true
```

### Number to Number comparison

```js
console.log(5 < 3);            // false
console.log(3 < 3);            // false
console.log(3 < 5);            // true
```

### Number to BigInt comparison

```js
console.log(5n < 3);           // false
console.log(3 < 5n);           // true
```

### Comparing Boolean, null, undefined, NaN

```js
console.log(true < false);     // false
console.log(false < true);     // true

console.log(0 < true);         // true
console.log(true < 1);         // false

console.log(null < 0);         // false
console.log(null < 1);         // true

console.log(undefined < 3);    // false
console.log(3 < undefined);    // false

console.log(3 < NaN);          // false
console.log(NaN < 3);          // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Greater than operator](/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Greater than or equal operator](/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Less than or equal operator](/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
