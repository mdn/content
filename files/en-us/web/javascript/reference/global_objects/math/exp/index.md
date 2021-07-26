---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.exp
---
{{JSRef}}

The **`Math.exp()`** function returns
`e^x`, where `x` is the argument, and `e` is
{{jsxref("Math.E", "Euler's number (also known as Napier's constant)", "", 1)}}, the
base of the natural logarithms.

{{EmbedInteractiveExample("pages/js/math-exp.html")}}

## Syntax

```js
Math.exp(x)
```

### Parameters

- `x`
  - : A number.

### Return value

A number representing `e^x`, where `e` is
{{jsxref("Math.E", "Euler's number", "", 1)}} and `x` is the
argument.

## Description

Because `exp()` is a static method of `Math`, you always use it
as `Math.exp()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.exp()

```js
Math.exp(-1); // 0.36787944117144233
Math.exp(0);  // 1
Math.exp(1);  // 2.718281828459045
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
