---
title: Intl.DurationFormat() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.DurationFormat.DurationFormat
---

{{JSRef}} {{SeeCompatTable}}

The **`Intl.DurationFormat()`** constructor creates
{{jsxref("Intl/DurationFormat", "Intl.DurationFormat")}} objects that enable
language-sensitive duration formatting.

## Syntax

```js
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

### Parameters

- `locales` {{optional_inline}}
  - : A string with a [BCP 47 language tag](https://datatracker.ietf.org/doc/html/rfc5646), or an array of such strings. For the general
    form and interpretation of the `locales` argument, see the
    {{jsxref("Global_Objects/Intl", "Intl", "#Locale_identification_and_negotiation",
      1)}} page.
- `options` {{optional_inline}}

  - : An object with some or all of the following properties:

    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are "`lookup`"
        and "`best fit`"; the default is "`best fit`". For
        information about this option, see the {{jsxref("Global_Objects/Intl", "Intl",
        "#Locale_negotiation", 1)}} page.

    - `numberingSystem`
      - : A string containing the name of the numbering system to be used for number formatting, see {{jsxref("Global_Objects/Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem",
        "#description", 1)}}.

    - `style`
      - : The length of the formatted message, the default is "`short`".
        - "`long`" (eg 1 hour and 50 minutes)
        - "`short`" (eg 1 hr, 50 min)
        - "`narrow`" (eg 1h 50m)
        - "`digital`" (eg 1:50:00)

    - `years`
      - : The style to be used for formatting years.
        - "`long`"
        - "`short`"
        - "`narrow`"

    - `yearsDisplay`
      - : Whether to always display years, or only if nonzero.
        - "`always`"
        - "`auto`"

    - `months`
      - : The style to be used for formatting months.
        - "`long`"
        - "`short`"
        - "`narrow`"

    - `monthsDisplay`
      - : Whether to always display months, or only if nonzero.
        - "`always`"
        - "`auto`"

    - `weeks`
      - : The style to be used for formatting weeks.
        - "`long`"
        - "`short`"
        - "`narrow`"

    - `weeksDisplay`
      - : Whether to always display weeks, or only if nonzero.
        - "`always`"
        - "`auto`"

    - `days`
      - : The style to be used for formatting days.
        - "`long`"
        - "`short`"
        - "`narrow`"

    - `daysDisplay`
      - : Whether to always display days, or only if nonzero.
        - "`always`"
        - "`auto`"

    - `hours`
      - : The style to be used for formatting hours.
        - "`long`"
        - "`short`"
        - "`narrow`"
        - "`numeric`"
        - "`2-digit`"

    - `hoursDisplay`
      - : Whether to always display hours, or only if nonzero.
        - "`always`"
        - "`auto`"

    - `minutes`
      - : The style to be used for formatting minutes.
        - "`long`"
        - "`short`"
        - "`narrow`"
        - "`numeric`"
        - "`2-digit`"

    - `minutesDisplay`
      - : Whether to always display minutes, or only if nonzero.
        - "`always`"
        - "`auto`"

    - `seconds`
      - : The style to be used for formatting seconds.
        - "`long`"
        - "`short`"
        - "`narrow`"
        - "`numeric`"
        - "`2-digit`"

    - `secondsDisplay`
      - : Whether to always display seconds, or only if nonzero.
        - "`always`"
        - "`auto`"

    - `milliseconds`
      - : The style to be used for formatting milliseconds.
        - "`long`"
        - "`short`"
        - "`narrow`"
        - "`numeric`"

    - `millisecondsDisplay`
      - : Whether to always display milliseconds, or only if nonzero.
        - `"always"`
        - `"auto"`

    - `microseconds`
      - : The style to be used for formatting microseconds.
        - "`long`"
        - "`short`"
        - "`narrow`"
        - "`numeric`"

    - `microsecondsDisplay`
      - : Whether to always display microseconds, or only if nonzero.
        - "`always`"
        - "`auto`"

    - `nanoseconds`
      - : The style to be used for formatting nanoseconds.
        - "`long`"
        - "`short`"
        - "`narrow`"
        - "`numeric`"

    - `nanosecondsDisplay`
      - : Whether to always display nanoseconds, or only if nonzero.
        - "`always`"
        - "`auto`"

    - `fractionalDigits`
      - : Number of how many fractional digits to display in the output.

## Examples

Basic Usage

```js
const duration = {
    hours: 2,
    minutes: 20,
    seconds: 35,
}

console.log(new Intl.DurationFormat("pt", { style: "long" }).format(duration));
// → "2 horas, 20 minutos e 35 segundos"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
