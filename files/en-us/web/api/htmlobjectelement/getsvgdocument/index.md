---
title: "HTMLObjectElement: getSVGDocument() method"
short-title: getSVGDocument()
slug: Web/API/HTMLObjectElement/getSVGDocument
page-type: web-api-instance-method
browser-compat: api.HTMLObjectElement.getSVGDocument
---

{{APIRef("HTML DOM")}}

The **`getSVGDocument()`** method of the {{domxref("HTMLObjectElement")}} interface returns the {{domxref("Document")}} object of the embedded SVG.

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
- {{domxref("HTMLEmbedElement.getSVGDocument")}}
