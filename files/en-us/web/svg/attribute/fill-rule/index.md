---
title: fill-rule
slug: Web/SVG/Attribute/fill-rule
page-type: svg-attribute
browser-compat: svg.attributes.presentation.fill-rule
---

{{SVGRef}}

The **`fill-rule`** attribute is a presentation attribute defining the algorithm to use to determine the _inside_ part of a shape.

> **Note:** As a presentation attribute, `fill-rule` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Default value for fill-rule -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  The center of the shape has two
  path segments (shown by the red stroke)
  between it and infinity. It is therefore
  considered outside the shape, and not filled.
  -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="150,0 121,90 198,35 102,35 179,90" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>nonzero</code> | <code>evenodd</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>nonzero</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

The `fill-rule` attribute provides two options for how the inside (that is, the area to be filled) of a shape is determined:

### nonzero

The value `nonzero` determines the "insideness" of a point in the shape by drawing a ray from that point to infinity in any direction, and then examining the places where a segment of the shape crosses the ray. Starting with a count of zero, add one each time a path segment crosses the ray from left to right and subtract one each time a path segment crosses the ray from right to left. After counting the crossings, if the result is zero then the point is outside the path. Otherwise, it is inside.

#### Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of nonzero fill rule on crossing path segments -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Effect of nonzero fill rule on a shape inside a shape
  with the path segment moving in the same direction
  (both squares drawn clockwise, to the "right")
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  Effect of nonzero fill rule on a shape inside a shape
  with the path segment moving in the opposite direction
  (one square drawn clockwise, the other anti-clockwise)
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('nonzero', '100%', 200)}}

### evenodd

The value `evenodd` determines the "insideness" of a point in the shape by drawing a ray from that point to infinity in any direction and counting the number of path segments from the given shape that the ray crosses. If this number is odd, the point is inside; if even, the point is outside.

#### Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of evenodd fill rule on crossing path segments -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Effect of evenodd fill rule on a shape inside a shape
  with the path segment moving in the same direction
  (both squares drawn clockwise, to the "right")
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  Effect of evenodd fill rule on a shape inside a shape
  with the path segment moving in opposite direction
  (one square drawn clockwise, the other anti-clockwise)
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('evenodd', '100%', 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
