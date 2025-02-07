---
title: Temporal.ZonedDateTime.prototype.epochNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/epochNanoseconds
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.epochNanoseconds
---

{{JSRef}}{{SeeCompatTable}}

The **`epochNanoseconds`** accessor property of {{jsxref("Temporal.ZonedDateTime")}} instances returns a {{jsxref("BigInt")}} representing the number of nanoseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant.

The set accessor of `epochNanoseconds` is `undefined`. You cannot change this property directly. To create a new `Temporal.ZonedDateTime` object with the desired new `epochNanoseconds` value, use the {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "new Temporal.ZonedDateTime()")}} constructor instead.

An instant can only represent ±10<sup>8</sup> days (about ±273,972.6 years) around the epoch, which is ±8.64e21 nanoseconds. Attempting to set `epochNanoseconds` beyond this boundary throws a {{jsxref("RangeError")}}.

## Examples

### Using epochNanoseconds

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56.789Z[UTC]");
console.log(zdt.epochNanoseconds); // 1627821296789000000n

const zdt2 = Temporal.ZonedDateTime.from("1969-08-01T12:34:56.789Z[UTC]");
console.log(zdt2.epochNanoseconds); // -13173903211000000n
```

### Creating a ZonedDateTime object from an epochNanoseconds value

You can create a `Temporal.ZonedDateTime` object from an `epochNanoseconds` value using the {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} constructor.

```js
const epochNanoseconds = 1627821296789000000n;
const zdt = new Temporal.ZonedDateTime(epochNanoseconds, "UTC");
console.log(zdt.toString()); // 2021-08-01T12:34:56.789+00:00[UTC]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
