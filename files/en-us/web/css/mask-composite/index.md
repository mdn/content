---
title: mask-composite
slug: Web/CSS/mask-composite
page-type: css-property
browser-compat: css.properties.mask-composite
---

{{CSSRef}}

The **`mask-composite`** [CSS](/en-US/docs/Web/CSS) property represents a compositing operation used on the current mask layer with the mask layers below it.

## Syntax

```css
/* Keyword values */
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* Global values */
mask-composite: inherit;
mask-composite: initial;
mask-composite: revert;
mask-composite: revert-layer;
mask-composite: unset;
```

### Values

The property accepts a comma-separated list of `<compositing-operator>` keyword values, each representing a Porter-Duff compositing operator which defines the compositing operation used on the current mask layer with the mask layers below it, including:

- `add`
  - : The associated mask image is placed over all mask layers below it (with the corresponding compositing operators applied). This is the default value.
- `subtract`
  - : The associated mask image is placed, where it falls outside of all mask layers below it (with the corresponding compositing operators applied).
- `intersect`
  - : The parts of the associated mask image that overlap all composited mask layers below it replace those previously composited layers.
- `exclude`
  - : The non-overlapping regions of the associated mask image and the mask layers below it, with their corresponding compositing operators applied, are combined.

## Description

When an element has multiple mask layers applied, the `mask-composite` property can be used to define how the multiple masks interact with each other, or are combined, in creating the final mask effect.

The number of layers is determined by the number of comma-separated values in the `mask-image` property value (even if a value is `none`). Each `mask-composite` value in the comma-separated list of values is matched up with a `mask-image` value, in order. If the number of values in `mask-composite` are equal to or greater than the number of `mask-image` values, the extra values are ignored. If the `mask-composite` property doesn't have enough comma-separated values to match the number of layers, the list of values are repeated until there are enough.

For processing, the _source layer_, which is current or associated mask layer image, is either added to (the default), subtracted from, intersected with, or is excluded from, the destination layers. The _destination layers_ are the mask layers below the source with their corresponding compositing operators applied; this includes all the previous layers, composed in order of appearance within the comma-separated list of masks. All mask layers below the current mask layer must be composited before applying the compositing operation for the current mask layer. Mask layer images are transformed to alpha masks for processing before being combined by the defined compositing value.

The multiple mask layers applied to any element or pseudo-element act as if they are rendered into an isolated group. In other words, the mask layers are composited with other mask layers, not with the element's content or the content behind the element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates the basic usage of the `mask-composite` property.

#### HTML

We include an HTML {{htmlelement("div")}} element, that we will then style.

```html
<div></div>
```

#### CSS

We provide size and color our `<div>`, then add two {{cssxref("mask-image")}}s, and make their size match that of the element they're masking with the {{cssxref("mask-size")}} property. Lastly, we subtract the second mask image from the first mask image with the `mask-composite` property set to `subtract`.

```css
div {
  width: 100px;
  height: 100px;
  background-color: red;

  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mdn.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100% 100%;

  mask-composite: subtract;
}
```

#### Results

{{EmbedLiveSample("basic usage", "", "150px")}}

### Value comparison

This example demonstrates the `mask-composite` property's four `<compositing-operator>` keyword values, along with comparing the effects of [`alpha` and `luminance`](/en-US/docs/Web/CSS/mask-type) mask modes.

#### HTML

We have a {{htmlelement("table")}} that contains eight images. The `<table>` has been hidden for brevity.

```html hidden
<table>
  <tbody>
    <tr>
      <th colspan="4">mask-type: alpha</th>
    </tr>
    <tr>
      <th>mask-composite: add</th>
      <th>mask-composite: subtract</th>
      <th>mask-composite: intersect</th>
      <th>mask-composite: exclude</th>
    </tr>
    <tr class="alphaMaskType">
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>

    <tr>
      <th colspan="4">
        <code>mask-type: luminance</code>
      </th>
    </tr>
    <tr>
      <th>mask-composite: add</th>
      <th>mask-composite: subtract</th>
      <th>mask-composite: intersect</th>
      <th>mask-composite: exclude</th>
    </tr>
    <tr class="luminanceMaskType">
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

And an SVG with 4 masks; an alpha heart and circle and a luminance heart and circle. The heart masks are defined using solid colors. The circle masks are created using semi-transparent white and black {{SVGAttr("stroke")}} and {{SVGAttr("fill")}} colors.

```html
<svg height="0" width="0">
  <mask id="heartAlpha" class="alpha">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="circleAlpha" class="alpha">
    <circle
      cx="130"
      cy="130"
      r="50"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
  <mask id="heartLuminance" class="luminance">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="circleLuminance" class="luminance">
    <circle
      cx="130"
      cy="130"
      r="50"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
</svg>
```

#### CSS

First we style the `<mask>` elements, providing each mask with a {{cssxref("mask-type")}} property value of either `alpha` or `luminance`.

```css
mask.luminance {
  mask-type: luminance;
}

mask.alpha {
  mask-type: alpha;
}
```

We then apply the heart and circle masks as the comma-separated {{cssxref("mask-image")}} property values. These are applied to each {{htmlelement("img")}} element, with all the images in a row getting the same masks.

```css
/* apply the mask images */
tr.alphaMaskType img {
  mask-image: url(#heartAlpha), url(#circleAlpha);
}

tr.luminanceMaskType img {
  mask-image: url(#heartLuminance), url(#circleLuminance);
}
```

Finally, we compose the masks using the `mask-composite` property, applying the four different enumerated `mask-composite` values by table column.

```css
/* property we're testing */
td:nth-of-type(1) img {
  mask-composite: add;
}
td:nth-of-type(2) img {
  mask-composite: subtract;
}
td:nth-of-type(3) img {
  mask-composite: intersect;
}
td:nth-of-type(4) img {
  mask-composite: exclude;
}
```

The table styles have been hidden for the sake of brevity.

```css hidden
mask {
  height: 50%;
}

table,
td,
th {
  border: 1px solid;
}
th {
  font-family: monospace;
}
th {
  color: green;
}
body > img {
  display: none;
}
```

#### Results

{{EmbedLiveSample("value comparison", "", "600")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("mask")}} shorthand
- {{cssxref("mask-type")}}
- {{cssxref("mask-mode")}}
- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` properties](/en-US/docs/Web/CSS/CSS_masking/Mask_properties)
- [Declaring multiple masks](/en-US/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
