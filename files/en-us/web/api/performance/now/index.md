---
title: "Performance: now() method"
short-title: now()
slug: Web/API/Performance/now
page-type: web-api-instance-method
browser-compat: api.Performance.now
---

{{APIRef("Performance API")}}

The **`performance.now()`** method returns a high resolution timestamp in milliseconds. It represents the time elapsed since {{domxref("Performance.timeOrigin")}} (the time when navigation has started in window contexts, or the time when the worker is run in {{domxref("Worker")}} and {{domxref("ServiceWorker")}} contexts).

## Syntax

```js-nolint
now()
```

### Parameters

None.

### Return value

Returns a {{domxref("DOMHighResTimeStamp")}} measured in milliseconds.

## Description

### `Performance.now` vs. `Date.now`

Unlike [`Date.now`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now), the timestamps returned by `performance.now()` are not limited to one-millisecond resolution. Instead, they represent times as floating-point numbers with up to microsecond precision.

Also, `Date.now()` may have been impacted by system and user clock adjustments, clock skew, etc. as it is relative to the Unix epoch (1970-01-01T00:00:00Z) and dependent on the system clock.
The `performance.now()` method on the other hand is relative to the `timeOrigin` property which is a [monotonic clock](https://w3c.github.io/hr-time/#dfn-monotonic-clock): its current time never decreases and isn't subject to adjustments.

### `performance.now` specification changes

The semantics of the `performance.now()` method changed between High Resolution Time Level 1 and Level 2.

| Changes               | Level 1                                                                                       | Level 2                                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relative to           | [`performance.timing.navigationStart`](/en-US/docs/Web/API/PerformanceTiming/navigationStart) | {{domxref("Performance.timeOrigin")}}                                                                                                                       |
| Triggering conditions | Document fetch or unload prompt (if any).                                                     | Creation of the browsing context (if no prior document), unload prompt (if any), or start of the navigation (as defined in HTML, a few steps before fetch). |

The `performance.now()` method used to be relative to [`performance.timing.navigationStart`](/en-US/docs/Web/API/PerformanceTiming/navigationStart) property from the Navigation Timing specification. This changed and `performance.now()` is now relative to {{domxref("Performance.timeOrigin")}} which avoids clock change risks when comparing timestamps across webpages.

```js
// Level 1 (clock change risks)
currentTime = performance.timing.navigationStart + performance.now();

// Level 2 (no clock change risks)
currentTime = performance.timeOrigin + performance.now();
```

### Ticking during sleep

The specification (Level 2) requires that `performance.now()` should tick during sleep. It appears that only Firefox on Windows, and Chromiums on Windows keep ticking during sleep. Relevant browser bugs for other operating systems:

- Chrome/Chromium ([bug](https://bugs.chromium.org/p/chromium/issues/detail?id=1206450))
- Firefox ([bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1709767))
- Safari/WebKit ([bug](https://bugs.webkit.org/show_bug.cgi?id=225610))

More details can also be found in the specification issue [hr-time#115](https://github.com/w3c/hr-time/issues/115).

## Examples

### Using `performance.now()`

To determine how much time has elapsed since a particular point in your code, you can do something like this:

```js
const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
```

## Security requirements

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), `performance.now()` is coarsened based on site isolation status.

- Resolution in isolated contexts: 5 microseconds
- Resolution in non-isolated contexts: 100 microseconds

Cross-origin isolate your site using the {{HTTPHeader("Cross-Origin-Opener-Policy")}} and
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} headers:

```http
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

- {{domxref("Performance.timeOrigin")}}
