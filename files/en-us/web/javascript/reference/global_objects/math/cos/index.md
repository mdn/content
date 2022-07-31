---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
tags:
  - Geometry
  - JavaScript
  - Math
  - Method
  - Reference
  - Trigonometry
  - cos
  - cosine
browser-compat: javascript.builtins.Math.cos
---
{{JSRef}}

The **`Math.cos()`** static function
returns the [cosine](https://en.wikipedia.org/wiki/Cosine) of the specified angle, which must be
specified in [radians](https://en.wikipedia.org/wiki/Radians).

{{EmbedInteractiveExample("pages/js/math-cos.html")}}

## Syntax

```js
Math.cos(x)
```

### Parameters

- `x`
  - : The angle in radians for which to return the cosine.

### Return value

The cosine of the given number.

## Description

The `Math.cos()` method returns a numeric value between -1 and 1, which
represents the cosine of the angle.

Because `cos()` is a static method of `Math`, you always use it
as `Math.cos()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.cos()

```js
Math.cos(0);           // 1
Math.cos(1);           // 0.5403023058681398

Math.cos(Math.PI);     // -1
Math.cos(2 * Math.PI); // 1
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
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
