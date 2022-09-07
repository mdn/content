---
title: pointer-events
slug: Web/SVG/Attribute/pointer-events
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.pointer-events
---
{{SVGRef}}

The **`pointer-events`** attribute is a presentation attribute that allows defining whether or when an element may be the target of a mouse event.

> **Note:** As a presentation attribute {{cssxref('pointer-events')}} can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement('a')}}
- {{SVGElement('circle')}}
- {{SVGElement('clipPath')}}
- {{SVGElement('defs')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('foreignObject')}}
- {{SVGElement('g')}}
- {{SVGElement('image')}}
- {{SVGElement('line')}}
- {{SVGElement('marker')}}
- {{SVGElement('mask')}}
- {{SVGElement('path')}}
- {{SVGElement('pattern')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('svg')}}
- {{SVGElement('switch')}}
- {{SVGElement('symbol')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}
- {{SVGElement('use')}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  The circle will always intercept the mouse event.
  To change the color of the rect underneath you have
  to click outside the circle
  -->
  <rect x="0" y="0" height="10" width="10" fill="black" />
  <circle cx="5" cy="5" r="4" fill="white"
          pointer-events="visiblePainted" />

  <!--
  The circle below will never catch a mouse event.
  The rect underneath will change color whether you
  are clicking on the circle or the rect itself
  -->
  <rect x="10" y="0" height="10" width="10" fill="black" />
  <circle cx="15" cy="5" r="4" fill="white"
          pointer-events="none" />
</svg>
```

```js
window.addEventListener('mouseup', (e) => {
  // Let's pick a random color between #000000 and #FFFFFF
  const color = Math.round(Math.random() * 0xFFFFFF);

  // Let's format the color to fit CSS requirements
  const fill = `#${color.toString(16).padStart(6, '0')}`;

  // Let's apply our color in the
  // element we actually clicked on
  e.target.style.fill = fill;
})
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>bounding-box</code> | <code>visiblePainted</code> |
        <code>visibleFill</code> | <code>visibleStroke</code> |
        <code>visible</code> | <code>painted</code> | <code>fill</code> |
        <code>stroke</code> | <code>all</code> | <code>none</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>visiblePainted</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

_For a detailed explanation of each possible value, have a look at the CSS {{cssxref('pointer-events')}} documentation._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
