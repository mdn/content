---
title: Document.rootElement
slug: Web/API/Document/rootElement
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Deprecated
  - Document
  - Property
  - Reference
  - SVG
  - root
browser-compat: api.Document.rootElement
---
{{ApiRef("DOM")}}{{Deprecated_header}}

**`Document.rootElement`** returns the {{domxref("Element")}}
that is the root element of the {{domxref("document")}} if it is an
{{SVGElement("svg")}} element, otherwise `null`. It is deprecated in favor of
{{domxref("Document.documentElement")}}, which returns the root element for all
documents.

## Value

For SVG elements, the {{domxref("Element")}} that is the root element of the {{domxref("document")}}; otherwise `null`.

If the document is a non-empty SVG document, then the `rootElement` will be
an {{domxref("SVGSVGElement")}}, identical to the `documentElement`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
