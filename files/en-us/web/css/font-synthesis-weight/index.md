---
title: font-synthesis-weight
slug: Web/CSS/font-synthesis-weight
page-type: css-property
browser-compat: css.properties.font-synthesis-weight
---

{{CSSRef}}

The **`font-synthesis-weight`** [CSS](/en-US/docs/Web/CSS) property lets you specify whether or not the browser may synthesize the bold typeface when it is missing in a font family.

It is often convenient to use the shorthand property {{cssxref("font-synthesis")}} to control all typeface synthesis values.

## Syntax

```css
/* Keyword values */
font-synthesis-weight: auto;
font-synthesis-weight: none;

/* Global values */
font-synthesis-weight: inherit;
font-synthesis-weight: initial;
font-synthesis-weight: revert;
font-synthesis-weight: revert-layer;
font-synthesis-weight: unset;
```

### Values

- `auto`
  - : Indicates that the missing bold typeface may be synthesized by the browser if needed.
- `none`
  - : Indicates that the synthesis of the missing bold typeface by the browser is not allowed.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Disabling synthesis of bold typeface

This example shows turning off synthesis of the bold typeface by the browser in the `Montserrat` font.

#### HTML

```html
<p class="english">
  This is the default <strong>bold typeface</strong> and
  <em>oblique typeface</em>.
</p>

<p class="english no-syn">
  The <strong>bold typeface</strong> is turned off here but not the
  <em>oblique typeface</em>.
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.no-syn {
  font-synthesis-weight: none;
}
```

#### Result

{{EmbedLiveSample('Disabling synthesis of bold typeface', '', '100')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [font-synthesis](/en-US/docs/Web/CSS/font-synthesis) shorthand, [font-synthesis-small-caps](/en-US/docs/Web/CSS/font-synthesis-small-caps), [font-synthesis-style](/en-US/docs/Web/CSS/font-synthesis-style)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
