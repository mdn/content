---
title: URLPattern.username
slug: Web/API/URLPattern/username
tags:
  - API
  - Property
  - Reference
  - URLPattern
  - URL Pattern API
  - Experimental
browser-compat: api.URLPattern.username
---

{{ APIRef("URL Pattern API") }}

The **`username`** property of the {{domxref("URLPattern")}} interface is a
{{domxref("USVString")}} containing the pattern used to match the username part
of a URL. This value may differ from the input to the constructor due to
normalization.

{{AvailableInWorkers}}

### Value

A {{domxref("USVString")}}.

## Examples

The below example creates a {{domxref("URLPattern")}} object with `admin` for
the `username` part. This pattern matches only if the username part of the URL
is `admin`.

```js
const pattern = new URLPattern({ username: 'admin' });
console.log(pattern.username); // 'admin'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
