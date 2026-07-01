---
title: "DocumentType: name property"
short-title: name
slug: Web/API/DocumentType/name
page-type: web-api-instance-property
browser-compat: api.DocumentType.name
---

{{APIRef("DOM")}}

The read-only **`name`** property of the {{domxref("DocumentType")}} returns the type of the document.

For synthetic `DocumentType`, this property reflects the value given in parameter to {{domxref("DOMImplementation.createDocumentType()")}}.

For HTML documents, browsers always set it up to `html`, whatever the actual `doctype` in the source code is.

## Value

A string.

## Examples

```js
const docType = document.implementation.createDocumentType("html", "", "");

console.log(docType.name); // Displays `html`
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
