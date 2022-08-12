---
title: stop-opacity
slug: Web/SVG/Attribute/stop-opacity
tags:
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.elements.stop.stop-opacity
---
{{SVGRef}}

The **`stop-opacity`** attribute defines the opacity of a given color gradient stop.

The opacity value used for the gradient calculation is the product of the value of `stop-opacity` and the opacity of the value of the {{SVGAttr("stop-color")}} attribute. For `stop-color` values that don't include explicit opacity information, the opacity is treated as `1`.

> **Note:** As a presentation attribute, `stop-opacity` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("stop")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#opacity_value"
            >&#x3C;opacity-value></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<opacity-value>`
  - : This value is either a {{cssxref("number")}} between `0` and `1` or a {{cssxref("percentage")}} value specifying the opacity of the color gradient stop.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("stop-color")}}
