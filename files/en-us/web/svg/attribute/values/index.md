---
title: values
slug: Web/SVG/Attribute/values
page-type: svg-attribute
spec-urls:
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-fecolormatrix-values
  - https://svgwg.org/specs/animations/#ValuesAttribute
---

{{SVGRef}}

The `values` attribute has different meanings, depending upon the context where it's used, either it defines a sequence of values used over the course of an animation, or it's a list of numbers for a color matrix, which is interpreted differently depending on the type of color change to be performed.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feColorMatrix")}}

## animate, animateMotion, animateTransform

For {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, and {{SVGElement("animateTransform")}}, `values` is a list of values defining the sequence of values over the course of the animation. If this attribute is specified, any {{SVGAttr("from")}}, {{SVGAttr("to")}}, and {{SVGAttr("by")}} attribute values set on the element are ignored.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#list-of-ts"
            >&#x3C;list-of-values></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<list-of-values>`
  - : The value holds a semicolon-separated list of one or more values. The type of the values is defined by the {{SVGAttr("href")}} and {{SVGAttr("attributeName")}} attributes.

## feColorMatrix

For the {{SVGElement("feColorMatrix")}} element, `values` is a list of numbers interpreted differently depending on the value of the {{SVGAttr("type")}} attribute.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#list-of-ts"
            >&#x3C;list-of-numbers></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        <em
          >If <code>type="matrix"</code>, identity matrix,<br />if
          <code>type="saturate"</code>, <code>1</code>, resulting in identity
          matrix,<br />if <code>type="hueRotate"</code>, <code>0</code>,
          resulting in identity matrix</em
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<list-of-numbers>`

  - : The value is a list of numbers, which is interpreted differently depending on the value of the `type` attribute:

    - For `type="matrix"`, `values` is a list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 … a34), separated by whitespace and/or a comma.
    - For `type="saturate"`, `values` is a single real number value (0 to 1).
    - For `type="hueRotate"`, `values` is a single one real number value (degrees).
    - For `type="luminanceToAlpha"`, `values` is not applicable.

## Specifications

{{Specifications}}
