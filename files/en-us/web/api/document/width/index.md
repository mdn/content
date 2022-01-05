---
title: Document.width
slug: Web/API/Document/width
tags:
  - API
  - Document
  - HTML DOM
  - NeedsBrowserAgnosticism
  - NeedsSpecTable
  - Property
  - Reference
  - Deprecated
browser-compat: api.Document.width
---
{{APIRef("DOM")}} {{deprecated_header}}

> **Note:** Starting in {{Gecko("6.0")}}, `document.width` is
> no longer supported. Instead, use `document.body.clientWidth`. See
> {{domxref("element.clientWidth")}}.

Returns the width of the {{HTMLElement("body")}} element of the current document in
pixels.

Not supported by Internet Explorer.

## Syntax

```js
pixels = document.width;
```

## Example

```js
function init() {
  alert("The width of the document is " + document.width + " pixels.");
}
```

## Alternatives

```js
document.body.clientWidth              /* width of <body> */
document.documentElement.clientWidth   /* width of <html> */
window.innerWidth                      /* window's width */
```

## Specifications

HTML5

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.height")}}
- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
