---
title: stroke-width
slug: Web/SVG/Attribute/stroke-width
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.stroke-width
---
{{SVGRef}}

The **`stroke-width`** attribute is a presentation attribute defining the width of the stroke to be applied to the shape.

You can use this attribute with the following SVG elements:

- {{SVGElement('altGlyph')}}
- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('line')}}
- {{SVGElement('path')}}
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
  <!-- Default stroke width: 1 -->
  <circle cx="5" cy="5" r="3" stroke="green" />

  <!-- Stroke width as a number -->
  <circle cx="15" cy="5" r="3" stroke="green"
          stroke-width="3" />

  <!-- Stroke width as a percentage -->
  <circle cx="25" cy="5" r="3" stroke="green"
          stroke-width="2%" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        > |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** A percentage value is always computed as a percentage of the normalized {{SVGAttr('viewBox')}} diagonal length.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
