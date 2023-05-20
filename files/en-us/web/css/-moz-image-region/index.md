---
title: "-moz-image-region"
slug: Web/CSS/-moz-image-region
page-type: css-property
status:
  - non-standard
browser-compat: css.properties.-moz-image-region
---

{{CSSRef}}{{Non-standard_Header}}

For certain XUL elements and pseudo-elements that use an image from the {{CSSxRef("list-style-image")}} property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.

```css
/* Keyword value */
-moz-image-region: auto;

/* <shape> value */
-moz-image-region: rect(0, 8px, 4px, 4px);

/* Global values */
-moz-image-region: inherit;
-moz-image-region: initial;
-moz-image-region: unset;
```

The syntax is similar to the {{CSSxRef("clip")}} property. All four values are relative to the upper left corner of the image.

> **Note:** For a system that works on any background, see {{CSSxRef("-moz-image-rect")}}.

## Syntax

### Values

- `auto`
  - : Automatically defines the region of the image to use.
- [`<shape>`](/en-US/docs/Web/CSS/shape)
  - : A shape defining the part of the image to use. The `rect()` function defines a rectangle to use as shape. Its parameters define the top, right, bottom, and left offsets of the edges of the image, in this order.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
 -moz-image-region =
   <shape> | auto
```

## Examples

### Clipping an image

```css
#example-button {
  /* display only the 4x4 area from the top left of this image */
  list-style-image: url("chrome://example/skin/example.png");
  -moz-image-region: rect(0px, 4px, 4px, 0px);
}
#example-button:hover {
  /* use the 4x4 area to the right of the first for the hovered button */
  -moz-image-region: rect(0px, 8px, 4px, 4px);
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("-moz-image-rect")}}
