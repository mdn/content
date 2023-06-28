---
title: clipPathUnits
slug: Web/SVG/Attribute/clipPathUnits
page-type: svg-attribute
spec-urls: https://drafts.fxtf.org/css-masking-1/#element-attrdef-clippath-clippathunits
---

{{SVGRef}}

The **`clipPathUnits`** attribute indicates which coordinate system to use for the contents of the {{ SVGElement("clipPath") }} element.

You can use this attribute with the following SVG elements:

- {{SVGElement('clipPath')}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <clipPath id="myClip2" clipPathUnits="objectBoundingBox">
    <circle cx=".5" cy=".5" r=".35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
  <rect id="r2" x="0" y="55" width="45" height="45" />
  <rect id="r3" x="55" y="55" width="45" height="45" />
  <rect id="r4" x="55" y="0" width="45" height="45" />

  <!-- The first 3 rect are clipped with userSpaceOnUse units -->
  <use clip-path="url(#myClip1)" xlink:href="#r1" fill="red" />
  <use clip-path="url(#myClip1)" xlink:href="#r2" fill="red" />
  <use clip-path="url(#myClip1)" xlink:href="#r3" fill="red" />

  <!-- The last rect is clipped with objectBoundingBox units -->
  <use clip-path="url(#myClip2)" xlink:href="#r4" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## clipPath

For {{SVGElement('clipPath')}}, `clipPathUnits` define the coordinate system in use for the content of the element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>userSpaceOnUse</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- userSpaceOnUse
  - : This value indicates that all coordinates inside the {{SVGElement('clipPath')}} element refer to the user coordinate system as defined when the clipping path was created.
- objectBoundingBox
  - : This value indicates that all coordinates inside the {{SVGElement('clipPath')}} element are relative to the bounding box of the element the clipping path is applied to. It means that the origin of the coordinate system is the top left corner of the object bounding box and the width and height of the object bounding box are considered to have a length of 1 unit value.

## Specifications

{{Specifications}}
