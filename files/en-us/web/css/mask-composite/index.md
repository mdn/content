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

The property accepts a comma-separated list of `<compositing-operator>` keyword values. In the following, the current mask layer is referred to source, all mask layers below it (with the corresponding compositing operators applied) are referred to destination.

- `add`
  - : The source is placed over the destination. This is the default value.
- `subtract`
  - : The source is placed, where it falls outside of the destination.
- `intersect`
  - : The parts of source that overlap the destination, replace the destination.
- `exclude`
  - : The non-overlapping regions of source and destination are combined.

## Description

An element can have multiple mask layers applied. The `mask-composite` property defines whether the associated mask layer image is added to, subtracted from, intersects with, or is excluded from, the destination layers. The _destination layers_ includes all the previous layers, composed in order of appearance within the comma-separated list of masks.

Mask layers are not composite with the element's content or the content behind the element. Rather, all the mask layers act as if they are rendered into an isolated group.

All mask layers below the current mask layer must be composited before applying the compositing operation for the current mask layer.

Each keyword represents a Porter-Duff compositing operator [COMPOSITING-1] which defines the compositing operation used on the current mask layer with the mask layers below it.

The number of layers is determined by the number of comma-separated values in the `mask-image` property value (even if a value is `none`). Each `mask-composite` value in the comma-separated list of values is matched up with the `mask-image` values, in order. If the number of values in the two properties differs, and excess values of `mask-clip` are not used, or, if `mask-clip` has fewer values than `mask-image`, the `mask-clip` values are repeated.

For the composition the current mask layer is referred to as _source_, while all layers below it are referred to as _destination_.

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

This example demonstrates the `mask-composite` property's four `<compositing-operator>` keyword values

#### HTML

```html hidden
<table>
  <tbody>
    <tr>
      <th colspan="4">mask-type: initial</th>
    </tr>
    <tr>
      <th>mask-composite: add</th>
      <th>mask-composite: subtract</th>
      <th>mask-composite: intersect</th>
      <th>mask-composite: exclude</th>
    </tr>
    <tr class="initMaskType">
      <td></td>
    </tr>
  </tbody>
</table>
```

We have a {{htmltable("table")}} that contain twelve images.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

```html hidden
      </td>
      <td>
        <img
          id="stroke"
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
    <tr>
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

We include six masks including three hearts and three circles.

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
</svg>
```

For the sake of brevity, as the `<mask>` elements only differ in `id` and `class` name, we've hidded the luminance and default set. We've hidden the 11 other `<img>` elements and the table structure.

```html hidden
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
<mask id="heartInitial" class="init">
  <path
    d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
    fill="green"
    stroke="white"
    stroke-width="20" />
</mask>
<mask id="circleInitial" class="init">
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
