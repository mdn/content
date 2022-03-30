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

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- columnalign
  - : Specifies the horizontal alignment of this cell and overrides values specified by {{ MathMLElement("mtable") }} or {{ MathMLElement("mtr") }}.
    Possible values are: `left`, `center` and `right`.
- columnspan
  - : A non-negative integer value that indicates on how many columns does the cell extend.
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- rowalign
  - : Specifies the vertical alignment of this cell and overrides values specified by {{ MathMLElement("mtable") }} or {{ MathMLElement("mtr") }}.
    Possible values are: `axis`, `baseline`, `bottom`, `center` and `top`.
- rowspan
  - : A non-negative integer value that indicates on how many rows does the cell extend.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtr") }}
