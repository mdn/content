---
title: "DocumentType: publicId property"
short-title: publicId
slug: Web/API/DocumentType/publicId
page-type: web-api-instance-property
browser-compat: api.DocumentType.publicId
---

{{APIRef("DOM")}}

The read-only **`publicId`** property of the {{domxref("DocumentType")}} returns a formal identifier of the document.

For synthetic `DocumentType`, this property reflects the value given in parameter to {{domxref("DOMImplementation.createDocumentType()")}}.

For HTML documents, browsers always set it up to `html`, whatever the actual `DOCTYPE` in the source code is. For SVG documents, for example, it can be `"-//W3C//DTD SVG 1.1//EN"`.

## Value

A string.

## Examples

```js
const docType = document.implementation.createDocumentType(
  "svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/2000/svg",
);

console.log(docType.publicId); // Displays "-//W3C//DTD SVG 1.1//EN"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
