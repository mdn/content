---
title: Temporal.Instant.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/equals
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Instant.equals
---

{{JSRef}}{{SeeCompatTable}}

The **`equals()`** method of {{jsxref("Temporal.Instant")}} instances returns `true` if this instant is equivalent in value to another instant (in a form convertible by {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}), and `false` otherwise. They are compared by their {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}. It is equivalent to `Temporal.Instant.compare(this, other) === 0`.

## Syntax

```js-nolint
equals(other)
```

### Parameters

- `other`
  - : A string or a {{jsxref("Temporal.Instant")}} instance representing the other instant to compare. It is converted to a `Temporal.Instant` object using the same algorithm as {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}.

### Return value

`true` if this instant is equal to `other` by nanoseconds, `false` otherwise.

## Examples

### Using equals()

```js
const instant1 = Temporal.Instant.from("2021-08-01T12:34:56Z");
const instant2 = Temporal.Instant.fromEpochMilliseconds(1627821296000);
console.log(instant1.equals(instant2)); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}}
