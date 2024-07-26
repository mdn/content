---
title: "URLPattern: port property"
short-title: port
slug: Web/API/URLPattern/port
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.URLPattern.port
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

The **`port`** read-only property of the {{domxref("URLPattern")}} interface is a
string containing the pattern used to match the port part of a
URL. This value may differ from the input to the constructor due to
normalization.

## Value

A string.

## Examples

The below example creates a {{domxref("URLPattern")}} object with
`(80|443|8080)` for the `port` part. This pattern matches the port `80`, `443`,
and `8080`.

```js
const pattern = new URLPattern({ port: "(80|443|8080)" });
console.log(pattern.port); // '(80|443|8080)'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
