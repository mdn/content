---
title: "URL: protocol property"
short-title: protocol
slug: Web/API/URL/protocol
page-type: web-api-instance-property
browser-compat: api.URL.protocol
---

{{ApiRef("URL API")}}

The **`protocol`** property of the {{domxref("URL")}} interface
is a string representing the protocol scheme of the URL, including the
final `':'`.

{{AvailableInWorkers}}

## Value

A string.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol",
);
console.log(url.protocol); // Logs "https:"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
