---
title: Temporal.Instant.prototype.epochNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochNanoseconds
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Instant.epochNanoseconds
---

{{JSRef}}{{SeeCompatTable}}

The **`epochNanoseconds`** accessor property of {{jsxref("Temporal.Instant")}} instances returns a {{jsxref("BigInt")}} representing the number of nanoseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant.

The set accessor of `epochNanoseconds` is `undefined`. You cannot change this property directly. To create a new `Temporal.Instant` object with the desired new `epochNanoseconds` value, use the {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}} static method instead.

An instant can only represent ±10<sup>8</sup> days (about ±273,972.6 years) around the epoch, which is ±8.64e21 nanoseconds. Attempting to set `epochNanoseconds` beyond this boundary throws a {{jsxref("RangeError")}}.

## Examples

### Using epochNanoseconds

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
console.log(instant.epochNanoseconds); // 1627821296789000000n

const instant2 = Temporal.Instant.from("1969-08-01T12:34:56.789Z");
console.log(instant2.epochNanoseconds); // -13173903211000000n
```

### Changing epochNanoseconds

This is the method that allows you to move by any amount of time:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = instant.add({ hours: 1 });
console.log(instant1hourLater.epochNanoseconds); // 1627824896789000000n
```

If you already know the change in nanoseconds, you can also directly construct a new `Temporal.Instant` object:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = Temporal.Instant.fromEpochNanoseconds(
  instant.epochNanoseconds + 3600000000000n,
);
console.log(instant1hourLater.epochNanoseconds); // 1627824896789000000n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}}
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
