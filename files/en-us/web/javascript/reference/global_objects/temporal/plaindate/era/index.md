---
title: Temporal.PlainDate.prototype.era
short-title: era
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/era
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Temporal.PlainDate.era
sidebar: jsref
---

The **`era`** accessor property of {{jsxref("Temporal.PlainDate")}} instances returns a calendar-specific lowercase string representing the era of this date, or `undefined` if the calendar does not use eras (e.g., ISO 8601). `era` and `eraYear` together uniquely identify a year in a calendar, in the same way that `year` does. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. For Gregorian, it is either `"ce"` or `"bce"`.

## Value

All [specified calendars](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) have eras fully defined by the spec.

- The following calendars have a single era:
  - `buddhist`: `"be"`
  - `coptic`: `"am"`
  - `ethioaa`: `"aa"`
  - `hebrew`: `"am"`
  - `indian`: `"shaka"`
  - `persian`: `"ap"`
- The following calendars have two eras. One is the _epoch era_, in which `eraYear` starts at 1 and is the same as {{jsxref("Temporal/PlainDate/year", "year")}}. The other is the inverse era, in which `eraYear` also starts at 1 and is equal to `1 - year` (so `eraYear: 1` corresponds to year `0`, `eraYear: 2` to year `-1`, etc.):
  - `gregory`: epoch era `"ce"`, inverse era `"bce"`
  - `islamic-civil`, `islamic-tbla`, `islamic-umalqura`: epoch era `"ah"`, inverse era `"bh"`
  - `roc`: epoch era `"roc"`, inverse era `"broc"`
- The `ethiopic` calendar has an `"am"` era which is the epoch era. Years before `1` belong to the `"aa"` era, whose `eraYear` is equal to `year - 5500` (so `eraYear: -1000` corresponds to year `-6500`, `eraYear: 1` corresponds to year `-5499`, up to `eraYear: 5500` as year `0`).
- The `japanese` calendar adds an era for each new emperor, so the output year and era for a future date may not match the input year and era when your code runs on a future engine version, and we won't enumerate them here. Each era's year starts at 1. It is also the only calendar known to have eras starting in the middle of a year, which means that the same `year` may correspond to different `(era, eraYear)` pairs depending on the month and day.
  `

  > [!WARNING]
  > As of October 2025, in the `japanese` calendar, dates prior to 1868-10-23 ISO (the start date of the year 1 Meiji) don't work as expected in browsers in two ways. First, [CLDR had the wrong start date for the Meiji era](https://unicode-org.atlassian.net/browse/CLDR-11375), which causes calendar implementations to extend the Meiji era further to the past than it actually did. Second, the upcoming [Intl era and monthCode Proposal](https://tc39.es/proposal-intl-era-monthcode/) specifies that dates prior to 1873-01-01 ISO should use Gregorian eras, but browsers have traditionally used approximations of prior Japanese eras instead. The `japanese` calendar was taken into use on January 1, 6 Meiji / 1873-01-01 ISO, so these problems only affect proleptic dates.

- Other [specified calendars](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types): `chinese`, `dangi`, `iso8601`, don't use eras and return `undefined`.

The set accessor of `era` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainDate/with", "with()")}} method to create a new `Temporal.PlainDate` object with the desired new value. When setting eras, the `"ad"` and `"bc"` aliases are also accepted for the `"ce"` and `"bce"` eras of the `gregory` or `japanese` calendars.

> [!NOTE]
> This string is not intended for display to users. Use {{jsxref("Temporal/PlainDate/toLocaleString", "toLocaleString()")}} with the appropriate options to get a localized string.

## Examples

### Using era

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.era); // undefined

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
console.log(date2.era); // ce

const date3 = Temporal.PlainDate.from("-002021-07-01[u-ca=gregory]");
console.log(date3.era); // bce

const date4 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(date4.era); // reiwa
```

### Changing era

You can only set `era` for calendars that support them. For example, the ISO 8601 calendar does not have eras. Note that you must provide `era` and `eraYear` together.

```js
const date = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
const newDate = date.with({ era: "bc", eraYear: 100 });
console.log(newDate.toString()); // -000099-07-01[u-ca=gregory]

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
const newDate2 = date2.with({ era: "meiji", eraYear: 1 });
console.log(newDate2.toString()); // 1868-07-01[u-ca=japanese]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
