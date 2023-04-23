---
title: stop-color
slug: Web/SVG/Attribute/stop-color
page-type: svg-attribute
browser-compat: svg.attributes.presentation.stop-color
---

{{SVGRef}}

The **`stop-color`** attribute indicates what color to use at a gradient stop.

> **Note:** With respect to gradients, SVG treats the `transparent` keyword differently than CSS. SVG does not calculate gradients in pre-multiplied space, so `transparent` really means transparent black. So, specifying a `stop-color` with the value `transparent` is equivalent to specifying a `stop-color` with the value `black` and a {{SVGAttr("stop-opacity")}} with the value `0`.

> **Note:** As a presentation attribute, `stop-color` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("stop")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>currentcolor</code> |
        {{cssxref("color_value", "&lt;color&gt;")}}
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#icccolor"
            >&#x3C;icccolor></a
          ></code
        >
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

- `currentcolor`
  - : This keyword denotes the current fill color and can be specified in the same manner as within a [`<paint>`](/en-US/docs/Web/SVG/Content_type#paint) specification for the {{SVGAttr("fill")}} and {{SVGAttr("stroke")}} attributes.
- `<color>`
  - : This value indicates a color value.
- `<icccolor>`
  - : This value refers to an ICC color profile.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("stop-opacity")}}
