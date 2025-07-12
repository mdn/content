---
title: "HTMLIFrameElement: getSVGDocument() method"
short-title: getSVGDocument()
slug: Web/API/HTMLIFrameElement/getSVGDocument
page-type: web-api-instance-method
browser-compat: api.HTMLIFrameElement.getSVGDocument
---

{{APIRef("HTML DOM")}}

The **`getSVGDocument()`** method of the {{domxref("HTMLIFrameElement")}} interface returns the {{domxref("Document")}} object of the embedded SVG.

## Syntax

```js-nolint
getSVGDocument()
```

### Parameters

None.

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
