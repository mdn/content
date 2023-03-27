---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getTime
---

{{JSRef}}

The **`getTime()`** method returns the number of milliseconds since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_ecmascript_epoch_and_timestamps), which is defined as the midnight at the beginning of January 1, 1970, UTC.

You can use this method to help assign a date and time to another {{jsxref("Date")}}
object. This method is functionally equivalent to the {{jsxref("Date/valueof",
  "valueOf()")}} method.

{{EmbedInteractiveExample("pages/js/date-gettime.html","shorter")}}

## Syntax

```js-nolint
getTime()
```

### Return value

A number representing the milliseconds elapsed between 1 January 1970 00:00:00 UTC and
the given date.

## Description

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of
`new Date().getTime()` might get rounded depending on browser settings. In
Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default
and defaults to 20µs in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
new Date().getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
new Date().getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

In Firefox, you can also enable `privacy.resistFingerprinting`, the
precision will be 100ms or the value of
`privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever
is larger.

## Examples

### Using `getTime()` for copying dates

Constructing a date object with the identical time value.

```js
// Since month is zero based, birthday will be January 10, 1995
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### Measuring execution time

Subtracting two subsequent `getTime()` calls on newly generated
{{jsxref("Date")}} objects, give the time span between these two calls. This can be used
to calculate the executing time of some operations. See also {{jsxref("Date.now()")}} to
prevent instantiating unnecessary {{jsxref("Date")}} objects.

```js
let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
