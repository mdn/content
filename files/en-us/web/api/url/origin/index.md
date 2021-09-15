---
title: URL.origin
slug: Web/API/URL/origin
tags:
  - API
  - Property
  - Read-only
  - Reference
  - URL
  - URL API
  - origin
browser-compat: api.URL.origin
---
{{APIRef("URL API")}}

The **`origin`** read-only property of
the {{domxref("URL")}} interface returns a {{domxref("USVString")}} containing the
Unicode serialization of the origin of the represented URL.

The exact structure
varies depending on the type of URL:

- For `http` or `https` URLs, the scheme followed by
  `'://'`, followed by the domain, followed by `':'`, followed by
  the port (the default port, `80` and `443` respectively, if
  explicitly specified).
- For `file:` URLs, the value is browser dependant.
- for `blob:` URLs, the origin of the URL following `blob:` will
  be used, e.g `"blob:https://mozilla.org"` will be returned as
  `"https://mozilla.org".`

{{AvailableInWorkers}}

## Syntax

```js
const originString = url.origin
```

### Value

A {{domxref("USVString")}}.

## Examples

```js
const url = new URL("blob:https://mozilla.org:443/")
console.log(url.origin); // Logs 'https://mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface
