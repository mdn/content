---
title: Temporal.PlainYearMonth.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toString
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainYearMonth.toString
---

{{JSRef}}{{SeeCompatTable}}

The **`toString()`** method of {{jsxref("Temporal.PlainYearMonth")}} instances returns a string representing this year-month in the [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format).

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object containing the following property:
    - `calendarName` {{optional_inline}}
      - : Whether to show the calendar annotation (`[u-ca=calendar_id]`) in the return value. Possible values are:
        - `"auto"` (default)
          - : Include the calendar annotation if the calendar is not `"iso8601"`. The reference day is included if the calendar is not `"iso8601"`.
        - `"always"`
          - : Always include the calendar annotation. The reference day is always included too.
        - `"never"`
          - : Never include the calendar annotation. This makes the returned string not recoverable to the same {{jsxref("Temporal.PlainYearMonth")}} instance, although the year-month value still remains the same. The reference day is included if the calendar is not `"iso8601"`.
        - `"critical"`
          - : Always include the calendar annotation, and add a critical flag: `[!u-ca=calendar_id]`. Useful when sending the string to certain systems, but not useful for Temporal itself. The reference day is always included too.

### Return value

A string in the [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) representing this year-month. The calendar annotation is included as specified. The reference day is included if a calendar annotation is included or if the calendar is not `"iso8601"`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the options is invalid.
- {{jsxref("TypeError")}}
  - : Thrown if `options` is not an object or `undefined`.

## Examples

### Using toString()

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
console.log(ym.toString()); // '2021-08'

const ym2 = Temporal.PlainYearMonth.from({
  year: 4658,
  monthCode: "M08",
  calendar: "chinese",
});
console.log(ym2.toString()); // '2021-09-07[u-ca=chinese]'
```

### Using options

```js
const isoYM = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ym = Temporal.PlainYearMonth.from({
  year: 4658,
  monthCode: "M08",
  calendar: "chinese",
});
console.log(isoYM.toString({ calendarName: "auto" })); // '2021-08'
console.log(ym.toString({ calendarName: "auto" })); // '2021-09-07[u-ca=chinese]'
console.log(isoYM.toString({ calendarName: "always" })); // '2021-08-01[u-ca=iso8601]'
console.log(ym.toString({ calendarName: "always" })); // '2021-09-07[u-ca=chinese]'
console.log(isoYM.toString({ calendarName: "never" })); // '2021-08'
console.log(ym.toString({ calendarName: "never" })); // '2021-09-07'
console.log(isoYM.toString({ calendarName: "critical" })); // '2021-08-01[!u-ca=iso8601]'
console.log(ym.toString({ calendarName: "critical" })); // '2021-09-07[!u-ca=chinese]'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
