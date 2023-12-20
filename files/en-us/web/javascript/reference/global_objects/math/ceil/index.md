---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.ceil
---

{{JSRef}}

The **`Math.ceil()`** static method always rounds up and returns the smallest integer greater than or equal to a given number.

{{EmbedInteractiveExample("pages/js/math-ceil.html")}}

## Syntax

```js-nolint
Math.ceil(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The smallest integer greater than or equal to `x`. It's the same value as [`-Math.floor(-x)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).

## Description

Because `ceil()` is a static method of `Math`, you always use it as `Math.ceil()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.ceil()

```js
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
