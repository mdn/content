---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
tags:
  - Date
  - JavaScript
  - Method
  - Reference
  - Time
  - Polyfill
browser-compat: javascript.builtins.Date.now
---
{{JSRef}}

The static **`Date.now()`** method returns the number of
milliseconds elapsed since January 1, 1970 00:00:00 UTC.

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## Syntax

```js
Date.now()
```

### Return value

A {{jsxref("Number")}} representing the milliseconds elapsed since the UNIX epoch.

## Examples

### Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of
`Date.now()` might get rounded depending on browser settings.
In Firefox, the `privacy.reduceTimerPrecision`  preference is enabled by
default and defaults to 20µs in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
Date.now()
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

In Firefox, you can also enable `privacy.resistFingerprinting`, the
precision will be 100ms or the value of
`privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever
is larger.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Date.now` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{domxref("Performance.now()")}} — provides timestamps with sub-millisecond
  resolution for use in measuring web page performance
- {{domxref("console.time()")}} / {{domxref("console.timeEnd()")}}
