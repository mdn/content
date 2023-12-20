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
createDocumentType(qualifiedNameStr, publicId, systemId)
```

### Parameters

- `qualifiedNameStr`
  - : A string containing the qualified name, like
    `svg:svg`.
- `publicId`
  - : A string containing the `PUBLIC` identifier.
- `systemId`
  - : A string containing the `SYSTEM` identifiers.

### Return value

A [`DocumentType`](/en-US/docs/Web/API/DocumentType).

## Examples

```js
const dt = document.implementation.createDocumentType(
  "svg:svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd",
);
const d = document.implementation.createDocument(
  "http://www.w3.org/2000/svg",
  "svg:svg",
  dt,
);
alert(d.doctype.publicId); // -//W3C//DTD SVG 1.1//EN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DOMImplementation")}} interface it belongs to.
