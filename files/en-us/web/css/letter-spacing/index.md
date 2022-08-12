---
title: letter-spacing
slug: Web/CSS/letter-spacing
tags:
  - CSS
  - CSS Property
  - CSS Text
  - Reference
  - SVG
  - recipe:css-property
browser-compat: css.properties.letter-spacing
---
{{CSSRef}}

The **`letter-spacing`** [CSS](/en-US/docs/Web/CSS) property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.

{{EmbedInteractiveExample("pages/css/letter-spacing.html")}}

## Syntax

```css
/* Keyword value */
letter-spacing: normal;

/* <length> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;

/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: revert;
letter-spacing: revert-layer;
letter-spacing: unset;
```

### Values

- `normal`
  - : The normal letter spacing for the current font. Unlike a value of `0`, this keyword allows the {{glossary("user agent")}} to alter the space between characters in order to justify text.
- {{cssxref("&lt;length&gt;")}}
  - : Specifies extra inter-character space _in addition to_ the default space between characters. Values may be negative, but there may be implementation-specific limits. User agents may not further increase or decrease the inter-character space in order to justify text.

## Accessibility concerns

A large positive or negative `letter-spacing` value will make the word(s) the styling is applied to unreadable. For text styled with a very large positive value, the letters will be so far apart that the word(s) will appear like a series of individual, unconnected letters. For text styled with a very large negative value, the letters will overlap each other to the point where the word(s) may be unrecognizable.

Legible letter-spacing must be determined on a case-by-case basis, as different font families have different character widths. There is no one value that can ensure all font families automatically maintain their legibility.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Internationalization concerns

Some written languages should not have any letter spacing applied. For instance, languages that use the Arabic script expect connected letters to remain visually connected, as in the following example. Applying letter spacing will lead the text to look broken.

> <p lang="ar" dir="rtl">شسيبتنمك</p>

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting letter spacing

#### HTML

```html
<p class="normal">letter spacing</p>
<p class="em-wide">letter spacing</p>
<p class="em-wider">letter spacing</p>
<p class="em-tight">letter spacing</p>
<p class="px-wide">letter spacing</p>
```

#### CSS

```css
.normal   { letter-spacing: normal; }
.em-wide  { letter-spacing: 0.4em; }
.em-wider { letter-spacing: 1em; }
.em-tight { letter-spacing: -0.05em; }
.px-wide  { letter-spacing: 6px; }
```

#### Result

{{ EmbedLiveSample('Setting_letter_spacing', 440, 185) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-kerning")}}
