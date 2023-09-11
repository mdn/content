---
title: "-webkit-mask-repeat-x"
slug: Web/CSS/-webkit-mask-repeat-x
page-type: css-property
status:
  - non-standard
browser-compat: css.properties.-webkit-mask-repeat-x
---

{{CSSRef}}{{Non-standard_header}}

The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.

## Syntax

```css
/* Keyword values */
-webkit-mask-repeat-x: repeat;
-webkit-mask-repeat-x: no-repeat;
-webkit-mask-repeat-x: space;
-webkit-mask-repeat-x: round;

/* Multiple values */
-webkit-mask-repeat-x: repeat, no-repeat, space;

/* Global values */
-webkit-mask-repeat-x: inherit;
-webkit-mask-repeat-x: initial;
-webkit-mask-repeat-x: revert;
-webkit-mask-repeat-x: revert-layer;
-webkit-mask-repeat-x: unset;
```

### Values

- repeat
  - : The mask image is repeated both horizontally and vertically.
- no-repeat
  - : The mask image is not repeated; only one copy of the mask image is drawn. The remainder of the masked element's content is not displayed.
- repeat
  - : The mask image is repeated both horizontally and vertically.
- space
  - : The image is repeated as much as possible without clipping. The first and last images are pinned to either side of the element, and whitespace is distributed evenly between the images. The {{cssxref("mask-position")}} property is ignored unless only one image can be displayed without clipping. The only case where clipping happens using space is when there isn't enough room to display one image.
- round
  - : As the allowed space increases in size, the repeated images will stretch (leaving no gaps) until there is room for another one to be added. When the next image is added, all of the current ones compress to allow room. Example: An image with an original width of 260px, repeated three times, might stretch until each repetition is 300px wide, and then another image will be added. They will then compress to 225px.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-webkit-mask-repeat-x =
  repeat | no-repeat | space | round
```

## Examples

### Using a repeating or non-repeating mask image

```css
.exampleone {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-x: repeat;
}

.exampletwo {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat-x: no-repeat;
}
```

### Using multiple mask images

You can specify a different `<repeat-style>` for each mask image, separated by commas:

```css
.examplethree {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat-x: repeat, space;
}
```

Each image is matched with the corresponding repeat style, from first specified to last.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

{{cssxref("mask-repeat", "-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-y")}}
