---
title: NetworkInformation.rtt
slug: Web/API/NetworkInformation/rtt
tags:
  - API
  - Experimental
  - Network Information API
  - NetworkInformation
  - Property
  - Read-only
  - Reference
  - rtt
browser-compat: api.NetworkInformation.rtt
---
{{apiref("Network Information API")}}{{SeeCompatTable}}

The **`NetworkInformation.rtt`** read-only property returns the
estimated effective round-trip time of the current connection, rounded to the nearest
multiple of 25 milliseconds. This value is based on recently observed application-layer
RTT measurements across recently active connections. It excludes connections made to a
private address space. If no recent measurement data is available, the value is based on
the properties of the underlying connection technology.

{{AvailableInWorkers}}

## Syntax

```js
rtt = NetworkInformation.rtt
```

### Return value

A number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("RTT")}}
