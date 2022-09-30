---
title: Void element
slug: Glossary/Void_element
tags:
  - CodingScripting
  - HTML
  - Intermediate
  - MathML
  - SVG
---

A **void element** is an {{Glossary("element")}} from HTML, SVG, or MathML that **cannot** have any child nodes (i.e., nested elements or text nodes). Void elements only have a start tag; end tags must not be specified for void elements.

In HTML, using a closing tag on a void element is invalid. For example, `<input type="text"></input>` is invalid HTML. Except for foreign elements (elements from SVG and MathML namespaces).

The [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/), and [MathML](https://www.w3.org/TR/MathML3/) specifications define very precisely what each element can contain. Many combinations have no semantic meaning, for example an {{HTMLElement("audio")}} element nested inside an {{HTMLElement("hr")}} element.

The empty elements in HTML are as follows:

- {{HTMLElement("area")}}
- {{HTMLElement("base")}}
- {{HTMLElement("br")}}
- {{HTMLElement("col")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("keygen")}}(HTML 5.2 Draft removed)
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("param")}}
- {{HTMLElement("source")}}
- {{HTMLElement("track")}}
- {{HTMLElement("wbr")}}

## The curious case of self-closing tags

_Self-closing tags (`<tag />`) do not exist in HTML._\
However, foreign content is allowed to specify self-closing tags. In such case, if a start tag is marked as self-closing, then end tag must not be specified.

If present, HTML parsers ignore the trailing `/` in start tags. Code formatters, like Prettier, take advantage of this fact and add a trailing `/` to the void tags to make them more readable.\
For example, `<input type="text">` to `<input type="text" />`
