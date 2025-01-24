---
title: Temporal.PlainYearMonth.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toJSON
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainYearMonth.toJSON
---

{{JSRef}}{{SeeCompatTable}}

The **`toJSON()`** method of {{jsxref("Temporal.PlainYearMonth")}} instances returns a string representing this year-month in the same [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) as calling {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}}. It is intended to be implicitly called by {{jsxref("JSON.stringify()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string representing the given date in the [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format), with the calendar annotation included if it is not `"iso8601"`.

## Description

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `Temporal.PlainYearMonth` object is stringified. This method is generally intended to, by default, usefully serialize `Temporal.PlainYearMonth` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} function as the reviver of {{jsxref("JSON.parse()")}}.

## Examples

### Using toJSON()

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = ym.toJSON(); // '2021-08'
const ym2 = Temporal.PlainYearMonth.from(ymStr);
```

### JSON serialization and parsing

This example shows how `Temporal.PlainYearMonth` can be serialized as JSON without extra effort, and how to parse it back.

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = JSON.stringify({ event: ym }); // '{"event":"2021-08"}'
const obj = JSON.parse(ymStr, (key, value) => {
  if (key === "event") {
    return Temporal.PlainYearMonth.from(value);
  }
  return value;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
