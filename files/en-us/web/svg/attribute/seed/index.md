---
title: seed
slug: Web/SVG/Attribute/seed
page-type: svg-attribute
browser-compat: svg.elements.feTurbulence.seed
---

{{SVGRef}}

The **`seed`** attribute represents the starting number for the pseudo random number generator of the {{SVGElement("feTurbulence")}} filter primitive.

You can use this attribute with the following SVG elements:

- {{SVGElement("feTurbulence")}}

## Example

### Example 1

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="0" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="100" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter:url(#noise1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter:url(#noise2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example 1", "220", "220")}}

### Example 2

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence baseFrequency="0.05" seed="1000" result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" style="filter: url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("Example 2", "220", "250")}}

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
