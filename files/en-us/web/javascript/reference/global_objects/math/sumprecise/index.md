---
title: Math.sumPrecise()
slug: Web/JavaScript/Reference/Global_Objects/Math/sumPrecise
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Math.sumPrecise
---

{{JSRef}}{{SeeCompatTable}}

The **`Math.sumPrecise()`** static method takes an iterable of numbers and returns the sum of them. It is more precise than summing them up in a loop, because it avoids floating point precision loss in intermediate results.

{{InteractiveExample("JavaScript Demo: Math.sumPrecise()")}}

```js interactive-example
console.log(Math.sumPrecise([1, 2]));
// Expected output: 3

console.log(Math.sumPrecise([1e20, 0.1, -1e20]));
// Expected output: 0.1
```

## Syntax

```js-nolint
Math.sumPrecise(numbers)
```

### Parameters

- `numbers`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (such as an {{jsxref("Array")}}) of numbers.

### Return value

A number that is the sum of the numbers in the `numbers` iterable. If the iterable is empty, the return value is `-0` (_not_ `0`).

### Exceptions

- {{jsxref("TypeError")}}
  - : If `numbers` is not an iterable, or if any of the numbers in the iterable is not of the number type.

## Description

Because `sumPrecise()` is a static method of `Math`, you always use it as `Math.sumPrecise()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

The method is called `Math.sumPrecise()` because it is more precise than naïvely summing up numbers in a loop. Consider the following example:

```js
let sum = 0;
const numbers = [1e20, 0.1, -1e20];
for (const number of numbers) {
  sum += number;
}
console.log(sum); // 0
```

The output is 0. This is because `1e20 + 0.1` cannot be represented precisely in 64-bit floats, so the intermediate result is rounded to `1e20`. Then, the sum of `1e20` and `-1e20` is `0`, so the final result is `0`.

`Math.sumPrecise()` avoids this issue by using some specialized summing algorithm. It works as if the floating point numbers are summed up using their precise mathematical values, and the final result is then converted to the nearest representable 64-bit float. This still cannot avoid the `0.1 + 0.2` precision problem:

```js
console.log(Math.sumPrecise([0.1, 0.2])); // 0.30000000000000004
```

Because the floating point literals `0.1` and `0.2` already represent mathematical values greater than `0.1` and `0.2`, and their sum's closest 64-bit float representation is actually `0.30000000000000004`.

## Examples

### Using Math.sumPrecise()

```js
console.log(Math.sumPrecise([1, 2, 3])); // 6
console.log(Math.sumPrecise([1e20, 0.1, -1e20])); // 0.1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.sumPrecise` in `core-js`](https://github.com/zloirock/core-js#mathsumprecise)
- [es-shims polyfill of `Math.sumPrecise`](https://www.npmjs.com/package/math.sumprecise)
- {{jsxref("Array.prototype.reduce()")}}
