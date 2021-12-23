---
title: Document.scrollingElement
slug: Web/API/Document/scrollingElement
tags:
  - API
  - Document
  - Property
  - Reference
  - scrollingElement
browser-compat: api.Document.scrollingElement
---
{{APIRef("DOM")}}

The **`scrollingElement`** read-only property of the
{{domxref("Document")}} interface returns a reference to the {{domxref("Element")}} that
scrolls the document. In standards mode, this is the root element of the
document, {{domxref("document.documentElement")}}.

When in quirks mode, the `scrollingElement` attribute returns the HTML
`body` element if it exists and is [potentially
scrollable](https://drafts.csswg.org/cssom-view/#potentially-scrollable), otherwise it returns null.

## Syntax

```js
var element = document.scrollingElement;
```

## Example

```js
var scrollElm = document.scrollingElement;
scrollElm.scrollTop = 0;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
