---
title: Temporal.PlainTime.prototype.microsecond
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/microsecond
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainTime.microsecond
---

{{JSRef}}{{SeeCompatTable}}

The **`microsecond`** accessor property of {{jsxref("Temporal.PlainTime")}} instances returns a integer from 0 to 999 representing the microsecond (10<sup>-6</sup> second) component of this time.

The set accessor of `microsecond` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainTime/with", "with()")}} method to create a new `Temporal.PlainTime` object with the desired new value.

## Examples

### Using microsecond

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.microsecond); // 0

const time2 = Temporal.PlainTime.from("12:34:56.123456789");
console.log(time2.microsecond); // 456
```

### Changing microsecond

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ microsecond: 100 });
console.log(newTime.toString()); // 12:34:56.0001
```

You can also use {{jsxref("Temporal/PlainTime/add", "add()")}} or {{jsxref("Temporal/PlainTime/subtract", "subtract()")}} to move a certain number of microseconds from the current time.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ microseconds: 100 });
console.log(newTime.toString()); // 12:34:56.0001
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}}
- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}
- {{jsxref("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}
- {{jsxref("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
