---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.DateTimeFormat.formatToParts
---

{{JSRef}}

The **`formatToParts()`** method of {{jsxref("Intl.DateTimeFormat")}} instances allows locale-aware formatting of strings produced by this `Intl.DateTimeFormat` object.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formattoparts.html")}}

## Syntax

```js-nolint
formatToParts(date)
```

### Parameters

- `date` {{optional_inline}}
  - : The date to format.

### Return value

An {{jsxref("Array")}} of objects containing the formatted date in parts.

## Description

The `formatToParts()` method is useful for custom formatting of date
strings. It returns an {{jsxref("Array")}} of objects containing the locale-specific
tokens from which it possible to build custom strings while preserving the
locale-specific parts. The structure the `formatToParts()` method returns,
looks like this:

```js
[
  { type: "day", value: "17" },
  { type: "weekday", value: "Monday" },
];
```

Possible types are the following:

- `day`
  - : The string used for the day, for example `"17"`.
- `dayPeriod`
  - : The string used for the day period, for example, `"AM"`,
    `"PM"`, `"in the morning"`, or `"noon"`
- `era`
  - : The string used for the era, for example `"BC"` or `"AD"`.
- `fractionalSecond`
  - : The string used for the fractional seconds, for example `"0"` or `"00"` or `"000"`.
- `hour`
  - : The string used for the hour, for example `"3"` or `"03"`.
- `literal`
  - : The string used for separating date and time values, for example `"/"`,
    `","`, `"o'clock"`, `"de"`, etc.
- `minute`
  - : The string used for the minute, for example `"00"`.
- `month`
  - : The string used for the month, for example `"12"`.
- `relatedYear`
  - : The string used for the related 4-digit Gregorian year, in the event that the
    calendar's representation would be a yearName instead of a year, for example `"2019"`.
- `second`
  - : The string used for the second, for example `"07"` or `"42"`.
- `timeZone`
  - : The string used for the name of the time zone, for example `"UTC"`. Default is the timezone of the current environment.
- `weekday`
  - : The string used for the weekday, for example `"M"`, `"Monday"`, or `"Montag"`.
- `year`
  - : The string used for the year, for example `"2012"` or `"96"`.
- `yearName`
  - : The string used for the yearName in relevant contexts, for example `"geng-zi"`

## Examples

`DateTimeFormat` outputs localized, opaque strings that cannot be
manipulated directly:

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

However, in many User Interfaces there is a desire to customize the formatting of this
string. The `formatToParts` method enables locale-aware formatting of strings
produced by `DateTimeFormat` formatters by providing you the string in parts:

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

Now the information is available separately and it can be formatted and concatenated
again in a customized way. For example by using {{jsxref("Array.prototype.map()")}},
[arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
a [switch statement](/en-US/docs/Web/JavaScript/Reference/Statements/switch),
[template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals),
and {{jsxref("Array.prototype.join()")}}.

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
```

This will emphasize the day period when using the `formatToParts()` method.

```js
console.log(formatter.format(date));
// "Monday, 12/17/2012, 3:00:42.000 AM"

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42.000 <em>AM</em>"
```

### Named Years and Mixed calendars

In some cases, calendars use named years. Chinese and Tibetan calendars, for example,
use a 60-year [sexagenary cycle](https://en.wikipedia.org/wiki/Sexagenary_cycle) of named years.
These years are disambiguated by relationship to
corresponding years on the Gregorian calendar. When this is the case, the result of
`formatToParts()` will contain an entry for `relatedYear` when a
year would normally be present, containing the 4-digit Gregorian year, instead of an
entry for `year`. Setting an entry in the bag for `year` (with any
value) will yield both the and the `yearName` Gregorian
`relatedYear`:

```js
const opts = { year: "numeric", month: "numeric", day: "numeric" };
const df = new Intl.DateTimeFormat("zh-u-ca-chinese", opts);
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value
[
  { type: "relatedYear", value: "2012" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

If the `year` option is not set in the bag (to any value), the result will
include only the `relatedYear`:

```js
const df = new Intl.DateTimeFormat("zh-u-ca-chinese");
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value
[
  { type: "relatedYear", value: "2012" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

In cases where the `year` would be output, `.format()` may
commonly present these side-by-side:

```js
const df = new Intl.DateTimeFormat("zh-u-ca-chinese", { year: "numeric" });
df.format(Date.UTC(2012, 11, 17, 3, 0, 42)); // 2012壬辰年
```

This also makes it possible to mix locale and calendar in both `format`:

```js
const df = new Intl.DateTimeFormat("en-u-ca-chinese", { year: "numeric" });
const date = Date.UTC(2012, 11, 17, 3, 0, 42);
df.format(date); // 2012(ren-chen)
```

And `formatToParts`:

```js
const opts = { month: "numeric", day: "numeric", year: "numeric" };
const df = new Intl.DateTimeFormat("en-u-ca-chinese", opts);
const date = Date.UTC(2012, 11, 17, 3);
df.formatToParts(date);
// [
//   { type: 'month', value: '11' },
//   { type: 'literal', value: '/' },
//   { type: 'day', value: '4' },
//   { type: 'literal', value: '/' },
//   { type: 'relatedYear', value: '2012' }
// ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- [A polyfill of `Intl.DateTimeFormat.prototype.formatToParts` in the proposal repository](https://github.com/tc39/proposal-intl-formatToParts)
