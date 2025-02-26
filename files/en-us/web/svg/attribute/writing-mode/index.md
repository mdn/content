---
title: writing-mode
slug: Web/SVG/Attribute/writing-mode
page-type: svg-attribute
browser-compat: svg.global_attributes.writing-mode
---

{{SVGRef}}

The **`writing-mode`** attribute specifies whether the initial inline-progression-direction for a {{SVGElement("text")}} element shall be left-to-right, right-to-left, or top-to-bottom. The `writing-mode` attribute applies only to {{ SVGElement("text") }} elements; the attribute is ignored for {{ SVGElement("tspan") }}, {{ SVGElement("tref") }}, and {{ SVGElement("textPath") }} sub-elements. (Note that the inline-progression-direction can change within a {{ SVGElement("text") }} element due to the Unicode bidirectional algorithm and properties {{ SVGAttr("direction") }} and {{ SVGAttr("unicode-bidi") }}.)

> [!NOTE]
> As a presentation attribute, `writing-mode` also has a CSS property counterpart: {{cssxref("writing-mode")}}. When both are specified, the CSS property takes priority.

You can use this attribute with the following SVG elements:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Default value</th>
      <td><code>horizontal-tb</code></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>horizontal-tb</code> | <code>vertical-rl</code> |
        <code>vertical-lr</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `horizontal-tb`
  - : This value defines a top-to-bottom block flow direction. Both the writing mode and the typographic mode are horizontal.
- `vertical-rl`
  - : This value defines a right-to-left block flow direction. Both the writing mode and the typographic mode are vertical.
- `vertical-lr`
  - : This value defines a left-to-right block flow direction. Both the writing mode and the typographic mode are vertical.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("writing-mode")}} property
