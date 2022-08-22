---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.tan
---
{{JSRef}}

The **`Math.tan()`** function returns the tangent of a number.

{{EmbedInteractiveExample("pages/js/math-tan.html")}}

## Syntax

```js
Math.tan(x)
```

### Parameters

- `x`
  - : A number representing an angle in radians.

### Return value

The tangent of the given number.

## Description

The `Math.tan()` method returns a numeric value that represents the tangent
of the angle.

Because `tan()` is a static method of `Math`, you always use it
as `Math.tan()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.tan()

```js
Math.tan(1); // 1.5574077246549023
```

Because the `Math.tan()` function accepts radians, but it is often easier to
work with degrees, the following function accepts a value in degrees, converts it to
radians and returns the tangent.

```js
function getTanDeg(deg) {
  const rad = deg * Math.PI/180;
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
