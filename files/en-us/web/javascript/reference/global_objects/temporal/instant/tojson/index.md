---
title: Temporal.Instant.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toJSON
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Instant.toJSON
---

{{JSRef}}{{SeeCompatTable}}

The **`toJSON()`** method of {{jsxref("Temporal.Instant")}} instances returns a string representing this instant in the same [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format) as calling {{jsxref("Temporal/Instant/toString", "toString()")}}. It is intended to be implicitly called by {{jsxref("JSON.stringify()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string representing the given instant in the [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format), with as much subsecond precision as necessary to represent the duration accurately, and with the UTC time zone designator `Z`.

## Description

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `Temporal.Instant` object is stringified. This method is generally intended to, by default, usefully serialize `Temporal.Instant` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} function as the reviver of {{jsxref("JSON.parse()")}}.

## Examples

### Using toJSON()

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627821296000);
const instantStr = instant.toJSON(); // '2021-08-01T12:34:56Z'
const i2 = Temporal.Instant.from(instantStr);
```

### JSON serialization and parsing

This example shows how `Temporal.Instant` can be serialized as JSON without extra effort, and how to parse it back.

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627821296000);
const jsonStr = JSON.stringify({ time: instant }); // '{"time":"2021-08-01T12:34:56Z"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "time") {
    return Temporal.Instant.from(value);
  }
  return value;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
