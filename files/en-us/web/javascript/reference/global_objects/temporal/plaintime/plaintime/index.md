---
title: Temporal.PlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/PlainTime
page-type: javascript-constructor
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainTime.PlainTime
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.PlainTime()`** constructor creates {{jsxref("Temporal.PlainTime")}} objects.

This constructor allows you to create instances by directly supplying the underlying data. Like all other `Temporal` classes, you should usually construct `Temporal.PlainTime` objects using the {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} static method, which can handle a variety of input types.

## Syntax

```js-nolint
new Temporal.PlainTime()
new Temporal.PlainTime(hour)
new Temporal.PlainTime(hour, minute)
new Temporal.PlainTime(hour, minute, second)
new Temporal.PlainTime(hour, minute, second, millisecond)
new Temporal.PlainTime(hour, minute, second, millisecond, microsecond)
new Temporal.PlainTime(hour, minute, second, millisecond, microsecond, nanosecond)
```

> **Note:** `Temporal.PlainTime()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `hour` {{optional_inline}}
  - : A number, truncated to an integer, representing the hour component.
- `minute` {{optional_inline}}
  - : A number, truncated to an integer, representing the minute component.
- `second` {{optional_inline}}
  - : A number, truncated to an integer, representing the second component.
- `millisecond` {{optional_inline}}
  - : A number, truncated to an integer, representing the millisecond component.
- `microsecond` {{optional_inline}}
  - : A number, truncated to an integer, representing the microsecond component.
- `nanosecond` {{optional_inline}}
  - : A number, truncated to an integer, representing the nanosecond component.

### Return value

A new `Temporal.PlainTime` object, representing the time specified by the parameters.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the components is not a finite number, or they don't represent a valid time.

## Examples

### Using Temporal.PlainTime()

```js
const time = new Temporal.PlainTime(12, 34, 56, 123, 456, 789);
console.log(time.toString()); // 12:34:56.123456789
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
