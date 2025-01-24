---
title: Temporal.PlainTime.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/equals
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainTime.equals
---

{{JSRef}}{{SeeCompatTable}}

The **`equals()`** method of {{jsxref("Temporal.PlainTime")}} instances returns `true` if this time is equivalent in value to another time (in a form convertible by {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}), and `false` otherwise. They are compared by their time values. It is equivalent to `Temporal.PlainTime.compare(this, other) === 0`.

## Syntax

```js-nolint
equals(other)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.PlainTime")}} instance representing the other time to compare. It is converted to a `Temporal.PlainTime` object using the same algorithm as {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

### Return value

`true` if this time is equal to `other` both in their time value and their calendar, `false` otherwise.

## Examples

### Using equals()

```js
const time1 = Temporal.PlainTime.from("12:34:56");
const time2 = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
console.log(time1.equals(time2)); // true

const time3 = Temporal.PlainTime.from("00:34:56");
console.log(time1.equals(time3)); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}}
