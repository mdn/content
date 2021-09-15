---
title: URLPattern.port
slug: Web/API/URLPattern/port
tags:
  - API
  - Property
  - Reference
  - URLPattern
  - URLPattern API
  - Experimental
browser-compat: api.URLPattern.port
---

{{ APIRef("URLPattern API") }}

The **`port`** property of the {{domxref("URLPattern")}} interface is a
{{domxref("USVString")}} containing the pattern used to match the port part of a
URL. This value may differ from the input to the constructor due to
normalization.

{{AvailableInWorkers}}

### Value

A {{domxref("USVString")}}.

## Examples

The below example creates a {{domxref("URLPattern")}} object with a pattern of
`(80|443|8080)` for the `port` part. This pattern matches the port `80`, `443`,
and `8080`.

```js
const pattern = new URLPattern({ port: '(80|443|8080)' });
console.log(pattern.port); // '(80|443|8080)'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
