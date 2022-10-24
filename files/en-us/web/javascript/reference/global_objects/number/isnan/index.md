---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Number
  - isNaN
  - Polyfill
browser-compat: javascript.builtins.Number.isNaN
---

{{JSRef}}

The **`Number.isNaN()`** method determines whether the passed
value is {{jsxref("NaN")}} and its type is {{jsxref("Number")}}. It is a more robust
version of the original, global {{jsxref("isNaN", "isNaN()")}}.

{{EmbedInteractiveExample("pages/js/number-isnan.html", "taller")}}

## Syntax

```js-nolint
Number.isNaN(value)
```

### Parameters

- `value`
  - : The value to be tested for {{jsxref("NaN")}}.

### Return value

The boolean value `true` if the given value is a number with value {{jsxref("NaN")}}. Otherwise, `false`.

## Description

Due to both equality operators, [`==`](/en-US/docs/Web/JavaScript/Reference/Operators/Equality) and [`===`](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality), evaluating to `false` when checking if {{jsxref("NaN")}} _is_ {{jsxref("NaN")}}, the function `Number.isNaN()` has become necessary. This situation is unlike all other possible value comparisons in JavaScript.

Since `x !== x` is only true for `NaN` among all possible JavaScript values, `Number.isNaN(x)` can also be replaced with a test for `x !== x`, despite the latter being less readable.

As opposed to the global {{jsxref("isNaN", "isNaN()")}} function, the `Number.isNaN()` method doesn't force-convert the parameter to a number. This makes it safe to pass values that would normally convert to {{jsxref("NaN")}} but aren't actually the same value as {{jsxref("NaN")}}. This also means that only values of the Number type that are also {{jsxref("NaN")}} return `true`.

## Examples

### Using isNaN()

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true
Number.isNaN(37); // false
```

### Difference between Number.isNaN() and global isNaN()

`Number.isNaN()` doesn't attempt to convert the parameter to a number, so non-numbers always return `false`. The following are all `false`:

```js
Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

The global {{jsxref("isNaN", "isNaN()")}} coerces its parameter to a number:

```js
isNaN("NaN"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN("blabla"); // true
isNaN(true); // false, this is coerced to 1
isNaN(null); // false, this is coerced to 0
isNaN("37"); // false, this is coerced to 37
isNaN("37.37"); // false, this is coerced to 37.37
isNaN(""); // false, this is coerced to 0
isNaN(" "); // false, this is coerced to 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Number.isNaN` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("isNaN", "isNaN()")}}
