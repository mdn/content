---
title: URLPattern.protocol
slug: Web/API/URLPattern/protocol
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - URLPattern
  - URL Pattern API
  - Experimental
browser-compat: api.URLPattern.protocol
---
{{APIRef("URL Pattern API")}}{{SeeCompatTable}}

The **`protocol`** property of the {{domxref("URLPattern")}} interface is a
string containing the pattern used to match the protocol part
of a URL. This value may differ from the input to the constructor due to
normalization.

{{AvailableInWorkers}}

## Value

A string.

## Examples

The below example creates a {{domxref("URLPattern")}} object with `http{s}?` for
the `protocol` part. This pattern matches the `http` and `https` protocols.

```js
const pattern = new URLPattern({ protocol: 'http{s}?' });
console.log(pattern.protocol); // 'http{s}?'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
