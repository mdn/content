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
- `fill-box`
  - : The position is relative to the object bounding box.
- `stroke-box`
  - : The position is relative to the stroke bounding box.
- `view-box`
  - : Uses the nearest SVG viewport as reference box. If a {{svgattr("viewBox")}} attribute is specified for the element creating the SVG viewport, the reference box is positioned at the origin of the coordinate system established by the `viewBox` attribute and the dimension of the reference box is set to the width and height values of the `viewBox` attribute.
- `content`
  - : Same as `content-box`.
- `padding`
  - : Same as `padding-box`.
- `border`
  - : Same as `border-box`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting mask origin to border-box

Click "Play" in the live sample to open the code in the MDN Playground and try some of the other possible `mask-origin` values.

```html live-sample___mask-origin-example
<div class="masked"></div>
```

```css live-sample___mask-origin-example
.masked {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-origin: border-box;
}
```

{{EmbedLiveSample("mask-origin-example", "", "200px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
