---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
page-type: javascript-static-method
browser-compat: javascript.builtins.Date.now
---

{{JSRef}}

The **`Date.now()`** static method returns the number of milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), which is defined as the midnight at the beginning of January 1, 1970, UTC.

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## Syntax

```js-nolint
Date.now()
```

### Return value

A number representing the [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), in milliseconds, of the current time.

## Description

### Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `Date.now()` might get rounded depending on browser settings. In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 2ms. You can also enable `privacy.resistFingerprinting`, in which case the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

```js
// reduced time precision (2ms) in Firefox 60
Date.now();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
Date.now();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Examples

### Measuring time elapsed

You can use `Date.now()` to get the current time in milliseconds, then subtract a previous time to find out how much time elapsed between the two calls.

```js
const start = Date.now();
doSomeLongRunningProcess();
console.log(`Time elapsed: ${Date.now() - start} ms`);
```

For more complex scenarios, you may want to use the [performance API](/en-US/docs/Web/API/Performance_API/High_precision_timing) instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Date.now` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{domxref("Performance.now()")}}
- {{domxref("console.time()")}}
- {{domxref("console.timeEnd()")}}
