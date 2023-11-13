---
title: "DocumentType: systemId property"
short-title: systemId
slug: Web/API/DocumentType/systemId
page-type: web-api-instance-property
browser-compat: api.DocumentType.systemId
---

{{APIRef("DOM")}}

The read-only **`systemId`** property of the {{domxref("DocumentType")}} returns the URL of the associated DTD.

For synthetic `DocumentType`, this property reflects the value given in parameter to {{domxref("DOMImplementation.createDocumentType()")}}.

For HTML documents, browsers always set it up to `html`, whatever the actual `DOCTYPE` in the source code is. For SVG documents, for example, it can be `"http://www.w3.org/2000/svg"`.

## Value

A string.

## Examples

```js
const docType = document.implementation.createDocumentType(
  "svg",
  "",
  "http://www.w3.org/2000/svg",
);

console.log(docType.systemId); // Displays "http://www.w3.org/2000/svg"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
