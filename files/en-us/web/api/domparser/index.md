---
title: DOMParser
slug: Web/API/DOMParser
tags:
  - API
  - DOM
  - DOM Parsing
  - Document
  - HTML
  - HTMLDocument
  - Parsing
  - Reference
browser-compat: api.DOMParser
---
{{APIRef("DOM")}}

The **`DOMParser`** interface provides
the ability to parse {{Glossary("XML")}} or {{Glossary("HTML")}} source code from a
string into a DOM {{domxref("Document")}}.

You can perform the opposite operation—converting a DOM tree into XML or HTML
source—using the {{domxref("XMLSerializer")}} interface.

In the case of an HTML document, you can also replace portions of the DOM with new DOM
trees built from HTML by setting the value of the {{domxref("Element.innerHTML")}} and
{{domxref("Element.outerHTML", "outerHTML")}} properties. These properties can also be
read to fetch HTML fragments corresponding to the corresponding DOM subtree.

Note that {{domxref("XMLHttpRequest")}} can parse XML and HTML directly
from a URL-addressable resource, returning a `Document` in its
{{domxref("XMLHttpRequest.response", "response")}} property.

> **Note:** Be aware that [block-level elements](/en-US/docs/Web/HTML/Block-level_elements)
> like `<p>` will be automatically closed if another
> block-level element is nested inside and therefore parsed before the closing `</p>` tag.

## Constructor

- {{domxref("DOMParser.DOMParser","DOMParser()")}}
  - : Creates a new `DOMParser` object.

## Methods

- {{domxref("DOMParser.parseFromString()")}}
  - : Parses a string using either the HTML parser or the XML parser, returning an {{domxref("HTMLDocument")}} or {{domxref("XMLDocument")}}.

## Examples

### Parsing XML, SVG, and HTML

This example shows how to parse XML, SVG, and HTML. Note that a MIME type of
`text/html` will invoke the HTML parser, and any of the other MIME types
that are accepted by this method will invoke the XML parser.

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the tiger</warning>";
const doc1 = parser.parseFromString(xmlString, "application/xml");
// XMLDocument

const svgString = "<circle cx=\"50\" cy=\"50\" r=\"50\"/>";
const doc2 = parser.parseFromString(svgString, "image/svg+xml");
// XMLDocument

const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
// HTMLDocument

console.log(doc1.documentElement.textContent)
// "Beware of the tiger"

console.log(doc2.firstChild.tagName);
// "circle"

console.log(doc3.body.firstChild.textContent);
// "Beware of the leopard"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Parsing and serializing XML](/en-US/docs/Web/Guide/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - counterpart for {{jsxref("JSON")}} documents.
