---
title: values
slug: Web/SVG/Attribute/values
tags:
  - NeedsCompatTable
  - NeedsExample
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The `values` attribute has different meanings, depending upon the context where it's used, either it defines a sequence of values used over the course of an animation, or it's a list of numbers for a color matrix, which is interpreted differently depending on the type of color change to be performed.

You can use this attribute with the following SVG elements:

*   {{SVGElement("animate")}}
*   {{SVGElement("animateColor")}}
*   {{SVGElement("animateMotion")}}
*   {{SVGElement("animateTransform")}}
*   {{SVGElement("feColorMatrix")}}

## animate, animateColor, animateMotion, animateTransform

For {{SVGElement("animate")}}, {{SVGElement("animateColor")}}, {{SVGElement("animateMotion")}}, and {{SVGElement("animateTransform")}}, `values` is a list of values defining the sequence of values over the course of the animation. If this attribute is specified, any {{SVGAttr("from")}}, {{SVGAttr("to")}}, and {{SVGAttr("by")}} attribute values set on the element are ignored.

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

*   `<list-of-values>`
    *   : The value holds a semicolon-separated list of one or more values. The type of the values is defined by the {{SVGAttr("href")}} and {{SVGAttr("attributeName")}} attributes.

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

*   `<list-of-numbers>`
    *   : The value is a list of numbers, which is interpreted differently depending on the value of the `type` attribute:

        *   For `type="matrix"`, `values` is a list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 ... a34), separated by whitespace and/or a comma.
        *   For `type="saturate"`, `values` is a single real number value (0 to 1).
        *   For `type="hueRotate"`, `values` is a single one real number value (degrees).
        *   For `type="luminanceToAlpha"`, `values` is not applicable.

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
        {{SpecName("Filters 1.0", "#element-attrdef-fecolormatrix-values", "values for &lt;feColorMatrix&gt;")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG Animations 2", "#ValuesAttribute", "values for &lt;animate&gt;, &lt;animateColor&gt;, &lt;animateMotion&gt;, and &lt;animateTransform&gt;")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feColorMatrixValuesAttribute", "values for &lt;feColorMatrix&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;feColorMatrix></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "animate.html#ValuesAttribute", "values for &lt;animate&gt;, &lt;animateColor&gt;, &lt;animateMotion&gt;, and &lt;animateTransform&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Initial definition for <code>&#x3C;animate></code>,
        <code>&#x3C;animateColor></code>, <code>&#x3C;animateMotion></code>, and
        <code>&#x3C;animateTransform></code>
      </td>
    </tr>
  </tbody>
</table>
