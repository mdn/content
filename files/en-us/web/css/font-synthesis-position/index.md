---
title: font-synthesis-position
slug: Web/CSS/font-synthesis-position
page-type: css-property
status:
  - experimental
browser-compat: css.properties.font-synthesis-position
---

{{CSSRef}}{{SeeCompatTable}}

The **`font-synthesis-position`** [CSS](/en-US/docs/Web/CSS) property lets you specify whether or not a browser may synthesize the subscript and superscript "position" typefaces when they are missing in a font family, while using {{cssxref("font-variant-position")}} to set the positions.

The **`font-synthesis-position`** property has no effect when using the {{htmlelement("sup")}} and {{htmlelement("sub")}} elements.

It is often convenient to use the shorthand property {{cssxref("font-synthesis")}} to control all typeface synthesis values.

## Syntax

```css
/* Keyword values */
font-synthesis-position: auto;
font-synthesis-position: none;

/* Global values */
font-synthesis-position: inherit;
font-synthesis-position: initial;
font-synthesis-position: revert;
font-synthesis-position: revert-layer;
font-synthesis-position: unset;
```

### Values

- `auto`
  - : Indicates that a missing position typeface may be synthesized by the browser if needed.
- `none`
  - : Indicates that the synthesis of a missing position typeface by the browser is not allowed.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Disabling synthesis of position typeface

This example shows turning off synthesis of the superscript and subscript typefaces by the browser in the `Montserrat` font.

#### HTML

```html
<p>
  These are the default position <span class="super">superscript</span>,
  position <span class="sub">subscript</span>, <strong>bold</strong> and
  <em>oblique</em> typefaces.
</p>

<p class="no-syn">
  The positions <span class="super">superscript</span> and
  <span class="sub">subscript</span> typeface is turned off here but not the
  <strong>bold</strong> and <em>oblique</em> typefaces (on browsers that support
  <code>font-synthesis-position</code>).
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}
.super {
  font-variant-position: super;
}
.sub {
  font-variant-position: sub;
}
.no-syn {
  font-synthesis-position: none;
}
```

#### Result

{{EmbedLiveSample('Disabling synthesis of position typeface', '', '100')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-synthesis")}} shorthand, {{cssxref("font-synthesis-style")}}, {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-weight")}}
