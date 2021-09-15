---
title: URLPattern.search
slug: Web/API/URLPattern/search
tags:
  - API
  - Property
  - Reference
  - URLPattern
  - URLPattern API
  - Experimental
browser-compat: api.URLPattern.search
---

{{ APIRef("URLPattern API") }}

The **`search`** property of the {{domxref("URLPattern")}} interface is a
{{domxref("USVString")}} containing the pattern used to match the search part of
a URL. This value may differ from the input to the constructor due to
normalization.

{{AvailableInWorkers}}

### Value

A {{domxref("USVString")}}.

## Examples

The below example creates a {{domxref("URLPattern")}} object with a pattern of
`*` for the `search` part. This pattern is a wildcard, thus matching any search
part.

```js
const pattern = new URLPattern('https://example.com?*');
console.log(pattern.search); // '*'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
