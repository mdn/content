---
title: Aspect ratio
slug: Glossary/Aspect_ratio
page-type: glossary-definition
---

{{GlossarySidebar}}

An **aspect ratio** is the proportional relationship between an item' width and height. It is expressed as a ratio of width to height. Having an aspect ratio, whether it's an inherent aspect ratio like with images and videos or if it's extrinsically set with attributes or CSS property values, maintains the intended proportions of an element.

In CSS, the `<ratio>` data type is written as `width / height` (e.g., `1 / 1` for a square, `16 / 9` for widescreen).

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
```

In SVG, the aspect ratio is defined by the [`viewBox`](/en-US/docs/Web/SVG/Attribute/viewBox) attribute.

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

When it comes to JavaScript APIs, the aspect ratio represents the width in pixels divided by height in pixels as double-precision floating-point number. For example, setting aspect ratio contraints for a 1920x1080 video using the {{domxref("MediaTrackSettings")}} dictionary's [`aspectRatio](/en-US/docs/Web/API/MediaTrackSettings/aspectRatio) property would be computed as 16/9, or 1920/1080, which is`1.7777777778`.

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

## See also

- CSS {{cssxref("aspect-ratio")}} property
- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module
- {{glossary("intrinsic size")}} glossary term
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, and {{cssxref("fit-content")}} property values.
- [CSS sizing specification: intrinsic sizes](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes)
