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

## Examples

### Matrix using mtable, mrow, mtr and mtd

```html
<math display="block">
  <mfrac>
    <mi>A</mi>
    <mn>2</mn>
  </mfrac>
  <mo>=</mo>
  <mrow>
    <mo>(</mo>
    <mtable>
      <mtr>
        <mtd><mn>1</mn></mtd>
        <mtd><mn>2</mn></mtd>
        <mtd><mn>3</mn></mtd>
      </mtr>
      <mtr>
        <mtd><mn>4</mn></mtd>
        <mtd><mn>5</mn></mtd>
        <mtd><mn>6</mn></mtd>
      </mtr>
      <mtr>
        <mtd><mn>7</mn></mtd>
        <mtd><mn>8</mn></mtd>
        <mtd><mn>9</mn></mtd>
      </mtr>
    </mtable>
    <mo>)</mo>
  </mrow>
</math>
```

{{EmbedLiveSample('Alignment with row number')}}

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Roles">Implicit ARIA role</a>
    </th>
    <td>
      None
    </td>
  </tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtr") }}
