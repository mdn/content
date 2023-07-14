---
title: <mtd>
slug: Web/MathML/Element/mtd
page-type: mathml-element
browser-compat: mathml.elements.mtd
---

{{MathMLRef}}

The **`<mtd>`** [MathML](/en-US/docs/Web/MathML) element represents a cell in a table or a matrix. It may only appear in a {{ MathMLElement("mtr") }} element. This element is similar to the {{ HTMLElement("td") }} element of [HTML](/en-US/docs/Web/HTML).

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following attributes:

- `columnspan`
  - : A non-negative integer value that indicates on how many columns does the cell extend.
- `rowspan`
  - : A non-negative integer value that indicates on how many rows does the cell extend.

Some browsers may also support the following attributes:

- `columnalign` {{Non-standard_Inline}}
  - : Specifies the horizontal alignment of this cell and overrides values specified by {{ MathMLElement("mtable") }} or {{ MathMLElement("mtr") }}.
    Possible values are: `left`, `center` and `right`.
- `rowalign` {{Non-standard_Inline}}
  - : Specifies the vertical alignment of this cell and overrides values specified by {{ MathMLElement("mtable") }} or {{ MathMLElement("mtr") }}.
    Possible values are: `axis`, `baseline`, `bottom`, `center` and `top`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtr") }}
