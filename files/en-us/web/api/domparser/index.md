---
title: DOMParser
slug: Web/API/DOMParser
page-type: web-api-interface
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

> **Note:** Be aware that [block-level elements](/en-US/docs/Glossary/Block-level_content)
> like `<p>` will be automatically closed if another
> block-level element is nested inside and therefore parsed before the closing `</p>` tag.

## Constructor

- {{domxref("DOMParser.DOMParser","DOMParser()")}}
  - : Creates a new `DOMParser` object.

## Instance methods

- {{domxref("DOMParser.parseFromString()")}}
  - : Parses a string using either the HTML parser or the XML parser, returning an {{domxref("HTMLDocument")}} or {{domxref("XMLDocument")}}.

## Examples

The documentation for {{domxref("DOMParser.parseFromString()")}}, this interface's only method, contains examples for parsing XML, SVG, and HTML strings.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Parsing and serializing XML](/en-US/docs/Web/Guide/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - counterpart for {{jsxref("JSON")}} documents.
