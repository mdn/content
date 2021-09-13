---
title: 'Location: origin'
slug: Web/API/Location/origin
tags:
  - API
  - Location
  - Property
  - Reference
browser-compat: api.Location.origin
---
{{APIRef("Location")}}

The **`origin`** read-only property of
the {{domxref("Location")}} interface is a {{domxref("USVString")}} containing the
Unicode serialization of the origin of the represented URL.

That is:

- for URL using the `http` or `https`, the scheme followed by
  `'://'`, followed by the domain, followed by `':'`, followed by
  the port (the default port, `80` and `443` respectively, if
  explicitly specified);
- for URL using `file:` scheme, the value is browser dependant;
- for URL using the `blob:` scheme, the origin of the URL following
  `blob:`. E.g `"blob:https://mozilla.org"` will have
  `"https://mozilla.org".`

{{AvailableInWorkers}}

## Syntax

```js
string = object.origin;
```

## Examples

```js
// On this page, returns the origin
var result = window.location.origin; // Returns:'https://developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
