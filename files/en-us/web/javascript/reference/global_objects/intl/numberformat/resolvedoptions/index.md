---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.NumberFormat.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.NumberFormat")}} instances returns a new object with properties reflecting the options computed during initialization of this `NumberFormat` object.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.prototype.resolvedOptions")}}

```js interactive-example
const numberFormat1 = new Intl.NumberFormat("de-DE");
const options1 = numberFormat1.resolvedOptions();

console.log(options1.locale);
// Expected output (Firefox / Safari): "de-DE"
// Expected output (Chrome): "de"

console.log(options1.numberingSystem);
// Expected output: "latn"

console.log(options1.style);
// Expected output: "decimal"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this `NumberFormat` object. The object has the following properties, in the order they are listed:

- `locale`
  - : The BCP 47 language tag for the locale actually used, determined by the [locale negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) process. Only the `nu` Unicode extension key, if requested, may be included in the output.
- `numberingSystem`
  - : The value provided for this property in the `options` argument, or using the Unicode extension key `"nu"`, with default filled in as needed. It is a supported [numbering system](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) for this locale. The default is locale dependent.
- `style`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"decimal"`, `"percent"`, `"currency"`, or `"unit"`. The default is `"decimal"`.
- `currency` {{optional_inline}}
  - : The value provided for this property in the `options` argument. It is only present if `style` is `"currency"`. It is an ISO 4217 currency code; see [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). It is required if `style` is `"currency"` so there is no default.
- `currencyDisplay` {{optional_inline}}
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is only present if `style` is `"currency"`. It is either `"code"`, `"symbol"`, `"narrowSymbol"`, or `"name"`. The default is `"symbol"`.
- `currencySign` {{optional_inline}}
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is only present if `style` is `"currency"`. It is either `"standard"` or `"accounting"`. The default is `"standard"`.
- `unit` {{optional_inline}}
  - : The value provided for this property in the `options` argument. It is only present if `style` is `"unit"`. It is a [sanctioned unit identifier](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers) from the [full CLDR list](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml). It is required if `style` is `"unit"` so there is no default.
- `unitDisplay` {{optional_inline}}
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is only present if `style` is `"unit"`. It is either `"short"`, `"narrow"`, or `"long"`. The default is `"short"`.
- `minimumIntegerDigits`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is an integer between `1` and `21`. The default is `1`.
- `minimumFractionDigits`, `maximumFractionDigits` {{optional_inline}}
  - : The value provided for these properties in the `options` argument, with defaults filled in as needed. They are only present if necessary; see [digit options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options). It is an integer between `0` and `100`.
- `minimumSignificantDigits`, `maximumSignificantDigits` {{optional_inline}}
  - : The value provided for these properties in the `options` argument, with defaults filled in as needed. They are only present if necessary; see [digit options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options). It is an integer between `1` and `21`.
- `useGrouping`
  - : The value provided for this property in the `options` argument, with default filled in as needed, and with some values normalized. It is either `"always"`, `"auto"`, `"min2"`, or the boolean `false`. The default is `"min2"` if `notation` is `"compact"`, and `"auto"` otherwise.
- `notation`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"standard"`, `"scientific"`, `"engineering"`, or `"compact"`. The default is `"standard"`.
- `compactDisplay` {{optional_inline}}
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is only present if `notation` is `"compact"`. It is either `"short"` or `"long"`. The default is `"short"`.
- `signDisplay`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"auto"`, `"always"`, `"exceptZero"`, `"negative"`, or `"never"`. The default is `"auto"`.
- `roundingIncrement`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is one of `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, and `5000`. The default is `1`.
- `roundingMode`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is one of `"ceil"`, `"floor"`, `"expand"`, `"trunc"`, `"halfCeil"`, `"halfFloor"`, `"halfExpand"`, `"halfTrunc"`, and `"halfEven"`. The default is `"halfExpand"`.
- `roundingPriority`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"auto"`, `"morePrecision"`, or `"lessPrecision"`. The default is `"auto"`.
- `trailingZeroDisplay`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"auto"` or `"stripIfInteger"`. The default is `"auto"`.

## Examples

### Using the `resolvedOptions` method

```js
// Create a NumberFormat
const de = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
  roundingMode: "halfCeil",
});

// Resolve the options
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.numberingSystem); // "latn"
console.log(usedOptions.compactDisplay); // undefined ("notation" not set to "compact")
console.log(usedOptions.currency); // "USD"
console.log(usedOptions.currencyDisplay); // "symbol"
console.log(usedOptions.currencySign); // "standard"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // 2
console.log(usedOptions.maximumFractionDigits); // 2
console.log(usedOptions.minimumSignificantDigits); // undefined (maximumFractionDigits is set)
console.log(usedOptions.maximumSignificantDigits); // undefined (maximumFractionDigits is set)
console.log(usedOptions.notation); // "standard"
console.log(usedOptions.roundingIncrement); // 5
console.log(usedOptions.roundingMode); // halfCeil
console.log(usedOptions.roundingPriority); // auto
console.log(usedOptions.signDisplay); // "auto"
console.log(usedOptions.style); // "currency"
console.log(usedOptions.trailingZeroDisplay); // auto
console.log(usedOptions.useGrouping); // auto
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.NumberFormat")}}
