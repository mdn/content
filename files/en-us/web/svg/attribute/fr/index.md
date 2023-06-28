---
title: fr
slug: Web/SVG/Attribute/fr
page-type: svg-attribute
browser-compat: svg.elements.radialGradient.fr
---

{{SVGRef}}

The **`fr`** attribute defines the radius of the focal point for the radial gradient.

You can use this attribute with the following SVG elements:

- {{SVGElement("radialGradient")}}

## Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

### Changing the value of `fr`

The following example presents two circles: the first one has `fr` set to `5%` while the other circle has `fr` set to `25%`.

```html
<svg
  viewBox="0 0 480 200"
  width="420"
  height="160"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="gradient1"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.35"
      fy="0.35"
      fr="5%">
      <stop offset="0%" stop-color="white" />
      <stop offset="100%" stop-color="darkseagreen" />
    </radialGradient>
    <radialGradient
      id="gradient2"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.35"
      fy="0.35"
      fr="25%">
      <stop offset="0%" stop-color="white" />
      <stop offset="100%" stop-color="darkseagreen" />
    </radialGradient>
  </defs>

  <circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
  <circle
    cx="100"
    cy="100"
    r="100"
    fill="url(#gradient2)"
    style="transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("changing_the_value_of_fr", "480", "200")}}

### The focal point's relationship to `(fx, fy)`

This example has `fr` equal to `5%` and is representing how the attributes `fx` and `fy` (the points labeled as such in the SVG) act as the origin for the focal point of the radial gradient. This focal point is a circle whose radius (the value of `fr`) defines when the first color stop, in this case the color red, should start transitioning into the other color stop, which in this case is the color blue.

```html
<svg
  viewBox="0 0 120 120"
  width="165"
  height="165"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="Gradient"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.35"
      fy="0.35"
      fr="5%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient)"
    stroke="black"
    stroke-width="2" />

  <circle
    cx="60"
    cy="60"
    r="50"
    fill="transparent"
    stroke="white"
    stroke-width="2" />
  <circle cx="45" cy="45" r="2" fill="white" stroke="white" />
  <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{EmbedLiveSample("the_focal_points_relationship_to_fx_fy", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
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
