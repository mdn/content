---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
tags:
  - Comparison
  - Condition
  - Conditional
  - ECMAScript 2015
  - Equality
  - JavaScript
  - Method
  - Object
  - Polyfill
browser-compat: javascript.builtins.Object.is
---
{{JSRef}}

The **`Object.is()`** method determines whether two values are
[the same value](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness).

## Syntax

```js
Object.is(value1, value2);
```

### Parameters

- `value1`
  - : The first value to compare.
- `value2`
  - : The second value to compare.

### Return value

A {{jsxref("Boolean")}} indicating whether or not the two arguments are the same value.

## Description

`Object.is()` determines whether two values are [the same value](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness). Two values are the same if one of the following holds:

- both {{jsxref("undefined")}}
- both [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
- both `true` or both `false`
- both strings of the same length with the same characters in the same order
- both the same object (meaning both values reference the same object in memory)
- both numbers and

  - both `+0`
  - both `-0`
  - both {{jsxref("NaN")}}
  - or both non-zero and both not {{jsxref("NaN")}} and both have the same value

This is _not_ the same as being equal according to the
{{jsxref("Operators", "==", "#Equality")}} operator. The
`==` operator applies various coercions to both sides (if they are not the
same Type) before testing for equality (resulting in such behavior as
`"" == false` being `true`), but `Object.is` doesn't
coerce either value.

This is also _not_ the same as being equal according to the
{{jsxref("Operators", "===", "#Identity")}} operator. The
only difference between `Object.is()` and `===` is in
their treatment of signed zeroes and NaNs. For example, the `===`
operator (and the `==` operator) treats the number values `-0`
and `+0` as equal. Also, the `===` operator treats
{{jsxref("Number.NaN")}} and {{jsxref("NaN")}} as not equal.

## Examples

### Using Object.is

```js
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
const foo = { a: 1 };
const bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false

// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.is` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Equality comparisons and sameness](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) — a comparison of all three built-in sameness
  facilities
