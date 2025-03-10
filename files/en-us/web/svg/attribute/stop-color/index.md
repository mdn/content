---
title: stop-color
slug: Web/SVG/Attribute/stop-color
page-type: svg-attribute
browser-compat: svg.global_attributes.stop-color
---

{{SVGRef}}

The **`stop-color`** attribute indicates what color to use at a gradient stop.

> [!NOTE]
> With respect to gradients, SVG treats the `transparent` keyword differently than CSS. SVG does not calculate gradients in pre-multiplied space, so `transparent` really means transparent black. So, specifying a `stop-color` with the value `transparent` is equivalent to specifying a `stop-color` with the value `black` and a {{SVGAttr("stop-opacity")}} with the value `0`.

> [!NOTE]
> As a presentation attribute, `stop-color` also has a CSS property counterpart: {{cssxref("stop-color")}}. When both are specified, the CSS property takes priority.

You can use this attribute with the following SVG elements:

- {{SVGElement("stop")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        {{cssxref("color_value", "&lt;color&gt;")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- [`<color>`](/en-US/docs/Web/SVG/Content_type#color)
  - : This value indicates a color value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("stop-color")}} property
- {{SVGAttr("stop-opacity")}}
