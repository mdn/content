---
title: Empty element
slug: Glossary/Empty_element
tags:
  - CodingScripting
  - Glossary
  - Intermediate
---
An **empty element** is an {{Glossary("element")}} from HTML, SVG, or MathML that **cannot** have any child nodes (i.e., nested elements or text nodes).

The [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/), and [MathML](https://www.w3.org/TR/MathML3/) specifications define very precisely what each element can contain. Many combinations have no semantic meaning, for example an {{HTMLElement("audio")}} element nested inside an {{HTMLElement("hr")}} element.

In HTML, using a closing tag on an empty element is usually invalid. For example, `<input type="text"></input>` is invalid HTML.

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
