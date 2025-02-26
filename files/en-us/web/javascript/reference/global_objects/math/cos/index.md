---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.cos
---

{{JSRef}}

The **`Math.cos()`** static method returns the cosine of a number in radians.

{{InteractiveExample("JavaScript Demo: Math.cos()")}}

```js interactive-example
function getCircleX(radians, radius) {
  return Math.cos(radians) * radius;
}

console.log(getCircleX(1, 10));
// Expected output: 5.403023058681398

console.log(getCircleX(2, 10));
// Expected output: -4.161468365471424

console.log(getCircleX(Math.PI, 10));
// Expected output: -10
```

## Syntax

```js-nolint
Math.cos(x)
```

### Parameters

- `x`
  - : A number representing an angle in radians.

### Return value

The cosine of `x`, between -1 and 1, inclusive. If `x` is {{jsxref("Infinity")}}, `-Infinity`, or {{jsxref("NaN")}}, returns {{jsxref("NaN")}}.

## Description

Because `cos()` is a static method of `Math`, you always use it as `Math.cos()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.cos()

```js
Math.cos(-Infinity); // NaN
Math.cos(-0); // 1
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398
Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
Math.cos(Infinity); // NaN
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
