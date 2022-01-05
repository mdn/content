---
title: URL.pathname
slug: Web/API/URL/pathname
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
browser-compat: api.URL.pathname
---
{{ApiRef("URL API")}}

The **`pathname`** property of the {{domxref("URL")}} interface
is a {{domxref("USVString")}} containing an initial `'/'` followed by the
path of the URL not including the query string or fragment (or the empty string if there
is no path).

{{AvailableInWorkers}}

## Syntax

```js
const path = url.pathname
url.pathname = newPath
```

### Value

A {{domxref("USVString")}}.

## Examples

```js
const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname?q=value');
console.log(url.pathname); // Logs "/en-US/docs/Web/API/URL/pathname"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
