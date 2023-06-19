---
title: Intl.DurationFormat() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
page-type: javascript-constructor
status:
  - experimental
browser-compat: javascript.builtins.Intl.DurationFormat.DurationFormat
---

{{JSRef}} {{SeeCompatTable}}

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
  - : A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}

  - : An object with some or all of the following properties:

    - `localeMatcher`

      - : The locale matching algorithm to use. Possible values are `"lookup"`
        and `"best fit"`; the default is `"best fit"`. For
        information about this option, see the {{jsxref("Global_Objects/Intl", "Intl",
        "#locale_identification_and_negotiation")}} page.

    - `numberingSystem`

      - : A string containing the name of the numbering system to be used for number formatting, see {{jsxref("Global_Objects/Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem",
        "#description")}}.

    - `style`

      - : The length of the formatted message, the default is `"short"`.
        - `"long"` (E.g., 1 hour and 50 minutes)
        - `"short"` (E.g., 1 hr, 50 min)
        - `"narrow"` (E.g., 1h 50m)
        - `"digital"` (E.g., 1:50:00)

    - `years`

      - : The style to be used for formatting years.
        - `"long"`
        - `"short"`
        - `"narrow"`

    - `yearsDisplay`

      - : Whether to always display years, or only if nonzero.
        - `"always"`
        - `"auto"`

    - `months`

      - : The style to be used for formatting months.
        - `"long"`
        - `"short"`
        - `"narrow"`

    - `monthsDisplay`

      - : Whether to always display months, or only if nonzero.
        - `"always"`
        - `"auto"`

    - `weeks`

      - : The style to be used for formatting weeks.
        - `"long"`
        - `"short"`
        - `"narrow"`

    - `weeksDisplay`

      - : Whether to always display weeks, or only if nonzero.
        - `"always"`
        - `"auto"`

    - `days`

      - : The style to be used for formatting days.
        - `"long"`
        - `"short"`
        - `"narrow"`

    - `daysDisplay`

      - : Whether to always display days, or only if nonzero.
        - `"always"`
        - `"auto"`

    - `hours`

      - : The style to be used for formatting hours.
        - `"long"`
        - `"short"`
        - `"narrow"`
        - `"numeric"`
        - `"2-digit"`

    - `hoursDisplay`

      - : Whether to always display hours, or only if nonzero.
        - `"always"`
        - `"auto"`

    - `minutes`

      - : The style to be used for formatting minutes.
        - `"long"`
        - `"short"`
        - `"narrow"`
        - `"numeric"`
        - `"2-digit"`

    - `minutesDisplay`

      - : Whether to always display minutes, or only if nonzero.
        - `"always"`
        - `"auto"`

    - `seconds`

      - : The style to be used for formatting seconds.
        - `"long"`
        - `"short"`
        - `"narrow"`
        - `"numeric"`
        - `"2-digit"`

    - `secondsDisplay`

      - : Whether to always display seconds, or only if nonzero.
        - `"always"`
        - `"auto"`

    - `milliseconds`

      - : The style to be used for formatting milliseconds.
        - `"long"`
        - `"short"`
        - `"narrow"`
        - `"numeric"`

    - `millisecondsDisplay`

      - : Whether to always display milliseconds, or only if nonzero.
        - `"always"`
        - `"auto"`

    - `microseconds`

      - : The style to be used for formatting microseconds.
        - `"long"`
        - `"short"`
        - `"narrow"`
        - `"numeric"`

    - `microsecondsDisplay`

      - : Whether to always display microseconds, or only if nonzero.
        - `"always"`
        - `"auto"`

    - `nanoseconds`

      - : The style to be used for formatting nanoseconds.
        - `"long"`
        - `"short"`
        - `"narrow"`
        - `"numeric"`

    - `nanosecondsDisplay`

      - : Whether to always display nanoseconds, or only if nonzero.
        - `"always"`
        - `"auto"`

    - `fractionalDigits`
      - : Number of how many fractional digits to display in the output.

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
