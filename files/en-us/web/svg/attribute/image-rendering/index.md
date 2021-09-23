---
title: image-rendering
slug: Web/SVG/Attribute/image-rendering
tags:
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.image-rendering
---
{{SVGRef}}

The **`image-rendering`** attribute provides a hint to the browser about how to make speed vs. quality tradeoffs as it performs image processing.

The resampling is always done in a truecolor (e.g., 24-bit) color space even if the original data and/or the target device is indexed color.

> **Note:** As a presentation attribute, `image-rendering` can be used as a CSS property. See the {{cssxref("image-rendering", "CSS image-rendering")}} property for more information.

You can use this attribute with the following SVG elements:

*   {{SVGElement("image")}}

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

*   `auto`
    *   : Indicates that the user agent shall make appropriate tradeoffs to balance speed and quality, but quality shall be given more importance than speed.
*   `optimizeSpeed`
    *   : Indicates that the user agent shall emphasize rendering speed over quality.
*   `optimizeQuality`
    *   : Indicates that the user agent shall emphasize quality over rendering speed.

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("CSS3 Images", "#the-image-rendering", "image-rendering")}}
      </td>
      <td>{{Spec2("CSS3 Images")}}</td>
      <td>Definition in CSS</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "painting.html#ImageRenderingProperty", "image-rendering")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>No significant change, only added a reference to CSS Images 3</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "painting.html#ImageRenderingProperty", "image-rendering")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{cssxref("image-rendering", "CSS image-rendering")}}
