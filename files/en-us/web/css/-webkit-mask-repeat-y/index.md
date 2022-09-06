---
title: '-webkit-mask-repeat-y'
slug: Web/CSS/-webkit-mask-repeat-y
tags:
  - CSS
  - CSS Masking
  - CSS Property
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-webkit-mask-repeat-y
---
{{CSSRef}}{{Non-standard_header}}

The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.

```css
/* Keyword values */
-webkit-mask-repeat-y: repeat;
-webkit-mask-repeat-y: no-repeat;
-webkit-mask-repeat-y: space;
-webkit-mask-repeat-y: round;

/* Multiple values */
-webkit-mask-repeat-y: repeat, no-repeat, space;

/* Global values */
-webkit-mask-repeat-y: inherit;
-webkit-mask-repeat-y: initial;
-webkit-mask-repeat-y: unset;
```

## Syntax

### Values

- repeat
  - : The mask image is repeated vertically.
- no-repeat
  - : The mask image is not repeated vertically; only one copy of the mask image is drawn in vertical direction. The vertical remainder of the masked element's content is not displayed.
- repeat
  - : The mask image is repeated vertically.
- space
  - : The image is repeated as much as possible without clipping. The first and last images are pinned to the top and bottom edge of the element, and whitespace is distributed evenly between the images. The {{cssxref("mask-position")}} property is ignored unless only one image can be displayed without clipping. The only case where clipping happens using space is when there isn't enough room to display one image.
- round
  - : As the allowed vertical space increases in size, the repeated images will stretch (leaving no gaps) until there is room for another one to be added. When the next image is added, all of the current ones compress to allow room. Example: An image with an original height of 260px, repeated three times, might stretch until each repetition is 300px high, and then another image will be added. They will then compress to a height of 225px.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-webkit-mask-repeat-y =
  repeat | no-repeat | space | round
```

## Examples

### Using a repeating or non-repeating mask image

```css
.exampleone {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-y: repeat;
}

.exampletwo {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-y: no-repeat;
}
```

### Using multiple mask images

You can specify a different `<repeat-style>` for each mask image, separated by commas:

```css
.examplethree {
  -webkit-mask-image: url('mask1.png'), url('mask2.png');
  -webkit-mask-repeat-y: repeat, space;
}
```

Each image is matched with the corresponding repeat style, from first specified to last.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

{{cssxref("-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-x")}}
