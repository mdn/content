---
title: URLPattern.pathname
slug: Web/API/URLPattern/pathname
tags:
  - API
  - Property
  - Reference
  - URLPattern
  - URL Pattern API
  - Experimental
browser-compat: api.URLPattern.pathname
---

{{ APIRef("URL Pattern API") }}

The **`pathname`** property of the {{domxref("URLPattern")}} interface is a
{{domxref("USVString")}} containing the pattern used to match the pathname part
of a URL. This value may differ from the input to the constructor due to
normalization.

{{AvailableInWorkers}}

### Value

A {{domxref("USVString")}}.

## Examples

The below example creates a {{domxref("URLPattern")}} object with
`/books/:id(\\d)` for the `pathname` part. This pattern matches URLs starting
with `/books/`, followed by an integer.

```js
const pattern = new URLPattern({ pathname: '/books/:id(\\d)' });
console.log(pattern.pathname); // '/books/:id(\\d)'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
