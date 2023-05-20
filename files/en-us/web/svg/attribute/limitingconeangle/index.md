---
title: limitingConeAngle
slug: Web/SVG/Attribute/limitingConeAngle
page-type: svg-attribute
browser-compat: svg.elements.feSpotLight.limitingConeAngle
---

{{SVGRef}}

The **`limitingConeAngle`** attribute represents the angle in degrees between the spot light axis (i.e. the axis between the light source and the point to which it is pointing at) and the spot light cone. So it defines a limiting cone which restricts the region where the light is projected. No light is projected outside the cone.

You can use this attribute with the following SVG elements:

- {{SVGElement("feSpotLight")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="spotLight1" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting diffuseConstant="2">
      <feSpotLight
        x="10"
        y="10"
        z="50"
        pointsAtX="100"
        pointsAtY="100"
        limitingConeAngle="10" />
    </feDiffuseLighting>
  </filter>
  <filter id="spotLight2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting diffuseConstant="2">
      <feSpotLight
        x="10"
        y="10"
        z="50"
        pointsAtX="100"
        pointsAtY="100"
        limitingConeAngle="40" />
    </feDiffuseLighting>
  </filter>

  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#spotLight1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#spotLight2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
