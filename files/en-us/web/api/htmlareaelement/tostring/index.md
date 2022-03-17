---
title: HTMLAreaElement.toString()
slug: Web/API/HTMLAreaElement/toString
tags:
  - API
  - HTMLAreaElement
  - Method
  - Stringifier
browser-compat: api.HTMLAreaElement.toString
---
{{ApiRef("URL API")}}

The **`HTMLAreaElement.toString()`** {{Glossary("stringifier")}}
method returns a {{domxref("USVString")}} containing the whole URL. It is a read-only
version of {{domxref("HTMLAreaElement.href")}}.

## Syntax

```js
area.toString();
```

## Examples

### Calling toString on an area element

```js
// An <area id="myArea" href="/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.toString(); // returns 'https://developer.mozilla.org/en-US/docs/HTMLAreaElement'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
