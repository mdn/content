---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.DateTimeFormat.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.DateTimeFormat")}} instances returns a new object with properties reflecting the options computed during initialization of this `DateTimeFormat` object.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.resolvedOptions")}}

```js interactive-example
const region1 = new Intl.DateTimeFormat("zh-CN", { timeZone: "UTC" });
const options1 = region1.resolvedOptions();

console.log(options1.locale);
// Expected output: "zh-CN"

console.log(options1.calendar);
// Expected output: "gregory"

console.log(options1.numberingSystem);
// Expected output: "latn"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this `DateTimeFormat` object. The object has the following properties, in the order they are listed:

- `locale`
  - : The BCP 47 language tag for the locale actually used, determined by the [locale negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) process. Only the `ca`, `hc`, and `nu` Unicode extension keys, if requested, may be included in the output.
- `calendar`
  - : The value provided for this property in the `options` argument, or using the Unicode extension key `"ca"`, with default filled in as needed. It is a supported [calendar type](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) for this locale. The default is locale dependent.
- `numberingSystem`
  - : The value provided for this property in the `options` argument, or using the Unicode extension key `"nu"`, with default filled in as needed. It is a supported [numbering system](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) for this locale. The default is locale dependent.
- `timeZone`

  - : The value provided for this property in the `options` argument, with default filled in as needed. It is an [IANA time zone name](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). The default is the runtime's default time zone.

    > [!NOTE]
    > The standardization of `Temporal` requires browsers to use the same identifier as originally specified, without canonicalization to a different alias. See [time zones and offsets](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) for more information.

- `hourCycle` {{optional_inline}}
  - : The value provided for this property in the `options` argument, or using the Unicode extension key `"hc"`, with default filled in as needed. If `hour12` was provided in the `options`, then that overrides other `hourCycle` settings. It is only present if the resolved options also include `hour` or `timeStyle`. It is either `"h11"`, `"h12"`, `"h23"`, or `"h24"`. The default is locale dependent, although `"h24"` is never a default.
- `hour12` {{optional_inline}}
  - : Calculated from `hourCycle`. It is only present if the resolved options also include `hour` or `timeStyle`. It is `true` if `hourCycle` is `"h11"` or `"h12"`, and `false` if `hourCycle` is `"h23"` or `"h24"`.
- `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `timeZoneName` {{optional_inline}}

  - : The values resulting from format matching between the corresponding properties in the `options` argument and the available combinations and representations for date-time formatting in the selected locale. Some of these properties may not be present, indicating that the corresponding components will not be represented in formatted output. `weekday`, `era`, and `dayPeriod` are either `"narrow"`, `"short"`, or `"long"`; `year`, `day`, `hour`, `minute`, and `second` are either `"numeric"`, `"2-digit"`, or `"narrow"`; `month` is either `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, or `"long"`; `fractionalSecondDigits` is either `1`, `2`, or `3`; `timeZoneName` is either `"short"`, `"long"`, `"shortOffset"`, `"longOffset"`, `"shortGeneric"`, or `"longGeneric"`.

    If these properties were requested in `options`, the constructor prevents `dateStyle` and `timeStyle` from being specified, so the below group will never be present.

- `dateStyle`, `timeStyle` {{optional_inline}}

  - : The values provided for these properties in the `options` argument. They are either `"full"`, `"long"`, `"medium"`, `"short"`, or `"none"`. Some of these properties may not be present, indicating that the corresponding components will not be represented in formatted output.

    If these properties were requested in `options`, the constructor prevents individual date time component options from being specified, so the above group will never be present.

    > [!NOTE]
    > Although `dateStyle` and `timeStyle` are shortcuts for individual date and time component styles, the exact (locale dependent) component styles they resolve to are not included in the resolved options. This ensures the result of `resolvedOptions()` can be passed directly to the `Intl.DateTimeFormat()` constructor (because an `options` object with both `dateStyle` or `timeStyle` and individual date or time component styles is not valid).

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
