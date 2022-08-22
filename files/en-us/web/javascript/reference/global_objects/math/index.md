---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
tags:
  - JavaScript
  - Math
  - Namespace
  - Reference
browser-compat: javascript.builtins.Math
---
{{JSRef}}

**`Math`** is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object.

`Math` works with the {{jsxref("Number")}} type. It doesn't work with {{jsxref("BigInt")}}.

## Description

Unlike many other global objects, `Math` is not a constructor. All properties and methods of `Math` are static. You refer to the constant pi as `Math.PI` and you call the sine function as `Math.sin(x)`, where `x` is the method's argument. Constants are defined with the full precision of real numbers in JavaScript.

> **Note:** Many `Math` functions have a precision that's _implementation-dependent._
>
> This means that different browsers can give a different result. Even the same JavaScript engine on a different OS or architecture can give different results!

## Static properties

- {{jsxref("Math.E")}}
  - : Euler's constant and the base of natural logarithms; approximately `2.718`.
- {{jsxref("Math.LN2")}}
  - : Natural logarithm of `2`; approximately `0.693`.
- {{jsxref("Math.LN10")}}
  - : Natural logarithm of `10`; approximately `2.303`.
- {{jsxref("Math.LOG2E")}}
  - : Base-2 logarithm of `E`; approximately `1.443`.
- {{jsxref("Math.LOG10E")}}
  - : Base-10 logarithm of `E`; approximately `0.434`.
- {{jsxref("Math.PI")}}
  - : Ratio of a circle's circumference to its diameter; approximately `3.14159`.
- {{jsxref("Math.SQRT1_2")}}
  - : Square root of ½; approximately `0.707`.
- {{jsxref("Math.SQRT2")}}
  - : Square root of `2`; approximately `1.414`.

## Static methods

- {{jsxref("Global_Objects/Math/abs", "Math.abs(<var>x</var>)")}}
  - : Returns the absolute value of `x`.
- {{jsxref("Global_Objects/Math/acos", "Math.acos(<var>x</var>)")}}
  - : Returns the arccosine of `x`.
- {{jsxref("Global_Objects/Math/acosh", "Math.acosh(<var>x</var>)")}}
  - : Returns the hyperbolic arccosine of `x`.
- {{jsxref("Global_Objects/Math/asin", "Math.asin(<var>x</var>)")}}
  - : Returns the arcsine of `x`.
- {{jsxref("Global_Objects/Math/asinh", "Math.asinh(<var>x</var>)")}}
  - : Returns the hyperbolic arcsine of a number.
- {{jsxref("Global_Objects/Math/atan", "Math.atan(<var>x</var>)")}}
  - : Returns the arctangent of `x`.
- {{jsxref("Global_Objects/Math/atanh", "Math.atanh(<var>x</var>)")}}
  - : Returns the hyperbolic arctangent of `x`.
- {{jsxref("Global_Objects/Math/atan2", "Math.atan2(<var>y</var>, <var>x</var>)")}}
  - : Returns the arctangent of the quotient of its arguments.
- {{jsxref("Global_Objects/Math/cbrt", "Math.cbrt(<var>x</var>)")}}
  - : Returns the cube root of `x`.
- {{jsxref("Global_Objects/Math/ceil", "Math.ceil(<var>x</var>)")}}
  - : Returns the smallest integer greater than or equal to `x`.
- {{jsxref("Global_Objects/Math/clz32", "Math.clz32(<var>x</var>)")}}
  - : Returns the number of leading zero bits of the 32-bit integer `x`.
- {{jsxref("Global_Objects/Math/cos", "Math.cos(<var>x</var>)")}}
  - : Returns the cosine of `x`.
- {{jsxref("Global_Objects/Math/cosh", "Math.cosh(<var>x</var>)")}}
  - : Returns the hyperbolic cosine of `x`.
- {{jsxref("Global_Objects/Math/exp", "Math.exp(<var>x</var>)")}}
  - : Returns e<sup>x</sup>, where x is the argument, and e is Euler's constant (`2.718`…, the base of the natural logarithm).
- {{jsxref("Global_Objects/Math/expm1", "Math.expm1(<var>x</var>)")}}
  - : Returns subtracting `1` from `exp(x)`.
- {{jsxref("Global_Objects/Math/floor", "Math.floor(<var>x</var>)")}}
  - : Returns the largest integer less than or equal to `x`.
- {{jsxref("Global_Objects/Math/fround", "Math.fround(<var>x</var>)")}}
  - : Returns the nearest [single precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) float representation of `x`.
- {{jsxref("Global_Objects/Math/hypot", "Math.hypot([<var>x</var>[, <var>y</var>[, …]]])")}}
  - : Returns the square root of the sum of squares of its arguments.
- {{jsxref("Global_Objects/Math/imul", "Math.imul(<var>x</var>, <var>y</var>)")}}
  - : Returns the result of the 32-bit integer multiplication of `x` and `y`.
- {{jsxref("Global_Objects/Math/log", "Math.log(<var>x</var>)")}}
  - : Returns the natural logarithm (㏒<sub>e</sub>; also, ㏑) of `x`.
- {{jsxref("Global_Objects/Math/log1p", "Math.log1p(<var>x</var>)")}}
  - : Returns the natural logarithm (㏒<sub>e</sub>; also ㏑) of `1 + x` for the number `x`.
- {{jsxref("Global_Objects/Math/log10", "Math.log10(<var>x</var>)")}}
  - : Returns the base-10 logarithm of `x`.
- {{jsxref("Global_Objects/Math/log2", "Math.log2(<var>x</var>)")}}
  - : Returns the base-2 logarithm of `x`.
- {{jsxref("Global_Objects/Math/max", "Math.max([<var>x</var>[, <var>y</var>[, …]]])")}}
  - : Returns the largest of zero or more numbers.
- {{jsxref("Global_Objects/Math/min", "Math.min([<var>x</var>[, <var>y</var>[, …]]])")}}
  - : Returns the smallest of zero or more numbers.
- {{jsxref("Global_Objects/Math/pow", "Math.pow(<var>x</var>, <var>y</var>)")}}
  - : Returns base `x` to the exponent power `y` (that is, `x`<sup><code>y</code></sup>).
- {{jsxref("Global_Objects/Math/random", "Math.random()")}}
  - : Returns a pseudo-random number between `0` and `1`.
- {{jsxref("Global_Objects/Math/round", "Math.round(<var>x</var>)")}}
  - : Returns the value of the number `x` rounded to the nearest integer.
- {{jsxref("Global_Objects/Math/sign", "Math.sign(<var>x</var>)")}}
  - : Returns the sign of the `x`, indicating whether `x` is positive, negative, or zero.
- {{jsxref("Global_Objects/Math/sin", "Math.sin(<var>x</var>)")}}
  - : Returns the sine of `x`.
- {{jsxref("Global_Objects/Math/sinh", "Math.sinh(<var>x</var>)")}}
  - : Returns the hyperbolic sine of `x`.
- {{jsxref("Global_Objects/Math/sqrt", "Math.sqrt(<var>x</var>)")}}
  - : Returns the positive square root of `x`.
- {{jsxref("Global_Objects/Math/tan", "Math.tan(<var>x</var>)")}}
  - : Returns the tangent of `x`.
- {{jsxref("Global_Objects/Math/tanh", "Math.tanh(<var>x</var>)")}}
  - : Returns the hyperbolic tangent of `x`.
- {{jsxref("Global_Objects/Math/trunc", "Math.trunc(<var>x</var>)")}}
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
50 * Math.tan(degToRad(60))
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
