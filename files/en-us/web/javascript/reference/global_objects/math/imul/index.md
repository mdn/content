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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.imul` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [Emscripten](https://en.wikipedia.org/wiki/Emscripten)
