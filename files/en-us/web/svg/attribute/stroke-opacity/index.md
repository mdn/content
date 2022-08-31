---
title: stroke-opacity
slug: Web/SVG/Attribute/stroke-opacity
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.stroke-opacity
---
{{SVGRef}}

The **`stroke-opacity`** attribute is a presentation attribute defining the opacity of the paint server (_color_, _gradient_, _pattern_, etc.) applied to the stroke of a shape.

> **Note:** As a presentation attribute `stroke-opacity` can be used as a CSS property.

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
<svg viewBox="0 0 40 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Default stroke opacity: 1 -->
  <circle cx="5" cy="5" r="4" stroke="green" />

  <!-- Stroke opacity as a number -->
  <circle cx="15" cy="5" r="4" stroke="green"
          stroke-opacity="0.7" />

  <!-- Stroke opacity as a percentage -->
  <circle cx="25" cy="5" r="4" stroke="green"
          stroke-opacity="50%" />

  <!-- Stroke opacity as a CSS property -->
  <circle cx="35" cy="5" r="4" stroke="green"
          style="stroke-opacity: .3;" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>[0-1]</code> |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#paint"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** SVG2 introduces percentage values for `stroke-opacity`, however, it is not widely supported yet (_See [Browser compatibility](#browser_compatibility) below_) as a consequence, it is best practices to set opacity with a value in the range `[0-1]`.

It's important to know that the stroke partially covers the fill of a shape, so a stroke with an opacity different than `1` will partially show the fill underneath. To avoid this effect, it is possible to apply a global opacity with the {{SVGAttr('opacity')}} attribute or to put the stroke behind the fill with the {{SVGAttr('paint-order')}} attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
