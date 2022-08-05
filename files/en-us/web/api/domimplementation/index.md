---
title: DOMImplementation
slug: Web/API/DOMImplementation
page-type: web-api-interface
tags:
  - API
  - DOM
  - Interface
  - Reference
browser-compat: api.DOMImplementation
---
{{ ApiRef("DOM") }}

The **`DOMImplementation`** interface represents an object providing methods which are not dependent on any particular document. Such an object is returned by the {{domxref("Document.implementation")}} property.

## Property

_This interface has no specific property and doesn't inherit any._

## Methods

_No inherited method._

- {{domxref("DOMImplementation.createDocument()")}}
  - : Creates and returns an {{domxref("XMLDocument")}}.
- {{domxref("DOMImplementation.createDocumentType()")}}
  - : Creates and returns a {{domxref("DocumentType")}}.
- {{domxref("DOMImplementation.createHTMLDocument()")}}
  - : Creates and returns an HTML {{domxref("Document")}}.
- {{domxref("DOMImplementation.hasFeature()")}} {{Deprecated_Inline}}
  - : Returns a boolean value indicating if a given feature is supported or not. This function is unreliable and kept for compatibility purpose alone: except for SVG-related queries, it always returns `true`. Old browsers are very inconsistent in their behavior.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index.](/en-US/docs/Web/API/Document_Object_Model)
