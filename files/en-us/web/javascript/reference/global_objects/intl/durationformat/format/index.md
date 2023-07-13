---
title: Intl.DurationFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/format
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Intl.DurationFormat.format
---

{{JSRef}} {{SeeCompatTable}}

The **`format()`** method of {{jsxref("Intl.DurationFormat")}} instances formats a duration according to the locale and formatting options of this {{jsxref("Intl.DurationFormat")}} object.

## Syntax

```js-nolint
format(duration)
```

### Parameters

- `duration`
  - : The duration object to be formatted. It should include some or all of the following properties: `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"`.

## Examples

### Using format with an object as parameter

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

// Without options, style defaults to "short"
new Intl.DurationFormat("en").format(duration);
// "1 yr, 2 mths, 3 wks, 3 days, 4 hr, 5 min, 6 sec, 7 ms, 8 μs, 9 ns"

// With style set to "long"
new Intl.DurationFormat("en", { style: "long" }).format(duration);
// "1 year, 2 months, 3 weeks, 3 days, 4 hours, 5 minutes, 6 seconds, 7 milliseconds, 8 microseconds, 9 nanoseconds"

// With style set to "narrow"
new Intl.DurationFormat("en", { style: "narrow" }).format(duration);
// "1y 2mo 3w 3d 4h 5m 6s 7ms 8μs 9ns"
```

### Using format() with different locales and styles

```js
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

// With style set to "long" and locale "fr-FR"
new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// "1 heure, 46 minutes et 40 secondes"

// With style set to "short" and locale set to "en"
new Intl.DurationFormat("en", { style: "short" }).format(duration);
// "1 hr, 46 min and 40 sec"

// With style set to "short" and locale set to "pt"
new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// "1h 46min 40s"

// With style set to "digital" and locale set to "en"
new Intl.DurationFormat("en", { style: "digital" }).format(duration);
// "1:46:40"
```

### Using format with fractionalDigits option

Use the `format` getter function for formatting using with fractionalDigits options and setting milliseconds display to `narrow`.

```js
const duration = {
  seconds: 12,
  milliseconds: 345,
  microseconds: 600,
};

// Example using fractionalDigits
new Intl.DurationFormat("en", { fractionalDigits: 2 }).format(duration);
// => 12 sec, 345 ms, 600 μs

// Example using fractionalDigits and milliseconds set to `long`
new Intl.DurationFormat("en", {
  milliseconds: "long",
  fractionalDigits: 2,
}).format(duration);
// => 12 sec, 345 milliseconds, 600 μs
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
