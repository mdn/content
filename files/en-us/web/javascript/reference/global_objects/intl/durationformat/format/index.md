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
format(duration)
```

### Parameters

- `duration`
  - : The duration to be formatted. This could either be a Temporal.Duration object or a string or options bag that can be converted into one.


## Description

The `format` getter function formats a duration into a string containing the formatted duration, according to the locale and formatting options of this {{jsxref("Intl.DurationFormat")}} object.

## Examples

### Using format with an object as parameter

Use the `format` getter function for formatting using an object

```js
new Intl.DurationFormat("fr-FR", { style: "long" }).format({
    hours: 1,
    minutes: 46,
    seconds: 40,
});
// → "1 heure, 46 minutes et 40 secondes"
```

### Using format with an Temporal.Duration object as parameter

Use the `format` getter function for formatting using an Temporal.Duration object

```js
new Intl.DurationFormat('en').format(Temporal.Duration.from('PT2H46M40S'));
//  → "2 hr 46 min 40 sec"
```

### Using format with a string as parameter

Use the `format` getter function for formatting using a string 

```js
new Intl.DurationFormat('en', { fractionalDigits: 2 }).format('PT12.3456S'); 
//  → "12.34 sec"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
