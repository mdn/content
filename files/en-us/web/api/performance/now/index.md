---
title: performance.now()
slug: Web/API/Performance/now
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Performance
  - Reference
  - Web Performance API
browser-compat: api.Performance.now
---
{{APIRef("High Resolution Timing")}}

The **`performance.now()`** method
returns a {{domxref("DOMHighResTimeStamp")}}, measured in milliseconds.

{{AvailableInWorkers}}

The returned value represents the time elapsed since the [time origin](/en-US/docs/Web/API/DOMHighResTimeStamp#the_time_origin).

Bear in mind the following points:

- In dedicated workers created from a {{domxref("Window")}} context, the value in the
  worker will be lower than `performance.now()` in the window who spawned
  that worker. It used to be the same as `t0` of the main context, but this
  was changed.
- In shared or service workers, the value in the worker might be higher than that of
  the main context because that window can be created after those workers.

It's important to keep in mind that to mitigate potential security threats such as [Spectre](https://spectreattack.com/), browsers typically round the returned
value by some amount in order to be less predictable. This inherently introduces a
degree of inaccuracy by limiting the resolution or precision of the timer. For example,
Firefox rounds the returned time to 1 millisecond increments.

The precision of the returned value is subject to change if/when the security concerns
are alleviated through other means.

## Syntax

```js
now()
```

### Parameters

None.

### Return value

Returns a {{domxref("DOMHighResTimeStamp")}} measured in milliseconds.

## Examples

```js
const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
```

Unlike other timing data available to JavaScript (for example [`Date.now`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)),
the timestamps returned by `performance.now()` are not limited to
one-millisecond resolution. Instead, they represent times as floating-point numbers with
up to microsecond precision.

Also unlike `Date.now()`, the values returned by
`performance.now()` always increase at a constant rate, independent of the
system clock (which might be adjusted manually or skewed by software like NTP).
Otherwise, `performance.timing.navigationStart + performance.now()` will be
approximately equal to `Date.now()`.

## Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of
`performance.now()` might get rounded depending on browser settings.
In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by
default and defaults to 1ms.

```js
// reduced time precision (1ms) in Firefox 60
performance.now();
// 8781416
// 8781815
// 8782206
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
performance.now();
// 8865400
// 8866200
// 8866700
// …
```

In Firefox, you can also enable `privacy.resistFingerprinting` — this
changes the precision to 100ms or the value of
`privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever
is larger.

Starting with Firefox 79, high resolution timers can be used if you cross-origin
isolate your document using the {{HTTPHeader("Cross-Origin-Opener-Policy")}} and
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} headers:

```plain
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

These headers ensure a top-level document does not share a browsing context group with
cross-origin documents. COOP process-isolates your document and potential attackers
can't access to your global object if they were opening it in a popup, preventing a set
of cross-origin attacks dubbed [XS-Leaks](https://github.com/xsleaks/xsleaks).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [When milliseconds are not enough: performance.now()](https://developer.chrome.com/blog/when-milliseconds-are-not-enough-performance-now/).
