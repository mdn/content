---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.expm1
---
{{JSRef}}

The **`Math.expm1()`** function returns
`e^x - 1`, where `x` is the argument, and
{{jsxref("Math.E", "e", "", 1)}} the base of the natural logarithms.

{{EmbedInteractiveExample("pages/js/math-expm1.html")}}

## Syntax

```js
Math.expm1(x)
```

### Parameters

- `x`
  - : A number.

### Return value

A number representing `e^x - 1`, where `e` is
{{jsxref("Math.E", "Euler's number", "", 1)}} and `x` is the argument.

## Description

Because `expm1()` is a static method of `Math`, you always use it
as `Math.expm1()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.expm1()

```js
Math.expm1(-1); // -0.6321205588285577
Math.expm1(0);  // 0
Math.expm1(1);  // 1.718281828459045
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.expm1` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
