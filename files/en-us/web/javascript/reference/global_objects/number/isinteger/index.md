---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
page-type: javascript-static-method
browser-compat: javascript.builtins.Number.isInteger
---

{{JSRef}}

The **`Number.isInteger()`** static method determines whether the passed value is an integer.

{{InteractiveExample("JavaScript Demo: Number.isInteger()")}}

```js interactive-example
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return "Fits!";
  }
  return "Does NOT fit!";
}

console.log(fits(5, 10));
// Expected output: "Fits!"

console.log(fits(5, 11));
// Expected output: "Does NOT fit!"
```

## Syntax

```js-nolint
Number.isInteger(value)
```

### Parameters

- `value`
  - : The value to be tested for being an integer.

### Return value

The boolean value `true` if the given value is an integer. Otherwise `false`.

## Description

If the target value is an integer, return `true`, otherwise return `false`. If the value is {{jsxref("NaN")}} or {{jsxref("Infinity")}}, return `false`. The method will also return `true` for floating point numbers that can be represented as integer. It will always return `false` if the value is not a number.

Note that some number literals, while looking like non-integers, actually represent integers — due to the precision limit of ECMAScript floating-point number encoding (IEEE-754). For example, `5.0000000000000001` only differs from `5` by `1e-16`, which is too small to be represented. (For reference, [`Number.EPSILON`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) stores the distance between 1 and the next representable floating-point number greater than 1, and that is about `2.22e-16`.) Therefore, `5.0000000000000001` will be represented with the same encoding as `5`, thus making `Number.isInteger(5.0000000000000001)` return `true`.

In a similar sense, numbers around the magnitude of [`Number.MAX_SAFE_INTEGER`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) will suffer from loss of precision and make `Number.isInteger` return `true` even when it's not an integer. (The actual threshold varies based on how many bits are needed to represent the decimal — for example, `Number.isInteger(4500000000000000.1)` is `true`, but `Number.isInteger(4500000000000000.5)` is `false`.)

## Examples

### Using isInteger

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

Number.isInteger(5.0); // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true, because of loss of precision
Number.isInteger(4500000000000000.1); // true, because of loss of precision
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Number.isInteger` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
