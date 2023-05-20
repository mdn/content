---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.max
---

{{JSRef}}

The **`Math.max()`** static method returns the largest of the numbers given as input parameters, or -{{jsxref("Infinity")}} if there are no parameters.

{{EmbedInteractiveExample("pages/js/math-max.html")}}

## Syntax

```js-nolint
Math.max()
Math.max(value0)
Math.max(value0, value1)
Math.max(value0, value1, /* … ,*/ valueN)
```

### Parameters

- `value1`, `value2`, … , `valueN`
  - : Zero or more numbers among which the largest value will be selected and returned.

### Return value

The largest of the given numbers. Returns {{jsxref("NaN")}} if any of the parameters is or is converted into `NaN`. Returns -{{jsxref("Infinity")}} if no parameters are provided.

## Description

Because `max()` is a static method of `Math`, you always use it as `Math.max()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

[`Math.max.length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) is 2, which weakly signals that it's designed to handle at least two parameters.

## Examples

### Using Math.max()

```js
Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20
```

### Getting the maximum element of an array

{{jsxref("Array.prototype.reduce()")}} can be used to find the maximum
element in a numeric array, by comparing each value:

```js
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```

The following function uses {{jsxref("Function.prototype.apply()")}} to get the maximum of an array. `getMaxOfArray([1, 2, 3])` is equivalent to `Math.max(1, 2, 3)`, but you can use `getMaxOfArray()` on programmatically constructed arrays. This should only be used for arrays with relatively few elements.

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

The [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) is a shorter way of writing the `apply` solution to get the maximum of an array:

```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

However, both spread (`...`) and `apply` will either fail or return the wrong result if the array has too many elements, because they try to pass the array elements as function parameters. See [Using apply and built-in functions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_and_built-in_functions) for more details. The `reduce` solution does not have this problem.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.min()")}}
