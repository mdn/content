---
title: "URLPattern: protocol property"
short-title: protocol
slug: Web/API/URLPattern/protocol
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.URLPattern.protocol
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

The **`protocol`** read-only property of the {{domxref("URLPattern")}} interface is a
string containing the pattern used to match the protocol part
of a URL. This value may differ from the input to the constructor due to
normalization.

## Value

A string.

## Examples

The below example creates a {{domxref("URLPattern")}} object with `http{s}?` for
the `protocol` part. This pattern matches the `http` and `https` protocols.

```js
const pattern = new URLPattern({ protocol: "http{s}?" });
console.log(pattern.protocol); // 'http{s}?'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
