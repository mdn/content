---
title: High precision timing
slug: Web/API/Performance_API/High_precision_timing
page-type: guide
---

{{DefaultAPISidebar("Performance API")}}

The Performance API allows high precision measurements that are based on time in potential sub-millisecond resolution and a stable monotonic clock that is not subject to system clock skew or adjustments. The high resolution timers are needed for accurate benchmarking instead of the less precise and non-monotonic {{jsxref("Date")}} timestamps.

This page provides an overview about how high precision time works within the Performance API and how it compares to {{jsxref("Date")}} timestamps.

## `DOMHighResTimeStamp`

High precision timing is achieved by using the {{domxref("DOMHighResTimeStamp")}} type for time values. The unit is milliseconds and should be accurate to 5 µs (microseconds). However, if the browser is unable to provide a time value accurate to 5 microseconds, the browser can represent the value as a time in milliseconds accurate to a millisecond. This might occur because of hardware/software constraints, or security and privacy reasons. For more information, see the section on [reduced precision](#reduced_precision) below.

All timestamps in the Performance API use the {{domxref("DOMHighResTimeStamp")}} type. Previously, the Performance API (and other Web APIs) used the `EpochTimeStamp` type (previously known as `DOMTimeStamp`). These types are now discouraged.

## `Performance.now()` vs. `Date.now()`

JavaScript defines {{jsxref("Date.now()")}} as the number of milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_ecmascript_epoch_and_timestamps), which is defined as the midnight at the beginning of January 1, 1970, UTC. The `performance.now()` method on the other hand is relative to the {{domxref("Performance.timeOrigin")}} property. For more information, see the [time origins section](#time_origins) below.

JavaScript `Date` times are subject to system clock skew or adjustments. This means that the value of time may not always be monotonically increasing. The main purpose of `Date` objects is to display time and date information to the user and so many operating systems run a daemon which regularly synchronizes time. It might be that the clock is tweaked a few milliseconds several times per hour.

The `performance.now()` method (and all other `DOMHighResTimeStamp` values) provide monotonically increasing time values and aren't subject to clock adjustments. This means that it is guaranteed `DOMHighResTimeStamp` values will be at least equal to, if not greater than, the last time you accessed it.

```js
Date.now(); // 1678889977578
performance.now(); // 233936
```

For measuring performance, calculating precise frame rates (FPS), animation loops, etc., use monotonically increasing high resolution time available with {{domxref("Performance.now()")}} instead of JavaScript's {{jsxref("Date.now()")}}.

To summarize:

| -                        | {{domxref("Performance.now()")}}      | {{jsxref("Date.now()")}}          |
| ------------------------ | ------------------------------------- | --------------------------------- |
| Resolution               | sub-milliseconds                      | milliseconds                      |
| Origin                   | {{domxref("Performance.timeOrigin")}} | Unix Epoch (January 1, 1970, UTC) |
| Use clock adjustments    | No                                    | Yes                               |
| Monotonically increasing | Yes                                   | No                                |

## Time origins

The Performance API uses the {{domxref("Performance.timeOrigin")}} property to determine the baseline for performance-related timestamps. All `DOMHighResTimeStamp` times are relative to the `timeOrigin` property.

In Window contexts, this time origin is the time when navigation has started. In {{domxref("Worker")}} and {{domxref("ServiceWorker")}} contexts, the time origin is the time when the worker is run.

In the previous version of the specification (Level 1), the `performance.now()` method used to be relative to [`performance.timing.navigationStart`](/en-US/docs/Web/API/PerformanceTiming/navigationStart) property from the Navigation Timing specification. However, this changed in a later version of the specification (Level 2) and `performance.now()` is now relative to {{domxref("Performance.timeOrigin")}} which avoids clock change risks when comparing timestamps across webpages.

```js
// Level 1 (clock change risks)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (no clock change risks)
currentTime = performance.timeOrigin + performance.now();
```

### Synchronizing time origins between contexts

To account for the different time origins in window and worker contexts, you should translate the timestamps coming from worker scripts with the help of the `timeOrigin` property, so the timings synchronize for the entire application. See the examples section on the {{domxref("Performance.timeOrigin")}} page for example code to synchronize time.

## Reduced precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), `DOMHighResTimeStamp` types are coarsened based on site isolation status.

- Resolution in isolated contexts: 5 microseconds
- Resolution in non-isolated contexts: 100 microseconds

To apply cross-origin isolation to your site, use the {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) and
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) headers:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

These headers ensure a top-level document does not share a browsing context group with
cross-origin documents. {{HTTPHeader("Cross-Origin-Opener-Policy")}} process-isolates your document and potential attackers
can't access to your global object if they were opening it in a popup, preventing a set
of cross-origin attacks dubbed [XS-Leaks](https://github.com/xsleaks/xsleaks).

## See also

- {{domxref("DOMHighResTimeStamp")}}
- {{domxref("Performance.timeOrigin")}}
- {{domxref("Performance.now()")}} / {{jsxref("Date.now()")}}
