---
title: Intl.DurationFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/formatToParts
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.DurationFormat.formatToParts
---

{{JSRef}}

The **`formatToParts()`** method of {{jsxref("Intl.DurationFormat")}} instances returns an array of objects representing each part of the formatted string that would be returned by {{jsxref("Intl/DurationFormat/format", "format()")}}. It is useful for building custom strings from the locale-specific tokens.

## Syntax

```js-nolint
formatToParts(duration)
```

### Parameters

- `duration` {{optional_inline}}
  - : The duration object to be formatted. It should include some or all of the following properties: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. Each property's value should be an integer, and their signs should be consistent. This can be a {{jsxref("Temporal.Duration")}} object; see the {{jsxref("Temporal.Duration")}} documentation for more information about these properties.

### Return value

An {{jsxref("Array")}} of objects containing the formatted duration in parts. Each object has two or three properties, `type`, `value`, and optionally `unit`, each containing a string. The string concatenation of `value`, in the order provided, will result in the same string as {{jsxref("Intl/DurationFormat/format", "format()")}}. The parts can be thought of as directly obtained from calling {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} with the numeric value and their respective units. All tokens that are produced by the `NumberFormat` have an additional `unit` property, which is the singular form of the input `unit`; this is for programmatic usage and is not localized. The localized unit is output as a separate `unit` token as part of the `NumberFormat` result. The parts from each duration unit are concatenated together in the same fashion as calling {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}} with `{ type: "unit" }`, so additional literal tokens are inserted.

## Examples

The `formatToParts` method enables locale-aware formatting of strings produced by `DurationFormat` formatters by providing you the string in parts:

```js
const duration = {
  hours: 7,
  minutes: 8,
  seconds: 9,
  milliseconds: 123,
  microseconds: 456,
  nanoseconds: 789,
};

new Intl.DurationFormat("en", { style: "long" }).formatToParts(duration);

// Returned value:
[
  { type: "integer", value: "7", unit: "hour" },
  { type: "literal", value: " ", unit: "hour" },
  { type: "unit", value: "hours", unit: "hour" },
  { type: "literal", value: ", " },
  { type: "integer", value: "8", unit: "minute" },
  { type: "literal", value: " ", unit: "minute" },
  { type: "unit", value: "minutes", unit: "minute" },
  { type: "literal", value: ", " },
  { type: "integer", value: "9", unit: "second" },
  { type: "literal", value: " ", unit: "second" },
  { type: "unit", value: "seconds", unit: "second" },
  { type: "literal", value: ", " },
  { type: "integer", value: "123", unit: "millisecond" },
  { type: "literal", value: " ", unit: "millisecond" },
  { type: "unit", value: "milliseconds", unit: "millisecond" },
  { type: "literal", value: ", " },
  { type: "integer", value: "456", unit: "microsecond" },
  { type: "literal", value: " ", unit: "microsecond" },
  { type: "unit", value: "microseconds", unit: "microsecond" },
  { type: "literal", value: ", " },
  { type: "integer", value: "789", unit: "nanosecond" },
  { type: "literal", value: " ", unit: "nanosecond" },
  { type: "unit", value: "nanoseconds", unit: "nanosecond" },
];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl/DurationFormat/format", "Intl.DurationFormat.prototype.format()")}}
- {{jsxref("Temporal.Duration")}}
