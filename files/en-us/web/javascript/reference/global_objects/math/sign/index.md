---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.sign
---
{{JSRef}}

The **`Math.sign()`** function returns either a
**positive** or **negative** +/- 1, indicating the sign of a
number passed into the argument. If the number passed into `Math.sign()` is
0, it will return a +/- 0. Note that if the number is positive, an explicit (+) will
**not** be returned.

{{EmbedInteractiveExample("pages/js/math-sign.html")}}

## Syntax

```js
Math.sign(x)
```

### Parameters

- `x`
  - : A number. If this argument is not a `number`, it is implicitly converted
    to one.

### Return value

A number representing the sign of the given argument:

- If the argument is positive, returns `1`.
- If the argument is negative, returns `-1`.
- If the argument is positive zero, returns `0`.
- If the argument is negative zero, returns `-0`.
- Otherwise, {{jsxref("NaN")}} is returned.

## Description

Because `sign()` is a static method of `Math`, you always use it
as `Math.sign()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.sign()

```js
Math.sign(3);     //  1
Math.sign(-3);    // -1
Math.sign('-3');  // -1
Math.sign(0);     //  0
Math.sign(-0);    // -0
Math.sign(NaN);   // NaN
Math.sign('foo'); // NaN
Math.sign();      // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.sign` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/math.polyfill.js)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
