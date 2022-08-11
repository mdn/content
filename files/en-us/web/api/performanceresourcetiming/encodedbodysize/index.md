---
title: PerformanceResourceTiming.encodedBodySize
slug: Web/API/PerformanceResourceTiming/encodedBodySize
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.encodedBodySize
---
{{APIRef("Resource Timing API")}}

The **`encodedBodySize`** read-only property represents the
size (in octets) received from the fetch (HTTP or cache), of the _payload body_,
before removing any applied content-codings.

{{AvailableInWorkers}}

If the resource is retrieved from an application cache or a local resource, it must
return the size of the payload body before removing any applied content-codings.

## Value

A `number` representing the size (in octets) received from the fetch (HTTP
or cache), of the _payload body_, before removing any applied content-codings.

## Examples

The following example, the value of the size properties of all "`resource`"
{{domxref("PerformanceEntry.entryType","type")}} events are logged.

```js
function log_sizes(entry){
  // Check for support of the PerformanceEntry.*size properties and print their values
  // if supported.
  console.log(`decodedBodySize = ${"decodedBodySize" in entry ? entry.decodedBodySize : "NOT supported"}`);
  console.log(`encodedBodySize = ${"encodedBodySize" in entry ? entry.encodedBodySize : "NOT supported"}`);
  console.log(`transferSize = ${"transferSize" in entry ? entry.transferSize : "NOT supported"}`);
}
function check_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  const entries = performance.getEntriesByType("resource");
  for (const entry of entries) {
    log_sizes(entry);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
