---
title: "URLPattern: hostname property"
short-title: hostname
slug: Web/API/URLPattern/hostname
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.URLPattern.hostname
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

The **`hostname`** read-only property of the {{domxref("URLPattern")}} interface is a
string containing the pattern used to match the hostname part
of a URL. This value may differ from the input to the constructor due to
normalization.

## Value

A string.

## Examples

The below example creates a {{domxref("URLPattern")}} object with
`*.example.org` for the `hostname` part. This pattern matches any hostname that
is a direct subdomain of `example.org`.

```js
const pattern = new URLPattern("https://*.example.org");
console.log(pattern.hostname); // '*.example.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
