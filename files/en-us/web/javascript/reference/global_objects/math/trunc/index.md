---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.trunc
---
{{JSRef}}

The **`Math.trunc()`** function returns the integer part of a
number by removing any fractional digits.

{{EmbedInteractiveExample("pages/js/math-trunc.html")}}

## Syntax

```js
Math.trunc(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The integer part of the given number.

## Description

Unlike the other three `Math` methods: {{jsxref("Math.floor()")}},
{{jsxref("Math.ceil()")}} and {{jsxref("Math.round()")}}, the way
`Math.trunc()` works is very simple. It *truncates* (cuts off) the dot
and the digits to the right of it, no matter whether the argument is a positive or
negative number.

The argument passed to this method will be converted to number type implicitly.

Because `trunc()` is a static method of `Math`, you always use it
as `Math.trunc()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.trunc()

```js
Math.trunc(13.37);    // 13
Math.trunc(42.84);    // 42
Math.trunc(0.123);    //  0
Math.trunc(-0.123);   // -0
Math.trunc('-1.123'); // -1
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Math.trunc` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [A
  polyfill](https://github.com/behnammodi/polyfill/blob/master/math.polyfill.js)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
