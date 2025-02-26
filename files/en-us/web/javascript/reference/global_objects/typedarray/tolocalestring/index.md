---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.toLocaleString
---

{{JSRef}}

The **`toLocaleString()`** method of {{jsxref("TypedArray")}} instances returns a string representing the elements of the typed array. The elements are converted to strings using their `toLocaleString` methods and these strings are separated by a locale-specific string (such as a comma ","). This method has the same algorithm as {{jsxref("Array.prototype.toLocaleString()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.toLocaleString()")}}

```js interactive-example
const uint8 = new Uint32Array([500, 8123, 12]);

console.log(uint8.toLocaleString());
// Expected output: "500,8123,12"

console.log(uint8.toLocaleString("en-GB"));
// Expected output: "500,8,123,12"

console.log(
  uint8.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// Expected output: "500,00 €,8.123,00 €,12,00 €"
```

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameters

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : An object with configuration properties. See {{jsxref("Number.prototype.toLocaleString()")}}.

### Return value

A string representing the elements of the typed array.

## Description

See {{jsxref("Array.prototype.toLocaleString()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using toLocaleString()

```js
const uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString();
// if run in a de-DE locale
// "2.000,500,8.123,12,4.212"

uint.toLocaleString("en-US");
// "2,000,500,8,123,12,4,212"

uint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
