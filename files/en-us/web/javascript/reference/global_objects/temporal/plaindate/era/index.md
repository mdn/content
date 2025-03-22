---
title: Temporal.PlainDate.prototype.era
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/era
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.era
---

{{JSRef}}{{SeeCompatTable}}

The **`era`** accessor property of {{jsxref("Temporal.PlainDate")}} instances returns a calendar-specific lowercase string representing the era of this date, or `undefined` if the calendar does not use eras (e.g. ISO 8601). `era` and `eraYear` together uniquely identify a year in a calendar, in the same way that `year` does. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. For Gregorian, it is either `"gregory"` or `"gregory-inverse"`.

The set accessor of `era` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainDate/with", "with()")}} method to create a new `Temporal.PlainDate` object with the desired new value. When setting eras, each code may have some aliases; for example, `"ce"` and `"ad"` are equivalent to `"gregory"`, and `"bce"` and `"bc"` are equivalent to `"gregory-inverse"`.

> [!NOTE]
> This string is not intended for display to users. Use {{jsxref("Temporal/PlainDate/toLocaleString", "toLocaleString()")}} with the appropriate options to get a localized string.

## Examples

### Using era

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.era); // undefined

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
console.log(date2.era); // gregory

const date3 = Temporal.PlainDate.from("-002021-07-01[u-ca=gregory]");
console.log(date3.era); // gregory-inverse

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
