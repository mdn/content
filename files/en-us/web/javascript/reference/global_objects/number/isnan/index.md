---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
page-type: javascript-static-method
browser-compat: javascript.builtins.Number.isNaN
---

{{JSRef}}

The **`Number.isNaN()`** static method determines whether the passed value is the number value {{jsxref("NaN")}}, and returns `false` if the input is not of the Number type. It is a more robust version of the original, global {{jsxref("isNaN()")}} function.

{{InteractiveExample("JavaScript Demo: Number.isNaN()", "taller")}}

```js interactive-example
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return "Number NaN";
  }
  if (isNaN(x)) {
    return "NaN";
  }
}

console.log(typeOfNaN("100F"));
// Expected output: "NaN"

console.log(typeOfNaN(NaN));
// Expected output: "Number NaN"
```

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

The function `Number.isNaN()` provides a convenient way to check for equality with `NaN`. Note that you cannot test for equality with `NaN` using either the [`==`](/en-US/docs/Web/JavaScript/Reference/Operators/Equality) or [`===`](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) operators, because unlike all other value comparisons in JavaScript, these evaluate to `false` whenever one operand is {{jsxref("NaN")}}, even if the other operand is also {{jsxref("NaN")}}.

Since `x !== x` is only true for `NaN` among all possible JavaScript values, `Number.isNaN(x)` can also be replaced with a test for `x !== x`, despite the latter being less readable.

As opposed to the global {{jsxref("isNaN()")}} function, the `Number.isNaN()` method doesn't force-convert the parameter to a number. This makes it safe to pass values that would normally convert to {{jsxref("NaN")}} but aren't actually the same value as {{jsxref("NaN")}}. This also means that only values of the Number type that are also {{jsxref("NaN")}} return `true`.

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

The global {{jsxref("isNaN()")}} coerces its parameter to a number:

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
- {{jsxref("isNaN()")}}
