---
title: fy
slug: Web/SVG/Attribute/fy
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.elements.radialGradient.fy
---
{{SVGRef}}

The **`fy`** attribute defines the y-axis coordinate of the focal point for a radial gradient.

You can use this attribute with the following SVG elements:

- {{SVGElement("radialGradient")}}

## Example

### Example 1

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradient1" cx="0.5" cy="0.5" r="0.5"
        fx="0.35" fy="0.35" fr="5%">
      <stop offset="0%" stop-color="white"/>
      <stop offset="100%" stop-color="darkseagreen"/>
    </radialGradient>
    <radialGradient id="gradient2" cx="0.5" cy="0.5" r="0.5"
        fx="0.35" fy="0.75" fr="5%">
      <stop offset="0%" stop-color="white"/>
      <stop offset="100%" stop-color="darkseagreen"/>
    </radialGradient>
  </defs>

  <circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
  <circle cx="100" cy="100" r="100" fill="url(#gradient2)" style="transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("Example 1", "480", "200")}}

### Example 2

```html
<svg viewBox="0 0 120 120" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="Gradient" cx="0.5" cy="0.5" r="0.5"
        fx="0.35" fy="0.35" fr="5%">
      <stop offset="0%" stop-color="red"/>
      <stop offset="100%" stop-color="blue"/>
    </radialGradient>
  </defs>

  <rect x="10" y="10" rx="15" ry="15" width="100" height="100"
      fill="url(#Gradient)" stroke="black" stroke-width="2"/>

  <circle cx="60" cy="60" r="50" fill="transparent" stroke="white" stroke-width="2"/>
  <circle cx="35" cy="35" r="2" fill="white" stroke="white"/>
  <circle cx="60" cy="60" r="2" fill="white" stroke="white"/>
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">(fx,fy)</text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">(cx,cy)</text>
</svg>
```

{{EmbedLiveSample("Example 2", "200", "250")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        Coincides with the presentational value of {{SVGAttr("cy")}} for
        the element whether the value for <code>cy</code> was inherited or not.
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>None</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
