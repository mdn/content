---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.DateTimeFormat.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.DateTimeFormat")}} instances returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this `Intl.DateTimeFormat` object.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the locale and date and time formatting options
computed during the initialization of the given {{jsxref("Intl.DateTimeFormat")}} object.

## Description

The resulting object has the following properties:

- `locale`
  - : The BCP 47 language tag for the locale actually used. If any Unicode extension
    values were requested in the input BCP 47 language tag that led to this locale,
    the key-value pairs that were requested and are supported for this locale are
    included in `locale`.
- `calendar`
  - : The calendar system actually used. From the value provided for this property
    in the `options` argument, a specific calendar requested using the Unicode
    extension key `ca` in the `locales` argument, or the default calendar system
    for the resolved `locale`. E.g. "gregory", "hebrew".
- `numberingSystem`
  - : The numbering system actually used. From the value provided for this property
    in the `options` argument, a specific numbering system requested using
    the Unicode extension key `nu` in the `locales` argument, or the default
    numbering system for the resolved `calendar` and `locale`.
- `timeZone`
  - : The value provided for this property in the `options` argument;
    defaults to the runtime's default time zone. Should never be `undefined`.
- `hour12`, `hourCycle`
  - : The values provided for these properties in the `options` argument, or
    the locale's preferred representation for hours if not specified. (These
    properties are only present if the `options` argument included `hour`
    or `timeStyle`.)
- `weekday`, `era`, `year`, `month`, `day`, `hour`, `minute`, `second`, `timeZoneName`
  - : The values resulting from format matching between the corresponding properties in
    the `options` argument and the available combinations and
    representations for date-time formatting in the selected locale. Some of these
    properties may not be present, indicating that the corresponding components will
    not be represented in formatted output. (If the `dateStyle` or `timeStyle` shortcuts
    were used in `options`, these individual component properties will never be present.)
- `dateStyle`, `timeStyle`
  - : The values provided for these properties in the `options` argument, if any.

Although `dateStyle` and `timeStyle` are shortcuts for individual date and time component
styles, the exact (locale dependent) component styles they resolve to are not 
included in the resolved options. This ensures the result of `resolvedOptions()` can 
be passed directly to the `Intl.DateTimeFormat()` constructor (because an `options` object 
with both `dateStyle` or `timeStyle` and individual date or time component styles is not valid).

## Examples

### Using the resolvedOptions method

```js
const germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
const usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de" (because "de-XX" does not exist)
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

### Getting the user's time zone and locale preferences

The `Intl.DateTimeFormat` constructor without any options uses the current
system settings. You can use `resolvedOptions()` to get the user's current
time zone and locale's preferred calendar and numbering system:

```js
const systemOptions = new Intl.DateTimeFormat().resolvedOptions();
systemOptions.timeZone; // e.g., "Europe/Brussels" or "Asia/Riyadh"
systemOptions.calendar; // e.g., "gregory" or "islamic-umalqura"
systemOptions.numberingSystem; // e.g., "latn" or "arab"
systemOptions.locale; // e.g., "nl-BE" or "ar-SA"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DateTimeFormat")}}
