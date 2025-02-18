---
title: Aspect ratio
slug: Glossary/Aspect_ratio
page-type: glossary-definition
---

{{GlossarySidebar}}

An **aspect ratio** is the proportional relationship between an element or {{glossary("viewport")}}'s width and height. It is represented as a {{cssxref("ratio")}} of two numbers.

Having an aspect ratio, whether it's an inherent aspect ratio like with images and videos or if it's extrinsically set, maintains the intended proportions of an element. You can also query an element or viewport's aspect, which is useful in developing flexible components and layouts.

In CSS, the {{cssxref("ratio")}} data type is written as `width / height` (e.g., `1 / 1` for a square, `16 / 9` for widescreen) or a single number, in which case the number represents the width and the height is `1`.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

In SVG, the aspect ratio is defined by the a four-value [`viewBox`](/en-US/docs/Web/SVG/Attribute/viewBox) attribute. The first two values the smallest X and Y origin coordinates the SVG can have, and the second two values are the width and height which set the aspect ratio of the SVG.

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

In JavaScript APIs, querying an aspect ratio returns a double-precision floating-point number representing the width divided by height. You can also use JavaScript to set an element's aspect ratio. For example, setting an aspect ratio constraint for a 1920x1080 video using the {{domxref("MediaStreamTrack")}} or {{domxref("MediaTrackSettings")}} dictionary's [`aspectRatio`](/en-US/docs/Web/API/MediaTrackSettings/aspectRatio) property would be computed as 16/9, or 1920/1080, which is `1.7777777778`:

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
- [Understanding aspect ratios](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio) guide
- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module
- Related glossary terms:
  - {{glossary("intrinsic size")}}
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, and {{cssxref("fit-content")}} property values.
