---
title: color
slug: Web/SVG/Attribute/color
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.color
---
{{SVGRef}}

The **`color`** attribute is used to provide a potential indirect value, `currentcolor`, for the {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}}, and {{SVGAttr("lighting-color")}} attributes.

> **Note:** As a presentation attribute, `color` can be used as a CSS property. See [CSS color](/en-US/docs/Web/CSS/color) for further information.

As a presentation attribute, it can be applied to any element, but as noted above, it has no direct effect on SVG elements.

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code><a href="/en-US/docs/Web/CSS/color_value">&#x3C;color></a></code>
        | <code>inherit</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>Depends on user agent</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g color="green">
    <rect width="50" height="50" fill="currentcolor" />
    <circle r="25" cx="70" cy="70" stroke="currentcolor" fill="none" stroke-width="5" />
  </g>
</svg>
```

{{EmbedLiveSample("Example", "100%", "110")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
