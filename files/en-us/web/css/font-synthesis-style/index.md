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
font-synthesis-style: oblique-only;

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
  - : Indicates that the synthesis of the missing oblique typeface by the browser is _not_ allowed.
- `oblique-only`
  - : Same as `auto`, but no font synthesis occurs if `font-style: italic` is set.

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

### Comparison of font-synthesis-style values

This example compares all the `font-synthesis-style` values using italic and oblique styled texts.

#### HTML

```html
<div class="fss-none">
  <h2>font-synthesis-style: none</h2>
  <p class="oblique">This text is set to <code>oblique</code></p>
  <p class="italic">This text is set to <code>italic</code></p>
</div>

<div class="fss-auto">
  <h2>font-synthesis-style: auto</h2>
  <p class="oblique">This text is set to <code>oblique</code></p>
  <p class="italic">This text is set to <code>italic</code></p>
</div>

<div class="fss-oblique-only">
  <h2>font-synthesis-style: oblique-only</h2>
  <p class="oblique">This text is set to <code>oblique</code></p>
  <p class="italic">This text is set to <code>italic</code></p>
</div>
```

#### CSS

```css hidden
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

p {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
}

@supports not (font-synthesis-style: oblique-only) {
  body::before {
    content: "Your browser doesn't support the 'oblique-only' value.";
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

```css
/* Specify style of the font synthesis */
.fss-none {
  font-synthesis-style: none;
}

.fss-auto {
  font-synthesis-style: auto;
}

.fss-oblique-only {
  font-synthesis-style: oblique-only;
}

/* Set font styles */
.oblique {
  font-style: oblique;
}

.italic {
  font-style: italic;
}

/* Styles for the demonstration */
.oblique::after {
  content: " (font-style: oblique)";
  font-size: 0.8rem;
  vertical-align: sub;
}

.italic::after {
  content: " (font-style: italic)";
  font-size: 0.8rem;
  vertical-align: sub;
}
```

#### Result

{{EmbedLiveSample('Comparison of font-synthesis-style values', '', '560')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [font-synthesis](/en-US/docs/Web/CSS/font-synthesis) shorthand, [font-synthesis-small-caps](/en-US/docs/Web/CSS/font-synthesis-small-caps), [font-synthesis-weight](/en-US/docs/Web/CSS/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
