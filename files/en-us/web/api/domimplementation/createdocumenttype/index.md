---
title: DOMImplementation.createDocumentType()
slug: Web/API/DOMImplementation/createDocumentType
tags:
  - API
  - DOM
  - DOMImplementation
  - Method
  - Reference
browser-compat: api.DOMImplementation.createDocumentType
---
{{ ApiRef("DOM")}}

The **`DOMImplementation.createDocumentType()`** method returns
a {{domxref("DocumentType")}} object which can either be used with
{{domxref("DOMImplementation.createDocument")}} upon document creation or can be put
into the document via methods like {{domxref("Node.insertBefore()")}} or
{{domxref("Node.replaceChild()")}}.

## Syntax

```js
var doctype = document.implementation.createDocumentType(qualifiedNameStr, publicId, systemId);
```

### Parameters

- `qualifiedNameStr`
  - : Is a {{domxref("DOMString")}} containing the qualified name, like
    `svg:svg`.
- `publicId`
  - : Is a {{domxref("DOMString")}} containing the `PUBLIC` identifier.
- `systemId`
  - : Is a {{domxref("DOMString")}} containing the `SYSTEM` identifiers.

## Example

```js
var dt = document.implementation.createDocumentType('svg:svg', '-//W3C//DTD SVG 1.1//EN', 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd');
var d = document.implementation.createDocument('http://www.w3.org/2000/svg', 'svg:svg', dt);
alert(d.doctype.publicId); // -//W3C//DTD SVG 1.1//EN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DOMImplementation")}} interface it belongs to.
