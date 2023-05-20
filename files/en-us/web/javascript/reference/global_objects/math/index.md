---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
page-type: javascript-namespace
browser-compat: javascript.builtins.Math
---

{{JSRef}}

The **`Math`** namespace object contains static properties and methods for mathematical constants and functions.

`Math` works with the {{jsxref("Number")}} type. It doesn't work with {{jsxref("BigInt")}}.

## Description

Unlike most global objects, `Math` is not a constructor. You cannot use it with the [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) or invoke the `Atomics` object as a function. All properties and methods of `Math` are static.

> **Note:** Many `Math` functions have a precision that's _implementation-dependent_.
>
> This means that different browsers can give a different result. Even the same JavaScript engine on a different OS or architecture can give different results!

## Static properties

- {{jsxref("Math.E")}}
  - : Euler's number and the base of natural logarithms; approximately `2.718`.
- {{jsxref("Math.LN10")}}
  - : Natural logarithm of `10`; approximately `2.303`.
- {{jsxref("Math.LN2")}}
  - : Natural logarithm of `2`; approximately `0.693`.
- {{jsxref("Math.LOG10E")}}
  - : Base-10 logarithm of `E`; approximately `0.434`.
- {{jsxref("Math.LOG2E")}}
  - : Base-2 logarithm of `E`; approximately `1.443`.
- {{jsxref("Math.PI")}}
  - : Ratio of a circle's circumference to its diameter; approximately `3.14159`.
- {{jsxref("Math.SQRT1_2")}}
  - : Square root of ½; approximately `0.707`.
- {{jsxref("Math.SQRT2")}}
  - : Square root of `2`; approximately `1.414`.
- `Math[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Math"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Static methods

- {{jsxref("Math.abs()")}}
  - : Returns the absolute value of `x`.
- {{jsxref("Math.acos()")}}
  - : Returns the arccosine of `x`.
- {{jsxref("Math.acosh()")}}
  - : Returns the hyperbolic arccosine of `x`.
- {{jsxref("Math.asin()")}}
  - : Returns the arcsine of `x`.
- {{jsxref("Math.asinh()")}}
  - : Returns the hyperbolic arcsine of a number.
- {{jsxref("Math.atan()")}}
  - : Returns the arctangent of `x`.
- {{jsxref("Math.atan2()")}}
  - : Returns the arctangent of the quotient of its arguments.
- {{jsxref("Math.atanh()")}}
  - : Returns the hyperbolic arctangent of `x`.
- {{jsxref("Math.cbrt()")}}
  - : Returns the cube root of `x`.
- {{jsxref("Math.ceil()")}}
  - : Returns the smallest integer greater than or equal to `x`.
- {{jsxref("Math.clz32()")}}
  - : Returns the number of leading zero bits of the 32-bit integer `x`.
- {{jsxref("Math.cos()")}}
  - : Returns the cosine of `x`.
- {{jsxref("Math.cosh()")}}
  - : Returns the hyperbolic cosine of `x`.
- {{jsxref("Math.exp()")}}
  - : Returns e<sup>x</sup>, where x is the argument, and e is Euler's number (`2.718`…, the base of the natural logarithm).
- {{jsxref("Math.expm1()")}}
  - : Returns subtracting `1` from `exp(x)`.
- {{jsxref("Math.floor()")}}
  - : Returns the largest integer less than or equal to `x`.
- {{jsxref("Math.fround()")}}
  - : Returns the nearest [single precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) float representation of `x`.
- {{jsxref("Math.hypot()")}}
  - : Returns the square root of the sum of squares of its arguments.
- {{jsxref("Math.imul()")}}
  - : Returns the result of the 32-bit integer multiplication of `x` and `y`.
- {{jsxref("Math.log()")}}
  - : Returns the natural logarithm (㏒<sub>e</sub>; also, ㏑) of `x`.
- {{jsxref("Math.log10()")}}
  - : Returns the base-10 logarithm of `x`.
- {{jsxref("Math.log1p()")}}
  - : Returns the natural logarithm (㏒<sub>e</sub>; also ㏑) of `1 + x` for the number `x`.
- {{jsxref("Math.log2()")}}
  - : Returns the base-2 logarithm of `x`.
- {{jsxref("Math.max()")}}
  - : Returns the largest of zero or more numbers.
- {{jsxref("Math.min()")}}
  - : Returns the smallest of zero or more numbers.
- {{jsxref("Math.pow()")}}
  - : Returns base `x` to the exponent power `y` (that is, `x`<sup><code>y</code></sup>).
- {{jsxref("Math.random()")}}
  - : Returns a pseudo-random number between `0` and `1`.
- {{jsxref("Math.round()")}}
  - : Returns the value of the number `x` rounded to the nearest integer.
- {{jsxref("Math.sign()")}}
  - : Returns the sign of the `x`, indicating whether `x` is positive, negative, or zero.
- {{jsxref("Math.sin()")}}
  - : Returns the sine of `x`.
- {{jsxref("Math.sinh()")}}
  - : Returns the hyperbolic sine of `x`.
- {{jsxref("Math.sqrt()")}}
  - : Returns the positive square root of `x`.
- {{jsxref("Math.tan()")}}
  - : Returns the tangent of `x`.
- {{jsxref("Math.tanh()")}}
  - : Returns the hyperbolic tangent of `x`.
- {{jsxref("Math.trunc()")}}
  - : Returns the integer portion of `x`, removing any fractional digits.

## Examples

### Converting between degrees and radians

The trigonometric functions `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, and `atan2()` expect (and return) angles in _radians_.

Since humans tend to think in degrees, and some functions (such as CSS transforms) can accept degrees, it is a good idea to keep functions handy that convert between the two:

```js
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(rad) {
  return rad / (Math.PI / 180);
}
```

### Calculating the height of an equilateral triangle

If we want to calculate the height of an equilateral triangle, and we know its side length is 100, we can use the formulae _length of the adjacent multiplied by the tangent of the angle is equal to the opposite._

![An equilateral triangle where a perpendicular of one edge is drawn from the opposite vertex, forming a right triangle with three sides marked as "adjacent", "opposite", and "hypotenuse". The angle between the "adjacent" and "hypotenuse" sides is 60 degrees.](trigonometry.png)

In JavaScript, we can do this with the following:

```js
50 * Math.tan(degToRad(60));
```

We use our `degToRad()` function to convert 60 degrees to radians, as {{jsxref("Math.tan()")}} expects an input value in radians.

### Returning a random integer between two bounds

This can be achieved with a combination of {{jsxref("Math.random()")}} and {{jsxref("Math.floor()")}}:

```js
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

random(1, 10);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number")}}
