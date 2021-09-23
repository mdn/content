---
title: stroke-miterlimit
slug: Web/SVG/Attribute/stroke-miterlimit
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.stroke-miterlimit
---
{{SVGRef}}

The **`stroke-miterlimit`** attribute is a presentation attribute defining a limit on the ratio of the miter length to the {{ SVGAttr("stroke-width") }} used to draw a miter join. When the limit is exceeded, the join is converted from a miter to a bevel.

> **Note:** As a presentation attribute `stroke-miterlimit` can be used as a CSS property.

You can use this attribute with the following SVG elements:

*   {{SVGElement('altGlyph')}}
*   {{SVGElement('path')}}
*   {{SVGElement('polygon')}}
*   {{SVGElement('polyline')}}
*   {{SVGElement('rect')}}
*   {{SVGElement('text')}}
*   {{SVGElement('textPath')}}
*   {{SVGElement('tref')}}
*   {{SVGElement('tspan')}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 38 30" xmlns="http://www.w3.org/2000/svg">
  <!-- Impact of the default miter limit -->
  <path stroke="black" fill="none" stroke-linejoin="miter" id="p1"
        d="M1,9 l7   ,-3 l7   ,3
           m2,0 l3.5 ,-3 l3.5 ,3
           m2,0 l2   ,-3 l2   ,3
           m2,0 l0.75,-3 l0.75,3
           m2,0 l0.5 ,-3 l0.5 ,3" />

  <!-- Impact of the smallest miter limit (1) -->
  <path stroke="black" fill="none" stroke-linejoin="miter"
        stroke-miterlimit="1" id="p2"
        d="M1,19 l7   ,-3 l7   ,3
           m2, 0 l3.5 ,-3 l3.5 ,3
           m2, 0 l2   ,-3 l2   ,3
           m2, 0 l0.75,-3 l0.75,3
           m2, 0 l0.5 ,-3 l0.5 ,3" />

  <!-- Impact of a large miter limit (8) -->
  <path stroke="black" fill="none" stroke-linejoin="miter"
        stroke-miterlimit="8" id="p3"
        d="M1,29 l7   ,-3 l7   ,3
           m2, 0 l3.5 ,-3 l3.5 ,3
           m2, 0 l2   ,-3 l2   ,3
           m2, 0 l0.75,-3 l0.75,3
           m2, 0 l0.5 ,-3 l0.5 ,3" />

  <!-- the following pink lines highlight the position of the path for each stroke -->
  <path stroke="pink" fill="none" stroke-width="0.05"
        d="M1, 9 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
           M1,19 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3
           M1,29 l7,-3 l7,3 m2,0 l3.5,-3 l3.5,3 m2,0 l2,-3 l2,3 m2,0 l0.75,-3 l0.75,3 m2,0 l0.5,-3 l0.5,3" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 400)}}

When two line segments meet at a sharp angle and `miter` joins have been specified for {{ SVGAttr("stroke-linejoin") }}, it is possible for the miter to extend far beyond the thickness of the line stroking the path. The `stroke-miterlimit` ratio is used to define when the limit is exceeded, if so the join is converted from a miter to a bevel.

The ratio of miter length (distance between the outer tip and the inner corner of the miter) to {{ SVGAttr("stroke-width") }} is directly related to the angle (theta) between the segments in user space by the formula:

<math><mstyle displaystyle="true"><mi>stroke-miterlimit</mi> <mo>=</mo> <mfrac><mrow><mi>miterLength</mi> </mrow><mrow><mi>stroke-width</mi> </mrow></mfrac><mo>=</mo> <mfrac><mrow><mn>1</mn> </mrow><mrow><mrow><mi>sin</mi> <mrow><mo>(</mo> <mfrac><mrow><mo>θ</mo> </mrow><mrow><mn>2</mn> </mrow></mfrac><mo>)</mo></mrow></mrow></mrow></mfrac></mstyle></math>

For example, a miter limit of 1.414 converts miters to bevels for theta less than 90 degrees, a limit of 4.0 converts them for theta less than approximately 29 degrees, and a limit of 10.0 converts them for theta less than approximately 11.5 degrees.

## Usage context

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>4</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

The value of `stroke-miterlimit` must be greater than or equal to 1.

## Browser compatibility

{{Compat}}

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
        {{SpecName("SVG2", "painting.html#StrokeMiterlimitProperty", "stroke-miterlimit")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Definition for shapes and texts</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "painting.html#StrokeMiterlimitProperty", "stroke-miterlimit")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for shapes and texts</td>
    </tr>
  </tbody>
</table>
