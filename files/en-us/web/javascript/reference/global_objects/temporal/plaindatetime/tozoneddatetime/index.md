---
title: Temporal.PlainDateTime.prototype.toZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toZonedDateTime
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDateTime.toZonedDateTime
---

{{JSRef}}{{SeeCompatTable}}

The **`toZonedDateTime()`** method of {{jsxref("Temporal.PlainDateTime")}} instances returns a new {{jsxref("Temporal.ZonedDateTime")}} instance representing the same date-time as this plain date-time, but in the specified time zone.

## Syntax

```js-nolint
toZonedDateTime(timeZone)
toZonedDateTime(timeZone, options)
```

### Parameters

- `timeZone`
  - : Either a string or a {{jsxref("Temporal.ZonedDateTime")}} instance representing the time zone to use. If a `Temporal.ZonedDateTime` instance, its time zone is used. If a string, it can be a named time zone identifier, an offset time zone identifier, or a date-time string containing a time zone identifier or an offset (see [time zones and offsets](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) for more information).
- `options` {{optional_inline}}
  - : An object containing the following property:
    - `disambiguation` {{optional_inline}}
      - : A string specifying what to do when this plain time corresponds to zero or more than one instants in the time zone, usually because of daylight saving time shifts. Possible values are `"compatible"`, `"earlier"`, `"later"`, and `"reject"`. Defaults to `"compatible"`. For more information about these values, see [ambiguity and gaps from local time to UTC time](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).

### Return value

A new {{jsxref("Temporal.ZonedDateTime")}} instance representing the same date-time as this plain date-time, but in the specified time zone.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - Any of the options is invalid.
    - `timeZone` is not a valid time zone identifier.
    - The wall-clock time is ambiguous in the time zone, and `options.disambiguation` is set to `"reject"`.
- {{jsxref("TypeError")}}
  - : Thrown if any of the arguments are not of the expected type.

## Examples

### Using toZonedDateTime()

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");
const zdt = dt.toZonedDateTime("America/New_York");
console.log(zdt.toString()); // '2021-08-01T12:34:56-04:00[America/New_York]'

const dt2 = Temporal.PlainDateTime.from("2021-01-01T12:34:56");
const zdt2 = dt2.toZonedDateTime("America/New_York");
console.log(zdt2.toString()); // '2021-01-01T12:34:56-05:00[America/New_York]'
```

### Handling ambiguous times

Below, we have two wall-clock times that we want to interpret in the `America/New_York` time zone. The first one, `dtNotExist`, never existed because of a forward daylight saving time shift, so we need to choose from the times `01:05:00-05:00` or `03:05:00-04:00`. The second one, `dtAmbiguous`, appeared twice because of a backward daylight saving time shift, so we need to choose from the times `01:05:00-04:00` or `01:05:00-05:00`. For a more detailed explanation of this situation, see [ambiguity and gaps from local time to UTC time](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).

```js
const dtNotExist = Temporal.PlainDateTime.from("2024-03-10T02:05:00");
const dtAmbiguous = Temporal.PlainDateTime.from("2024-11-03T01:05:00");

// Default: compatible
console.log(dtNotExist.toZonedDateTime("America/New_York").toString());
// '2024-03-10T03:05:00-04:00[America/New_York]'
console.log(dtAmbiguous.toZonedDateTime("America/New_York").toString());
// '2024-11-03T01:05:00-04:00[America/New_York]'

// Use the earlier time for ambiguous times
console.log(
  dtNotExist
    .toZonedDateTime("America/New_York", { disambiguation: "earlier" })
    .toString(),
);
// '2024-03-10T01:05:00-05:00[America/New_York]'
console.log(
  dtAmbiguous
    .toZonedDateTime("America/New_York", { disambiguation: "earlier" })
    .toString(),
);
// '2024-11-03T01:05:00-04:00[America/New_York]'

// Use the later time for ambiguous times
console.log(
  dtNotExist
    .toZonedDateTime("America/New_York", { disambiguation: "later" })
    .toString(),
);
// '2024-03-10T03:05:00-04:00[America/New_York]'
console.log(
  dtAmbiguous
    .toZonedDateTime("America/New_York", { disambiguation: "later" })
    .toString(),
);
// '2024-11-03T01:05:00-05:00[America/New_York]'

// Throw an error for ambiguous times
dtNotExist.toZonedDateTime("America/New_York", { disambiguation: "reject" });
// RangeError: instant is ambiguous
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
