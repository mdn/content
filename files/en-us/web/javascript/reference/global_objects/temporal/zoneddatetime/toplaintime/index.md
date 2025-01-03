---
title: Temporal.ZonedDateTime.prototype.toPlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainTime
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.ZonedDateTime.toPlainTime
---

{{JSRef}}

The **`toPlainTime()`** method of {{jsxref("Temporal.ZonedDateTime")}} instances returns a new {{jsxref("Temporal.PlainTime")}} object representing the time portion of this date-time.

## Syntax

```js-nolint
toPlainTime()
```

### Parameters

None.

### Return value

A new {{jsxref("Temporal.PlainTime")}} object representing the time portion of this date-time.

## Examples

### Using toPlainTime()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const plainTime = zdt.toPlainTime();
console.log(plainTime.toString()); // 12:34:56.987654321
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
