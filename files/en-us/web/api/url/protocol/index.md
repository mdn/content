---
title: URL.protocol
slug: Web/API/URL/protocol
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
browser-compat: api.URL.protocol
---
{{ApiRef("URL API")}}

The **`protocol`** property of the {{domxref("URL")}} interface
is a {{domxref("USVString")}} representing the protocol scheme of the URL, including the
final `':'`.

{{AvailableInWorkers}}

## Syntax

```js
const protocol = url.protocol
url.protocol = newProtocol
```

### Value

A {{domxref("USVString")}}.

## Examples

```js
const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol');
console.log(url.protocol); // Logs "https:"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
