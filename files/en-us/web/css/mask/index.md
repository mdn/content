---
title: mask
slug: Web/CSS/mask
page-type: css-shorthand-property
browser-compat: css.properties.mask
---

{{CSSRef}}

The **`mask`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) hides an element (partially or fully) by masking or clipping the image at specific points.

> [!NOTE]
> As well as the properties listed below, the `mask` shorthand also resets {{cssxref("mask-border")}} to its initial value. It is therefore recommended to use the `mask` shorthand rather than other shorthands or the individual properties to override any mask settings earlier in the cascade. This will ensure that `mask-border` has also been reset to allow the new styles to take effect.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`mask-clip`](/en-US/docs/Web/CSS/mask-clip)
- [`mask-composite`](/en-US/docs/Web/CSS/mask-composite)
- [`mask-image`](/en-US/docs/Web/CSS/mask-image)
- [`mask-mode`](/en-US/docs/Web/CSS/mask-mode)
- [`mask-origin`](/en-US/docs/Web/CSS/mask-origin)
- [`mask-position`](/en-US/docs/Web/CSS/mask-position)
- [`mask-repeat`](/en-US/docs/Web/CSS/mask-repeat)
- [`mask-size`](/en-US/docs/Web/CSS/mask-size)

## Syntax

```css
/* Keyword values */
mask: none;

/* Image values */
mask: url(mask.png); /* Pixel image used as mask */
mask: url(masks.svg#star); /* Element within SVG graphic used as mask */

/* Combined values */
mask: url(masks.svg#star) luminance; /* Element within SVG graphic used as luminance mask */
mask: url(masks.svg#star) 40px 20px; /* Element within SVG graphic used as mask positioned 40px from the top and 20px from the left */
mask: url(masks.svg#star) 0 0/50px 50px; /* Element within SVG graphic used as mask with a width and height of 50px */
mask: url(masks.svg#star) repeat-x; /* Element within SVG graphic used as horizontally repeated mask */
mask: url(masks.svg#star) stroke-box; /* Element within SVG graphic used as mask extending to the box enclosed by the stroke */
mask: url(masks.svg#star) exclude; /* Element within SVG graphic used as mask and combined with background using non-overlapping parts */

/* Global values */
mask: inherit;
mask: initial;
mask: revert;
mask: revert-layer;
mask: unset;

/* Multiple masks */
mask:
  url(masks.svg#star) left / 16px repeat-y,
  /* Element within SVG graphic is used as a mask on the left-hand side with a width of 16px */
    url(masks.svg#circle) right / 16px repeat-y; /* Element within SVG graphic is used as a mask on the right-hand side with a width of 16px */
```

### Values

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

```css
.target {
  mask: url(#c1) luminance;
}

.another-target {
  mask: url(resources.svg#c1) 50px 30px/10px 10px repeat-x exclude;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("clip-path")}}
- {{CSSxRef("filter")}}
- SVG {{SVGAttr("mask")}} attribute
- [CSS Shapes, clipping and masking – and how to use them](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
