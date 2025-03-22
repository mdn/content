---
title: "HTMLEmbedElement: getSVGDocument() method"
short-title: getSVGDocument()
slug: Web/API/HTMLEmbedElement/getSVGDocument
page-type: web-api-instance-method
browser-compat: api.HTMLEmbedElement.getSVGDocument
---

{{APIRef("HTML DOM")}}

The **`getSVGDocument()`** method of the {{domxref("HTMLEmbedElement")}} interface returns the {{domxref("Document")}} object of the embedded SVG.

## Syntax

```js-nolint
getSVGDocument()
```

### Return value

A {{domxref("Document")}}.

## Examples

```js
const svg = document.getElementById("el").getSVGDocument();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLIFrameElement.getSVGDocument")}}
- {{domxref("HTMLObjectElement.getSVGDocument")}}
