---
title: font-variant-caps
slug: Web/CSS/font-variant-caps
page-type: css-property
browser-compat: css.properties.font-variant-caps
---

{{CSSRef}}

The **`font-variant-caps`** [CSS](/en-US/docs/Web/CSS) property controls the use of alternate glyphs used for small or petite capitals or for titling.

{{EmbedInteractiveExample("pages/css/font-variant-caps.html")}}

When a given font includes capital letter glyphs of multiple different sizes, this property selects the most appropriate ones. If petite capital glyphs are not available, they are rendered using small capital glyphs. If these are not present, the browser synthesizes them from the uppercase glyphs.

Fonts sometimes include special glyphs for various caseless characters (such as punctuation marks) to better match the capitalized characters around them. However, small capital glyphs are never synthesized for caseless characters.

### Language-specific rules

This property accounts for language-specific case mapping rules. For example:

- In Turkic languages, such as Turkish (tr), Azerbaijani (az), Crimean Tatar (crh), Volga Tatar (tt), and Bashkir (ba), there are two kinds of `i` (one with the dot, one without) and two case pairings: `i`/`İ` and `ı`/`I`.
- In German (de), the `ß` may become `ẞ` (U+1E9E) in uppercase.
- In Greek (el), vowels lose their accent when the whole word is in uppercase (`ά`/`Α`), except for the disjunctive eta (`ή`/`Ή`). Also, diphthongs with an accent on the first vowel lose the accent and gain a diacritic on the second vowel (`άι`/`ΑΪ`).

## Syntax

```css
/* Keyword values */
font-variant-caps: normal;
font-variant-caps: small-caps;
font-variant-caps: all-small-caps;
font-variant-caps: petite-caps;
font-variant-caps: all-petite-caps;
font-variant-caps: unicase;
font-variant-caps: titling-caps;

/* Global values */
font-variant-caps: inherit;
font-variant-caps: initial;
font-variant-caps: revert;
font-variant-caps: revert-layer;
font-variant-caps: unset;
```

The `font-variant-caps` property is specified using a single keyword value from the list below. In each case, if the font doesn't support the OpenType value, then it synthesizes the glyphs.

### Values

- `normal`
  - : Deactivates of the use of alternate glyphs.
- `small-caps`
  - : Enables display of small capitals (OpenType feature: `smcp`). Small-caps glyphs typically use the form of uppercase letters but are displayed using the same size as lowercase letters.
- `all-small-caps`
  - : Enables display of small capitals for both upper and lowercase letters (OpenType features: `c2sc`, `smcp`).
- `petite-caps`
  - : Enables display of petite capitals (OpenType feature: `pcap`).
- `all-petite-caps`
  - : Enables display of petite capitals for both upper and lowercase letters (OpenType features: `c2pc`, `pcap`).
- `unicase`
  - : Enables display of mixture of small capitals for uppercase letters with normal lowercase letters (OpenType feature: `unic`).
- `titling-caps`
  - : Enables display of titling capitals (OpenType feature: `titl`). Uppercase letter glyphs are often designed for use with lowercase letters. When used in all uppercase titling sequences they can appear too strong. Titling capitals are designed specifically for this situation.

## Accessibility

Large sections of text set with a `font-variant` value of `all-small-caps` or `all-petite-caps` may be difficult for people with cognitive concerns such as Dyslexia to read.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting the small-caps font variant

#### HTML

```html
<p class="small-caps">Firefox rocks, small caps!</p>
<p class="normal">Firefox rocks, normal caps!</p>
```

#### CSS

```css
.small-caps {
  font-variant-caps: small-caps;
  font-style: italic;
}
.normal {
  font-variant-caps: normal;
  font-style: italic;
}
```

#### Result

{{ EmbedLiveSample('Setting_the_small-caps_font_variant') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`font-variant`](/en-US/docs/Web/CSS/font-variant)
- [`font-variant-alternates`](/en-US/docs/Web/CSS/font-variant-alternates)
- [`font-variant-east-asian`](/en-US/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/en-US/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/en-US/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-numeric`](/en-US/docs/Web/CSS/font-variant-numeric)
- [`font-variant-position`](/en-US/docs/Web/CSS/font-variant-position)
