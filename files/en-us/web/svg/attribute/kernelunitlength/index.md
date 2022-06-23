---
title: kernelUnitLength
slug: Web/SVG/Attribute/kernelUnitLength
tags:
  - Filters
  - NeedsCompatTable
  - NeedsExample
  - SVG
  - SVG Attribute
spec-urls:
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fespecularlighting-kernelunitlength
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fediffuselighting-kernelunitlength
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-feconvolvematrix-kernelunitlength
---
{{SVGRef}}{{Deprecated_Header}}

The **`kernelUnitLength`** attribute has two meanings based on the context it's used in. For lighting filter primitives, it indicates the intended distance for the x and y coordinates, for {{SVGElement("feConvolveMatrix")}}, it indicates the intended distance between successive columns and rows in the kernel matrix.

You can use this attribute with the following SVG elements:

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}

## feConvolveMatrix

For the {{SVGElement("feConvolveMatrix")}}, `kernelUnitLength` indicates the intended distance in current filter units (i.e., units as determined by the value of {{SVGAttr("primitiveUnits")}} attribute) between successive columns and rows, respectively, in the {{SVGAttr("kernelMatrix")}}. By specifying value(s) for `kernelUnitLength`, the kernel becomes defined in a scalable, abstract coordinate system. If the attribute is not specified, the default value is one pixel in the offscreen bitmap, which is a pixel-based coordinate system, and thus potentially not scalable.

If a negative or zero value is specified the default value will be used instead.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>Pixel in offscreen bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`
  - : The first number is the x value. The second number is the y value. If the x value is not specified, it defaults to the same value as x.

## feDiffuseLighting

For the {{SVGElement("feDiffuseLighting")}}, `kernelUnitLength` indicates the intended distance in current filter units (i.e., units as determined by the value of attribute {{SVGAttr("primitiveUnits")}}) for the x and y coordinate, respectively, in the surface normal calculation formulas.

The first number is the x value. The second number is the y value. If the y value is not specified, it defaults to the same value as x. By specifying value(s) for `kernelUnitLength`, the kernel becomes defined in a scalable, abstract coordinate system. If the attribute is not specified, the x and y values represent very small deltas relative to a given position, which might be implemented in some cases as one pixel in the intermediate image offscreen bitmap, which is a pixel-based coordinate system, and thus potentially not scalable.

If a negative or zero value is specified the default value will be used instead.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>Pixel in offscreen bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## feSpecularLighting

For the {{SVGElement("feSpecularLighting")}}, `kernelUnitLength` indicates the intended distance in current filter units (i.e., units as determined by the value of attribute {{SVGAttr("primitiveUnits")}}) for the x and y coordinate, respectively, in the surface normal calculation formulas.

The first number is the x value. The second number is the y value. If the y value is not specified, it defaults to the same value as x. By specifying value(s) for `kernelUnitLength`, the kernel becomes defined in a scalable, abstract coordinate system. If the attribute is not specified, the x and y values represent very small deltas relative to a given position, which might be implemented in some cases as one pixel in the intermediate image offscreen bitmap, which is a pixel-based coordinate system, and thus potentially not scalable.

If a negative or zero value is specified the default value will be used instead.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>Pixel in offscreen bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}
