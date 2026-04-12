---
title: image-rendering
slug: Web/SVG/Reference/Attribute/image-rendering
page-type: svg-attribute
browser-compat: svg.global_attributes.image-rendering
sidebar: svgref
---

The **`image-rendering`** attribute provides a hint to the browser about how to make speed vs. quality tradeoffs as it performs image processing.

The resampling is always done in a true color (e.g., 24-bit) color space even if the original data and/or the target device is indexed color.

> [!NOTE]
> As a presentation attribute, `image-rendering` also has a CSS property counterpart: {{cssxref("image-rendering")}}. When both are specified, the CSS property takes priority.

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

- CSS {{cssxref("image-rendering")}} property
