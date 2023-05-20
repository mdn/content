---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.sin
---

{{JSRef}}

The **`Math.sin()`** static method returns the sine of a number in radians.

{{EmbedInteractiveExample("pages/js/math-sin.html")}}

## Syntax

```js-nolint
Math.sin(x)
```

### Parameters

- `x`
  - : A number representing an angle in radians.

### Return value

The sine of `x`, between -1 and 1, inclusive. If `x` is {{jsxref("Infinity")}}, `-Infinity`, or {{jsxref("NaN")}}, returns {{jsxref("NaN")}}.

## Description

Because `sin()` is a static method of `Math`, you always use it as `Math.sin()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.sin()

```js
Math.sin(-Infinity); // NaN
Math.sin(-0); // -0
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965
Math.sin(Math.PI / 2); // 1
Math.sin(Infinity); // NaN
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
