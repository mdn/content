---
title: clip
slug: Web/SVG/Attribute/clip
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.clip
---
{{SVGRef}}{{deprecated_header}}

The **`clip`** attribute is a presentation attribute defining the visible region of an element.

This attribute has the same parameter values as defined for the {{ cssxref("clip","CSS clip property") }}. Unitless values, which indicate current user coordinates, are permitted on the coordinate values on the `rect()`. The value of `auto` defines a clipping path along the bounds of the viewport created by the given element.

You can use this attribute with the following SVG elements:

- {{ SVGElement("svg") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("image") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("marker") }}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Auto clipping -->
  <svg x="0" width="10" height="10"
       clip="auto">
    <circle cx="5" cy="5" r="4" stroke="green" />
  </svg>

  <!-- Rect(top, right, bottom, left) clipping -->
  <svg x="10" width="10" height="10"
       clip="rect(1, 9, 8, 2)">
    <circle cx="5" cy="5" r="4" stroke="green" />
  </svg>
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Usage notes

> **Warning:** This property is deprecated. Use {{cssxref("clip-path")}} instead.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>auto</code> | <code>rect()</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

The value `auto` defines a clipping path along the bounds of the viewport created by the given element. The value `rect()` defines a clipping rectangle following the following syntax: `rect(<top>, <right>, <bottom>, <left>)`. The `<top>` and `<bottom>` values specify offsets from the _top border edge_ of the element viewport, while `<right>` and `<left>` specify offsets from the _left border edge_ of the element viewport.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}s
