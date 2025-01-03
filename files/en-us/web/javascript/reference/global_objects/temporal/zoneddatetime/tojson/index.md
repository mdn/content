---
title: Temporal.ZonedDateTime.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toJSON
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.ZonedDateTime.toJSON
---

{{JSRef}}

The **`toJSON()`** method of {{jsxref("Temporal.ZonedDateTime")}} instances returns a string representing this date-time in the same [ISO 8601 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#iso_8601_format) as calling {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string representing the given date-time in the [ISO 8601 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#iso_8601_format), with the calendar annotation included if it is not ISO 8601, and the offset and time zone annotation always included.

## Description

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `Temporal.ZonedDateTime` object is stringified. This method is generally intended to, by default, usefully serialize `Temporal.ZonedDateTime` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} function as the reviver of {{jsxref("JSON.parse()")}}.

## Examples

### Using toJSON()

```js
const zdt = Temporal.ZonedDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  timeZone: "America/New_York",
});
const zdtStr = zdt.toJSON(); // '2021-08-01T00:00:00-04:00[America/New_York]'
const zdt2 = Temporal.ZonedDateTime.from(zdtStr);
```

### JSON serialization and parsing

This example shows how `Temporal.ZonedDateTime` can be serialized as JSON without extra effort, and how to parse it back.

```js
const zdt = Temporal.ZonedDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  timeZone: "America/New_York",
});
const jsonStr = JSON.stringify({ meeting: zdt }); // '{"meeting":"2021-08-01T00:00:00-04:00[America/New_York]"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "meeting") {
    return Temporal.ZonedDateTime.from(value);
  }
  return value;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
