---
title: "Document: scrollingElement property"
short-title: scrollingElement
slug: Web/API/Document/scrollingElement
page-type: web-api-instance-property
browser-compat: api.Document.scrollingElement
---

{{APIRef("DOM")}}

The **`scrollingElement`** read-only property of the
{{domxref("Document")}} interface returns a reference to the {{domxref("Element")}} that
scrolls the document. In standards mode, this is the root element of the
document, {{domxref("document.documentElement")}}.

When in quirks mode, the `scrollingElement` attribute returns the HTML
`body` element if it exists and is _not_ [potentially scrollable](https://drafts.csswg.org/cssom-view/#potentially-scrollable), otherwise it returns `null`. This may look surprising but is true according to both the specification and browsers.

## Value

The {{domxref("Element")}} that scrolls the document, usually the root element (unless not in standard mode).

## Examples

```js
const scrollElm = document.scrollingElement;
scrollElm.scrollTop = 0;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
