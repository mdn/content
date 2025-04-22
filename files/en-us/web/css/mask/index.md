---
title: mask
slug: Web/CSS/mask
page-type: css-shorthand-property
browser-compat: css.properties.mask
---

{{CSSRef}}

The **`mask`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties) hides an element (partially or fully) by masking or clipping a specified area of the image. It is a shorthand for all the [`mask-*`](#constituent_properties) properties. The property accepts one or more comma-separated values, where each value corresponds to a [`<mask-layer>`](#mask-layer).

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

> [!NOTE]
> As the `mask` shorthand resets all the component properties as well as the {{cssxref("mask-border")}} properties to their initial values, the specification authors recommend using the `mask` shorthand rather than the individual component properties to override any mask values set earlier in the cascade. This ensures that `mask-border` is also reset, allowing the new styles to take effect.

## Syntax

```css
/* Keyword values */
mask: none;

/* Image values */
mask: url(mask.png); /* Raster image used as mask */
mask: url(masks.svg#star); /* SVG used as mask */

/* Combined values */
mask: url(masks.svg#star) luminance; /* Luminance mask */
mask: url(masks.svg#star) 40px 20px; /* Mask positioned 40px from the top and 20px from the left */
mask: url(masks.svg#star) 0 0/50px 50px; /* Mask with a width and height of 50px */
mask: url(masks.svg#star) repeat-x; /* Horizontally-repeated mask */
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

  - : One or more comma-separated mask layers, consisting of the following components:

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
      - : Sets the area affected by the mask image. See {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Sets the compositing operation used on the current mask layer. See {{cssxref("mask-composite")}}.

## Description

The `mask` property hides part or all of the element it is applied to. Which parts are hidden, visible, or partially rendered depends on the opacity of the mask at that pixel. The sections masked by opaque parts of the mask are completely hidden, whereas transparent sections of the mask render the element visible.

While not all constituent mask properties need to be declared, any values that are omitted default to their initial values, which are:

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

If there are two `<geometry-box>` values present, the first is the `mask-origin` value, while the second is the `mask-clip` value. If one `<geometry-box>` value and the `no-clip` keyword are present, the `<geometry-box>` is the value of the `mask-origin` property, as the `no-clip` is only valid for the `mask-clip` property. In this case, the order of the two values doesn't matter. If only one `<geometry-box>` value is present (with no `no-clip` keyterm specified), this value is used for both the `mask-origin` and `mask-clip` properties.

As the `mask` shorthand resets all the `mask-border-*` properties to their `initial` value, you should declare these properties — or the {{cssxref("mask-border")}} shorthand — after any `mask` declarations. When setting `mask` in your declaration block, you also implicitly set the following:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

For this reason, the specification recommends using the `mask` shorthand rather than the individual component properties to override any masks set earlier in the cascade. This ensures that `mask-border` has also been reset.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Masking an image

In this example, an image is masked using a CSS-generated repeating conic gradient as a mask source. We'll also show the gradient as a background image for comparison.

#### HTML

We include an {{htmlelement("img")}} and an empty {{htmlelement("div")}} element.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

We set the same {{cssxref("border")}}, {{cssxref("padding")}}, and sizing on both the `<img>` and `<div>`.

```css
img,
div {
  border: 20px dashed rebeccapurple;
  box-sizing: content-box;
  padding: 20px;
  height: 220px;
  width: 220px;
}
```

We then apply a mask to the `<img>`. The `mask-image` is generated using a {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} function. We define it to be a `100px` by `100px` gradient, which repeats starting at the top and left corner of the image's `content-box`. We include two `<geometry-box>` values; the first sets the `mask-origin` and the second defines the `mask-clip` property value. The gradient goes from transparent to solid `lightgreen`. We used `lightgreen` to demonstrate that it isn't the color of the mask that is important, but rather its transparency.

```css
img {
  mask: repeating-radial-gradient(
      circle,
      transparent 0 5px,
      lightgreen 15px 20px
    )
    content-box border-box 0% 0% / 100px 100px repeat;
}
```

Finally, we use the same value for the `<div>`'s {{cssxref("background")}} shorthand property as we used for the `mask`.

```css
div {
  background: repeating-radial-gradient(
      circle,
      transparent 0 5px,
      lightgreen 15px 20px
    )
    content-box border-box 0% 0% / 100px 100px repeat;
}
```

#### Results

{{EmbedLiveSample("Masking an image", "", "630")}}

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
