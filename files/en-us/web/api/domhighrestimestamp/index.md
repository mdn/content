---
title: DOMHighResTimeStamp
slug: Web/API/DOMHighResTimeStamp
page-type: web-api-interface
spec-urls: https://w3c.github.io/hr-time/#dom-domhighrestimestamp
---

{{APIRef("Performance API")}}

The **`DOMHighResTimeStamp`** type is a `double` and is used to store a time value in milliseconds.

This type can be used to describe a discrete point in time or a time interval (the difference in time between two discrete points in time). The starting time can be either a specific time determined by the script for a site or app, or the [time origin](/en-US/docs/Web/API/Performance/timeOrigin).

The fractional part of the value represents fractions of a millisecond. The type itself does not guarantee a particular resolution or accuracy. The effective resolution depends on the API that produces the value, hardware and software constraints, and browser security and privacy protections.

## Security requirements

The `DOMHighResTimeStamp` type does not itself apply timer rounding to values supplied by script. Whether an API rounds these values depends on the API. Values calculated from clock readings also need not be multiples of the clock's rounding interval.

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), browsers coarsen clock readings based on the cross-origin isolation status of the context. For APIs that use its [coarsen time algorithm](https://w3c.github.io/hr-time/#dfn-coarsen-time), the High Resolution Time specification specifies the following resolutions, or a coarser implementation-defined resolution:

- Cross-origin-isolated contexts: 0.005 ms
- Non-cross-origin-isolated contexts: 0.1 ms

Browsers may also add jitter, for example by randomizing when the reported time advances to the next rounding interval. These resolutions are not accuracy guarantees. See the documentation for the API that produces the value for its precision requirements.

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
