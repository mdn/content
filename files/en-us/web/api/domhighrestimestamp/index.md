---
title: DOMHighResTimeStamp
slug: Web/API/DOMHighResTimeStamp
page-type: web-api-interface
browser-compat: api.DOMHighResTimestamp
---

{{APIRef("Performance API")}}

The **`DOMHighResTimeStamp`** type is a `double` and is used to store a time value in milliseconds.

This type can be used to describe a discrete point in time or a time interval (the difference in time between two discrete points in time). The starting time can be either a specific time determined by the script for a site or app, or the [time origin](/en-US/docs/Web/API/Performance/timeOrigin).

The time, given in milliseconds, should be accurate to 5 µs (microseconds), with the fractional part of the number indicating fractions of a millisecond. However, if the browser is unable to provide a time value accurate to 5 µs (due, for example, to hardware or software constraints), the browser can represent the value as a time in milliseconds accurate to a millisecond. Also note the section below on reduced time precision controlled by browser preferences to avoid timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting).

Further, if the device or operating system the user agent is running on doesn't have a clock accurate to the microsecond level, they may only be accurate to the millisecond.

## Security requirements

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), `DOMHighResTimeStamp` types are coarsened based on site isolation status.

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

## See also

- [`performance.now()`](/en-US/docs/Web/API/Performance/now)
- [`performance.timeOrigin`](/en-US/docs/Web/API/Performance/timeOrigin)
