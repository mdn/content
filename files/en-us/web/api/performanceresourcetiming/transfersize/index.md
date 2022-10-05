---
title: PerformanceResourceTiming.transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.transferSize
---

{{APIRef("Resource Timing API")}}

The **`transferSize`** read-only property represents the size
(in octets) of the fetched resource. The size includes the response header fields plus
the response payload body (as defined by [RFC7230](https://httpwg.org/specs/rfc7230.html#message.body)).

{{AvailableInWorkers}}

If the resource is fetched from a local cache, or if it is a cross-origin resource,
this property returns zero.

## Value

A `number` representing the size (in octets) of the fetched resource. The
size includes the response header fields plus the [response payload body](https://httpwg.org/specs/rfc7230.html#message.body) (RFC7230).

## Examples

The following example, the value of size properties of all "`resource`"
{{domxref("PerformanceEntry.entryType","type")}} events are logged.

```js
function logSizes(perfEntry) {
  // Check for support of the PerformanceEntry.*size properties and print their values
  // if supported.
  console.log(`decodedBodySize = ${perfEntry.decodedBodySize ?? "NOT supported"}`);
  console.log(`encodedBodySize = ${perfEntry.encodedBodySize ?? "NOT supported"}`);
  console.log(`transferSize = ${perfEntry.transferSize ?? "NOT supported"}`);
}

function checkPerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  performance.getEntriesByType("resource")
    .forEach((entry) => {
      logSizes(entry[i]);
    });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
