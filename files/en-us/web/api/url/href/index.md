---
title: URL.href
slug: Web/API/URL/href
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
browser-compat: api.URL.href
---
{{ApiRef("URL API")}}

The **`href`** property of the {{domxref("URL")}} interface is
a {{domxref("USVString")}} containing the whole URL.

{{AvailableInWorkers}}

## Syntax

```js
const urlString = url.href
url.href = newUrlString
```

### Value

A {{domxref("USVString")}}.

## Examples

```js
const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/href');
console.log(url.href); // Logs: 'https://developer.mozilla.org/en-US/docs/Web/API/URL/href'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
