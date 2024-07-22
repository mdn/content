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

A new object with properties reflecting the options computed during the initialization of the given {{jsxref("Intl.DateTimeFormat")}} object. The object has the following properties, in the order they are listed:

- `locale`
  - : The BCP 47 language tag for the locale actually used. Only the `ca`, `hc`, and `nu` Unicode extension keys may be included in the output.
- `calendar`
  - : One of the [supported calendar types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types), reflecting the value provided for this property in the `options` argument or the `ca` Unicode extension key. The default is locale dependent.
- `numberingSystem`
  - : One of the [supported numbering system types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types), reflecting the value provided for this property in the `options` argument or the `nu` Unicode extension key. The default is locale dependent.
- `timeZone`

  - : One of the [IANA time zone names](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones), reflecting the value provided for this property in the `options` argument. The default is the runtime's default time zone; should never be `undefined`.

    > **Note:** While the IANA database changes from time to time, the Unicode CLDR database (which browsers use) keeps old time zone names for stability purposes. All browsers canonicalize time zone names, but in different directions. For example, `new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Kiev" }).resolvedOptions().timeZone` and `new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Kyiv" }).resolvedOptions().timeZone` will return the same string in the same browser, but maybe different strings in different browsers. See {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones")}} for more information.

- `hourCycle`
  - : The value provided for this property in the `options` argument, or provided in the Unicode extension key `"hc"`, with default filled in as needed. Only present if the `options` argument included `hour` or `timeStyle`.
- `hour12`
  - : The value provided for this property in the `options` argument, or computed from the `hourCycle` property. Only present if the `options` argument included `hour` or `timeStyle`.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName`
  - : The values resulting from format matching between the corresponding properties in the `options` argument and the available combinations and representations for date-time formatting in the selected locale. Some of these properties may not be present, indicating that the corresponding components will not be represented in formatted output. If the `dateStyle` or `timeStyle` shortcuts were used in `options`, these individual component properties will never be present.
- `dateStyle`, `timeStyle`
  - : The values provided for these properties in the `options` argument, if any.

## Description

Although `dateStyle` and `timeStyle` are shortcuts for individual date and time component styles, the exact (locale dependent) component styles they resolve to are not included in the resolved options. This ensures the result of `resolvedOptions()` can be passed directly to the `Intl.DateTimeFormat()` constructor (because an `options` object with both `dateStyle` or `timeStyle` and individual date or time component styles is not valid).

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

The `Intl.DateTimeFormat` constructor without any options uses the current system settings. You can use `resolvedOptions()` to get the user's current time zone and locale's preferred calendar and numbering system:

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
