---
title: Temporal.ZonedDateTime.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toString
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.toString
---

{{JSRef}}{{SeeCompatTable}}

The **`toString()`** method of {{jsxref("Temporal.ZonedDateTime")}} instances returns a string representing this date-time in the [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format).

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
          - : Include the calendar annotation if the calendar is not `"iso8601"`.
        - `"always"`
          - : Always include the calendar annotation.
        - `"never"`
          - : Never include the calendar annotation. This makes the returned string not recoverable to the same {{jsxref("Temporal.ZonedDateTime")}} instance, although the date value still remains the same.
        - `"critical"`
          - : Always include the calendar annotation, and add a critical flag: `[!u-ca=calendar_id]`. Useful when sending the string to certain systems, but not useful for Temporal itself.
    - `fractionalSecondDigits` {{optional_inline}}
      - : Either an integer from 0 to 9, or the string `"auto"`. The default is `"auto"`. If `"auto"`, then trailing zeros are removed from the fractional seconds. Otherwise, the fractional part of the second component contains this many digits, padded with zeros or rounded as necessary.
    - `roundingMode` {{optional_inline}}
      - : A string specifying how to round off fractional second digits beyond `fractionalSecondDigits`. See [`Intl.NumberFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Defaults to `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : A string specifying the smallest unit to include in the output. Possible values are `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, and `"nanosecond"`, or their plural forms, which (except `"minute"`) are equivalent to `fractionalSecondDigits` values of `0`, `3`, `6`, `9`, respectively. If specified, then `fractionalSecondDigits` is ignored.
    - `timeZoneName` {{optional_inline}}
      - : Whether to show the time zone name (`[time_zone_id]`) in the return value. Possible values are:
        - `"auto"` (default)
          - : Always include the time zone name.
        - `"never"`
          - : Never include the time zone name. This makes the returned string not recoverable to the same {{jsxref("Temporal.ZonedDateTime")}} instance.
        - `"critical"`
          - : Always include the time zone name, and add a critical flag: `[!time)zone_id]`. Useful when sending the string to certain systems, but not useful for Temporal itself.
    - `offset` {{optional_inline}}
      - : Whether to show the offset (`±HH:mm`) in the return value. Possible values are:
        - `"auto"` (default)
          - : Always include the offset.
        - `"never"`
          - : Never include the offset. This makes the returned string not recoverable to the same {{jsxref("Temporal.ZonedDateTime")}} instance, if the time zone is included but the time is ambiguous, or if the time zone is also not included.

### Return value

A string in the [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) representing this date-time. The offset and calendar/time zone annotations are included as specified.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the options is invalid.
- {{jsxref("TypeError")}}
  - : Thrown if `options` is not an object or `undefined`.

## Examples

### Using toString()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56[America/New_York]",
);
console.log(zdt.toString()); // '2021-08-01T12:34:56-04:00[America/New_York]'
```

Even for the `UTC` time zone, the offset is `+00:00`, not `Z`:

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56[UTC]");
console.log(zdt.toString()); // '2021-08-01T12:34:56+00:00[UTC]'
```

### Using options

For examples with rounding times, see {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}. For examples with displaying calendars, see {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}. Here we show controlling the display of time zone and offset:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56[America/New_York]",
);
console.log(zdt.toString({ timeZoneName: "auto", offset: "never" })); // '2021-08-01T12:34:56[America/New_York]'
console.log(zdt.toString({ timeZoneName: "never", offset: "auto" })); // '2021-08-01T12:34:56-04:00'
console.log(zdt.toString({ timeZoneName: "never", offset: "never" })); // '2021-08-01T12:34:56'
console.log(zdt.toString({ timeZoneName: "critical", offset: "never" })); // '2021-08-01T12:34:56[!America/New_York]'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
