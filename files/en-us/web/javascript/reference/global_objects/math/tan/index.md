---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.tan
---

{{JSRef}}

The **`Math.tan()`** static method returns the tangent of a number in radians.

{{EmbedInteractiveExample("pages/js/math-tan.html")}}

## Syntax

```js-nolint
Math.tan(x)
```

### Parameters

- `x`
  - : A number representing an angle in radians.

### Return value

The tangent of `x`. If `x` is {{jsxref("Infinity")}}, `-Infinity`, or {{jsxref("NaN")}}, returns {{jsxref("NaN")}}.

> **Note:** Due to floating point precision, it's not possible to obtain the exact value π/2, so the result is always finite if not `NaN`.

## Description

Because `tan()` is a static method of `Math`, you always use it as `Math.tan()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.tan()

```js
Math.tan(-Infinity); // NaN
Math.tan(-0); // -0
Math.tan(0); // 0
Math.tan(1); // 1.5574077246549023
Math.tan(Math.PI / 4); // 0.9999999999999999 (Floating point error)
Math.tan(Infinity); // NaN
```

### Math.tan() and π/2

It's not possible to calculate `tan(π/2)` exactly.

```js
Math.tan(Math.PI / 2); // 16331239353195370
Math.tan(Math.PI / 2 + Number.EPSILON); // -6218431163823738
```

### Using Math.tan() with a degree value

Because the `Math.tan()` function accepts radians, but it is often easier to work with degrees, the following function accepts a value in degrees, converts it to radians and returns the tangent.

```js
function getTanDeg(deg) {
  const rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
