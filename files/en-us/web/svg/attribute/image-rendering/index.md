---
title: image-rendering
slug: Web/SVG/Attribute/image-rendering
page-type: svg-attribute
browser-compat: svg.attributes.presentation.image-rendering
---

{{SVGRef}}

The **`image-rendering`** attribute provides a hint to the browser about how to make speed vs. quality tradeoffs as it performs image processing.

The resampling is always done in a truecolor (e.g., 24-bit) color space even if the original data and/or the target device is indexed color.

> **Note:** As a presentation attribute, `image-rendering` can be used as a CSS property. See the {{cssxref("image-rendering", "CSS image-rendering")}} property for more information.

You can use this attribute with the following SVG elements:

- {{SVGElement("image")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>optimizeQuality</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : Indicates that the user agent shall make appropriate tradeoffs to balance speed and quality, but quality shall be given more importance than speed.
- `optimizeSpeed`
  - : Indicates that the user agent shall emphasize rendering speed over quality.
- `optimizeQuality`
  - : Indicates that the user agent shall emphasize quality over rendering speed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("image-rendering", "CSS image-rendering")}}
