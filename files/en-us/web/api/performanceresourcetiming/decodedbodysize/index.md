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
function logSizes(entry) {
  // Check for support of the *size properties and print their values
  // if supported.
  console.log(`decodedBodySize = ${perfEntry.decodedBodySize ?? "NOT supported"}`);
  console.log(`encodedBodySize = ${perfEntry.encodedBodySize ?? "NOT supported"}`);
  console.log(`transferSize = ${perfEntry.transferSize ?? "NOT supported"}`);
}
function checkPerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  for (const entry of performance.getEntriesByType("resource")) {
    logSizes(entry);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
