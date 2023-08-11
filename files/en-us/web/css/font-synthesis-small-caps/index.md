---
title: font-synthesis-small-caps
slug: Web/CSS/font-synthesis-small-caps
page-type: css-property
browser-compat: css.properties.font-synthesis-small-caps
---

{{CSSRef}}

The **`font-synthesis-small-caps`** [CSS](/en-US/docs/Web/CSS) property lets you specify whether or not the browser may synthesize small-caps typeface when it is missing in a font family. Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters.

It is often convenient to use the shorthand property {{cssxref("font-synthesis")}} to control all typeface synthesis values.

## Syntax

```css
/* Keyword values */
font-synthesis-small-caps: auto;
font-synthesis-small-caps: none;

/* Global values */
font-synthesis-small-caps: inherit;
font-synthesis-small-caps: initial;
font-synthesis-small-caps: revert;
font-synthesis-small-caps: revert-layer;
font-synthesis-small-caps: unset;
```

### Values

- `auto`
  - : Indicates that the missing small-caps typeface may be synthesized by the browser if needed.
- `none`
  - : Indicates that the synthesis of the missing small-caps typeface by the browser is not allowed.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Disabling synthesis of small-caps typeface

This example shows turning off synthesis of the small-caps typeface by the browser in the `Montserrat` font.

#### HTML

```html
<p class="english">
  These are the default <span class="small-caps">small-caps</span>,
  <strong>bold</strong>, and <em>oblique</em> typefaces.
</p>

<p class="english no-syn">
  The <span class="small-caps">small-caps</span> typeface is turned off here but
  not the <strong>bold</strong> and <em>oblique</em> typefaces.
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.small-caps {
  font-variant: small-caps;
}
.no-syn {
  font-synthesis-small-caps: none;
}
```

#### Result

{{EmbedLiveSample('Disabling synthesis of small-caps typeface', '', '100')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [font-synthesis](/en-US/docs/Web/CSS/font-synthesis) shorthand, [font-synthesis-style](/en-US/docs/Web/CSS/font-synthesis-style), [font-synthesis-weight](/en-US/docs/Web/CSS/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-weight")}}
- [CanvasRenderingContext2D: fontVariantCaps property](/en-US/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
