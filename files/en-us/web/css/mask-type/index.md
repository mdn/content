---
title: mask-type
slug: Web/CSS/mask-type
page-type: css-property
browser-compat: css.properties.mask-type
---

{{CSSRef}}

The **`mask-type`** [CSS](/en-US/docs/Web/CSS) property sets whether an SVG {{svgElement("mask")}} element's _luminance_ or _alpha_ channels are used when the element on which the mask is applied has it's {{cssxref("mask-mode")}} property value explicitly set to or defaults to `match-mode`.

## Syntax

```css
/* Keyword values */
mask-type: luminance;
mask-type: alpha;

/* Global values */
mask-type: inherit;
mask-type: initial;
mask-type: revert;
mask-type: revert-layer;
mask-type: unset;
```

### Values

The `mask-type` property accepts a comma-separated list of keyword values, including:

- `luminance`
  - : Indicates that the luminance values of the `<mask>` should be used.
- `alpha`
  - : Indicates that the alpha values of the `<mask>` should be used.

## Description

The `mask-type` property is only relevant to mask layers when the mask image is a `<mask>` element. The property defines whether the resolved value of the {{cssxref("mask-mode")}} property value if the `mask-mode` property is explicitly set to or defaults to `match-mode`. If `mask-mode` is set to any other `<masking-mode>` value, that value overrides the `mask-type` value. If the mask image source is not an SVG `<mask>`, this property has no effect.

by the mask defined by a `<mask>` element being used as an element's `mask-image`, i.e., the `<mask>`'s [relative luminance](https://en.wikipedia.org/wiki/Luminance_%28relative%29) values should be used when masking is applied.

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting an alpha mask

#### HTML

```html live-sample___mask-type-alpha-example
<section>
  <div class="red-square"></div>
</section>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="0"
  height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox">
      <rect
        x=".2"
        y=".1"
        width=".4"
        height=".8"
        fill="yellow"
        fill-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### CSS

```css live-sample___mask-type-alpha-example
* {
  margin: 0px;
  padding: 0px;
}

section {
  width: fit-content;
  border: 1px solid blue;
}

.red-square {
  height: 100px;
  width: 100px;
  background-color: red;
  border: solid 1px black;
  mask: url("#m");
}

mask {
  mask-type: alpha;
}
```

#### Result

{{EmbedLiveSample("mask-type-alpha-example", "", "150px")}}

### Setting a luminance mask

#### HTML

```html live-sample___mask-type-luminance-example
<section>
  <div class="red-square"></div>
</section>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="0"
  height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox">
      <rect
        x=".2"
        y=".1"
        width=".4"
        height=".8"
        fill="yellow"
        fill-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### CSS

```css live-sample___mask-type-luminance-example
* {
  margin: 0px;
  padding: 0px;
}

section {
  width: fit-content;
  border: 1px solid blue;
}

.red-square {
  height: 100px;
  width: 100px;
  background-color: red;
  border: solid 1px black;
  mask: url("#m");
}

mask {
  mask-type: luminance;
}
```

#### Result

{{EmbedLiveSample("mask-type-luminance-example", "", "150px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other mask-related properties: {{cssxref("mask")}}, {{cssxref("mask-mode")}}
