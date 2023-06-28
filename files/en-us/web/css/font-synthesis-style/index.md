---
title: font-synthesis-style
slug: Web/CSS/font-synthesis-style
page-type: css-property
browser-compat: css.properties.font-synthesis-style
---

{{CSSRef}}

The **`font-synthesis-style`** [CSS](/en-US/docs/Web/CSS) property lets you specify whether or not the browser may synthesize the oblique typeface when it is missing in a font family.

It is often convenient to use the shorthand property {{cssxref("font-synthesis")}} to control all typeface synthesis values.

## Syntax

```css
/* Keyword values */
font-synthesis-style: auto;
font-synthesis-style: none;

/* Global values */
font-synthesis-style: inherit;
font-synthesis-style: initial;
font-synthesis-style: revert;
font-synthesis-style: revert-layer;
font-synthesis-style: unset;
```

### Values

- `auto`
  - : Indicates that the missing oblique typeface may be synthesized by the browser if needed.
- `none`
  - : Indicates that the synthesis of the missing oblique typeface by the browser is not allowed.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Disabling synthesis of oblique typeface

This example shows turning off synthesis of the oblique typeface by the browser in the `Montserrat` font.

#### HTML

```html
<p class="english">
  This is the default <em>oblique typeface</em> and
  <strong>bold typeface</strong>.
</p>

<p class="english no-syn">
  The <em>oblique typeface</em> is turned off here but not the
  <strong>bold typeface</strong>.
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.no-syn {
  font-synthesis-style: none;
}
```

#### Result

{{EmbedLiveSample('Disabling synthesis of bold typeface', '', '100')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [font-synthesis](/en-US/docs/Web/CSS/font-synthesis) shorthand, [font-synthesis-small-caps](/en-US/docs/Web/CSS/font-synthesis-small-caps), [font-synthesis-weight](/en-US/docs/Web/CSS/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
