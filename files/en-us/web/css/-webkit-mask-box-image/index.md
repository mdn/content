---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
page-type: css-property
status:
  - non-standard
browser-compat: css.properties.-webkit-mask-box-image
---

{{CSSRef}} {{ Non-standard_header() }}

The non-standard prefixed **`-webkit-mask-box-image`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) property sets the mask image for an element's border box.

> **Note:** This property is not standard and is not on any standards track. Consider using the {{CSSXref("mask-border")}} property instead.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`-webkit-mask-box-image-source`](/en-US/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/en-US/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/en-US/docs/Web/CSS/mask-border-repeat)

The values includes the `<image>` to be used as the mask border, and optionally four border outset values and up to two border repeat styles.

## Syntax

```css
/* default */
-webkit-mask-box-image: none;

/* image */
-webkit-mask-box-image: url(image.png);

/* image edge-offset */
-webkit-mask-box-image: url(image.png) 10 20 20 10;
-webkit-mask-box-image: url(image.png) 10px 20px 20px 10px;

/* image repeat-style */
-webkit-mask-box-image: url(image.png) space repeat;

/* image edge-offset repeat-style */
-webkit-mask-box-image: url(image.png) 10px 20px 20px 10px space repeat;

/* Global values */
-webkit-mask-box-image: inherit;
-webkit-mask-box-image: initial;
-webkit-mask-box-image: revert;
-webkit-mask-box-image: revert-layer;
-webkit-mask-box-image: unset;
```

### Values

- {{cssxref("&lt;image&gt;")}}
  - : The location of the image resource to be used as a mask image, {{cssxref("&lt;gradient&gt;")}}, or other {{cssxref("&lt;image&gt;")}} value.
- `none`
  - : Used to specify that a border box is to have no mask image.
- {{cssxref("length")}}
  - : The size of the mask image's offset. See {{cssxref("&lt;length&gt;")}} for possible units.
- `{{cssxref("percentage")}}`
  - : The mask image's offset has a percentage value relative to the border box's corresponding dimension (width or height).
- {{cssxref("number")}}
  - : The size of the mask image's offset in pixels.
- `repeat`
  - : The mask image is repeated as many times as is necessary to span the border box. May include a partial image if the mask image does not divide evenly into the border box.
- `stretch`
  - : The mask image is stretched to contain the border box exactly.
- `round`
  - : The mask image is stretched somewhat and repeated such that there is no partial mask image at the end of the border box.
- `space`
  - : The mask image is repeated as many times as possible without stretching. There is no partial mask image at the end of the border box.

The outset values, or edge offsets, define the distances from the top, right, bottom, and left edges of the image, in that order. The values can be set as {{cssxref("length")}}, {{cssxref("number")}}, or {{cssxref("percentage")}}, with numbers interpreted as pixel lengths.

Border repeat styles, when included, are interpreted in the order of `<repeat-x> <repeat-y>`. If only one value is declared, the value is the same for both axes. While similar to `{{cssxref("background-repeat")}}`, the `cover` and `contain` values are not supported.

## Formal definition

- {{ Xref_cssinitial() }}: `none`
- Applies to: all elements
- {{ Xref_cssinherited() }}: no
- {{ Xref_csscomputed() }}: as specified

## Formal syntax

```plain
-webkit-mask-box-image: <mask-image-source> [<mask-image-offset>{4} <mask-border-repeat>{1,2} ]

Where:

<mask-image-source> = {{cssxref("url", "&lt;uri&gt;")}} | <gradient> | none

<mask-image-offset> = <length> | <percentage> | <number>

<repeat-style> = repeat | stretch | round | space
```

## Examples

### Setting an image

```css
.exampleone {
  -webkit-mask-box-image: url("mask.png");
}
```

### Offsetting and filling an image

```css
.exampletwo {
  -webkit-mask-box-image: url("logo.png") 100 100 0 0 round round;
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- CSS {{ cssxref("mask-border") }} property
- CSS {{ cssxref("border-image") }} property
- [Safari CSS reference: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
