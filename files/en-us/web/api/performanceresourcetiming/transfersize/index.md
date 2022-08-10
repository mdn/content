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
function log_sizes(perfEntry){
  // Check for support of the PerformanceEntry.*size properties and print their values
  // if supported.
  if ("decodedBodySize" in perfEntry) {
    console.log(`decodedBodySize = ${perfEntry.decodedBodySize}`);
  } else {
    console.log("decodedBodySize = NOT supported");
  }

  if ("encodedBodySize" in perfEntry) {
    console.log(`encodedBodySize = ${perfEntry.encodedBodySize}`);
  } else {
    console.log("encodedBodySize = NOT supported");
  }

  if ("transferSize" in perfEntry) {
    console.log(`transferSize = ${perfEntry.transferSize}`);
  } else {
    console.log("transferSize = NOT supported");
  }
}
function check_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  const p = performance.getEntriesByType("resource");
  for (let i=0; i < p.length; i++) {
    log_sizes(p[i]);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
