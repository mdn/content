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

### Values

The property accepts a comma-separated list of keyword values. Each value is a `<coord-box>` or `no-clip`:

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
  - : Uses the nearest SVG viewport as reference box. If a [`viewBox`](/en-US/docs/Web/SVG/Reference/Attribute/viewBox) attribute is specified for the element creating the SVG viewport, the reference box is positioned at the origin of the coordinate system established by the `viewBox` attribute and the dimension of the reference box is set to the width and height values of the `viewBox` attribute.
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

## Description

The `mask-clip` property defines the area of the element that is affected by the applied mask.

For mask layer images that do not reference an SVG {{svgelement("mask")}} element, the `mask-clip` property defines the mask painting area, or the area affected by the mask. The painted content of the element will be restricted to this area.

The `mask-clip` property has no affect on a mask layer image that references a `<mask>` element. The `<mask>` element's {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, and {{svgAttr("maskUnits")}} attributes determine the mask painting area when the source of the {{cssxref("mask-image")}} is a `<mask>`.

An element can have multiple mask layers applied. The number of layers is determined by the number of comma-separated values in the `mask-image` property value (even if a value is `none`). Each `mask-clip` value in the comma-separated list of values is matched up with the `mask-image` values, in order. If the number of values in the two properties differs, any excess values of `mask-clip` are not used, or, if `mask-clip` has fewer values than `mask-image`, the `mask-clip` values are repeated.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Clipping a mask to the border box

This examples demonstrates three `mask-clip` values.

#### HTML

We include three elements, each with a different `<coord-box>` value as a class name.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

The CSS defines the element to have a background, border, padding, and margin, along with a mask image, with each `<div>` having a different `<coord-box>`. We generated content with the name of the class, moving that text up 10px to prevent it from being masked out of view.

```css live-sample___mask-clip-example
div {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  margin: 10px;
  border: 20px solid #8ca0ff;
  padding: 20px;
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
  mask-size: 100% 100%;
}
.content-box {
  mask-clip: content-box;
}
.border-box {
  mask-clip: border-box;
}
.padding-box {
  mask-clip: padding-box;
}
div::before {
  content: attr(class);
  position: relative;
  top: -10px;
}
```

```css hidden live-sample___mask-clip-example
body {
  display: flex;
  flex-flow: row wrap;
}
```

#### Results

{{EmbedLiveSample("mask-clip-example", "", "250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("mask")}} shorthand
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- {{cssxref("background-clip")}}
- [Introduction to CSS clipping](/en-US/docs/Web/CSS/CSS_masking/Clipping)
- [Introduction to CSS masking](/en-US/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` properties](/en-US/docs/Web/CSS/CSS_masking/Mask_properties)
- [Declaring multiple masks](/en-US/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS masking](/en-US/docs/Web/CSS/CSS_masking) module
