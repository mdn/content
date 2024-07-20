---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.NumberFormat.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.NumberFormat")}} instances returns a new object with properties reflecting the [locale and number formatting options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) computed during initialization of this `Intl.NumberFormat` object.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the [locale and number formatting options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) computed during the construction of the given {{jsxref("Intl.NumberFormat")}} object.

The resulting object has the following properties:

- `compactDisplay`
  - : Whether to use short or long form when using compact notation.
    This is the value provided in the [`options.compactDisplay`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#compactdisplay) argument of the constructor, or the default value: `"short"`.
    The value is only present if `notation` is set to "compact", and otherwise is `undefined`.
- `currency`
  - : The currency to use in currency formatting.
    The value is defined if `style` is `"currency"`, and is otherwise `undefined`.
    This is the value provided in the [`options.currency`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currency) argument of the constructor.
- `currencyDisplay`
  - : The display format for the currency, such as a symbol, or currency code.
    The value is defined if `style` is `"currency"`, and otherwise is `undefined`.
    This is the value provided in the [`options.currencyDisplay`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencydisplay) argument of the constructor, or the default value: `"symbol"`.
- `currencySign`
  - : The method used to specify the sign of the currency value: `standard` or `accounting`.
    The value is present if `style` is `"currency"`, and otherwise is `undefined`.
    This is the value provided in the [`options.currencySign`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencysign) argument of the constructor, or the default value: `"standard"`.
- `locale`
  - : The BCP 47 language tag for the locale that was actually used.
    Matches one of the locales that were requested in the constructor [`locales`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales).
- `notation`
  - : The formatting that should be applied to the number, such as `standard` or `engineering`.
    This is the value provided in the [`options.notation`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#notation) argument of the constructor, or the default value: `"standard"`.
- `numberingSystem`
  - : The numbering system.
    This is the value provided in the [`options.numberingSystem`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#numberingsystem) argument of the constructor, if present, or the value set using the Unicode extension key [`nu`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#nu), or filled in as a default.
- `roundingIncrement`
  - : The rounding-increment precision (the increment used when rounding numbers).
    This is the value specified in the [`options.roundingIncrement`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingincrement) argument in the constructor.
- `roundingMode`
  - : The rounding mode.
    This is the value provided for the [`options.roundingMode`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode) argument in the constructor, or the default value: `halfExpand`.
- `roundingPriority`
  - : The priority for resolving rounding conflicts if both "FractionDigits" and "SignificantDigits" are specified.
    This is the value provided for the [`options.roundingPriority`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingpriority) argument in the constructor, or the default value: `auto`.
- `signDisplay`
  - : Whether or not to display the positive/negative sign.
    This is the value specified in the [`options.signDisplay`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#signdisplay) argument in the constructor, or the default value: `"auto"`.
- `unit`
  - : The unit to use in unit formatting.
    The value is only present if `style` is `"unit"`, and is otherwise `undefined`.
    This is the value specified in the [`options.unit`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unit) argument in the constructor.
- `unitDisplay`

  - : The display format to use for units in unit formatting, such as "long", "short" or "narrow".
    The value is only present if `style` is `"unit"`, and is otherwise `undefined`.
    This is the value specified in the [`options.unitDisplay`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unitdisplay) argument in the constructor, or the default value: `short`.

- `useGrouping`
  - : Whether or not to use grouping separators to indicate "thousands", "millions" and son on.
    This is the value specified in the [`options.useGrouping`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#usegrouping) argument in the constructor, or the default value: `"auto"`.
- `trailingZeroDisplay`
  - : The strategy for displaying trailing zeros on whole numbers.
    This is the value specified in the [`options.trailingZeroDisplay`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#trailingzerodisplay) argument in the constructor, or the default value: `"auto"`.

Only one of the following two groups of properties is included:

- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`
  - : The values provided for these properties in the `options` argument or filled in as defaults.
    These properties are present only if neither `minimumSignificantDigits` nor `maximumSignificantDigits` was provided in the `options` argument.
- `minimumSignificantDigits`, `maximumSignificantDigits`
  - : The values provided for these properties in the `options` argument or filled in as defaults.
    These properties are present only if at least one of them was provided in the `options` argument.

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
