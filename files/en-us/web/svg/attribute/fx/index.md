---
title: fx
slug: Web/SVG/Attribute/fx
page-type: svg-attribute
browser-compat: svg.elements.radialGradient.fx
---

{{SVGRef}}

The **`fx`** attribute defines the x-axis coordinate of the focal point for a radial gradient.

You can use this attribute with the following SVG elements:

- {{SVGElement("radialGradient")}}

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
      fx="0.75"
      fy="0.35"
      fr="5%">
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

{{EmbedLiveSample("Example", "480", "200")}}

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
        Coincides with the presentational value of {{SVGAttr("cx")}} for
        the element whether the value for <code>cx</code> was inherited or not.
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
