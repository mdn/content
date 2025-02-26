---
title: maskUnits
slug: Web/SVG/Attribute/maskUnits
page-type: svg-attribute
browser-compat: svg.elements.mask.maskUnits
---

{{SVGRef}}

The **`maskUnits`** attribute indicates which coordinate system to use for the geometry properties of the {{ SVGElement("mask") }} element.

You can use this attribute with the following SVG elements:

- {{SVGElement('mask')}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <mask
    id="myMask1"
    maskUnits="userSpaceOnUse"
    x="20%"
    y="20%"
    width="60%"
    height="60%">
    <rect fill="black" x="0" y="0" width="100%" height="100%" />
    <circle fill="white" cx="50" cy="50" r="35" />
  </mask>

  <mask
    id="myMask2"
    maskUnits="objectBoundingBox"
    x="20%"
    y="20%"
    width="60%"
    height="60%">
    <rect fill="black" x="0" y="0" width="100%" height="100%" />
    <circle fill="white" cx="50" cy="50" r="35" />
  </mask>

  <!-- Some reference rect to materialized the mask -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
  <rect id="r2" x="0" y="55" width="45" height="45" />
  <rect id="r3" x="55" y="55" width="45" height="45" />
  <rect id="r4" x="55" y="0" width="45" height="45" />

  <!-- The first 3 rect are masked with useSpaceOnUse units -->
  <use mask="url(#myMask1)" href="#r1" fill="red" />
  <use mask="url(#myMask1)" href="#r2" fill="red" />
  <use mask="url(#myMask1)" href="#r3" fill="red" />

  <!-- The last rect is masked with objectBoundingBox units -->
  <use mask="url(#myMask2)" href="#r4" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## mask

For {{SVGElement('mask')}}, `maskUnits` defines the coordinate system in use for the geometry attributes ({{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} and {{ SVGAttr("height") }}) of the element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : This value indicates that all coordinates for the geometry attributes refer to the user coordinate system as defined when the mask was created.
- `objectBoundingBox`
  - : This value indicates that all coordinates for the geometry attributes represent fractions or percentages of the bounding box of the element to which the mask is applied. A bounding box could be considered the same as if the content of the {{ SVGElement("mask") }} were bound to a `"0 0 1 1"` {{ SVGAttr("viewBox") }}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
