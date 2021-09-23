---
title: stroke-dashoffset
slug: Web/SVG/Attribute/stroke-dashoffset
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.stroke-dashoffset
---
{{SVGRef}}

The **`stroke-dashoffset`** attribute is a presentation attribute defining an offset on the rendering of the associated dash array.

> **Note:** As a presentation attribute `stroke-dashoffset` can be used as a CSS property.

You can use this attribute with the following SVG elements:

*   {{SVGElement('altGlyph')}}
*   {{SVGElement('circle')}}
*   {{SVGElement('ellipse')}}
*   {{SVGElement('path')}}
*   {{SVGElement('line')}}
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
<svg viewBox="-3 0 33 10" xmlns="http://www.w3.org/2000/svg">
  <!-- No dash array -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- No dash offset -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black"
        stroke-dasharray="3 1" />

  <!--
  The start of the dash array computation
  is pulled by 3 user units
  -->
  <line x1="0" y1="5" x2="30" y2="5" stroke="black"
        stroke-dasharray="3 1"
        stroke-dashoffset="3" />

  <!--
  The start of the dash array computation
  is pushed by 3 user units
  -->
  <line x1="0" y1="7" x2="30" y2="7" stroke="black"
        stroke-dasharray="3 1"
        stroke-dashoffset="-3" />

  <!--
  The start of the dash array computation
  is pulled by 1 user units which ends up
  in the same rendering as the previous example
  -->
  <line x1="0" y1="9" x2="30" y2="9" stroke="black"
        stroke-dasharray="3 1"
        stroke-dashoffset="1" />

  <!--
  the following red lines highlight the
  offset of the dash array for each line
  -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgba(255,0,0,.5)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

The offset is usually expressed in user units resolved against the {{SVGAttr('pathLength')}} but if a [\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage) is used, the value is resolved as a percentage of the current viewport.

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
        {{SpecName("SVG2", "painting.html#StrokeDashoffsetProperty", "stroke-dashoffset")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Definition for shapes and texts</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "painting.html#StrokeDashoffsetProperty", "stroke-dashoffset")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for shapes and texts</td>
    </tr>
  </tbody>
</table>
