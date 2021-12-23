---
title: stroke
slug: Web/SVG/Attribute/stroke
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.stroke
---
{{SVGRef}}

The **`stroke`** attribute is a presentation attribute defining the color (*or any SVG paint servers like gradients or patterns*) used to paint the outline of the shape;

> **Note:** As a presentation attribute `stroke` can be used as a CSS property.

You can use this attribute with the following SVG elements:

*   {{SVGElement('altGlyph')}}
*   {{SVGElement('circle')}}
*   {{SVGElement('ellipse')}}
*   {{SVGElement('line')}}
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
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple color stroke -->
  <circle cx="5" cy="5" r="4" fill="none"
          stroke="green" />

  <!-- Stroke a circle with a gradient -->
  <defs>
    <linearGradient id="myGradient">
      <stop offset="0%"   stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>

  <circle cx="15" cy="5" r="4" fill="none"
          stroke="url(#myGradient)" />
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
          ><a href="/en-US/docs/Web/SVG/Content_type#paint"
            >&#x3C;paint></a
          ></strong
        >
      </td>
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
        {{SpecName("SVG2", "painting.html#StrokeProperty", "stroke")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Definition for shapes and texts.<br />Adds <code>context-fill</code> and
        <code>context-stroke</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "painting.html#StrokeProperty", "stroke")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for shapes and texts</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

> **Note:** For information on using the `context-stroke` (and `context-fill`) values from HTML documents, see the documentation for the non-standard {{cssxref("-moz-context-properties")}} property.
