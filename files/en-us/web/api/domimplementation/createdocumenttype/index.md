---
title: "DOMImplementation: createDocumentType() method"
short-title: createDocumentType()
slug: Web/API/DOMImplementation/createDocumentType
page-type: web-api-instance-method
browser-compat: api.DOMImplementation.createDocumentType
---

{{ ApiRef("DOM")}}

The **`DOMImplementation.createDocumentType()`** method returns
a {{domxref("DocumentType")}} object which can either be used with
{{domxref("DOMImplementation.createDocument")}} upon document creation or can be put
into the document via methods like {{domxref("Node.insertBefore()")}} or
{{domxref("Node.replaceChild()")}}.

## Syntax

```js-nolint
createDocumentType(name, publicId, systemId)
```

### Parameters

- `name`
  - : A string containing the name of the doctype, like `html`. Corresponds to the {{domxref("DocumentType.name")}} property.
- `publicId`
  - : A string containing the `PUBLIC` identifier. Corresponds to the {{domxref("DocumentType.publicId")}} property.
- `systemId`
  - : A string containing the `SYSTEM` identifiers. Corresponds to the {{domxref("DocumentType.systemId")}} property.

### Return value

A [`DocumentType`](/en-US/docs/Web/API/DocumentType).

## Examples

```js
const dt = document.implementation.createDocumentType(
  "svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd",
);
const d = document.implementation.createDocument(
  "http://www.w3.org/2000/svg",
  "svg:svg",
  dt,
);
console.log(d.doctype.publicId); // -//W3C//DTD SVG 1.1//EN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DOMImplementation")}} interface it belongs to.
