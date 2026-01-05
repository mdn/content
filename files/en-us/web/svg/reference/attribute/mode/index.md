---
title: mode
slug: Web/SVG/Reference/Attribute/mode
page-type: svg-attribute
browser-compat: svg.elements.feBlend.mode
sidebar: svgref
---

The **`mode`** attribute defines the blending mode on the {{SVGElement("feBlend")}} filter primitive.

You can use this attribute with the following SVG elements:

- {{SVGElement("feBlend")}}

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
  <filter id="blending1" x="0" y="0" width="100%" height="100%">
    <feFlood
      result="floodFill"
      x="0"
      y="0"
      width="100%"
      height="100%"
      flood-color="seagreen"
      flood-opacity="1" />
    <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
  </filter>
  <filter id="blending2" x="0" y="0" width="100%" height="100%">
    <feFlood
      result="floodFill"
      x="0"
      y="0"
      width="100%"
      height="100%"
      flood-color="seagreen"
      flood-opacity="1" />
    <feBlend in="SourceGraphic" in2="floodFill" mode="color-dodge" />
  </filter>

  <image
    href="mdn_logo_only_color.png"
    width="200"
    height="200"
    filter="url(#blending1)" />
  <image
    x="220"
    href="mdn_logo_only_color.png"
    width="200"
    height="200"
    filter="url(#blending2)" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("blend-mode")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

For a description of the values, see {{cssxref("blend-mode")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
