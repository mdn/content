---
title: <mtr>
slug: Web/MathML/Element/mtr
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Tabular Math
browser-compat: mathml.elements.mtr
---
{{MathMLRef}}

The MathML `<mtr>` element represents a row in a table or a matrix. It may only appear in a {{ MathMLElement("mtable") }} element. This element is similar to the {{ HTMLElement("tr") }} element of [HTML](/en-US/docs/Web/HTML).

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `columnalign`
  - : Overrides the horizontal alignment of cells specified by {{ MathMLElement("mtable") }} for this row.
    Possible values are: `left`, `center` and `right`.
- `rowalign`
  - : Overrides the vertical alignment of cells specified by {{ MathMLElement("mtable") }} for this row.
    Possible values are: `axis`, `baseline`, `bottom`, `center` and `top`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtd") }}
