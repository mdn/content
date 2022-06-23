---
title: HTMLOListElement
slug: Web/API/HTMLOListElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLOListElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLOListElement`** interface provides special properties (beyond those defined on the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating ordered list elements.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLOListElement.reversed")}}
  - : A boolean value reflecting the {{htmlattrxref("reversed", "ol")}} and defining if the numbering is descending, that is its value is `true`, or ascending (`false`).
- {{domxref("HTMLOListElement.start")}}
  - : A `long` value reflecting the {{htmlattrxref("start", "ol")}} and defining the value of the first number of the first element of the list.
- {{domxref("HTMLOListElement.type")}}

  - : A string value reflecting the {{htmlattrxref("type", "ol")}} and defining the kind of marker to be used to display. It can have the following values:

    - `'1'` meaning that decimal numbers are used: `1`, `2`, `3`, `4`, `5`, …
    - `'a'` meaning that the lowercase latin alphabet is used:  `a`, `b`, `c`, `d`, `e`, …
    - `'A'` meaning that the uppercase latin alphabet is used: `A`, `B`, `C`, `D`, `E`, …
    - `'i'` meaning that the lowercase latin numerals are used: `i`, `ii`, `iii`, `iv`, `v`, …
    - `'I'` meaning that the uppercase latin numerals are used: `I`, `II`, `III`, `IV`, `V`, …

- {{domxref("HTMLOListElement.compact")}} {{deprecated_inline}}
  - : A boolean value indicating that spacing between list items should be reduced. This property reflects the {{htmlattrxref("compact", "ol")}} attribute only, it doesn't consider the {{cssxref("line-height")}} CSS property used for that behavior in modern pages.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("ol") }}.
