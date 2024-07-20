---
title: "Document: doctype property"
short-title: doctype
slug: Web/API/Document/doctype
page-type: web-api-instance-property
browser-compat: api.Document.doctype
---

{{ApiRef("DOM")}}

The **`doctype`** read-only property of the {{domxref("Document")}} interface is a {{domxref("DocumentType")}} object representing the {{glossary("Doctype", "Document Type Declaration (DTD)")}} associated with the current document.

## Value

A {{domxref("DocumentType")}} object.

## Examples

```js
const doctypeObj = document.doctype;

console.log(`doctypeObj.name: ${doctypeObj.name}`);
console.log(`doctypeObj.internalSubset: ${doctypeObj.internalSubset}`);
console.log(`doctypeObj.publicId: ${doctypeObj.publicId}`);
console.log(`doctypeObj.systemId: ${doctypeObj.systemId}`);
```

## Notes

The property returns `null` if there is no DTD associated with the current
document.

DOM level 2 doesn't support editing the document type declaration.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
