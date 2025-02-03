---
title: Temporal.PlainTime.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/toJSON
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainTime.toJSON
---

{{JSRef}}{{SeeCompatTable}}

The **`toJSON()`** method of {{jsxref("Temporal.PlainTime")}} instances returns a string representing this time in the same [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#rfc_9557_format) as calling {{jsxref("Temporal/PlainTime/toString", "toString()")}}. It is intended to be implicitly called by {{jsxref("JSON.stringify()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string representing the given time in the [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#rfc_9557_format).

## Description

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `Temporal.PlainTime` object is stringified. This method is generally intended to, by default, usefully serialize `Temporal.PlainTime` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} function as the reviver of {{jsxref("JSON.parse()")}}.

## Examples

### Using toJSON()

```js
const time = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
const timeStr = time.toJSON(); // '12:34:56'
const t2 = Temporal.PlainTime.from(timeStr);
```

### JSON serialization and parsing

This example shows how `Temporal.PlainTime` can be serialized as JSON without extra effort, and how to parse it back.

```js
const time = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
const jsonStr = JSON.stringify({ time }); // '{"time":"12:34:56"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "time") {
    return Temporal.PlainTime.from(value);
  }
  return value;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
- {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}
- {{jsxref("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
