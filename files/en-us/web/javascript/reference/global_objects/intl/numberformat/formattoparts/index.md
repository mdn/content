---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.NumberFormat.formatToParts
---

{{JSRef}}

The **`formatToParts()`** method of {{jsxref("Intl.NumberFormat")}} instances returns an array of objects representing each part of the formatted string that would be returned by {{jsxref("Intl/NumberFormat/format", "format()")}}. It is useful for building custom strings from the locale-specific tokens.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.prototype.formatToParts")}}

```js interactive-example
const amount = 654321.987;
const options = { style: "currency", currency: "USD" };
const numberFormat = new Intl.NumberFormat("en-US", options);

const parts = numberFormat.formatToParts(amount);
const partValues = parts.map((p) => p.value);

console.log(partValues);
// Expected output: "["$", "654", ",", "321", ".", "99"]"
```

## Syntax

```js-nolint
formatToParts(number)
```

### Parameters

- `number`
  - : A {{jsxref("Number")}}, {{jsxref("BigInt")}}, or string, to format. Strings are parsed in the same way as in [number conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), except that `formatToParts()` will use the exact value that the string represents, avoiding loss of precision during implicitly conversion to a number.

### Return value

An {{jsxref("Array")}} of objects containing the formatted number in parts. Each object has two properties, `type` and `value`, each containing a string. The string concatenation of `value`, in the order provided, will result in the same string as {{jsxref("Intl/NumberFormat/format", "format()")}}. The `type` may be one of the following:

- `literal`
  - : Any string that's a part of the format pattern; for example `" "`. Note that common tokens like the decimal separator or the plus/minus signs have their own token types.
- `integer`
  - : The integral part of the number, or a segment of it if using grouping (controlled by `options.useGrouping`).
- `group`
  - : The group separator string, such as `","`. Only present when using grouping (controlled by `options.useGrouping`).
- `decimal`
  - : The decimal separator string, such as `"."`. Only present when `fraction` is present.
- `fraction`
  - : The fractional part of the number.
- `compact`
  - : The compact exponent, such as `"M"` or `"thousands"`. Only present when `options.notation` is `"compact"`. The form (`"short"` or `"long"`) can be controlled via `options.compactDisplay`.
- `exponentSeparator`
  - : The exponent separator, such as `"E"`. Only present when `options.notation` is `"scientific"` or `"engineering"`.
- `exponentMinusSign`
  - : The exponent minus sign string, such as `"-"`. Only present when `options.notation` is `"scientific"` or `"engineering"` and the exponent is negative.
- `exponentInteger`
  - : The exponent's integer value. Only present when `options.notation` is `"scientific"` or `"engineering"`.
- `nan`
  - : A string representing {{jsxref("NaN")}}, such as `"NaN"`. This is the sole token representing the number itself when the number is `NaN`.
- `infinity`
  - : A string representing {{jsxref("Infinity")}} or `-Infinity`, such as `"∞"`. This is the sole token representing the number itself when the number is `Infinity` or `-Infinity`.
- `plusSign`
  - : The plus sign, such as `"+"`.
- `minusSign`
  - : The minus sign, such as `"-"`.
- `percentSign`
  - : The percent sign, such as `"%"`. Only present when `options.style` is `"percent"`.
- `unit`
  - : The unit string, such as `"l"` or `"litres"`. Only present when `options.style` is `"unit"`. The form (`"short"`, `"narrow"`, or `"long"`) can be controlled via `options.unitDisplay`.
- `currency`
  - : The currency string, such as `"$"`, `"€"`, `"Dollar"`, or `"Euro"`. Only present when `options.style` is `"currency"`. The form (`"code"`, `"symbol"`, `"narrowSymbol"`, or `"name"`) can be controlled via `options.currencyDisplay`.
- `unknown`
  - : Reserved for any token that's not recognized as one of the above; should be rarely encountered.

## Examples

### Using formatToParts()

The `format()` method outputs localized, opaque strings that cannot be manipulated directly:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

However, in many user interfaces you may want to customize the formatting of this string, or interleave it with other texts. The `formatToParts()` method produces the same information in parts:

```js
formatter.formatToParts(number);

// return value:
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
  { type: "decimal", value: "," },
  { type: "fraction", value: "00" },
  { type: "literal", value: " " },
  { type: "currency", value: "€" },
];
```

Now the information is available separately and it can be formatted and concatenated again in a customized way. For example by using {{jsxref("Array.prototype.map()")}}, [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), a [switch statement](/en-US/docs/Web/JavaScript/Reference/Statements/switch), [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals), and {{jsxref("Array.prototype.join()")}}, to insert additional markup for certain components.

```js
const numberString = formatter
  .formatToParts(number)
  .map(({ type, value }) => {
    switch (type) {
      case "currency":
        return `<strong>${value}</strong>`;
      default:
        return value;
    }
  })
  .join("");

console.log(numberString);
// "3.500,00 <strong>€</strong>"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
