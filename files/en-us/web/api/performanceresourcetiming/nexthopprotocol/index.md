---
title: PerformanceResourceTiming.nextHopProtocol
slug: Web/API/PerformanceResourceTiming/nextHopProtocol
tags:
  - API
  - Property
  - Reference
  - Resource Timing API
  - Web Performance
browser-compat: api.PerformanceResourceTiming.nextHopProtocol
---
{{APIRef("Resource Timing API")}}

The **`nextHopProtocol`** read-only
property is a {{domxref("DOMString","string")}} representing the _network
protocol_ used to fetch the resource, as identified by the [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).

When a proxy is used, if a tunnel connection is established, this property returns the
ALPN Protocol ID of the tunneled protocol. Otherwise, this property returns the ALPN
Protocol ID of the first hop to the proxy.

{{AvailableInWorkers}}

## Syntax

```js
resource.nextHopProtocol;
```

### Return value

A {{domxref("DOMString","string")}} representing the _network protocol_ used to
fetch the resource, as identified by the [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).

## Example

The following example uses the `nextHopProtocol` property.

```js
function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  var p = performance.getEntriesByType("resource");
  for (var i=0; i < p.length; i++) {
    print_nextHopProtocol(p[i]);
  }
}
function print_nextHopProtocol(perfEntry) {
  var value = "nextHopProtocol" in perfEntry;
  if (value)
    console.log("nextHopProtocol = " + perfEntry.nextHopProtocol);
  else
    console.log("nextHopProtocol = NOT supported");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
