---
title: URLPattern.hostname
slug: Web/API/URLPattern/hostname
tags:
  - API
  - Property
  - Reference
  - URLPattern
  - URL Pattern API
  - Experimental
browser-compat: api.URLPattern.hostname
---

{{ APIRef("URL Pattern API") }}

The **`hostname`** property of the {{domxref("URLPattern")}} interface is a
{{domxref("USVString")}} containing the pattern used to match the hostname part
of a URL. This value may differ from the input to the constructor due to
normalization.

{{AvailableInWorkers}}

### Value

A {{domxref("USVString")}}.

## Examples

The below example creates a {{domxref("URLPattern")}} object with
`*.example.org` for the `hostname` part. This pattern matches any hostname that
is a direct subdomain of `example.org`.

```js
const pattern = new URLPattern('https://*.example.org');
console.log(pattern.hostname); // '*.example.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
