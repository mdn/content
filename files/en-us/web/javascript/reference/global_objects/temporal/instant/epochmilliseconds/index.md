---
title: Temporal.Instant.prototype.epochMilliseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochMilliseconds
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Temporal.Instant.epochMilliseconds
---

{{JSRef}}

The **`epochMilliseconds`** accessor property of {{jsxref("Temporal.Instant")}} instances returns an integer representing the number of milliseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant. Equivalent to dividing `epochNanoseconds` by `1e6` and flooring the result.

The set accessor of `epochMilliseconds` is `undefined`. You cannot change this property directly. To create a new `Temporal.Instant` object with the desired new `epochMilliseconds` value, use the {{jsxref("Temporal/Instant/add", "add()")}} or {{jsxref("Temporal/Instant/subtract", "subtract()")}} method with the appropriate duration.

## Examples

### Using epochMilliseconds

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
console.log(instant.epochMilliseconds); // 1627821296789

const instant2 = Temporal.Instant.from("1969-08-01T12:34:56.789Z");
console.log(instant2.epochMilliseconds); // -13173903211
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
