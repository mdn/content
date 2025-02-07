---
title: "HTMLIframeElement: getSVGDocument() method"
short-title: getSVGDocument()
slug: Web/API/HTMLIframeElement/getSVGDocument
page-type: web-api-instance-method
browser-compat: api.HTMLIframeElement.getSVGDocument
---

{{APIRef("HTML DOM")}}

The **`getSVGDocument()`** method of the {{domxref("HTMLIframeElement")}} interface returns the {{domxref("Document")}} object of the embedded SVG.

## Syntax

```js-nolint
getSVGDocument()
```

### Return value

A {{domxref("Document")}}.

## Examples

```js
const svgDoc = document.getElementById("el").getSVGDocument();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLEmbedElement.getSVGDocument")}}
- {{domxref("HTMLObjectElement.getSVGDocument")}}
