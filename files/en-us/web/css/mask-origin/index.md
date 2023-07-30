---
title: mask-origin
slug: Web/CSS/mask-origin
page-type: css-property
browser-compat: css.properties.mask-origin
---

{{CSSRef}}

The **`mask-origin`** [CSS](/en-US/docs/Web/CSS) property sets the origin of a mask.

For elements rendered as a single box, this property specifies the mask positioning area. In other words, this property specifies the origin position of an image specified by the {{cssxref("mask-image")}} CSS property. For elements rendered as multiple boxes, such as inline boxes on several lines or boxes on several pages, it specifies which boxes {{cssxref("box-decoration-break")}} operates upon to determine the mask positioning area.

## Syntax

```css
/* Keyword values */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: margin-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* Multiple values */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* Non-standard keyword values */
-webkit-mask-origin: content;
-webkit-mask-origin: padding;
-webkit-mask-origin: border;

/* Global values */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: revert-layer;
mask-origin: unset;
```

One or more of the keyword values listed below, separated by commas.

### Values

- `content-box`
  - : The position is relative to the content box.
- `padding-box`
  - : The position is relative to the padding box. For single boxes `0 0` is the upper left corner of the padding edge, `100% 100%` is the lower right corner.
- `border-box`
  - : The position is relative to the border box.
- `margin-box`
  - : The position is relative to the margin box.
- `fill-box` {{Experimental_Inline}}
  - : The position is relative to the object bounding box.
- `stroke-box` {{Experimental_Inline}}
  - : The position is relative to the stroke bounding box.
- `view-box` {{Experimental_Inline}}
  - : Uses the nearest SVG viewport as reference box. If a {{svgattr("viewBox")}} attribute is specified for the element creating the SVG viewport, the reference box is positioned at the origin of the coordinate system established by the `viewBox` attribute and the dimension of the reference box is set to the width and height values of the `viewBox` attribute.
- `content` {{non-standard_inline}}
  - : Same as `content-box`.
- `padding` {{non-standard_inline}}
  - : Same as `padding-box`.
- `border` {{non-standard_inline}}
  - : Same as `border-box`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting mask origin to border-box

Try some of the other possible values by updating the CSS in the box below.

{{EmbedGHLiveSample("css-examples/masking/mask-origin.html", '100%', 600)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
