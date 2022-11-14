---
title: PerformanceResourceTiming.nextHopProtocol
slug: Web/API/PerformanceResourceTiming/nextHopProtocol
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Resource Timing API
  - Web Performance
browser-compat: api.PerformanceResourceTiming.nextHopProtocol
---

{{APIRef("Performance API")}}

The **`nextHopProtocol`** read-only
property is a string representing the _network
protocol_ used to fetch the resource, as identified by the [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).

When a proxy is used, if a tunnel connection is established, this property returns the
ALPN Protocol ID of the tunneled protocol. Otherwise, this property returns the ALPN
Protocol ID of the first hop to the proxy.

{{AvailableInWorkers}}

## Value

A string representing the _network protocol_ used to
fetch the resource, as identified by the [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).

## Examples

The following example uses the `nextHopProtocol` property.

```js
function printPerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  performance.getEntriesByType("resource")
    .forEach((entry) => {
      printNextHopProtocol(entry);
    });
}

function printNextHopProtocol(perfEntry) {
  console.log(`nextHopProtocol = ${perfEntry.nextHopProtocol ?? "NOT supported"}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
