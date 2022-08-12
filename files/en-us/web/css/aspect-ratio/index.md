---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
tags:
  - CSS
  - CSS Property
  - Images
  - Reference
  - aspect-ratio
  - recipe:css-property
browser-compat: css.properties.aspect-ratio
---
{{CSSRef}}

The **`aspect-ratio`**  [CSS](/en-US/docs/Web/CSS) property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.

{{EmbedInteractiveExample("pages/css/aspect-ratio.html")}}

## Syntax

```css
aspect-ratio: 1 / 1;
aspect-ratio: 1;

/* Global values */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: revert-layer;
aspect-ratio: unset;
```

### Values

- `auto`
  - : [Replaced elements](/en-US/docs/Web/CSS/Replaced_element) with an intrinsic aspect ratio use _that_ aspect ratio, otherwise the box has no preferred aspect ratio. Size calculations involving intrinsic aspect ratio always work with the content box dimensions.
- {{cssxref("&lt;ratio&gt;")}}
  - : The box's preferred aspect ratio is the specified ratio of `width` / `height`. If `height` and the preceding slash character are omitted, `height` defaults to `1`. Size calculations involving preferred aspect ratio work with the dimensions of the box specified by `box-sizing`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Examples of values for aspect-ratio

```css
aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
aspect-ratio: 0.5;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Mapping the width and height attributes of media container elements to their aspect-ratio](/en-US/docs/Web/Media/images/aspect_ratio_mapping)
- [Designing an aspect ratio unit for CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Setting Height And Width On Images Is Important Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
