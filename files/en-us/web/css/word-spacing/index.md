---
title: word-spacing
slug: Web/CSS/word-spacing
page-type: css-property
browser-compat: css.properties.word-spacing
---

{{CSSRef}}

The **`word-spacing`** [CSS](/en-US/docs/Web/CSS) property sets the length of space between words and between tags.

{{EmbedInteractiveExample("pages/css/word-spacing.html")}}

## Syntax

```css
/* Keyword value */
word-spacing: normal;

/* <length> values */
word-spacing: 3px;
word-spacing: 0.3em;

/* Global values */
word-spacing: inherit;
word-spacing: initial;
word-spacing: revert;
word-spacing: revert-layer;
word-spacing: unset;
```

### Values

- `normal`
  - : The normal inter-word spacing, as defined by the current font and/or the browser.
- {{cssxref("length")}}
  - : Specifies extra spacing in addition to the intrinsic inter-word spacing defined by the font.

## Accessibility

A large positive or negative `word-spacing` value will make the sentences the styling is applied to unreadable. For text styled with a very large positive value, the words will be so far apart that it will no longer appear to be a sentence. For text styled with a large negative value, the words will overlap each other to the point where the beginning and end of each word is unrecognizable.

Legible `word-spacing` must be determined on a case-by-case basis, as different font families have different character widths. There is no one value that can ensure all font families automatically maintain their legibility.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Examples

### HTML

```html
<div id="mozdiv1">Lorem ipsum dolor sit amet.</div>
<div id="mozdiv2">Lorem ipsum dolor sit amet.</div>
```

### CSS

```css
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

{{ EmbedLiveSample('Examples') }}

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("letter-spacing")}}
- SVG {{SVGAttr("word-spacing")}} attribute
