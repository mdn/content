---
title: <mtable>
slug: Web/MathML/Element/mtable
page-type: mathml-element
browser-compat: mathml.elements.mtable
---

{{MathMLRef}}

The **`<mtable>`** [MathML](/en-US/docs/Web/MathML) element allows you to create tables or matrices. Its children are {{ MathMLElement("mtr") }} elements (representing rows), each of them having {{ MathMLElement("mtd") }} elements as its children (representing cells). These elements are similar to {{ HTMLElement("table") }}, {{ HTMLElement("tr") }} and {{ HTMLElement("td") }} elements of [HTML](/en-US/docs/Web/HTML).

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes). Some browsers may also support the following attributes:

- `align` {{Non-standard_Inline}}

  - : Specifies the **vertical** alignment of the table with respect to its environment.
    Possible values are:

    - `axis` (default): The vertical center of the table aligns on the environment's axis (typically the minus sign).
    - `baseline`: The vertical center of the table aligns on the environment's baseline.
    - `bottom`: The bottom of the table aligns on the environments baseline.
    - `center`: See baseline.
    - `top`: The top of the table aligns on the environments baseline.

    In addition, values of the `align` attribute can end with a _rownumber_ (e.g. `align="center 3"`). This allows you to align the specified row of the table rather than the whole table. A negative Integer value counts rows from the bottom of the table.

- `columnalign` {{Non-standard_Inline}}
  - : Specifies the horizontal alignment of the cells. Multiple values separated by space are allowed and apply to the corresponding columns (e.g. `columnalign="left right center"`). Possible values are: `left`, `center` (default) and `right`.
- `columnlines` {{Non-standard_Inline}}
  - : Specifies column borders. Multiple values separated by space are allowed and apply to the corresponding columns (e.g. `columnlines="none none solid"`). Possible values are: `none` (default), `solid` and `dashed`.
- `columnspacing` {{Non-standard_Inline}}
  - : Specifies the space between table columns. Multiple values separated by space are allowed and apply to the corresponding columns (e.g. `columnspacing="1em 2em"`). Possible values are {{cssxref("length-percentage")}}.
- `frame` {{Non-standard_Inline}}
  - : Specifies borders of the entire table. Possible values are: `none` (default), `solid` and `dashed`.
- `framespacing` {{Non-standard_Inline}}
  - : Specifies additional space added between the table and frame. The first value specifies the spacing on the right and left; the second value specifies the spacing above and below. Possible values are {{cssxref("length-percentage")}}.
- `rowalign` {{Non-standard_Inline}}
  - : Specifies the vertical alignment of the cells. Multiple values separated by space are allowed and apply to the corresponding rows (e.g. `rowalign="top bottom axis"`). Possible values are: `axis`, `baseline` (default), `bottom`, `center` and `top`.
- `rowlines` {{Non-standard_Inline}}
  - : Specifies row borders. Multiple values separated by space are allowed and apply to the corresponding rows (e.g. `rowlines="none none solid"`). Possible values are: `none` (default), `solid` and `dashed`.
- `rowspacing` {{Non-standard_Inline}}
  - : Specifies the space between table rows. Multiple values separated by space are allowed and apply to the corresponding rows (e.g. `rowspacing="1em 2em"`). Possible values are {{cssxref("length-percentage")}}.
- `width` {{Non-standard_Inline}}
  - : A {{cssxref("length-percentage")}} indicating the width of the entire table.

> [!NOTE]
> For the `width` attribute, some browsers may also accept [legacy MathML lengths](/en-US/docs/Web/MathML/Values#legacy_mathml_lengths).

## Examples

### Alignment with row number

```html
<math display="block">
  <mi>X</mi>
  <mo>=</mo>
  <mtable frame="solid" rowlines="solid" align="axis 3">
    <mtr>
      <mtd><mi>A</mi></mtd>
      <mtd><mi>B</mi></mtd>
    </mtr>
    <mtr>
      <mtd><mi>C</mi></mtd>
      <mtd><mi>D</mi></mtd>
    </mtr>
    <mtr>
      <mtd><mi>E</mi></mtd>
      <mtd><mi>F</mi></mtd>
    </mtr>
  </mtable>
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

- {{ MathMLElement("mtd") }} (Table cell)
- {{ MathMLElement("mtr") }} (Table row)
