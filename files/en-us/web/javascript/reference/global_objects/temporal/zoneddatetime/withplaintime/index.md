---
title: Temporal.ZonedDateTime.prototype.withPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withPlainTime
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.withPlainTime
---

{{JSRef}}{{SeeCompatTable}}

The **`withPlainTime()`** method of {{jsxref("Temporal.ZonedDateTime")}} instances returns a new `Temporal.ZonedDateTime` object representing this date-time with the time part entirely replaced by the new time (in a form convertible by {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}})

This method will replace all time properties, defaulting to `0` where properties are unspecified. If you only want to replace some of the time properties, use the {{jsxref("Temporal/ZonedDateTime/with", "with()")}} method instead.

## Syntax

```js-nolint
withPlainTime()
withPlainTime(plainTime)
```

### Parameters

- `plainTime` {{optional_inline}}
  - : A string, an object, or a {{jsxref("Temporal.PlainTime")}} instance representing the new time. It is converted to a `Temporal.PlainTime` object using the same algorithm as {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}. If not specified, the time part is set to the [start of the day](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/startOfDay) (which is usually `00:00:00` unless it doesn't exist due to offset transitions). [Disambiguation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) always happens in the `"compatible"` mode; if you want to use a different mode, use the {{jsxref("Temporal/ZonedDateTime/with", "with()")}} method instead.

### Return value

A new `Temporal.ZonedDateTime` object, with the date part and the time zone copied from the original date-time and the time part replaced by the new time.

## Examples

### Using withPlainTime()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56[America/New_York]",
);

// You can pass a string
const newZDT = zdt.withPlainTime("13:45:00");
console.log(newZDT.toString()); // "2021-07-01T13:45:00-04:00[America/New_York]"

// You can only specify some time properties, and the rest default to 0;
// for the with() method, they would be copied from the original date-time
const newZDT2 = zdt.withPlainTime({ hour: 13 });
console.log(newZDT2.toString()); // "2021-07-01T13:00:00-04:00[America/New_York]"

// You can pass nothing to set the time to midnight
const newZDT3 = zdt.withPlainTime();
console.log(newZDT3.toString()); // "2021-07-01T00:00:00-04:00[America/New_York]"

// But, if midnight doesn't exist, it may be a different time
const zdt2 = Temporal.ZonedDateTime.from(
  "2015-10-18T12:00-02:00[America/Sao_Paulo]",
);
console.log(zdt2.withPlainTime().toString()); // "2015-10-18T01:00:00-02:00[America/Sao_Paulo]"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
