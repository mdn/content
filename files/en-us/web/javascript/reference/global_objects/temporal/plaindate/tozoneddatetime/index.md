---
title: Temporal.PlainDate.prototype.toZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toZonedDateTime
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.toZonedDateTime
---

{{JSRef}}{{SeeCompatTable}}

The **`toZonedDateTime()`** method of {{jsxref("Temporal.PlainDate")}} instances returns a new {{jsxref("Temporal.ZonedDateTime")}} object representing this date, a supplied time, and a supplied time zone, in the same calendar system.

## Syntax

```js-nolint
toZonedDateTime(timeZone)
toZonedDateTime(info)
```

### Parameters

- `timeZone`
  - : Either a string or a {{jsxref("Temporal.ZonedDateTime")}} instance representing the [`timeZone`](#timezone_2) option. This is a convenience overload, so `toZonedDateTime(timeZone)` is equivalent to `toZonedDateTime({ timeZone })`, where `timeZone` is a string or {{jsxref("Temporal.ZonedDateTime")}}. This overload is chosen when the first argument is not an object, or the object's `timeZone` property is `undefined` (because `ZonedDateTime` instances have a {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} property instead).
- `info`
  - : An object containing some or all of the following properties (in the order they are retrieved and validated):
    - `plainTime` {{optional_inline}}
      - : A string, an object, or a {{jsxref("Temporal.PlainTime")}} instance representing the time component of the resulting `ZonedDateTime`. It is converted to a `Temporal.PlainTime` object using the same algorithm as {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}. Defaults to the first valid time in this time zone on this calendar date, which is usually `"00:00:00"`, but may be different if, for example, daylight saving time skips midnight.
    - `timeZone`
      - : Either a string or a {{jsxref("Temporal.ZonedDateTime")}} instance representing the time zone to use. If a `Temporal.ZonedDateTime` instance, its time zone is used. If a string, it can be a named time zone identifier, an offset time zone identifier, or a date-time string containing a time zone identifier or an offset (see [time zones and offsets](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) for more information).

### Return value

A new `Temporal.ZonedDateTime` object representing the date and time specified by this date, `plainTime`, and `timeZone`, interpreted in the calendar system of this date.

In the case of [ambiguities](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time), the `compatible` behavior is always used: if the time falls into a gap, we move forward by the gap length; if the time falls into an ambiguity, we choose the earlier of the two possibilities. This means the resulting `ZonedDateTime` may have a potentially different date or time than the input.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `timeZone` is not a string or a `Temporal.ZonedDateTime` instance.
- {{jsxref("RangeError")}}
  - : Thrown if `timeZone` is a string that is not a valid time zone identifier.

## Examples

### Using toZonedDateTime()

```js
const summer = Temporal.PlainDate.from("2021-07-01");
// Just time zone
const summerTime = summer.toZonedDateTime("America/New_York");
console.log(summerTime.toString()); // 2021-07-01T00:00:00-04:00[America/New_York]

const winter = Temporal.PlainDate.from("2021-01-01");
// Time zone and time
const winterTime = winter.toZonedDateTime({
  plainTime: "12:34:56",
  timeZone: "America/New_York",
});
console.log(winterTime.toString()); // 2021-01-01T12:34:56-05:00[America/New_York]

const spring = Temporal.PlainDate.from("2021-03-01");
// Time zone as object and time as object
const springTime = spring.toZonedDateTime({
  plainTime: summerTime.toPlainTime(),
  timeZone: winterTime,
});
console.log(springTime.toString()); // 2021-03-01T00:00:00-05:00[America/New_York]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
