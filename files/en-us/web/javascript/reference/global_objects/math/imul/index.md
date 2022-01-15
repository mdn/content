---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - imul
  - Polyfill
browser-compat: javascript.builtins.Math.imul
---
{{JSRef}}

The **`Math.imul()`** function returns the result of the C-like
32-bit multiplication of the two parameters.

{{EmbedInteractiveExample("pages/js/math-imul.html")}}

## Syntax

```js
Math.imul(a, b)
```

### Parameters

- `a`
  - : First number.
- `b`
  - : Second number.

### Return value

The result of the C-like 32-bit multiplication of the given arguments.

## Description

`Math.imul()` allows for 32-bit integer multiplication with C-like
semantics. This feature is useful for projects like [Emscripten](https://en.wikipedia.org/wiki/Emscripten).

Because `imul()` is a static method of `Math`, you always use it
as `Math.imul()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

If you use normal JavaScript floating point numbers in imul, you will experience a
degrade in performance. This is because of the costly conversion from a floating point
to an integer for multiplication, and then converting the multiplied integer back into a
floating point. The reason imul exists is because it is faster in only one (so far)
circumstance: AsmJS. AsmJS allows for JIT-optimizers to more easily implement internal
integers in JavaScript. Multiplying two numbers stored internally as integers (which is
only possible with AsmJS) with imul is the only potential circumstance where Math.imul
may prove performant in current browsers.

## Examples

### Using Math.imul()

```js
Math.imul(2, 4);          // 8
Math.imul(-1, 8);         // -8
Math.imul(-2, -2);        // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
```

## Polyfill

This can be emulated with the following function:

```js
if (!Math.imul) Math.imul = function(a, b) {
  var aHi = (a >>> 16) & 0xffff;
  var aLo = a & 0xffff;
  var bHi = (b >>> 16) & 0xffff;
  var bLo = b & 0xffff;
  // the shift by 0 fixes the sign on the high part
  // the final |0 converts the unsigned value into a signed value
  return ((aLo * bLo) + (((aHi * bLo + aLo * bHi) << 16) >>> 0) | 0);
};
```

However, the following function is more performant because it is likely that browsers
in which this polyfill would be used do not optimize with an internal integer type in
JavaScript, instead using floating points for all numbers.

```js
if (!Math.imul) Math.imul = function(opA, opB) {
  opB |= 0; // ensure that opB is an integer. opA will automatically be coerced.
  // floating points give us 53 bits of precision to work with plus 1 sign bit
  // automatically handled for our convienence:
  // 1. 0x003fffff /*opA & 0x000fffff*/ * 0x7fffffff /*opB*/ = 0x1fffff7fc00001
  //    0x1fffff7fc00001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
  var result = (opA & 0x003fffff) * opB;
  // 2. We can remove an integer coersion from the statement above because:
  //    0x1fffff7fc00001 + 0xffc00000 = 0x1fffffff800001
  //    0x1fffffff800001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
  if (opA & 0xffc00000 /*!== 0*/) result += (opA & 0xffc00000) * opB |0;
  return result |0;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Math.imul` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [Emscripten](https://en.wikipedia.org/wiki/Emscripten)
