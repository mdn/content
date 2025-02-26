---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.DateTimeFormat.formatToParts
---

{{JSRef}}

The **`formatToParts()`** method of {{jsxref("Intl.DateTimeFormat")}} instances returns an array of objects representing each part of the formatted string that would be returned by {{jsxref("Intl/DatetimeFormat/format", "format()")}}. It is useful for building custom strings from the locale-specific tokens.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.formatToParts()", "taller")}}

```js interactive-example
const date = new Date(2012, 5);
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);

const parts = dateTimeFormat.formatToParts(date);
const partValues = parts.map((p) => p.value);

console.log(partValues);
// Expected output: "["Friday", ", ", "June", " ", "1", ", ", "2012"]"
```

## Syntax

```js-nolint
formatToParts(date)
```

### Parameters

- `date` {{optional_inline}}

  - : The date to format. Can be a {{jsxref("Date")}} or {{jsxref("Temporal.PlainDateTime")}} object. Additionally can be a {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, or {{jsxref("Temporal.PlainMonthDay")}} object if the `DateTimeFormat` object was configured to print at least one relevant part of the date.

    > [!NOTE]
    > A {{jsxref("Temporal.ZonedDateTime")}} object will always throw a `TypeError`; use {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} or convert it to a {{jsxref("Temporal.PlainDateTime")}} object instead.

    Omitting it results in formatting the current date (as returned by {{jsxref("Date.now()")}}), which could be slightly confusing, so it is advisable to always explicitly pass a date.

### Return value

An {{jsxref("Array")}} of objects containing the formatted date in parts. Each object has two properties, `type` and `value`, each containing a string. The string concatenation of `value`, in the order provided, will result in the same string as {{jsxref("Intl/DateTimeFormat/format", "format()")}}. The `type` may be one of the [date-time components](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options):

- `weekday`
  - : For example `"M"`, `"Monday"`, or `"Montag"`.
- `era`
  - : For example `"BC"` or `"AD"`.
- `year`
  - : For example `"2012"` or `"96"`.
- `month`
  - : For example `"12"` or `"January"`.
- `day`
  - : For example `"17"`.
- `dayPeriod`
  - : For example `"AM"`, `"PM"`, `"in the morning"`, or `"noon"`.
- `hour`
  - : For example `"3"` or `"03"`.
- `minute`
  - : For example `"00"`.
- `second`
  - : For example `"07"` or `"42"`.
- `fractionalSecond`
  - : For example `"0"`, `"00"`, or `"000"`.
- `timeZoneName`
  - : For example `"UTC"`, `"CET"`, or `"Central European Time"`.

The `type` may also be one of the following:

- `literal`
  - : Any string that's a part of the format pattern and not influenced by the `date`; for example `"/"`, `", "`, `"o'clock"`, `"de"`, `" "`, etc.
- `relatedYear`
  - : A 4-digit Gregorian year, in the event that the calendar's representation would be a `yearName` instead of a year; for example `"2019"`. See [named years](#named_years) for more details.
- `yearName`
  - : The name given to the year, usually in calendars without the concept of continuous years; for example `"geng-zi"`.
- `unknown`
  - : Reserved for any token that's not recognized as any of the above; should be rarely encountered.

## Examples

### Using formatToParts()

The `format()` method outputs localized, opaque strings that cannot be manipulated directly:

```js
const date = Date.UTC(2012, 11, 17, 3, 0, 42);

const formatter = new Intl.DateTimeFormat("en-us", {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: 3,
  hour12: true,
  timeZone: "UTC",
});

formatter.format(date);
// "Monday, 12/17/2012, 3:00:42.000 AM"
```

However, in many user interfaces you may want to customize the formatting of this string, or interleave it with other texts. The `formatToParts()` method produces the same information in parts:

```js
formatter.formatToParts(date);

// return value:
[
  { type: "weekday", value: "Monday" },
  { type: "literal", value: ", " },
  { type: "month", value: "12" },
  { type: "literal", value: "/" },
  { type: "day", value: "17" },
  { type: "literal", value: "/" },
  { type: "year", value: "2012" },
  { type: "literal", value: ", " },
  { type: "hour", value: "3" },
  { type: "literal", value: ":" },
  { type: "minute", value: "00" },
  { type: "literal", value: ":" },
  { type: "second", value: "42" },
  { type: "fractionalSecond", value: "000" },
  { type: "literal", value: " " },
  { type: "dayPeriod", value: "AM" },
];
```

Now the information is available separately and it can be formatted and concatenated again in a customized way. For example by using {{jsxref("Array.prototype.map()")}}, [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), a [switch statement](/en-US/docs/Web/JavaScript/Reference/Statements/switch), [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals), and {{jsxref("Array.prototype.join()")}}, to insert additional markup for certain components.

```js
const dateString = formatter
  .formatToParts(date)
  .map(({ type, value }) => {
    switch (type) {
      case "dayPeriod":
        return `<em>${value}</em>`;
      default:
        return value;
    }
  })
  .join("");

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42.000 <em>AM</em>"
```

### Named years

Some calendars use named years; for example, the Chinese and Tibetan calendars use a 60-year [sexagenary cycle](https://en.wikipedia.org/wiki/Sexagenary_cycle) of named years. These calendars do not have a universal way to unambiguously number each year, so years are disambiguated by relationship to corresponding years on the Gregorian calendar. In this case, when the `DateTimeFormat` is configured to output the year component, a token for `relatedYear` is output instead of `year`.

```js
const df = new Intl.DateTimeFormat("zh-u-ca-chinese");
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value:
[
  { type: "relatedYear", value: "2012" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

Sometimes, the combination of date-time component options maps to a format that also includes a `yearName`. There isn't a separate option that controls whether `yearName` is displayed or not. For example, the options below sets `month` to `"long"` and results in a `yearName` token, despite `year` still being `"numeric"`:

```js
const opts = { year: "numeric", month: "long", day: "numeric" };
const df = new Intl.DateTimeFormat("zh-u-ca-chinese", opts);
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value:
[
  { type: "relatedYear", value: "2012" },
  { type: "yearName", value: "壬辰" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

Because `format()` just concatenates all the `value` strings together, you will see the Gregorian year and the year name together in the output in this case.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
