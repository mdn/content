---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
page-type: javascript-function
browser-compat: javascript.builtins.isNaN
---

{{jsSidebar("Objects")}}

The **`isNaN()`** function determines whether a value is {{jsxref("NaN")}} when converted to a number. Because coercion inside the `isNaN()` function can be [surprising](#description), you may alternatively want to use {{jsxref("Number.isNaN()")}}.

{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}

## Syntax

```js-nolint
isNaN(value)
```

### Parameters

- `value`
  - : The value to be tested.

### Return value

`true` if the given value is {{jsxref("NaN")}} after being [converted to a number](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion); otherwise, `false`.

## Description

`isNaN()` is a function property of the global object.

For number values, `isNaN()` tests if the number is the value [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN). When the argument to the `isNaN()` function is not of type [Number](/en-US/docs/Web/JavaScript/Data_structures#number_type), the value is first coerced to a number, and the resulting value is then compared against {{jsxref("NaN")}}.

This behavior of `isNaN()` for non-numeric arguments can be confusing! For example, an empty string is coerced to 0, while a boolean is coerced to 0 or 1; both values are intuitively "not numbers", but they don't evaluate to `NaN`, so `isNaN()` returns `false`. Therefore, `isNaN()` answers neither the question "is the input the floating point {{jsxref("NaN")}} value" nor the question "is the input not a number".

{{jsxref("Number.isNaN()")}} is a more reliable way to test whether a value is the number value `NaN` or not. Alternatively, the expression `x !== x` can be used, and neither of the solutions is subject to the false positives that make the global `isNaN()` unreliable. To test if a value is a number, use [`typeof x === "number"`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

The `isNaN()` function answers the question "is the input functionally equivalent to {{jsxref("NaN")}} when used in a number context". If `isNaN(x)` returns `false`, you can use `x` in an arithmetic expression as if it's a valid number that's not `NaN`. If `isNaN(x)` returns `true`, `x` will get coerced to `NaN` and make most arithmetic expressions return `NaN` (because `NaN` propagates). You can use this, for example, to test whether an argument to a function is arithmetically processable (usable "like" a number), and handle values that are not number-like by throwing an error, providing a default value, etc. This way, you can have a function that makes use of the full versatility JavaScript provides by implicitly converting values depending on context.

> **Note:** The [`+` operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition) performs both number addition and string concatenation. Therefore, even if `isNaN()` returns `false` for both operands, the `+` operator may still return a string, because it's not used as an arithmetic operator. For example, `isNaN("1")` returns `false`, but `"1" + 1` returns `"11"`. To be sure that you are working with numbers, [coerce the value to a number](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) and use {{jsxref("Number.isNaN()")}} to test the result.

## Examples

Note how `isNaN()` returns `true` for values that are not the value `NaN` but are not numbers either:

```js
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// Strings
isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5"); // true
isNaN("123ABC"); // true: Number("123ABC") is NaN
isNaN(""); // false: the empty string is converted to 0 which is not NaN
isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN

// Dates
isNaN(new Date()); // false; Date objects can be converted to a number (timestamp)
isNaN(new Date().toString()); // true; the string representation of a Date object cannot be parsed as a number
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
