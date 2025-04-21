---
title: Introduction to CSS clipping
slug: Web/CSS/CSS_masking/CSS_clipping
page-type: guide
---

{{CSSRef}}

CSS clipping enables you to define visible portions of an element, effectively "clipping" its content within a specific shape or area. This guide explores the {{cssxref("clip-path")}} property along with some examples.

## The `clip-path` property

Clipping is a CSS technique used to clip, or hide, sections of an element, displaying only the area of the element located within a developer defined path. By applying clipping, you can create visually engaging designs. With clipping, elements aren't limited to being rendered as rectangles.

The `clip-path` lets you apply clipping using shapes or paths. In this example, we clip a blue square {{htmlelement("div")}}, creating a diamond, using the {{cssxref("basic-shape/polygon","polygon()")}} function as the clipping path:

```html hidden live-sample__diamond
<div></div>
```

```css live-sample__diamond
div {
  height: 200px;
  width: 200px;
  background-color: blue;

  clip-path: polygon(0 50%, 50% 100%, 100% 50%, 50% 0);
}
```

{{ EmbedLiveSample('diamond', 230, 230) }}

### Values for `clip-path` property

The `polygon()` function is a {{cssxref("basic-shape")}}. The value can be a clip source, a CSS shape, a geometry-box, both a shape and geometry-box, or the keyword `none`, which is the default.

## See also
