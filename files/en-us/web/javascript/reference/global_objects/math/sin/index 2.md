---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.sin
---
{{JSRef}}

The **`Math.sin()`** function returns the sine of a number.

{{EmbedInteractiveExample("pages/js/math-sin.html")}}

## Syntax

```js
Math.sin(x)
```

### Parameters

- `x`
  - : A number (given in radians).

### Return value

The sine of the given number.

## Description

The `Math.sin()` method returns a numeric value between -1 and 1, which
represents the sine of the angle given in radians.

Because `sin()` is a static method of `Math`, you always use it
as `Math.sin()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.sin()

```js
Math.sin(0);           // 0
Math.sin(1);           // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
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
- {{jsxref("Math.tan()")}}
