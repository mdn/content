---
title: Temporal.Duration.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toJSON
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Duration.toJSON
---

{{JSRef}}{{SeeCompatTable}}

The **`toJSON()`** method of {{jsxref("Temporal.Duration")}} instances returns a string representing this duration in the same [ISO 8601 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) as calling {{jsxref("Temporal/Duration/toString", "toString()")}}. It is intended to be implicitly called by {{jsxref("JSON.stringify()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string representing the given duration in the [ISO 8601 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format), with as much subsecond precision as necessary to represent the duration accurately.

## Description

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `Temporal.Duration` object is stringified. This method is generally intended to, by default, usefully serialize `Temporal.Duration` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} function as the reviver of {{jsxref("JSON.parse()")}}.

## Examples

### Using toJSON()

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const durationStr = duration.toJSON(); // 'PT1H30M15S'
const d2 = Temporal.Duration.from(durationStr);
```

### JSON serialization and parsing

This example shows how `Temporal.Duration` can be serialized as JSON without extra effort, and how to parse it back.

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const jsonStr = JSON.stringify({ data: duration }); // '{"data":"PT1H30M15S"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "data") {
    return Temporal.Duration.from(value);
  }
  return value;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
