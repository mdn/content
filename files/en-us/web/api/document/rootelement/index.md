---
title: Document.rootElement
slug: Web/API/Document/rootElement
tags:
  - API
  - DOM
  - Deprecated
  - Document
  - Property
  - Reference
  - SVG
  - root
---
{{ApiRef("DOM")}}{{Deprecated_header}}

**`Document.rootElement`** returns the {{domxref("Element")}}
that is the root element of the {{domxref("document")}} if it is an
{{SVGElement("svg")}} element, otherwise `null`. It is deprecated in favor of
{{domxref("Document.documentElement")}}, which returns the root element for all
documents.

## Syntax

```js
const element = document.rootElement
```

## Notes

If the document is a non-empty SVG document, then the `rootElement` will be
an {{domxref("SVGSVGElement")}}, identical to the `documentElement`.

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('SVG2','struct.html#__svg__SVGDocument__rootElement','SVGDocument.rootElement')}}
      </td>
      <td>{{Spec2('SVG2')}}</td>
      <td>Deprecated</td>
    </tr>
    <tr>
      <td>
        {{SpecName('SVG1.1','struct.html#__svg__SVGDocument__rootElement','SVGDocument.rootElement')}}
      </td>
      <td>{{Spec2('SVG1.1')}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>
