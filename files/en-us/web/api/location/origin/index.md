---
title: "location: origin property"
short-title: origin
slug: Web/API/Location/origin
page-type: web-api-instance-property
browser-compat: api.Location.origin
---

{{APIRef("Location")}}

The **`origin`** read-only property of
the {{domxref("Location")}} interface is a string containing the
Unicode serialization of the origin of the represented URL.

That is:

- for URL using the `http` or `https`, the scheme followed by
  `'://'`, followed by the domain, followed by `':'`, followed by
  the port (the default port, `80` and `443` respectively, if
  explicitly specified);
- for URL using `file:` scheme, the value is browser dependent;
- for URL using the `blob:` scheme, the origin of the URL following
  `blob:`. E.g `"blob:https://mozilla.org"` will have
  `"https://mozilla.org".`

{{AvailableInWorkers}}

## Value

A string.

## Examples

```js
// On this page, returns the origin
const result = window.location.origin; // Returns:'https://developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
