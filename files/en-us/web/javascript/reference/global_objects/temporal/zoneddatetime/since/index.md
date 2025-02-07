---
title: Temporal.ZonedDateTime.prototype.since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.since
---

{{JSRef}}{{SeeCompatTable}}

The **`since()`** method of {{jsxref("Temporal.ZonedDateTime")}} instances returns a new {{jsxref("Temporal.Duration")}} object representing the duration from another date-time (in a form convertible by {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}) to this date-time. The duration is positive if the other date-time is before this date-time, and negative if after.

This method does `this - other`. To do `other - this`, use the {{jsxref("Temporal/ZonedDateTime/until", "until()")}} method.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.ZonedDateTime")}} instance representing a date-time to subtract from this date-time. It is converted to a `Temporal.ZonedDateTime` object using the same algorithm as {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}. It must have the same calendar as `this`.
- `options` {{optional_inline}}
  - : An object containing the options for {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}, which includes `largestUnit`, `roundingIncrement`, `roundingMode`, and `smallestUnit`. `largestUnit` and `smallestUnit` accept all possible units. For `largestUnit`, the default value `"auto"` means `"hours"` or `smallestUnit`, whichever is greater. For `smallestUnit`, the default value is `"nanoseconds"`. The current date is used as the `relativeTo` option. Note that using [units larger than `"hours"`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) may make the duration not portable to other calendars, dates, or time zones.

### Return value

A new {{jsxref("Temporal.Duration")}} object representing the duration _since_ `other` to this date-time. The duration is positive if `other` is before this date-time, and negative if after.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - `other` has a different calendar than `this`.
    - Any of the options is invalid.
    - `other` has a different time zone than `this`, and `largestUnit` is `"days"` or above.

## Description

The duration returned is a "hybrid" duration. This means that the duration's date portion represents full calendar days like {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}} would return, while its time portion represents real-world elapsed time like {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}} would return. This "hybrid duration" approach automatically adjusts for DST and matches widely-adopted industry standards like [RFC 5545 (iCalendar)](https://datatracker.ietf.org/doc/html/rfc5545). See below for examples.

## Examples

### Offset transitions

When transitions happen, a day may not have exactly 24 hours.

```js
const start = Temporal.ZonedDateTime.from(
  "2024-11-03T01:00:00-04:00[America/New_York]",
);
const end = Temporal.ZonedDateTime.from(
  "2024-11-04T01:00:00-05:00[America/New_York]",
);
console.log(end.since(start).toString()); // PT25H
console.log(end.since(start, { largestUnit: "days" }).toString()); // PT1D

const start2 = Temporal.ZonedDateTime.from(
  "2024-03-10T01:00:00-05:00[America/New_York]",
);
const end2 = Temporal.ZonedDateTime.from(
  "2024-03-11T01:00:00-04:00[America/New_York]",
);
console.log(end2.since(start2).toString()); // PT23H
console.log(end2.since(start2, { largestUnit: "days" }).toString()); // PT1D
```

For this reason, the returned duration is purely time-based with no date portion by default, so that it stays unambiguous.

### Different time zones

The time portion of the returned duration is purely based on instants and is not affected by time zones. However, if you want to include any date units like `day`, then the start and end must be in the same time zone.

```js
const start = Temporal.ZonedDateTime.from(
  "2024-11-03T01:00:00-04:00[America/New_York]",
);
// Peru does not use DST so its offset remains -05:00 year-round
const end = Temporal.ZonedDateTime.from(
  "2024-11-04T01:00:00-05:00[America/Lima]",
);

end.since(start); // PT25H
end.since(start, { largestUnit: "days" }); // RangeError: time zones "America/Lima" and "America/New_York" aren't compatible

end.withTimeZone("America/New_York").since(start, { largestUnit: "days" }); // P1D
end.since(start.withTimeZone("America/Lima"), { largestUnit: "days" }); // P1D1H
```

For more examples about how to use `since()`, especially with rounding, see {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}} and {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
