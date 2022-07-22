---
title: Intl.DurationFormat.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/format
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - DurationFormat
  - Format
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.DurationFormat.format
---

{{JSRef}} {{SeeCompatTable}}

The **`Intl.DurationFormat.prototype.format()`** method formats a
duration according to the locale and formatting options of this
{{jsxref("Intl.DurationFormat")}} object.

## Syntax

```js
format(duration);
```

### Parameters

- `duration`
  - : The duration object to be formatted. Possible values include:
     "`months`", " `weeks`", "`days`", "`hours`", "`minutes`", " `seconds`", "`milliseconds`", "`microseconds`", "`nanoseconds`".
## Description

The `format` getter function formats a duration into a string containing the formatted duration, according to the locale and formatting options of this {{jsxref("Intl.DurationFormat")}} object.

## Examples

### Using format with an object as parameter

Use the `format` getter function for formatting using an object

```js
const duration = {
  years: 1,
  months: 2,
  weeks: 3,
  days: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7,
  microseconds: 8,
  nanoseconds: 9,
};

new Intl.DurationFormat('en').format(duration);
// →  '1 year, 2 months, 3 weeks, 3 days, 4 hours, 5 minutes, 6 seconds, 7 milliseconds, 8 microseconds, and 9 nanoseconds'
```

### Using format with style options

Use the `format` getter function for formatting using style options.

```js
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

new Intl.DurationFormat('fr-FR', { style: 'long' }).format(duration);
// → '1 heure, 46 minutes et 40 secondes'

new Intl.DurationFormat('en', { style: 'short' }).format(duration);
// → '1 hr, 46 min and 40 sec'
```

### Using format with fractionalDigits option

Use the `format` getter function for formatting using with fractionalDigits  options and setting milliseconds display to `narrow`.

```js
const duration = {
  seconds: 12,
  milliseconds: 345,
  microseconds: 600,
};

// Example using fractionalDigits
new Intl.DurationFormat('en', { fractionalDigits: 2 }).format(duration);
// => 12.34 sec

// Example using fractionalDigits and milliseconds set to `narrow`
new Intl.DurationFormat('en', {
  milliseconds: 'narrow',
  fractionalDigits: 2,
}).format(duration);
// => 12s 345.60ms
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
