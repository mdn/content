---
title: PerformanceResourceTiming.decodedBodySize
slug: Web/API/PerformanceResourceTiming/decodedBodySize
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.decodedBodySize
---
{{APIRef("Resource Timing API")}}

The **`decodedBodySize`** read-only property returns the size
(in octets) received from the fetch (HTTP or cache) of the message body, after removing
any applied content-codings. If the resource is retrieved from an application cache or
local resources, it returns the size of the payload after removing any applied
content-codings.

{{AvailableInWorkers}}

## Value

The size (in octets) received from the fetch (HTTP or cache) of the message body, after
removing any applied content-codings.

## Examples

The following example, the value of the size properties of all "`resource`"
{{domxref("PerformanceEntry.entryType","type")}} events are logged.

```js
function log_sizes(perfEntry){
  // Check for support of the *size properties and print their values
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
