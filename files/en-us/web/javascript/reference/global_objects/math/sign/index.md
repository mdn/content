---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.sign
---

{{JSRef}}

The **`Math.sign()`** static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.

{{EmbedInteractiveExample("pages/js/math-sign.html")}}

## Syntax

```js-nolint
Math.sign(x)
```

### Parameters

- `x`
  - : A number.

### Return value

A number representing the sign of `x`:

- If `x` is positive, returns `1`.
- If `x` is negative, returns `-1`.
- If `x` is positive zero, returns `0`.
- If `x` is negative zero, returns `-0`.
- Otherwise, returns {{jsxref("NaN")}}.

## Description

Because `sign()` is a static method of `Math`, you always use it as `Math.sign()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.sign()

```js
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.sign` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
