---
title: "URLPattern: pathname property"
short-title: pathname
slug: Web/API/URLPattern/pathname
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.URLPattern.pathname
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

The **`pathname`** read-only property of the {{domxref("URLPattern")}} interface is a
string containing the pattern used to match the pathname part
of a URL. This value may differ from the input to the constructor due to
normalization.

## Value

A string.

## Examples

The below example creates a {{domxref("URLPattern")}} object with
`/books/:id(\\d)` for the `pathname` part. This pattern matches URLs starting
with `/books/`, followed by an integer.

```js
const pattern = new URLPattern({ pathname: "/books/:id(\\d)" });
console.log(pattern.pathname); // '/books/:id(\\d)'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
