---
title: "URLPattern: search property"
short-title: search
slug: Web/API/URLPattern/search
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.URLPattern.search
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

The **`search`** read-only property of the {{domxref("URLPattern")}} interface is a
string containing the pattern used to match the search part of
a URL. This value may differ from the input to the constructor due to
normalization.

## Value

A string.

## Examples

The below example creates a {{domxref("URLPattern")}} object with `*` for the
`search` part. This pattern is a wildcard, thus matching any search part.

```js
const pattern = new URLPattern("https://example.com?*");
console.log(pattern.search); // '*'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
