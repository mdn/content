---
title: Intl.DurationFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.DurationFormat.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.DurationFormat")}} instances returns a new object with properties reflecting the options computed during initialization of this `DurationFormat` object.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this `DurationFormat` object. The object has the following properties, in the order they are listed:

- `locale`
  - : The BCP 47 language tag for the locale actually used, determined by the [locale negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) process. Only the `nu` Unicode extension key, if requested, may be included in the output.
- `numberingSystem`
  - : The value provided for this property in the `options` argument, or using the Unicode extension key `"nu"`, with default filled in as needed. It is a supported [numbering system](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) for this locale. The default is locale dependent.
- `style`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"long"`, `"short"`, `"narrow"`, or `"digital"`. The default is `"short"`.
- `years`, `yearsDisplay`, `months`, `monthsDisplay`, `weeks`, `weeksDisplay`, `days`, `daysDisplay`, `hours`, `hoursDisplay`, `minutes`, `minutesDisplay`, `seconds`, `secondsDisplay`, `milliseconds`, `millisecondsDisplay`, `nanoseconds`, `nanosecondsDisplay`
  - : The values provided for these properties in the `options` argument, with defaults filled in as needed. For the valid values and defaults for each, see the [`options`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options) argument of the constructor.
- `fractionalDigits` {{optional_inline}}
  - : The value provided for this property in the `options` argument. It is only present if specified in `options`. It is an integer from 0 to 9, inclusive.

## Examples

### Using the resolvedOptions method

```js
const duration = new Intl.DurationFormat("en");
const usedOptions = duration.resolvedOptions();

usedOptions.locale; // "en"
usedOptions.numberingSystem; // "latn"
usedOptions.years; // "long"
usedOptions.yearsDisplay; // "auto"
usedOptions.style; // "long"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
