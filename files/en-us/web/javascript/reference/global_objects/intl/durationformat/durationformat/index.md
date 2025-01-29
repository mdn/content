---
title: Intl.DurationFormat() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.DurationFormat.DurationFormat
---

{{JSRef}}

The **`Intl.DurationFormat()`** constructor creates {{jsxref("Intl.DurationFormat")}} objects.

## Syntax

```js-nolint
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

> **Note:** `Intl.DurationFormat()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `locales` {{optional_inline}}

  - : A string with a BCP 47 language tag or an {{jsxref("Intl.Locale")}} instance, or an array of such locale identifiers. The runtime's default locale is used when `undefined` is passed or when none of the specified locale identifiers is supported. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    The following Unicode extension key is allowed:

    - `nu`
      - : See [`numberingSystem`](#numberingsystem).

    This key can also be set with `options` (as listed below). When both are set, the `options` property takes precedence.

- `options` {{optional_inline}}

  - : An object containing the following properties, in the order they are retrieved (all of them are optional):

    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. For information about this option, see [Locale identification and negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : The numbering system to use for number formatting, such as `"arab"`, `"hans"`, `"mathsans"`, and so on. For a list of supported numbering system types, see [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). This option can also be set through the `nu` Unicode extension key; if both are provided, this `options` property takes precedence.
    - `style`
      - : The style of the formatted duration. This value is used as the default for all other unit options, and also corresponds to the `style` option of {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}} when concatenating the list of duration units. Possible values are:
        - `"long"`
          - : E.g., 1 hour and 50 minutes
        - `"short"` (default)
          - : E.g., 1 hr, 50 min
        - `"narrow"`
          - : E.g., 1h 50m
        - `"digital"`
          - : E.g., 1:50:00
    - `years`
      - : The style of the formatted years. Possible values are `"long"`, `"short"`, and `"narrow"`; the default is `options.style` if it's not `"digital"`, and `"short"` otherwise.
    - `yearsDisplay`
      - : Whether to always display years, or only if nonzero. Possible values are `"always"` and `"auto"`; the default is `"auto"` if `years` is unspecified, and `"always"` otherwise.
    - `months`
      - : The style of the formatted months. Possible values are `"long"`, `"short"`, and `"narrow"`; the default is `options.style` if it's not `"digital"`, and `"short"` otherwise.
    - `monthsDisplay`
      - : Whether to always display months, or only if nonzero. Possible values are `"always"` and `"auto"`; the default is `"auto"` if `months` is unspecified, and `"always"` otherwise.
    - `weeks`
      - : The style of the formatted weeks. Possible values are `"long"`, `"short"`, and `"narrow"`; the default is `options.style` if it's not `"digital"`, and `"short"` otherwise.
    - `weeksDisplay`
      - : Whether to always display weeks, or only if nonzero. Possible values are `"always"` and `"auto"`; the default is `"auto"` if `weeks` is unspecified, and `"always"` otherwise.
    - `days`
      - : The style of the formatted days. Possible values are `"long"`, `"short"`, and `"narrow"`; the default is `options.style` if it's not `"digital"`, and `"short"` otherwise.
    - `daysDisplay`
      - : Whether to always display days, or only if nonzero. Possible values are `"always"` and `"auto"`; the default is `"auto"` if `days` is unspecified, and `"always"` otherwise.
    - `hours`
      - : The style of the formatted hours. Possible values are `"long"`, `"short"`, `"narrow"`, `"numeric"`, and `"2-digit"`; the default is `options.style` if it's not `"digital"`, and `"numeric"` otherwise.
    - `hoursDisplay`
      - : Whether to always display hours, or only if nonzero. Possible values are `"always"` and `"auto"`; the default is `"auto"` if `hours` is unspecified and `options.style` is not `"digital"`, and `"always"` otherwise.
    - `minutes`
      - : The style of the formatted minutes.
        - If `hours` is `"numeric"` or `"2-digit"`, possible values are `"numeric"` and `"2-digit"`, and `"numeric"` is normalized to `"2-digit"`; the default is `"numeric"`.
        - Otherwise, possible values are `"long"`, `"short"`, `"narrow"`, `"numeric"`, and `"2-digit"`; the default is `options.style` if it's not `"digital"`, and `"numeric"` otherwise.
    - `minutesDisplay`
      - : Whether to always display minutes, or only if nonzero. Possible values are `"always"` and `"auto"`; the default is `"auto"` if `minutes` is unspecified and `options.style` is not `"digital"`, and `"always"` otherwise.
    - `seconds`
      - : The style of the formatted seconds.
        - If `minutes` is `"numeric"` or `"2-digit"`, possible values are `"numeric"` and `"2-digit"`, and `"numeric"` is normalized to `"2-digit"`; the default is `"numeric"`.
        - Otherwise, possible values are `"long"`, `"short"`, `"narrow"`, `"numeric"`, and `"2-digit"`; the default is `options.style` if it's not `"digital"`, and `"numeric"` otherwise.
    - `secondsDisplay`
      - : Whether to always display seconds, or only if nonzero. Possible values are `"always"` and `"auto"`; the default is `"auto"` if `seconds` is unspecified and `options.style` is not `"digital"`, and `"always"` otherwise.
    - `milliseconds`
      - : The style of the formatted milliseconds.
        - If `seconds` is `"numeric"` or `"2-digit"`, the only possible value is `"numeric"`; the default is `"numeric"`.
        - Otherwise, possible values are `"long"`, `"short"`, `"narrow"`, and `"numeric"`; the default is `options.style` if it's not `"digital"`, and `"numeric"` otherwise.
    - `millisecondsDisplay`
      - : Whether to always display milliseconds, or only if nonzero.
        - If `seconds` is `"numeric"` or `"2-digit"`, the only possible value is `"auto"`; the default is only `"auto"` when `milliseconds` is unspecified.
        - Otherwise, possible values are `"always"` and `"auto"`; the default is `"auto"` if `milliseconds` is unspecified, and `"always"` otherwise.
    - `microseconds`
      - : The style of the formatted microseconds.
        - If `milliseconds` is `"numeric"`, the only possible value is `"numeric"`; the default is `"numeric"`.
        - Otherwise, possible values are `"long"`, `"short"`, `"narrow"`, and `"numeric"`; the default is `options.style` if it's not `"digital"`, and `"numeric"` otherwise.
    - `microsecondsDisplay`
      - : Whether to always display microseconds, or only if nonzero.
        - If `milliseconds` is `"numeric"`, the only possible value is `"auto"`; the default is only `"auto"` when `microseconds` is unspecified.
        - Otherwise, possible values are `"always"` and `"auto"`; the default is `"auto"` if `microseconds` is unspecified, and `"always"` otherwise.
    - `nanoseconds`
      - : The style of the formatted nanoseconds.
        - If `microseconds` is `"numeric"`, the only possible value is `"numeric"`; the default is `"numeric"`.
        - Otherwise, possible values are `"long"`, `"short"`, `"narrow"`, and `"numeric"`; the default is `options.style` if it's not `"digital"`, and `"numeric"` otherwise.
    - `nanosecondsDisplay`
      - : Whether to always display nanoseconds, or only if nonzero.
        - If `microseconds` is `"numeric"`, the only possible value is `"auto"`; the default is only `"auto"` when `nanoseconds` is unspecified.
        - Otherwise, possible values are `"always"` and `"auto"`; the default is `"auto"` if `nanoseconds` is unspecified, and `"always"` otherwise.
    - `fractionalDigits`
      - : Number of how many fractional second digits to display in the output. Possible values are from `0` to `9`; the default is `undefined` (include as many fractional digits as necessary).

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `locales` or `options` contain invalid values.

## Description

For each time segment, an {{jsxref("Intl.NumberFormat")}} object is constructed under the hood. It uses the following options (see {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}} for details):

- `numberingSystem`: the value of `options.numberingSystem`

When `milliseconds`, `microseconds`, or `nanoseconds` uses the `"numeric"` style, the following options are also used:

- `minimumFractionDigits`: `0` when `options.fractionalDigits` is `undefined`, `options.fractionalDigits` otherwise
- `maximumFractionDigits`: `9` when `options.fractionalDigits` is `undefined`, `options.fractionalDigits` otherwise
- `roundingMode`: `"trunc"`

When the time segment uses the `"2-digit"` style, the following options are also used:

- `minimumIntegerDigits`: `2`

When the time segment uses the `"long"`, `"short"`, or `"narrow"` style, the following options are also used:

- `style`: `"unit"` when `"long"`, `"short"`, or `"narrow"` is specified, `undefined` otherwise
- `unit`: the currently formatted unit (`"years"`, `"days"`, `"nanoseconds"`, etc.)
- `unitDisplay`: the value of the time segment style (`"long"`, `"short"`, or `"narrow"`)

## Examples

### Using the Intl.DurationFormat() constructor

```js
const duration = {
  hours: 2,
  minutes: 20,
  seconds: 35,
};

console.log(new Intl.DurationFormat("pt", { style: "long" }).format(duration));
// "2 horas, 20 minutos e 35 segundos"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
