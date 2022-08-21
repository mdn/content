---
title: preserveAlpha
slug: Web/SVG/Attribute/preserveAlpha
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feConvolveMatrix.preserveAlpha
---
{{SVGRef}}

the `preserveAlpha` attribute indicates how a {{SVGElement("feConvolveMatrix")}} element handled alpha transparency.

You can use this attribute with the following SVG elements:

- {{SVGElement("feConvolveMatrix")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="convolveMatrix1" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="1 -1 2 0 0 0 0 0 -2" preserveAlpha="true"/>
  </filter>
  <filter id="convolveMatrix2" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="1 -1 2 0 0 0 0 0 -2" preserveAlpha="false"/>
  </filter>

  <image xlink:href="mdn_logo_only_color.png" width="200" height="200"
      style="filter:url(#convolveMatrix1);"/>
  <image xlink:href="mdn_logo_only_color.png" width="200" height="200"
      style="filter:url(#convolveMatrix2); transform:translateX(220px);"/>
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Default value</th>
      <td><code>false</code></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td><code>true</code> | <code>false</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `true`
  - : This value indicates that the convolution will only apply to the color channels. In this case, the filter will temporarily unpremultiply the color component values and apply the kernel.
- `false`
  - : This value indicates that the convolution will apply to all channels, including the alpha channel.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
