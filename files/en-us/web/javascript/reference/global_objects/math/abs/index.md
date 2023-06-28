---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.abs
---

{{JSRef}}

The **`Math.abs()`** static method returns the absolute value of a number.

{{EmbedInteractiveExample("pages/js/math-abs.html")}}

## Syntax

```js-nolint
Math.abs(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The absolute value of `x`. If `x` is negative (including `-0`), returns `-x`. Otherwise, returns `x`. The result is therefore always a positive number or `0`.

## Description

Because `abs()` is a static method of `Math`, you always use it as `Math.abs()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.abs()

```js
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
```

### Coercion of parameter

`Math.abs()` [coerces its parameter to a number](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Non-coercible values will become `NaN`, making `Math.abs()` also return `NaN`.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
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
