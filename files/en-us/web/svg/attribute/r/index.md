---
title: r
slug: Web/SVG/Attribute/r
tags:
  - SVG
  - SVG Attribute
spec-urls:
  - https://svgwg.org/svg2-draft/geometry.html#R
  - https://svgwg.org/svg2-draft/pservers.html#RadialGradientElementRAttribute
---
{{SVGRef}}

The **`r`** attribute defines the radius of a circle.

You can use this attribute with the following SVG elements:

- {{SVGElement("circle")}}
- {{SVGElement("radialGradient")}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <radialGradient r="0" id="myGradient000">
    <stop offset="0"    stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="50%" id="myGradient050">
    <stop offset="0"    stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="100%" id="myGradient100">
    <stop offset="0"    stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50"  cy="50" r="0"/>
  <circle cx="150" cy="50" r="25"/>
  <circle cx="250" cy="50" r="50"/>

  <rect x="20"  y="120" width="60" height="60" fill="url(#myGradient000)" />
  <rect x="120" y="120" width="60" height="60" fill="url(#myGradient050)" />
  <rect x="220" y="120" width="60" height="60" fill="url(#myGradient100)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## circle

For {{SVGElement('circle')}}, `r` defines the radius of the circle and therefor its size. With a value lower or equal to zero the circle won't be drawn at all.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
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

> **Note:** Starting with SVG2, `r` is a _Geometry Property_ meaning this attribute can also be used as a CSS property for circles.

## radialGradient

For {{ SVGElement("radialGradient") }}, `r` defines the radius of the end circle for the radial gradient.

The gradient will be drawn such that the **100%** gradient stop is mapped to the perimeter of this end circle. A value of lower or equal to zero will cause the area to be painted as a single color using the color and opacity of the last gradient {{ SVGElement("stop") }}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>50%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}
