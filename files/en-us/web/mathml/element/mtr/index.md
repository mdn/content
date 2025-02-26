---
title: <mtr>
slug: Web/MathML/Element/mtr
page-type: mathml-element
browser-compat: mathml.elements.mtr
---

{{MathMLRef}}

The **`<mtr>`** [MathML](/en-US/docs/Web/MathML) element represents a row in a table or a matrix. It may only appear in a {{ MathMLElement("mtable") }} element and its children are {{ MathMLElement("mtd") }} elements representing cells. This element is similar to the {{ HTMLElement("tr") }} element of [HTML](/en-US/docs/Web/HTML).

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes). Some browsers may also support the following attributes:

- `columnalign` {{Non-standard_Inline}}
  - : Overrides the horizontal alignment of cells specified by {{ MathMLElement("mtable") }} for this row. Multiple values separated by space are allowed and apply to the corresponding columns (e.g. `columnalign="left center right"`). Possible values are: `left`, `center` and `right`.
- `rowalign` {{Non-standard_Inline}}
  - : Overrides the vertical alignment of cells specified by {{ MathMLElement("mtable") }} for this row. Possible values are: `axis`, `baseline`, `bottom`, `center` and `top`.

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
- {{ MathMLElement("mtd") }}
