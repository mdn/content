---
title: Intl.DurationFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Intl.DurationFormat.resolvedOptions
---

{{JSRef}} {{SeeCompatTable}}

The **`resolvedOptions()`** method of {{jsxref("Intl.DurationFormat")}} instances returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this {{jsxref("Intl.DurationFormat")}} object.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the locale and date and time formatting options computed during the initialization of the given {{jsxref("Intl.DateTimeFormat")}} object.

## Description

The resulting object has the following properties:

- `locale`
  - : The [BCP 47 language tag](https://datatracker.ietf.org/doc/html/rfc5646) for the locale used. If any Unicode extension values were requested in the input BCP 47 language tag that led to this locale, the key-value pairs that were requested and are supported for this locale are included in `locale`.
- `style`
  - : One of the strings `"long"`, `"short"`, `"narrow"`, or `"digital"` identifying the duration formatting style used.
- `years`
  - : One of the strings `"long"`, `"short"`, or `"narrow"` identifying the formatting style used for the `years` field.
- `yearsDisplay`
  - : One of the strings `"auto"` or `"always"` identifying when to display the `years` field.
- `months`
  - : One of the strings `"long"`, `"short"`, `and "narrow"` identifying the formatting style used for the `months` field.
- `monthsDisplay`
  - : One of the strings `"auto"` or `"always"` identifying when to display the `months` field.
- `weeks`
  - : One of the strings `"long"`, `"short"`, `and "narrow"` identifying the formatting style used for the `weeks` field.
- `weeksDisplay`
  - : One of the strings `"auto"` or `"always"` identifying when to display the `weeks` field.
- `days`
  - : One of the strings `"long"`, `"short"`, and `"narrow"` identifying the formatting style used for the `days` field.
- `daysDisplay`
  - : One of the strings `"auto"` or `"always"` identifying when to display the `days` field.
- `hours`
  - : One of the strings `"long"`, `"short"`, `"narrow"`, `"2-digit"`, or `"numeric"` identifying the formatting style used for the `hours` field.
- `hoursDisplay`
  - : One of the strings `"auto"` or `"always"` identifying when to display the `hours` field.
- `minutes`
  - : One of the strings `"long"`, `"short"`, `"narrow"`, `"2-digit"`, or `"numeric"` identifying the formatting style used for the `minutes` field.
- `minutesDisplay`
  - : One of the strings `"auto"` or `"always"` identifying when to display the `minutes` field.
- `seconds`
  - : One of the strings `"long"`, `"short"`, `"narrow"`, `"2-digit"`, or `"numeric"` identifying the formatting style used for the `seconds` field.
- `secondsDisplay`
  - : One of the strings `"auto"` or `"always"` identifying when to display the `seconds` field.
- `milliseconds`
  - : One of the strings `"long"`, `"short"`, `"narrow"`, or `"numeric"` identifying the formatting style used for the `milliseconds` field.
- `millisecondsDisplay`
  - : One of the strings `"auto"` or `"always"` identifying when to display the `millisecondsDisplay` field.
- `microseconds`
  - : One of the strings `"long"`, `"short"`, `"narrow"`, or `"numeric"` identifying the formatting style used for the `microseconds` field.
- `microsecondsDisplay`
  - : One of the strings `"auto"` or `"always"` identifying when to display the `microsecondsDisplay` field.
- `nanoseconds`
  - : One of the strings `"long"`, `"short"`, `"narrow"`, or `"numeric"` identifying the formatting style used for the `nanoseconds` field.
- `nanosecondsDisplay`
  - : One of the strings `"auto"` or `"always"` identifying when to display the `nanosecondsDisplay` field.
- `fractionalDigits`
  - : A number, identifying the number of fractional digits used with numeric styles.
- `numberingSystem`
  - : The value provided for this property in the options argument, if present, or the value requested using the Unicode extension key `nu` or filled in as a default.

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
