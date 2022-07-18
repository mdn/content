---
title: in2
slug: Web/SVG/Attribute/in2
tags:
  - Filters
  - NeedsCompatTable
  - NeedsExample
  - SVG
  - SVG Attribute
spec-urls:
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fedisplacementmap-in2
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fecomposite-in2
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-feblend-in2
---
{{SVGRef}}

The **`in2`** attribute identifies the second input for the given filter primitive. It works exactly like the {{SVGAttr("in")}} attribute.

You can use this attribute with the following SVG elements:

- {{SVGElement("feBlend")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feDisplacementMap")}}

## feBlend

For {{SVGElement("feBlend")}}, `in2` defines the second input image to the blending operation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        <code>SourceGraphic</code> for first filter primitive, otherwise result
        of previous filter primitive
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feComposite

For {{SVGElement("feComposite")}}, `in2` defines the second input image to the compositing operation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        <code>SourceGraphic</code> for first filter primitive, otherwise result
        of previous filter primitive
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feDisplacementMap

For {{SVGElement("feDisplacementMap")}}, `in2` defines the second input image, which is used to displace the pixels in the image defined in the {{SVGAttr("in")}} attribute.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        <code>SourceGraphic</code> for first filter primitive, otherwise result
        of previous filter primitive
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}
