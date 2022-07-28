---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.abs
---
{{JSRef}}

The **`Math.abs()`** function returns
the absolute value of a number. That is, it returns `x` if `x`
is positive or zero, and the negation of `x` if `x` is negative.

{{EmbedInteractiveExample("pages/js/math-abs.html")}}

## Syntax

```js
Math.abs(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The absolute value of the given number.

## Description

Because `abs()` is a static method of `Math`, you always use it
as `Math.abs()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Behavior of Math.abs()

Passing an empty object, an array with more than one member, a non-numeric string or
{{jsxref("undefined")}}/empty variable returns {{jsxref("NaN")}}. Passing
[`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), an empty string or an empty array returns 0.

```js
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
