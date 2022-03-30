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

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- columnalign
  - : Overrides the horizontal alignment of cells specified by {{ MathMLElement("mtable") }} for this row.
    Possible values are: `left`, `center` and `right`.
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- rowalign
  - : Overrides the vertical alignment of cells specified by {{ MathMLElement("mtable") }} for this row.
    Possible values are: `axis`, `baseline`, `bottom`, `center` and `top`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtd") }}
