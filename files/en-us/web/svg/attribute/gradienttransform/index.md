---
title: gradientTransform
slug: Web/SVG/Attribute/gradientTransform
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.elements.linearGradient.gradientTransform
---
{{SVGRef}}

The `gradientTransform` attribute contains the definition of an optional additional transformation from the gradient coordinate system onto the target coordinate system (i.e., userSpaceOnUse or objectBoundingBox). This allows for things such as skewing the gradient. This additional transformation matrix is post-multiplied to (i.e., inserted to the right of) any previously defined transformations, including the implicit transformation necessary to convert from object bounding box units to user space.

You can use this attribute with the following SVG elements:

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <radialGradient id="gradient1" gradientUnits="userSpaceOnUse"
      cx="100" cy="100" r="100" fx="100" fy="100">
    <stop offset="0%" stop-color="darkblue" />
    <stop offset="50%" stop-color="skyblue" />
    <stop offset="100%" stop-color="darkblue" />
  </radialGradient>
  <radialGradient id="gradient2" gradientUnits="userSpaceOnUse"
      cx="100" cy="100" r="100" fx="100" fy="100"
      gradientTransform="skewX(20) translate(-35, 0)">
    <stop offset="0%" stop-color="darkblue" />
    <stop offset="50%" stop-color="skyblue" />
    <stop offset="100%" stop-color="darkblue" />
  </radialGradient>

  <rect x="0" y="0" width="200" height="200" fill="url(#gradient1)" />
  <rect x="0" y="0" width="200" height="200" fill="url(#gradient2)" style="transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Default value</th>
      <td><em>Identity transform</em></td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;transform-list></code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<transform-list>`
  - : A list of [transformation functions](/en-US/docs/Web/CSS/transform-function) specifying some additional transformation from the gradient coordinate system onto the target coordinate system.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function")}}
