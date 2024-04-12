---
title: "URL: origin property"
short-title: origin
slug: Web/API/URL/origin
page-type: web-api-instance-property
browser-compat: api.URL.origin
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

The **`origin`** read-only property of
the {{domxref("URL")}} interface returns a string containing the
Unicode serialization of the origin of the represented URL.

The exact structure
varies depending on the type of URL:

- For `http` or `https` URLs, the scheme followed by
  `'://'`, followed by the domain, followed by `':'`, followed by
  the port (if explicitly specified, unless it is the default port - `80` and `443` respectively).
- For `file:` URLs, the value is browser dependent.
- for `blob:` URLs, the origin of the URL following `blob:` will
  be used. For example, `"blob:https://mozilla.org"` will be returned as
  `"https://mozilla.org".`

## Value

A string.

## Examples

```js
const url = new URL("blob:https://mozilla.org:443/");
console.log(url.origin); // Logs 'https://mozilla.org'

const url = new URL("http://localhost:80/");
console.log(url.origin); // Logs 'http://localhost'

const url = new URL("https://mozilla.org:8080/");
console.log(url.origin); // Logs 'https://mozilla.org:8080'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface
