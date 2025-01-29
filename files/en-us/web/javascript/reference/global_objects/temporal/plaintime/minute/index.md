---
title: Temporal.PlainTime.prototype.minute
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/minute
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainTime.minute
---

{{JSRef}}{{SeeCompatTable}}

The **`minute`** accessor property of {{jsxref("Temporal.PlainTime")}} instances returns a integer from 0 to 59 representing the minute component of this time.

The set accessor of `minute` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainTime/with", "with()")}} method to create a new `Temporal.PlainTime` object with the desired new value.

## Examples

### Using minute

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.minute); // 34
```

### Changing minute

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ minute: 58 });
console.log(newTime.toString()); // 12:58:56
```

You can also use {{jsxref("Temporal/PlainTime/add", "add()")}} or {{jsxref("Temporal/PlainTime/subtract", "subtract()")}} to move a certain number of minutes from the current time.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ minutes: 24 });
console.log(newTime.toString()); // 12:58:56
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
