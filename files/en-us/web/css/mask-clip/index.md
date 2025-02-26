---
title: mask-clip
slug: Web/CSS/mask-clip
page-type: css-property
browser-compat: css.properties.mask-clip
---

{{CSSRef}}

The **`mask-clip`** [CSS](/en-US/docs/Web/CSS) property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.

## Syntax

```css
/* <coord-box> values */
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

/* Keyword values */
mask-clip: no-clip;

/* Non-standard keyword values */
-webkit-mask-clip: border;
-webkit-mask-clip: padding;
-webkit-mask-clip: content;
-webkit-mask-clip: text;

/* Multiple values */
mask-clip: padding-box, no-clip;
mask-clip: view-box, fill-box, border-box;

/* Global values */
mask-clip: inherit;
mask-clip: initial;
mask-clip: revert;
mask-clip: revert-layer;
mask-clip: unset;
```

One or more of the keyword values listed below, separated by commas.

### Values

- `content-box`
  - : The painted content is clipped to the content box.
- `padding-box`
  - : The painted content is clipped to the padding box.
- `border-box`
  - : The painted content is clipped to the border box.
- `fill-box`
  - : The painted content is clipped to the object bounding box.
- `stroke-box`
  - : The painted content is clipped to the stroke bounding box.
- `view-box`
  - : Uses the nearest SVG viewport as reference box. If a [`viewBox`](/en-US/docs/Web/SVG/Attribute/viewBox) attribute is specified for the element creating the SVG viewport, the reference box is positioned at the origin of the coordinate system established by the `viewBox` attribute and the dimension of the reference box is set to the width and height values of the `viewBox` attribute.
- `no-clip`
  - : The painted content is not clipped.
- `border`
  - : This keyword behaves the same as `border-box`.
- `padding`
  - : This keyword behaves the same as `padding-box`.
- `content`
  - : This keyword behaves the same as `content-box`.
- `text`
  - : This keyword clips the mask image to the text of the element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Clipping a mask to the border box

Click "Play" in the live sample to open the code in the MDN Playground and change the `mask-clip` value to any of the allowed values described above.

```html live-sample___mask-clip-example
<div class="masked"></div>
```

```css live-sample___mask-clip-example
.masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  margin: 20px;
  border: 20px solid #8ca0ff;
  padding: 20px;

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
  mask-size: 100% 100%;
  mask-clip: border-box;
}
```

{{EmbedLiveSample("mask-clip-example", "", "250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
