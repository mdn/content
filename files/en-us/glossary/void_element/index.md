---
title: Void element
slug: Glossary/Void_element
tags:
  - CodingScripting
  - HTML
  - Intermediate
---

A **void element** is an {{Glossary("element")}} in HTML that **cannot** have any child nodes (i.e., nested elements or text nodes). Void elements only have a start tag; end tags must not be specified for void elements.

In HTML, a void element must not have an end tag. For example, `<input type="text"></input>` is invalid HTML. In contrast, SVG or MathML elements that cannot have any child nodes may use an end tag instead of XML self-closing-tag syntax in their start tag.

The [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/), and [MathML](https://www.w3.org/TR/MathML3/) specifications define very precisely what each element can contain. So, some combinations of tags have no semantic meaning.

Although a void element cannot have children in text serialized form (that is source code), child nodes can be added to the element in DOM using JavaScript. This is not a good practice as the outcome will not be reliable.

The void elements in HTML are as follows:

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
However, the start tags of SVG and MathML elements that cannot have any child nodes are allowed to be marked as self-closing. In such cases, if an element's start tag is marked as self-closing, the element must not have an end tag.

If present, HTML parsers ignore the trailing `/` in start tags. Some code formatters, use this fact and add a trailing `/` to the void tags to make them similar to XML style tags. For example, some code-formatters will convert `<input type="text">` to `<input type="text" />`.

> **Note:** Without a space between unquoted attribute value and `/>`, the `/` becomes a part of the value. For example, the code `<img src=http://www.example.com/logo.svg/>` results in `src` attribute getting value `http://www.example.com/logo.svg/`, which makes the URL wrong.
