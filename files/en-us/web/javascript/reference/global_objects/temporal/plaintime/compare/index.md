---
title: Temporal.PlainTime.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/compare
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainTime.compare
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.PlainTime.compare()`** static method returns a number (-1, 0, or 1) indicating whether the first time comes before, is the same as, or comes after the second time. It is equivalent to comparing the hour, minute, second, millisecond, microsecond, and nanosecond fields one by one.

## Syntax

```js-nolint
Temporal.PlainTime.compare(time1, time2)
```

### Parameters

- `time1`
  - : A string, an object, or a {{jsxref("Temporal.PlainTime")}} instance representing the first time to compare. It is converted to a `Temporal.PlainTime` object using the same algorithm as {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.
- `time2`
  - : The second time to compare, converted to a `Temporal.PlainTime` object using the same algorithm as `time1`.

### Return value

Returns `-1` if `time1` comes before `time2`, `0` if they are the same, and `1` if `time1` comes after `time2`.

## Examples

### Using Temporal.PlainTime.compare()

```js
const time1 = Temporal.PlainTime.from("12:34:56");
const time2 = Temporal.PlainTime.from("12:34:57");
console.log(Temporal.PlainTime.compare(time1, time2)); // -1

const time3 = Temporal.PlainTime.from("11:34:56");
console.log(Temporal.PlainTime.compare(time1, time3)); // 1
```

### Sorting an array of times

The purpose of this `compare()` function is to act as a comparator to be passed to {{jsxref("Array.prototype.sort()")}} and related functions.

```js
const times = ["12:34:56", "11:34:56", "12:34:57"];

times.sort(Temporal.PlainTime.compare);
console.log(times);
// [ "11:34:56", "12:34:56", "12:34:57" ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/equals", "Temporal.PlainTime.prototype.equals()")}}
