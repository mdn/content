---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.ceil
---
{{JSRef}}

The **`Math.ceil()`** function always rounds a number up to the next largest integer.

> **Note:** `Math.ceil([`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null))` returns integer 0 and does not give a {{jsxref("NaN")}} error.

{{EmbedInteractiveExample("pages/js/math-ceil.html")}}

## Syntax

```js
Math.ceil(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The smallest integer greater than or equal to the given number.

## Description

Because `ceil()` is a static method of `Math`, you always use it
as `Math.ceil()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.ceil()

The following example shows example usage of `Math.ceil()`.

```js
Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
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
