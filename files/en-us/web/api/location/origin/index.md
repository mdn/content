---
title: "Location: origin property"
short-title: origin
slug: Web/API/Location/origin
page-type: web-api-instance-property
browser-compat: api.Location.origin
---

{{APIRef("Location")}} {{AvailableInWorkers}}

The **`origin`** read-only property of the {{domxref("Location")}} interface is a string containing the Unicode serialization of the origin of the represented URL.

The exact structure varies depending on the type of URL:

- For URL using the `http:` or `https:` schemes, the scheme followed by `//`, followed by the domain, followed by `:`, followed by the port (the default port, `80` and `443` respectively, if explicitly specified).
- For URL using `file:` scheme, the value is browser dependent.
- For URL using the `blob:` scheme, the origin of the URL following `blob:`. For example, `blob:https://mozilla.org` will have `https://mozilla.org`.

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
