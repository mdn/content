---
title: Temporal.PlainYearMonth.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/compare
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainYearMonth.compare
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.PlainYearMonth.compare()`** static method returns a number (-1, 0, or 1) indicating whether the first year-month comes before, is the same as, or comes after the second year-month. It is equivalent to comparing their underlying ISO 8601 dates. Two year-months from different calendars may be considered equal if they start on the same ISO date.

> **Note:** `PlainYearMonth` objects keep track of a reference ISO day, which is also used in the comparison. This day is automatically set when using the {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} method, but can be set manually using the {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} constructor, causing two equivalent year-months to be considered different if they have different reference days. For this reason, you should avoid using the constructor directly and prefer the `from()` method.

## Syntax

```js-nolint
Temporal.PlainYearMonth.compare(yearMonth1, yearMonth2)
```

### Parameters

- `yearMonth1`
  - : A string, an object, or a {{jsxref("Temporal.PlainYearMonth")}} instance representing the first year-month to compare. It is converted to a `Temporal.PlainYearMonth` object using the same algorithm as {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.
- `yearMonth2`
  - : The second year-month to compare, converted to a `Temporal.PlainYearMonth` object using the same algorithm as `yearMonth1`.

### Return value

Returns `-1` if `yearMonth1` comes before `yearMonth2`, `0` if they are the same, and `1` if `yearMonth2` comes after. They are compared by their underlying date values (usually the first day of the month), ignoring their calendars.

## Examples

### Using Temporal.PlainYearMonth.compare()

```js
const ym1 = Temporal.PlainYearMonth.from("2021-08");
const ym2 = Temporal.PlainYearMonth.from("2021-09");
console.log(Temporal.PlainYearMonth.compare(ym1, ym2)); // -1

const ym3 = Temporal.PlainYearMonth.from("2021-07");
console.log(Temporal.PlainYearMonth.compare(ym1, ym3)); // 1
```

### Comparing year-months in different calendars

```js
const ym1 = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ym2 = Temporal.PlainYearMonth.from({
  year: 2021,
  month: 8,
  calendar: "islamic",
});
const ym3 = Temporal.PlainYearMonth.from({
  year: 2021,
  month: 8,
  calendar: "hebrew",
});
console.log(ym1.toString()); // "2021-08"
console.log(ym2.toString()); // "2582-12-18[u-ca=islamic]"
console.log(ym3.toString()); // "-001739-04-06[u-ca=hebrew]"
console.log(Temporal.PlainYearMonth.compare(ym1, ym2)); // -1
console.log(Temporal.PlainYearMonth.compare(ym1, ym3)); // 1
```

### Sorting an array of year-months

The purpose of this `compare()` function is to act as a comparator to be passed to {{jsxref("Array.prototype.sort()")}} and related functions.

```js
const months = [
  Temporal.PlainYearMonth.from({ year: 2021, month: 8 }),
  Temporal.PlainYearMonth.from({
    year: 2021,
    month: 8,
    calendar: "islamic",
  }),
  Temporal.PlainYearMonth.from({ year: 2021, month: 8, calendar: "hebrew" }),
];

months.sort(Temporal.PlainYearMonth.compare);
console.log(months.map((d) => d.toString()));
// [ "-001739-04-06[u-ca=hebrew]", "2021-08", "2582-12-18[u-ca=islamic]" ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/equals", "Temporal.PlainYearMonth.prototype.equals()")}}
