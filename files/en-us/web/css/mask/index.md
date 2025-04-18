---
title: mask
slug: Web/CSS/mask
page-type: css-shorthand-property
browser-compat: css.properties.mask
---

{{CSSRef}}

The **`mask`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties) hides an element (partially or fully) by masking or clipping the image at specific points. It is a shorthand for all the [`mask-*`](#constituent-properties) properties. The property accepts one or more comma-separated values, where each value corresponds to a [`<mask-layer>`](#mask-layer).

> [!NOTE]
> As well as the properties listed below, the `mask` shorthand also resets {{cssxref("mask-border")}} to its initial value. It is therefore recommended to use the `mask` shorthand rather than other shorthands or the individual properties to override any mask settings earlier in the cascade. This will ensure that `mask-border` has also been reset to allow the new styles to take effect.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("mask-clip")}}
- {{cssxref("mask-composite")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-mode")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}

## Description

The `mask` property is used to hide part or all of the element on which it is applied. The parts that are hidden, visible, or partially rendered depend on the opacity of the mask at that pixel. The sections masked by opaque parts of the mask are completely hidden. Where the mask is fully transparent the element is visible.

While not all constituent properties need to be declared, any values that are omitted default to their initial values, which are:

```css
mask-image: none;
mask-mode: match-source;
mask-position: 0% 0%;
mask-size: auto;
mask-repeat: repeat;
mask-origin: border-box;
mask-clip: border-box;
mask-composite: add;
```

Within each `<mask-layer>`, the `mask-size` component must go after the `mask-position` value, with a forward slash (`/`) separating the two.

As the `mask` shorthand resets all the `mask-border-*` properties to their `initial` value, declare these properties, or the {{cssxref("mask-border")}} shorthand after any `mask` declarations. Using `mask` behaves as if you also set the following in your declaration block:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

For this reason, the specification recommends using the `mask` shorthand rather than the individual component properties to override any masks set earlier in the cascade to ensure that `mask-border` has also been reset.

## Syntax

```css
/* Keyword values */
mask: none;

/* Image values */
mask: url(mask.png); /* Raster image used as mask */
mask: url(masks.svg#star); /* Element with an SVG used as mask */

/* Combined values */
mask: url(masks.svg#star) luminance; /* Luminance mask */
mask: url(masks.svg#star) 40px 20px; /* Mask positioned 40px from the top and 20px from the left */
mask: url(masks.svg#star) 0 0/50px 50px; /* Mask with a width and height of 50px */
mask: url(masks.svg#star) repeat-x; /* Horizontally repeated mask */
mask: url(masks.svg#star) stroke-box; /* Mask extends to the inside edge of the stroke box */
mask: url(masks.svg#star) exclude; /* Mask combined with background using non-overlapping parts */

/* Multiple masks */
mask:
  url(masks.svg#star) left / 16px repeat-y,
  /* 16px-wide mask on the left side */ url(masks.svg#circle) right / 16px
    repeat-y; /* 16px-wide mask against right side */

/* Global values */
mask: inherit;
mask: initial;
mask: revert;
mask: revert-layer;
mask: unset;
```

### Values

- `<mask-layer>`

  - : One or more comma separated mask layers, consisting of the following components:

    - `<mask-reference>`
      - : Sets the mask image source. See {{cssxref("mask-image")}}.
    - `<masking-mode>`
      - : Sets the masking mode of the mask image. See {{cssxref("mask-mode")}}.
    - `<position>`
      - : Sets the position of the mask image. See {{cssxref("mask-position")}}.
    - `<bg-size>`
      - : Sets the size of the mask image. See {{cssxref("mask-size")}}.
    - `<repeat-style>`
      - : Sets the repetition of the mask image. See {{cssxref("mask-repeat")}}.
    - `<geometry-box>`
      - : If only one `<geometry-box>` value is given, it sets both {{cssxref("mask-origin")}} and {{cssxref("mask-clip")}}. If two `<geometry-box>` values are present, then the first sets {{cssxref("mask-origin")}} and the second sets {{cssxref("mask-clip")}}.
    - `<geometry-box> | no-clip`
      - : Sets the area that is affected by the mask image. See {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Sets the compositing operation used on the current mask layer. See {{cssxref("mask-composite")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Masking an image

In this example, an image is masked using a CSS generated repeating conic gradient as a mask source. We'll also show the gradient as a background image for comparison.

#### HTML

We include an {{htmlelement("img")}} and an empty {{htmlelement("div")}} element.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

We apply a mask. The `mask-image` is generated using a {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} function. We define it to be a `100px` by `100px` gradient starting which repeats starting from the center of the image. The gradient goes from transparent to solid black. We apply the same values to the `<div>` using the {{cssxref("background")}} shorthand, adding a background color.

```css hidden
body {
  display: flex;
  gap: 22px;
}
```

```css
img {
  mask: repeating-radial-gradient(circle, transparent 0 5px, black 15px 20px)
    50% 50% / 100px 100px repeat;
}
div {
  background: repeating-radial-gradient(
      circle,
      transparent 0 5px,
      black 15px 20px
    )
    50% 50% / 100px 100px repeat magenta;
  height: 220px;
  width: 220px;
}
```

#### Results

{{EmbedLiveSample("Masking an image", "", "240")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("clip-path")}}
- {{CSSxRef("filter")}}
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
- SVG {{SVGAttr("mask")}} attribute
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
