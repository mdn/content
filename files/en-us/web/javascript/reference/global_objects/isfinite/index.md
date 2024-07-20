---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
page-type: javascript-function
browser-compat: javascript.builtins.isFinite
---

{{jsSidebar("Objects")}}

The **`isFinite()`** function determines whether a value is finite, first converting the value to a number if necessary. A finite number is one that's not {{jsxref("NaN")}} or ±{{jsxref("Infinity")}}. Because coercion inside the `isFinite()` function can be [surprising](/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description), you may prefer to use {{jsxref("Number.isFinite()")}}.

{{EmbedInteractiveExample("pages/js/globalprops-isfinite.html")}}

## Syntax

```js-nolint
isFinite(value)
```

### Parameters

- `value`
  - : The value to be tested.

### Return value

`false` if the given value is {{jsxref("NaN")}}, {{jsxref("Infinity")}}, or `-Infinity` after being [converted to a number](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion); otherwise, `true`.

## Description

`isFinite()` is a function property of the global object.

When the argument to the `isFinite()` function is not of type [Number](/en-US/docs/Web/JavaScript/Data_structures#number_type), the value is first coerced to a number, and the resulting value is then compared against `NaN` and ±Infinity. This is as confusing as the behavior of {{jsxref("isNaN")}} — for example, `isFinite("1")` is `true`.

{{jsxref("Number.isFinite()")}} is a more reliable way to test whether a value is a finite number value, because it returns `false` for any non-number input.

## Examples

### Using isFinite()

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

// Would've been false with the more robust Number.isFinite():
isFinite(null); // true
isFinite("0"); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
