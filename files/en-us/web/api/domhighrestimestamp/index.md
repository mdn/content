---
title: DOMHighResTimeStamp
slug: Web/API/DOMHighResTimeStamp
page-type: web-api-interface
spec-urls: https://w3c.github.io/hr-time/#dom-domhighrestimestamp
---

{{APIRef("Performance API")}}

The **`DOMHighResTimeStamp`** type is a `double` and is used to store a time value in milliseconds.

This type can be used to describe a discrete point in time or a time interval (the difference in time between two discrete points in time). The starting time can be either a specific time determined by the script for a site or app, or the [time origin](/en-US/docs/Web/API/Performance/timeOrigin).

The fractional part of the value represents fractions of a millisecond.
Its effective resolution depends on hardware and software constraints and on browser security and privacy protections.
It is not guaranteed to be accurate to a particular resolution.

## Security requirements

To protect against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), browsers coarsen `DOMHighResTimeStamp` values based on the cross-origin isolation status of the context.
The [High Resolution Time specification](https://w3c.github.io/hr-time/#dfn-coarsen-time) specifies the following resolutions, or a coarser implementation-defined resolution:

- Cross-origin-isolated contexts: 5 microseconds
- Non-cross-origin-isolated contexts: 100 microseconds

Browsers may also add jitter to the values.
Therefore, these resolutions are not accuracy guarantees, and code should not rely on timestamps being exact multiples of either interval.

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

## See also

- [`performance.now()`](/en-US/docs/Web/API/Performance/now)
- [`performance.timeOrigin`](/en-US/docs/Web/API/Performance/timeOrigin)
