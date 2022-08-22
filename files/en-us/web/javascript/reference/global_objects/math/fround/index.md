---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
tags:
  - ES6
  - JavaScript
  - Math
  - Method
  - Reference
  - fround
  - Polyfill
browser-compat: javascript.builtins.Math.fround
---
{{JSRef}}

The **`Math.fround()`** function returns the
nearest [32-bit single precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) float representation of a {{jsxref("Number")}}.

{{EmbedInteractiveExample("pages/js/math-fround.html")}}

## Syntax

```js
Math.fround(doubleFloat)
```

### Parameters

- `doubleFloat`
  - : A {{jsxref("Number")}}. If the parameter is of a different type, it will get
    converted to a number or to {{jsxref("NaN")}} if it cannot be converted.

### Return value

The nearest [32-bit single precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) float representation of the given number.

## Description

JavaScript uses 64-bit double floating-point numbers internally, which offer a very
high precision. However, sometimes you may be working with 32-bit floating-point
numbers, for example if you are reading values from a {{jsxref("Float32Array")}}. This
can create confusion: Checking a 64-bit float and a 32-bit float for equality may fail
even though the numbers are seemingly identical.

To solve this, `Math.fround()` can be used to cast the 64-bit float to a
32-bit float. Internally, JavaScript continues to treat the number as a 64-bit float, it
just performs a "round to even" on the 23rd bit of the mantissa, and sets all following
mantissa bits to `0`. If the number is outside the range of a 32-bit float,
{{jsxref("Infinity")}} or `-Infinity` is returned.

Because `fround()` is a static method of `Math`, you always use
it as `Math.fround()`, rather than as a method of a `Math` object
you created (`Math` is not a constructor).

## Examples

### Using Math.fround()

The number 1.5 can be precisely represented in the binary numeral system, and is
identical in 32-bit and 64-bit:

```js
Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
```

However, the number 1.337 cannot be precisely represented in the binary numeral system,
so it differs in 32-bit and 64-bit:

```js
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.337) === 1.337; // false
```

<math><semantics><msup><mn>2</mn>
<mn>150</mn>
</msup><annotation encoding="TeX">2^150</annotation>
</semantics></math> is too big for a 32-bit float, so `Infinity` is returned:

```js
2 ** 150; // 1.42724769270596e+45
Math.fround(2 ** 150); // Infinity
```

If the parameter cannot be converted to a number, or it is [not-a-number](https://en.wikipedia.org/wiki/NaN) (`NaN`), `Math.fround()` will return
`NaN`:

```js
Math.fround('abc'); // NaN
Math.fround(NaN); // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.fround` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.round()")}}
