---
title: edgeMode
slug: Web/SVG/Attribute/edgeMode
tags:
  - Filters
  - NeedsCompatTable
  - NeedsExample
  - SVG
  - SVG Attribute
spec-urls: https://drafts.fxtf.org/filter-effects/#element-attrdef-feconvolvematrix-edgemode
---
{{SVGRef}}

The **`edgeMode`** attribute determines how to extend the input image as necessary with color values so that the matrix operations can be applied when the kernel is positioned at or near the edge of the input image.

You can use this attribute with the following SVG elements:

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feGaussianBlur")}}

## feConvolveMatrix

For {{SVGElement("feConvolveMatrix")}}, `edgeMode` determines how to extend the input image as necessary with color values so that the matrix operations can be applied when the kernel is positioned at or near the edge of the input image.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>duplicate</code> | <code>wrap</code> | <code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>duplicate</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `duplicate`
  - : This value indicates that the input image is extended along each of its borders as necessary by duplicating the color values at the given edge of the input image.
- `wrap`
  - : This value indicates that the input image is extended by taking the color values from the opposite edge of the image.
- `none`
  - : This value indicates that the input image is extended with pixel values of zero for R, G, B and A.

## feGaussianBlur

For {{SVGElement("feGaussianBlur")}}, `edgeMode` determines how to extend the input image as necessary with color values so that the matrix operations can be applied when the kernel is positioned at or near the edge of the input image.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>duplicate</code> | <code>wrap</code> | <code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `duplicate`
  - : This value indicates that the input image is extended along each of its borders as necessary by duplicating the color values at the given edge of the input image.
- `wrap`
  - : This value indicates that the input image is extended by taking the color values from the opposite edge of the image.
- `none`
  - : This value indicates that the input image is extended with pixel values of zero for R, G, B and A.

## Specifications

{{Specifications}}
