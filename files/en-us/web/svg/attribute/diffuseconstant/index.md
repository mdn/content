---
title: diffuseConstant
slug: Web/SVG/Attribute/diffuseConstant
page-type: svg-attribute
browser-compat: svg.elements.feDiffuseLighting.diffuseConstant
---

{{SVGRef}}

The **`diffuseConstant`** attribute represents the k<sub>d</sub> value in the [Phong lighting model](https://en.wikipedia.org/wiki/Phong_reflection_model). In SVG, this can be any non-negative number.

It's used to determine the final RGB value of a given pixel. The brighter the lighting-color, the smaller this number should be.

You can use this attribute with the following SVG elements:

- {{SVGElement("feDiffuseLighting")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="diffuseLighting1" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic" diffuseConstant="1">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>
  <filter id="diffuseLighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic" diffuseConstant="2">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>

  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#diffuseLighting1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#diffuseLighting2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Description of Phong reflection model on Wikipedia](https://en.wikipedia.org/wiki/Phong_reflection_model)
