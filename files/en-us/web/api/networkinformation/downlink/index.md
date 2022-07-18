---
title: NetworkInformation.downlink
slug: Web/API/NetworkInformation/downlink
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Network Information API
  - NetworkInformation
  - Property
  - Reference
  - downlink
browser-compat: api.NetworkInformation.downlink
---
{{SeeCompatTable}}{{APIRef("Network Information API")}}

The **`downlink`** read-only property of the
{{domxref("NetworkInformation")}} interface returns the effective bandwidth estimate in
megabits per second, rounded to the nearest multiple of 25 kilobits per seconds. This
value is based on recently observed application layer throughput across recently active
connections, excluding connections made to a private address space. In the absence of
recent bandwidth measurement data, the attribute value is determined by the properties
of the underlying connection technology.

## Value

A {{jsxref("double")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Downlink")}}
