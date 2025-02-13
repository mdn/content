---
title: "Location: origin property"
short-title: origin
slug: Web/API/Location/origin
page-type: web-api-instance-property
browser-compat: api.Location.origin
---

{{APIRef("Location")}} {{AvailableInWorkers}}

The **`origin`** read-only property of the {{domxref("Location")}} interface returns a string containing the Unicode serialization of the origin of the location's URL.

The exact structure varies depending on the type of URL:

- For URLs using the `ftp:`, `http:`, `https:`, `ws:`, and `wss:` schemes, the {{domxref("Location.protocol", "protocol")}} followed by `//`, followed by the {{domxref("Location.host", "host")}}. Same as `host`, the {{domxref("Location.port", "port")}} is only included if it's not the default for the protocol.
- For URLs using `file:` scheme, the value is browser dependent.
- For URLs using the `blob:` scheme, the origin of the URL following `blob:`, but only if that URL uses the `http:`, `https:`, or `file:` scheme. For example, `blob:https://mozilla.org` will have `https://mozilla.org`.

For all other cases, the string `"null"` is returned.

See {{domxref("URL.origin")}} for more information.

## Value

A string.

## Examples

```js
console.log(window.location.origin); // On this page returns 'https://developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Window.origin`](/en-US/docs/Web/API/Window/origin)
- {{Glossary("origin")}} glossary term
