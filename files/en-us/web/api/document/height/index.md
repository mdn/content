---
title: Document.height
slug: Web/API/Document/height
tags:
  - API
  - Document
  - HTML DOM
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Reference
  - Deprecated
browser-compat: api.Document.height
---
{{APIRef("DOM")}} {{deprecated_header}}

> **Note:** Starting in {{Gecko("6.0")}}, `document.height` is
> no longer supported. Instead, use `document.body.clientHeight`. See
> {{domxref("element.clientHeight")}}.

Returns the height of the {{domxref("document")}} object. In most cases, this is equal
to the {{HTMLElement("body")}} element of the current document.

## Syntax

```js
pixels = document.height
```

## Example

```js
// alert document height
alert(document.height);
```

## Alternatives

```js
document.body.clientHeight
document.documentElement.clientHeight
document.documentElement.scrollHeight
```

## Specifications

HTML5

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.width")}}
- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
