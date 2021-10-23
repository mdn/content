---
title: type
slug: Web/SVG/Attribute/type
tags:
  - NeedsCompatTable
  - NeedsExample
  - SVG
  - SVG Attribute
  - filter
---
{{SVGRef}}

The `type` attribute is a generic attribute and it has different meaning based on the context in which it's used.

*   For the {{SVGElement("animateTransform")}} element, it defines the type of transformation, whose values change over time.
*   For the {{SVGElement("feColorMatrix")}} element, it indicates the type of matrix operation. The keyword `matrix` indicates that a full 5x4 matrix of values will be provided. The other keywords represent convenience shortcuts to allow commonly used color operations to be performed without specifying a complete matrix.
*   For the {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, and {{SVGElement("feFuncA")}} elements, it Indicates the type of component transfer function.
*   For the {{SVGElement("feTurbulence")}} element, it indicates whether the filter primitive should perform a noise or turbulence function.
*   For the {{SVGElement("style")}} and {{SVGElement("script")}} elements, it defines the content type of the element.

You can use this attribute with the following SVG elements:

*   {{SVGElement("animateTransform")}}
*   {{SVGElement("feColorMatrix")}}
*   {{SVGElement("feFuncA")}}
*   {{SVGElement("feFuncB")}}
*   {{SVGElement("feFuncG")}}
*   {{SVGElement("feFuncR")}}
*   {{SVGElement("feTurbulence")}}
*   {{SVGElement("script")}}
*   {{SVGElement("style")}}

## Usage context

### For the {{SVGElement("animateTransform")}} elements

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categories</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong><code>translate</code></strong> | <code>scale</code> |
        <code>rotate</code> | <code>skewX</code> | <code>skewY</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/animate.html#AnimateTransformElementTypeAttribute"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

### For the {{ SVGElement("feColorMatrix") }} element

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categories</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong><code>matrix</code></strong> | <code>saturate</code> |
        <code>hueRotate</code> | <code>luminanceToAlpha</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/filters.html#feColorMatrixTypeAttribute"
          rel="external"
          ><span>SVG 1.1 (2nd Edition)</span></a
        >
      </td>
    </tr>
  </tbody>
</table>

### For the {{ SVGElement("feFuncR") }}, {{ SVGElement("feFuncG") }}, {{ SVGElement("feFuncB") }}, and {{ SVGElement("feFuncA") }} elements

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categories</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>identity</code> | <code>table</code> | <code>discrete</code> |
        <code>linear</code> | <code>gamma</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/filters.html#feComponentTransferTypeAttribute"
          rel="external"
          ><span>SVG 1.1 (2nd Edition)</span></a
        >
      </td>
    </tr>
  </tbody>
</table>

### For the {{ SVGElement("feTurbulence") }} element

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categories</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>fractalNoise</code> | <strong><code>turbulence</code></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/filters.html#feTurbulenceTypeAttribute"
          rel="external"
          ><span>SVG 1.1 (2nd Edition)</span></a
        >
      </td>
    </tr>
  </tbody>
</table>

### For the {{ SVGElement("style") }} and {{SVGElement("script")}} elements

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categories</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td>&#x3C;content-type></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/script.html#ScriptElementTypeAttribute"
          rel="external"
          ><span>SVG 1.1 (2nd Edition) : script</span></a
        ><br /><a
          href="https://www.w3.org/TR/SVG11/styling.html#StyleElementTypeAttribute"
          rel="external"
          >SVG 1.1 (2nd Edition) : style</a
        >
      </td>
    </tr>
  </tbody>
</table>
