---
title: border-image-source
slug: Web/CSS/border-image-source
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.border-image-source
---
{{CSSRef}}

The **`border-image-source`** [CSS](/en-US/docs/Web/CSS) property sets the source image used to create an element's [border image](/en-US/docs/Web/CSS/border-image).

{{EmbedInteractiveExample("pages/css/border-image-source.html")}}

The {{cssxref("border-image-slice")}} property is used to divide the source image into regions, which are then dynamically applied to the final border image.

## Syntax

```css
/* Keyword value */
border-image-source: none;

/* <image> values */
border-image-source: url(image.jpg);
border-image-source: linear-gradient(to top, red, yellow);

/* Global values */
border-image-source: inherit;
border-image-source: initial;
border-image-source: revert;
border-image-source: revert-layer;
border-image-source: unset;
```

### Values

- `none`
  - : No border image is used. The appearance defined by {{cssxref("border-style")}} is displayed instead.
- {{cssxref("&lt;image&gt;")}}
  - : Image reference to use for the border.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

```css
.box {
  border-image-source: url('image.png');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url", "url()")}} function
