---
title: Document.height
slug: Web/API/Document/height
page-type: web-api-instance-property
tags:
  - API
  - Document
  - HTML DOM
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Reference
  - Deprecated
  - Non-standard
browser-compat: api.Document.height
---
{{APIRef("DOM")}} {{deprecated_header}}{{Non-standard_header}}

> **Note:** `document.height` is
> no longer supported. Instead, use `document.body.clientHeight`. See
> {{domxref("element.clientHeight")}}.

Returns the height of the {{domxref("document")}} object. In most cases, this is equal
to the {{HTMLElement("body")}} element of the current document.

## Examples

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
