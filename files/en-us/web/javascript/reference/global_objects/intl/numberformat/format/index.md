---
title: Intl.NumberFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.NumberFormat.format
---

{{JSRef}}

The **`format()`** method of {{jsxref("Intl.NumberFormat")}} instances formats a number according to the [locale and formatting options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) of this `Intl.NumberFormat` object.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.prototype.format", "taller")}}

```js interactive-example
const amount = 654321.987;

const options1 = { style: "currency", currency: "RUB" };
const numberFormat1 = new Intl.NumberFormat("ru-RU", options1);

console.log(numberFormat1.format(amount));
// Expected output: "654 321,99 ₽"

const options2 = { style: "currency", currency: "USD" };
const numberFormat2 = new Intl.NumberFormat("en-US", options2);

console.log(numberFormat2.format(amount));
// Expected output: "$654,321.99"
```

## Syntax

```js-nolint
format(number)
```

### Parameters

- `number`
  - : A {{jsxref("Number")}}, {{jsxref("BigInt")}}, or string, to format. Strings are parsed in the same way as in [number conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), except that `format()` will use the exact value that the string represents, avoiding loss of precision during implicitly conversion to a number.

> [!NOTE]
> Older versions of the specification parsed strings as a {{jsxref("Number")}}.
> Check the compatibility table for your browser.

### Return value

A string representing the given `number` formatted according to the locale and formatting options of this {{jsxref("Intl.NumberFormat")}} object.

> [!NOTE]
> Most of the time, the formatting returned by `format()` is consistent. However, the output may vary between implementations, even within the same locale — output variations are by design and allowed by the specification. It may also not be what you expect. For example, the string may use non-breaking spaces or be surrounded by bidirectional control characters. You should not compare the results of `format()` to hardcoded constants.

## Description

{{jsxref("Number")}} values in JavaScript suffer from loss of precision if they are too big or too small, making the text representation inaccurate.
If you are performing calculations with integers larger than {{jsxref("Number.MAX_SAFE_INTEGER")}} you should use a {{jsxref("BigInt")}} instead, which will format correctly:

```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```

You can also pass through very large strings to be formatted as an arbitrary-precision decimal string (if you're performing calculations on the data you will still need to work with `BigInt`):

```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```

## Examples

### Using format

Use the `format` getter function for formatting a single currency value.
The code below shows how to format the roubles currency for a Russian locale:

```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```

### Using format with map

Use the `format` getter function for formatting all numbers in an array.
Note that the function is bound to the {{jsxref("Intl.NumberFormat")}} from which it was obtained, so it can be passed directly to {{jsxref("Array.prototype.map")}}.
This is considered a historical artefact, as part of a convention which is no longer followed for new features, but is preserved to maintain compatibility with existing programs.

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```

### Using format with a string

Using a string we can specify numbers that are larger than {{jsxref("Number.MAX_SAFE_INTEGER")}} without losing precision.

```js
const numberFormat = new Intl.NumberFormat("en-US");

// Here the value is converted to a Number
console.log(numberFormat.format(987654321987654321));
// 987,654,321,987,654,300

// Here we use a string and don't lose precision
console.log(numberFormat.format("987654321987654321"));
// 987,654,321,987,654,321
```

We can also use the general "E" exponent syntax for decimal strings: `#.#E#`.
The code below creates a {{jsxref("BigInt")}}, coerces it to a string with the suffix `E-6`, and then formats it.

```js
const numberFormat = new Intl.NumberFormat("en-US");
const bigNum = 1000000000000000110000n;
console.log(numberFormat.format(bigNum));
// "1,000,000,000,000,000,110,000"

// Format as a string using the `E` syntax:
console.log(numberFormat.format(`${bigNum}E-6`));
// "1,000,000,000,000,000.11"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
