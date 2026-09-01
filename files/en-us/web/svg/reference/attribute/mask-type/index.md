---
title: mask-type
slug: Web/SVG/Reference/Attribute/mask-type
page-type: svg-attribute
browser-compat: svg.elements.mask.mask-type
sidebar: svgref
---

The **`mask-type`** attribute indicates which mask mode, _alpha_ or _luminance_, to use for the contents of the {{ SVGElement("mask") }} element when masking.

You can use this attribute with the following SVG elements:

- {{SVGElement('mask')}}

> [!NOTE]
> This presentation attribute has a CSS property counterpart: {{cssxref("mask-type")}}. When both are specified, the CSS property takes priority.

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
  <!-- Two identical masks other than the id and mask-type values -->
  <mask id="myMask1" mask-type="alpha">
    <rect
      fill="rgb(10% 10% 10% / 0.4)"
      x="0"
      y="0"
      width="100%"
      height="100%" />
    <circle fill="rgb(90% 90% 90% / 0.6)" cx="50" cy="50" r="35" />
  </mask>

  <mask id="myMask2" mask-type="luminance">
    <rect
      fill="rgb(10% 10% 10% / 0.4)"
      x="0"
      y="0"
      width="100%"
      height="100%" />
    <circle fill="rgb(90% 90% 90% / 0.6)" cx="50" cy="50" r="35" />
  </mask>

  <!-- The first rect is masked with an alpha mask -->
  <rect x="0" y="0" width="45" height="45" mask="url(#myMask1)" fill="red" />

  <!-- The last rect is masked with a luminance mask -->
  <rect x="55" y="0" width="45" height="45" mask="url(#myMask2)" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## mask

For {{SVGElement("mask")}}, the `mask-type` defines whether the content of the mask element is treated as a luminance mask or an alpha mask.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>alpha</code> | <code>luminance</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>luminance</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Discrete</td>
    </tr>
  </tbody>
</table>

- `alpha`
  - : This value indicates that the {{SVGElement('mask')}} element's alpha values should be used; the pixels of the masked object match the opaqueness of the mask areas, without regard to the luminance of the colors of the mask.
- `luminance`
  - : This value indicates that the {{SVGElement('mask')}} element's luminance values should be used; the opaqueness of the masked object depends on the opacity and lightness of the mask. The opacity of a `luminance` mask is determined by the `R`, `G`, `B`, and `A` channels of the mask, using the equation `((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("mask-type")}} property
- CSS {{cssxref("mask-mode")}} property
- [Introduction to CSS masking](/en-US/docs/Web/CSS/Guides/Masking/Introduction)
