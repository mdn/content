---
title: URL.toString()
slug: Web/API/URL/toString
tags:
  - API
  - Method
  - Reference
  - Stringifier
  - URL
  - URL API
browser-compat: api.URL.toString
---
{{ApiRef("URL API")}}

The **`URL.toString()`** {{Glossary("stringifier")}} method returns a
{{domxref("USVString")}} containing the whole URL. It is effectively a read-only version
of {{domxref("URL.href")}}.

{{AvailableInWorkers}}

## Syntax

```js
const href = url.toString()
```

### Return value

A {{domxref("USVString")}}.

## Examples

```js
const url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/toString");
url.toString(); // should return the URL as a string
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
