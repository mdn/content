---
title: Intl.DurationFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/formatToParts
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Intl.DurationFormat.formatToParts
---

{{JSRef}} {{SeeCompatTable}}

The **`formatToParts()`** method of {{jsxref("Intl.DurationFormat")}} instances allows locale-aware formatting of strings produced by {{jsxref("Intl.DurationFormat")}} formatters.

## Syntax

```js-nolint
formatToParts(duration)
```

### Parameters

- `duration` {{optional_inline}}
  - : The duration object to be formatted. It should include some or all of the following properties: `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"`.

### Return value

An {{jsxref("Array")}} of objects containing the formatted duration in parts.

## Description

The `formatToParts()` method is useful for custom formatting of duration objects. It returns an {{jsxref("Array")}} of objects containing the locale-specific tokens from which it possible to build custom strings while preserving the locale-specific parts. The structure the `formatToParts()` method returns, looks like this:

```js
[
  { type: "integer", value: "7", unit: "hour" },
  { type: "literal", value: " ", unit: "hour" },
  { type: "unit", value: "hr", unit: "hour" },
  { type: "literal", value: ", " },
  { type: "integer", value: "8", unit: "minute" },
  { type: "literal", value: " ", unit: "minute" },
  { type: "unit", value: "min", unit: "minute" },
];
```

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
  { type: "literal", value: " and " },
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
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
