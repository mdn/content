---
title: NetworkInformation.effectiveType
slug: Web/API/NetworkInformation/effectiveType
tags:
  - API
  - Experimental
  - Network Information API
  - NetworkInformation
  - Reference
  - effectiveType
browser-compat: api.NetworkInformation.effectiveType
---
{{SeeCompatTable}}{{APIRef("Network Information API")}}

The **`effectiveType`** read-only property of the
{{domxref("NetworkInformation")}} interface returns the effective type of the connection
meaning one of 'slow-2g', '2g', '3g', or '4g'. This value is determined using a
combination of recently observed, round-trip time and downlink values.

## Syntax

```js
var effectiveType = NetworkInformation.effectiveType
```

### Value

A {{jsxref("String")}} containing one of 'slow-2g', '2g', '3g', or '4g'.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Effective Connection Type](/en-US/docs/Glossary/Effective_connection_type)
- {{HTTPHeader("ECT")}}
