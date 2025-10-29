---
title: text-overflow
slug: Web/SVG/Reference/Attribute/text-overflow
page-type: svg-attribute
browser-compat: svg.global_attributes.text-overflow
sidebar: svgref
---

The SVG **`text-overflow`** attribute specifies how text content block elements render when text overflows line boxes. This can happen, for example, when the {{SVGAttr("white-space")}} attribute or CSS {{CSSxref("white-space")}} property has the value `nowrap`. The property does not apply to pre-formatted text or text situated on a path.

In SVG, `text-overflow` has an effect if there is a validly specified wrapping area, regardless of the computed value of the {{CSSxref("overflow")}} property on the text content block element. The effect is purely visual: clipped text is not removed from the DOM, and any ellipsis, if presented, does not itself become part of the DOM. For all the DOM methods, it is as if `text-overflow` was not applied, and as if the wrapping area did not constrain the text.

> [!NOTE]
> As a presentation attribute, `text-overflow` also has a CSS property counterpart: {{cssxref("text-overflow")}}. When both are specified, the CSS property takes priority.

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>clip</code> | <code>ellipses</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>clip</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `clip`
  - : Any text that overflows the wrapping area is clipped. Characters may be partially rendered. This is the default value.
- `ellipsis`
  - : If the text to be rendered overflows the wrapping area, the text is clipped and an ellipsis is rendered such that it fits within the given area.

For more information, refer to the [CSS `text-overflow`](/en-US/docs/Web/CSS/text-overflow#values) property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("text-overflow")}} property
