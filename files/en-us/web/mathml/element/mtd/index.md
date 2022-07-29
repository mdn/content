---
title: <mtd>
slug: Web/MathML/Element/mtd
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Tabular Math
browser-compat: mathml.elements.mtd
---
{{MathMLRef}}

The MathML `<mtd>` element represents a cell in a table or a matrix. It may only appear in a {{ MathMLElement("mtr") }} element. This element is similar to the {{ HTMLElement("td") }} element of [HTML](/en-US/docs/Web/HTML).

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `columnalign`
  - : Specifies the horizontal alignment of this cell and overrides values specified by {{ MathMLElement("mtable") }} or {{ MathMLElement("mtr") }}.
    Possible values are: `left`, `center` and `right`.
- `columnspan`
  - : A non-negative integer value that indicates on how many columns does the cell extend.
- `rowalign`
  - : Specifies the vertical alignment of this cell and overrides values specified by {{ MathMLElement("mtable") }} or {{ MathMLElement("mtr") }}.
    Possible values are: `axis`, `baseline`, `bottom`, `center` and `top`.
- `rowspan`
  - : A non-negative integer value that indicates on how many rows does the cell extend.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtr") }}
