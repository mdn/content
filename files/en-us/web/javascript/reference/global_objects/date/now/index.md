---
title: Date.now()
short-title: now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
page-type: javascript-static-method
browser-compat: javascript.builtins.Date.now
sidebar: jsref
---

The **`Date.now()`** static method returns the number of milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), which is defined as the midnight at the beginning of January 1, 1970, UTC.

{{InteractiveExample("JavaScript Demo: Date.now()")}}

```js interactive-example
// This example takes 2 seconds to run
const start = Date.now();

console.log("starting timer...");
// Expected output: "starting timer..."

setTimeout(() => {
  const ms = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(ms / 1000)}`);
  // Expected output: "seconds elapsed = 2"
}, 2000);
```

## Syntax

```js-nolint
Date.now()
```

### Parameters

None.

### Return value

A number representing the [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), in milliseconds, of the current time.

## Description

### Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `Date.now()` may be reduced depending on browser settings.

The timestamp is always an integer number of milliseconds, so its resolution is limited to 1 ms in all contexts. This is precision is considered coarse enough for most security and privacy purposes.

In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default. With default settings, the timestamp has 1 ms resolution. If `privacy.resistFingerprinting` is enabled, the rounding interval is 16.667 ms or the interval configured by `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger (final output is rounded to an integer).

For example, these are possible values in Firefox:

```js
// Reduced time precision (1 ms) with default settings
Date.now();
// Might be:
// 1519211809934
// 1519211810363
// 1519211811671
// …

// Reduced time precision with `privacy.resistFingerprinting` enabled
Date.now();
// Might be:
// 1519129853489
// 1519129853506
// 1519129853522
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
- {{domxref("console/time_static", "console.time()")}}
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
