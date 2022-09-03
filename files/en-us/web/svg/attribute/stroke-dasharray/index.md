---
title: stroke-dasharray
slug: Web/SVG/Attribute/stroke-dasharray
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.stroke-dasharray
---
{{SVGRef}}

The **`stroke-dasharray`** attribute is a presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape;

> **Note:** As a presentation attribute, `stroke-dasharray` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement('altGlyph')}}
- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('line')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <!-- No dashes nor gaps -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- Dashes and gaps of the same size -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black"
          stroke-dasharray="4" />

  <!-- Dashes and gaps of different sizes -->
  <line x1="0" y1="5" x2="30" y2="5" stroke="black"
          stroke-dasharray="4 1" />

  <!-- Dashes and gaps of various sizes with an odd number of values -->
  <line x1="0" y1="7" x2="30" y2="7" stroke="black"
          stroke-dasharray="4 1 2" />

  <!-- Dashes and gaps of various sizes with an even number of values -->
  <line x1="0" y1="9" x2="30" y2="9" stroke="black"
          stroke-dasharray="4 1 2 3" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>none</code> | <code>&#x3C;dasharray></code></td>
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

- \<dasharray>
  - : A list of comma and/or white space separated [`<length>`](/en-US/docs/Web/SVG/Content_type#length)s and [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage)s that specify the lengths of alternating dashes and gaps.

    If an odd number of values is provided, then the list of values is repeated to yield an even number of values. Thus, `5,3,2` is equivalent to `5,3,2,5,3,2`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
