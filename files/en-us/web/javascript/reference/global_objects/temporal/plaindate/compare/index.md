---
title: Temporal.PlainDate.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/compare
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.compare
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.PlainDate.compare()`** static method returns a number (-1, 0, or 1) indicating whether the first date comes before, is the same as, or comes after the second date. Equivalent to comparing the year, month, and day fields of the underlying ISO 8601 dates.

## Syntax

```js-nolint
Temporal.PlainDate.compare(date1, date2)
```

### Parameters

- `date1`
  - : A string, an object, or a {{jsxref("Temporal.PlainDate")}} instance representing the first date to compare. It is converted to a `Temporal.PlainDate` object using the same algorithm as {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}.
- `date2`
  - : The second date to compare, converted to a `Temporal.PlainDate` object using the same algorithm as `date1`.

### Return value

Returns `-1` if `date1` comes before `date2`, `0` if they are the same, and `1` if `date1` comes after `date2`. They are compared by their underlying date values, ignoring their calendars.

## Examples

### Using Temporal.PlainDate.compare()

```js
const date1 = Temporal.PlainDate.from("2021-08-01");
const date2 = Temporal.PlainDate.from("2021-08-02");
console.log(Temporal.PlainDate.compare(date1, date2)); // -1

const date3 = Temporal.PlainDate.from("2021-07-31");
console.log(Temporal.PlainDate.compare(date1, date3)); // 1
```

### Comparing dates in different calendars

```js
const date1 = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const date2 = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic-umalqura",
});
const date3 = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "hebrew",
});
console.log(date1.toString()); // "2021-08-01"
console.log(date2.toString()); // "2582-12-17[u-ca=islamic-umalqura]"
console.log(date3.toString()); // "-001739-04-06[u-ca=hebrew]"
console.log(Temporal.PlainDate.compare(date1, date2)); // -1
console.log(Temporal.PlainDate.compare(date1, date3)); // 1
```

### Sorting an array of dates

The purpose of this `compare()` function is to act as a comparator to be passed to {{jsxref("Array.prototype.sort()")}} and related functions.

```js
const dates = [
  Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 }),
  Temporal.PlainDate.from({
    year: 2021,
    month: 8,
    day: 1,
    calendar: "islamic-umalqura",
  }),
  Temporal.PlainDate.from({ year: 2021, month: 8, day: 1, calendar: "hebrew" }),
];

dates.sort(Temporal.PlainDate.compare);
console.log(dates.map((d) => d.toString()));
// [ "-001739-04-06[u-ca=hebrew]", "2021-08-01", "2582-12-17[u-ca=islamic-umalqura]" ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}}
