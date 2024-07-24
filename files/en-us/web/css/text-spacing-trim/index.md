---
title: text-spacing-trim
slug: Web/CSS/text-spacing-trim
page-type: css-property
status:
  - experimental
browser-compat: css.properties.text-spacing-trim
---

{{CSSRef}}{{seecompattable}}

The **`text-spacing-trim`** [CSS](/en-US/docs/Web/CSS) property controls the internal spacing set on Chinese/Japanese/Korean (CJK) punctuation characters between adjacent characters (kerning) and at the start or end of text lines.

## Syntax

```css
/* Keyword values */
text-spacing-trim: normal;
text-spacing-trim: space-all;
text-spacing-trim: space-first;
text-spacing-trim: trim-start;

/* Global values */
text-spacing-trim: inherit;
text-spacing-trim: initial;
text-spacing-trim: revert;
text-spacing-trim: revert-layer;
text-spacing-trim: unset;
```

### Values

- `<spacing-trim>`

  - : Defines the different spacing trim options. Available values are:

    - `normal`
      - : Sets CJK full-width opening punctuation characters to be full-width at the start of each line. Sets CJK full-width closing punctuation characters to be full-width at the end of each line, or half-width if they do not fit on the line before justification. [Collapses spacing](#full-width_punctuation_collapsing) between punctuation characters.
    - `space-all`
      - : All CJK full-width punctuation characters are set to be full-width.
    - `space-first`
      - : Behaves as `normal`, except that CJK full-width opening punctuation characters are set to be full-width at the start of the first line of the text's block container, and the start of every subsequent line coming after an explicit line break such as a newline character.
    - `trim-start`

      - : Behaves as `normal`, except that CJK full-width opening punctuation characters are set to be half-width at the start of each line.

    > [!NOTE]
    > The [CSS Text](/en-US/docs/Web/CSS/CSS_text) module also defines `trim-both,` `trim-all,` and `auto` values. However, these are not currently implemented in any browser.

## Description

The `text-spacing-trim` property applies spacing/kerning to CJK punctuation characters to produce visually pleasing typography as defined by the [Requirements for Japanese text layout](https://w3c.github.io/jlreq/) (JLREQ) and the [Requirements for Chinese text layout](https://www.w3.org/International/clreq/) (CLREQ).

Many CJK punctuation characters include glyph-internal spacing. For example, the CJK full stop and the CJK close parenthesis usually have glyph-internal spacing on their right-hand side, to give them a constant [advance measure](/en-US/docs/Glossary/Advance_measure) consistent with other ideographic characters. However, when they appear in a row, the glyph-internal spacing can become excessive.

`text-spacing-trim` can be used to adjust such excessive spacing between adjacent characters (kerning) and at the start or end of text lines. Generally speaking:

- If a full-width punctuation character is set to be full-width, it has internal spacing set on both sides and is the full width of an ideograph.
- If a full-width punctuation character is set to be half-width, it has internal spacing set on one side only, and its other side is flush to the start (in the case of opening punctuation characters) or end (in the case of closing punctuation characters). Half-width characters are typically half the width of an ideograph.

> **Note:** To avoid the risk of excessive kerning, fonts must have the OpenType Alternate Half Widths (`halt`) feature, the Contextual Half-width Spacing (`chws`) feature, or both. If the font doesn't have either feature, `text-spacing-trim` is disabled.

### Full-width punctuation collapsing

When pairs of punctuation characters are adjacent to one another, the space between them is collapsed according to the following rules:

- Set a full-width opening punctuation character to half-width if the previous character is a fullwidth opening punctuation character, a fullwidth middle dot, an ideographic space (U+3000), a fullwidth closing punctuation character of an equivalent or larger font size, or a character belonging to [Unicode general category "Open punctuation" Ps](https://www.compart.com/en/unicode/category/Ps). Otherwise, set it to full-width.
- Set a full-width closing punctuation character to half-width if the next character is a fullwidth closing punctuation character, a fullwidth middle dot, an ideographic space (U+3000), a fullwidth opening punctuation character with larger font size, or a character belonging to [Unicode general category "Close punctuation" (Pe)](https://www.compart.com/en/unicode/category/Pe). Otherwise, set it to full-width.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### `text-spacing-trim` value comparison

This example compares the effect of four different `text-spacing-trim` properties, applying them to four identical paragraphs so you can see the visual differences between each one.

#### HTML

```html
<main>
  <div id="normal">
    <h2>normal</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="space-all">
    <h2>space-all</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="space-first">
    <h2>space-first</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="trim-start">
    <h2>trim-start</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
</main>
```

#### CSS

```css
main {
  font-family: "Yu Gothic", "YuGothic", "Noto Sans JP", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", sans-serif;
  display: grid;
  gap: 0.5em;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin: 0 auto;
}
h2 {
  font-size: 80%;
  margin: 0;
}
p {
  font-size: 20px;
  border: 1px solid blue;
  margin: 0;
}
#normal {
  text-spacing-trim: normal;
  grid-column: 1;
  grid-row: 1;
}
#space-all {
  text-spacing-trim: space-all;
  grid-column: 2;
  grid-row: 1;
}
#space-first {
  text-spacing-trim: space-first;
  grid-column: 1;
  grid-row: 2;
}
#trim-start {
  text-spacing-trim: trim-start;
  grid-column: 2;
  grid-row: 2;
}
```

#### Result

{{EmbedLiveSample("`text-spacing-trim` value comparison", "100%",320)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`ic`](/en-US/docs/Web/CSS/CSS_Values_and_Units#local_font-relative_lengths) and [`ric`](/en-US/docs/Web/CSS/CSS_Values_and_Units#root_font-relative_lengths) units
- [CSS Text](/en-US/docs/Web/CSS/CSS_text) module
