---
title: Intl.DateTimeFormat() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.DateTimeFormat.DateTimeFormat
---

{{JSRef}}

The **`Intl.DateTimeFormat()`** constructor creates {{jsxref("Intl.DateTimeFormat")}} objects.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat", "taller")}}

```js interactive-example
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat("en-US").format(date));
// Expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// Expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
console.log(
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(date),
);
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```

## Syntax

```js-nolint
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)

Intl.DateTimeFormat()
Intl.DateTimeFormat(locales)
Intl.DateTimeFormat(locales, options)
```

> **Note:** `Intl.DateTimeFormat()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `Intl.DateTimeFormat` instance. However, there's a special behavior when it's called without `new` and the `this` value is another `Intl.DateTimeFormat` instance; see [Return value](#return_value).

### Parameters

- `locales` {{optional_inline}}

  - : A string with a BCP 47 language tag or an {{jsxref("Intl.Locale")}} instance, or an array of such locale identifiers. The runtime's default locale is used when `undefined` is passed or when none of the specified locale identifiers is supported. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    The following Unicode extension keys are allowed:

    - `nu`
      - : See [`numberingSystem`](#numberingsystem).
    - `ca`
      - : See [`calendar`](#calendar).
    - `hc`
      - : See [`hourCycle`](#hourcycle).

    These keys can also be set with `options` (as listed below). When both are set, the `options` property takes precedence.

- `options` {{optional_inline}}

  - : An object. For ease of reading, the property list is broken into sections based on their purposes, including [locale options](#locale_options), [date-time component options](#date-time_component_options), and [style shortcuts](#style_shortcuts).

#### Locale options

- `localeMatcher`
  - : The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. For information about this option, see [Locale identification and negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : The calendar to use, such as `"chinese"`, `"gregory"`, `"persian"`, and so on. For a list of supported calendar types, see [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). This option can also be set through the `ca` Unicode extension key; if both are provided, this `options` property takes precedence.
- `numberingSystem`
  - : The numbering system to use for number formatting, such as `"arab"`, `"hans"`, `"mathsans"`, and so on. For a list of supported numbering system types, see [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). This option can also be set through the `nu` Unicode extension key; if both are provided, this `options` property takes precedence.
- `hour12`
  - : Whether to use 12-hour time (as opposed to 24-hour time). Possible values are `true` and `false`; the default is locale dependent. When `true`, this option sets `hourCycle` to either `"h11"` or `"h12"`, depending on the locale. When `false`, it sets `hourCycle` to `"h23"`. `hour12` overrides both the `hc` locale extension tag and the `hourCycle` option, should either or both of those be present.
- `hourCycle`
  - : The hour cycle to use. Possible values are `"h11"`, `"h12"`, `"h23"`, and `"h24"`. This option can also be set through the `hc` Unicode extension key; if both are provided, this `options` property takes precedence.
- `timeZone`
  - : The time zone to use. Time zone names correspond to the Zone and Link names of the [IANA Time Zone Database](https://www.iana.org/time-zones), such as `"UTC"`, `"Asia/Shanghai"`, `"Asia/Kolkata"`, and `"America/New_York"`. Additionally, time zones can be given as UTC offsets in the format "±hh:mm", "±hhmm", or "±hh", for example as `"+01:00"`, `"-2359"`, or `"+23"`. The default is the runtime's default time zone.

#### Date-time component options

- `weekday`
  - : The representation of the weekday. Possible values are:
    - `"long"`
      - : E.g., `Thursday`
    - `"short"`
      - : E.g., `Thu`
    - `"narrow"`
      - : E.g., `T`. Two weekdays may have the same narrow style for some locales (e.g. `Tuesday`'s narrow style is also `T`).
- `era`
  - : The representation of the era. Possible values are:
    - `"long"`
      - : E.g., `Anno Domini`
    - `"short"`
      - : E.g., `AD`
    - `"narrow"`
      - : E.g., `A`
- `year`
  - : The representation of the year. Possible values are `"numeric"` and `"2-digit"`.
- `month`
  - : The representation of the month. Possible values are:
    - `"numeric"`
      - : E.g., `3`
    - `"2-digit"`
      - : E.g., `03`
    - `"long"`
      - : E.g., `March`
    - `"short"`
      - : E.g., `Mar`
    - `"narrow"`
      - : E.g., `M`). Two months may have the same narrow style for some locales (e.g. `May`'s narrow style is also `M`).
- `day`
  - : The representation of the day. Possible values are `"numeric"` and `"2-digit"`.
- `dayPeriod`

  - : The formatting style used for day periods like "in the morning", "am", "noon", "n" etc. Possible values are
    `"narrow"`, `"short"`, and `"long"`.

    > [!NOTE]
    > This option only has an effect if a 12-hour clock (`hourCycle: "h12"` or `hourCycle: "h11"`) is used. Many locales use the same string irrespective of the width specified.

- `hour`
  - : The representation of the hour. Possible values are `"numeric"` and `"2-digit"`.
- `minute`
  - : The representation of the minute. Possible values are `"numeric"` and `"2-digit"`.
- `second`
  - : The representation of the second. Possible values are `"numeric"` and `"2-digit"`.
- `fractionalSecondDigits`
  - : The number of digits used to represent fractions of a second (any additional digits are truncated). Possible values are from `1` to `3`.
- `timeZoneName`

  - : The localized representation of the time zone name. Possible values are:

    - `"long"`
      - : Long localized form (e.g., `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Short localized form (e.g.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Short localized GMT format (e.g., `GMT-8`)
    - `"longOffset"`
      - : Long localized GMT format (e.g., `GMT-08:00`)
    - `"shortGeneric"`
      - : Short generic non-location format (e.g.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Long generic non-location format (e.g.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Timezone display may fall back to another format if a required string is unavailable. For example, the non-location formats should display the timezone without a specific country/city location like "Pacific Time", but may fall back to a timezone like "Los Angeles Time".

##### Date-time component default values

If any of the date-time component options are specified, then `dateStyle` and `timeStyle` must be `undefined`. If all date-time component options and `dateStyle`/`timeStyle` are `undefined`, some default options for date-time components are set, which depend on the object that the formatting method was called with:

- When formatting {{jsxref("Temporal.PlainDate")}} and {{jsxref("Date")}}, `year`, `month`, and `day` default to `"numeric"`.
- When formatting {{jsxref("Temporal.PlainTime")}}, `hour`, `minute`, and `second` default to `"numeric"`.
- When formatting {{jsxref("Temporal.PlainYearMonth")}}, `year` and `month` default to `"numeric"`.
- When formatting {{jsxref("Temporal.PlainMonthDay")}}, `month` and `day` default to `"numeric"`.
- When formatting {{jsxref("Temporal.PlainDateTime")}} and {{jsxref("Temporal.Instant")}}, `year`, `month`, `day`, `hour`, `minute`, and `second` default to `"numeric"`.

##### Format matching

Implementations are required to support displaying at least the following subsets of date-time components:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

The date-time component styles requested might not directly correspond to a valid format supported by the locale, so the format matcher allows you to specify how to match the requested styles to the closest supported format.

- `formatMatcher`
  - : The format matching algorithm to use. Possible values are `"basic"` and `"best fit"`; the default is `"best fit"`. The algorithm for `"best fit"` is implementation-defined, and `"basic"` is [defined by the spec](https://tc39.es/ecma402/#sec-basicformatmatcher). This option is only used when both `dateStyle` and `timeStyle` are `undefined` (so that each date-time component's format is individually customizable).

#### Style shortcuts

- `dateStyle`
  - : The [date formatting style](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh) to use. Possible values are `"full"`, `"long"`, `"medium"`, and `"short"`. It expands to styles for `weekday`, `day`, `month`, `year`, and `era`, with the exact combination of values depending on the locale. When formatting objects such as {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, and {{jsxref("Temporal.PlainMonthDay")}}, `dateStyle` will resolve to only those fields relevant to the object.
- `timeStyle`
  - : The [time formatting style](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu) to use. Possible values are `"full"`, `"long"`, `"medium"`, and `"short"`. It expands to styles for `hour`, `minute`, `second`, and `timeZoneName`, with the exact combination of values depending on the locale.

> **Note:** `dateStyle` and `timeStyle` can be used with each other, but not with other date-time component options (e.g. `weekday`, `hour`, `month`, etc.).

You can format different object types depending on which of the style shortcut options you include:

- If the `dateStyle` is specified, then you can format {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, and {{jsxref("Temporal.PlainMonthDay")}} objects.
- If the `timeStyle` is specified, then you can format {{jsxref("Temporal.PlainTime")}} objects.
- If either `dateStyle` or `timeStyle` is specified, then you can format {{jsxref("Temporal.PlainDateTime")}} and {{jsxref("Date")}} objects.

### Return value

A new `Intl.DateTimeFormat` object.

> [!NOTE]
> The text below describes behavior that is marked by the specification as "optional". It may not work in all environments. Check the [browser compatibility table](#browser_compatibility).

Normally, `Intl.DateTimeFormat()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new), and a new `Intl.DateTimeFormat` instance is returned in both cases. However, if the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) value is an object that is [`instanceof`](/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` (doesn't necessarily mean it's created via `new Intl.DateTimeFormat`; just that it has `Intl.DateTimeFormat.prototype` in its prototype chain), then the value of `this` is returned instead, with the newly created `Intl.DateTimeFormat` object hidden in a `[Symbol(IntlLegacyConstructedSymbol)]` property (a unique symbol that's reused between instances).

```js
const formatter = Intl.DateTimeFormat.call(
  { __proto__: Intl.DateTimeFormat.prototype },
  "en-US",
  { dateStyle: "full" },
);
console.log(Object.getOwnPropertyDescriptors(formatter));
// {
//   [Symbol(IntlLegacyConstructedSymbol)]: {
//     value: DateTimeFormat [Intl.DateTimeFormat] {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }
```

Note that there's only one actual `Intl.DateTimeFormat` instance here: the one hidden in `[Symbol(IntlLegacyConstructedSymbol)]`. Calling the [`format()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) and [`resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) methods on `formatter` would correctly use the options stored in that instance, but calling all other methods (e.g. [`formatRange()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) would fail: "TypeError: formatRange method called on incompatible Object", because those methods don't consult the hidden instance's options.

This behavior, called `ChainDateTimeFormat`, does not happen when `Intl.DateTimeFormat()` is called without `new` but with `this` set to anything else that's not an `instanceof Intl.DateTimeFormat`. If you call it directly as `Intl.DateTimeFormat()`, the `this` value is [`Intl`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl), and a new `Intl.DateTimeFormat` instance is created normally.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `locales` or `options` contain invalid values.

## Examples

### Using DateTimeFormat

In basic use without specifying a locale, `DateTimeFormat` uses the default
locale and default options.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Using timeStyle and dateStyle

`dateStyle` and `timeStyle` provide a shortcut for setting multiple date-time component options at once. For example, for `en-US`, `dateStyle: "short"` is equivalent to setting `year: "2-digit", month: "numeric", day: "numeric"`, and `timeStyle: "short"` is equivalent to setting `hour: "numeric", minute: "numeric"`.

```js
const shortTime = new Intl.DateTimeFormat("en-US", {
  timeStyle: "short",
});
console.log(shortTime.format(Date.now())); // "1:31 PM"

const shortDate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
});
console.log(shortDate.format(Date.now())); // "7/7/20"

const mediumTime = new Intl.DateTimeFormat("en-US", {
  timeStyle: "medium",
  dateStyle: "short",
});
console.log(mediumTime.format(Date.now())); // "7/7/20, 1:31:55 PM"
```

However, the exact (locale dependent) component styles they resolve to are not included in the [resolved options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions). This ensures the result of `resolvedOptions()` can be passed directly to the `Intl.DateTimeFormat()` constructor (because an `options` object with both `dateStyle` or `timeStyle` and individual date or time component styles is not valid).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Using dayPeriod

Use the `dayPeriod` option to output a string for the times of day ("in the morning", "at night", "noon", etc.). Note, that this only works when formatting for a 12 hour clock (`hourCycle: 'h12'` or `hourCycle: 'h11'`) and that for many locales the strings are the same irrespective of the value passed for the `dayPeriod`.

```js
const date = Date.UTC(2012, 11, 17, 4, 0, 42);

console.log(
  new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "short",
    timeZone: "UTC",
  }).format(date),
);
// 4 at night"  (same formatting in en-GB for all dayPeriod values)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "narrow",
    timeZone: "UTC",
  }).format(date),
);
// "4 mat."  (same output in French for both narrow/short dayPeriod)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "long",
    timeZone: "UTC",
  }).format(date),
);
// "4 du matin"
```

### Using timeZoneName

Use the `timeZoneName` option to output a string for the timezone ("GMT", "Pacific Time", etc.).

```js
const date = Date.UTC(2021, 11, 17, 3, 0, 42);
const timezoneNames = [
  "short",
  "long",
  "shortOffset",
  "longOffset",
  "shortGeneric",
  "longGeneric",
];

for (const zoneName of timezoneNames) {
  // Do something with currentValue
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: zoneName,
  });
  console.log(`${zoneName}: ${formatter.format(date)}`);
}

// Logs:
// short: 12/16/2021, PST
// long: 12/16/2021, Pacific Standard Time
// shortOffset: 12/16/2021, GMT-8
// longOffset: 12/16/2021, GMT-08:00
// shortGeneric: 12/16/2021, PT
// longGeneric: 12/16/2021, Pacific Time
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
