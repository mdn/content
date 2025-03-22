---
title: Temporal.ZonedDateTime.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/equals
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.equals
---

{{JSRef}}{{SeeCompatTable}}

The **`equals()`** method of {{jsxref("Temporal.ZonedDateTime")}} instances returns `true` if this date-time is equivalent in value to another date-time (in a form convertible by {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}), and `false` otherwise. They are compared both by their instant values, time zones, and their calendars, so two date-times from different calendars or time zones may be considered equal by {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} but not by `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.ZonedDateTime")}} instance representing the other date-time to compare. It is converted to a `Temporal.ZonedDateTime` object using the same algorithm as {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.

### Return value

`true` if this date-time is equal to `other` both in their instant value, time zone, and their calendar, `false` otherwise.

Note that the time zones are canonicalized before comparison, so if their [time zone IDs](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) are both named and identify the same time zone, then they would be considered the same even when the exact names may be aliases of each other. Offset identifiers are compared by the offset values they represent. Offset identifiers never compare equal to named identifiers even when the named identifier's time zone always uses that offset.

## Examples

### Using equals()

```js
// Asia/Kolkata and Asia/Calcutta are aliases of each other
const dt1 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56+05:30[Asia/Kolkata]",
);
const dt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56+05:30[Asia/Calcutta]",
);
console.log(dt1.equals(dt2)); // true

const dt3 = Temporal.ZonedDateTime.from("2021-07-01T12:34:56+05:30[+05:30]");
console.log(dt1.equals(dt3)); // false

const dt4 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56+05:30[Asia/Kolkata][u-ca=buddhist]",
);
console.log(dt1.equals(dt4)); // false
```

### Testing if two time zone identifiers are equivalent

```js
function sameTimeZone(timeZone1, timeZone2) {
  const dt1 = Temporal.ZonedDateTime.from({
    year: 2021,
    month: 7,
    day: 1,
    timeZone: timeZone1,
  });
  const dt2 = Temporal.ZonedDateTime.from({
    year: 2021,
    month: 7,
    day: 1,
    timeZone: timeZone2,
  });
  return dt1.equals(dt2);
}

console.log(sameTimeZone("Asia/Kolkata", "Asia/Calcutta")); // true
console.log(sameTimeZone("Asia/Shanghai", "Asia/Taipei")); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
