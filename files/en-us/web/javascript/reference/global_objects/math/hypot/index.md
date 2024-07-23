---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.hypot
---

{{JSRef}}

The **`Math.hypot()`** static method returns the square root of the sum of squares of its arguments. That is,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚑𝚢𝚙𝚘𝚝</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)} = \sqrt{\sum_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-hypot.html")}}

## Syntax

```js-nolint
Math.hypot()
Math.hypot(value1)
Math.hypot(value1, value2)
Math.hypot(value1, value2, /* …, */ valueN)
```

### Parameters

- `value1`, …, `valueN`
  - : Numbers.

### Return value

The square root of the sum of squares of the given arguments. Returns {{jsxref("Infinity")}} if any of the arguments is ±Infinity. Otherwise, if at least one of the arguments is or is converted to {{jsxref("NaN")}}, returns {{jsxref("NaN")}}. Returns `0` if no arguments are given or all arguments are ±0.

## Description

Calculating the hypotenuse of a right triangle, or the magnitude of a complex number, uses the formula `Math.sqrt(v1*v1 + v2*v2)`, where v1 and v2 are the lengths of the triangle's legs, or the complex number's real and complex components. The corresponding distance in 2 or more dimensions can be calculated by adding more squares under the square root: `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)`.

This function makes this calculation easier and faster; you call `Math.hypot(v1, v2)`, or `Math.hypot(v1, /* …, */, vN)`.

`Math.hypot` also avoids overflow/underflow problems if the magnitude of your numbers is very large. The largest number you can represent in JS is [`Number.MAX_VALUE`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE), which is around 10<sup>308</sup>. If your numbers are larger than about 10<sup>154</sup>, taking the square of them will result in Infinity. For example, `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. If you use `hypot()` instead, you get a better answer: `Math.hypot(1e200, 1e200) = 1.4142...e+200` . This is also true with very small numbers. `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, but `Math.hypot(1e-200, 1e-200) = 1.4142...e-200`.

With one argument, `Math.hypot()` is equivalent to [`Math.abs()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs). [`Math.hypot.length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) is 2, which weakly signals that it's designed to handle at least two parameters.

Because `hypot()` is a static method of `Math`, you always use it as `Math.hypot()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.hypot()

```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, "foo"); // NaN, since +'foo' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3, the same as Math.abs(-3)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.hypot` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
