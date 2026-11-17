---
title: "`hyphenate-limit-lines` CSS property"
short-title: hyphenate-limit-lines
slug: Web/CSS/Reference/Properties/hyphenate-limit-lines
page-type: css-property
browser-compat: css.properties.hyphenate-limit-lines
sidebar: cssref
---

The **`hyphenate-limit-lines`** [CSS](/en-US/docs/Web/CSS) property specifies the maximum number of consecutive hyphenated lines in an element.

{{InteractiveExample("CSS Demo: hyphenate-limit-lines")}}

```css interactive-example-choice
hyphenate-limit-lines: no-limit;
```

```css interactive-example-choice
hyphenate-limit-lines: 2;
```

```css interactive-example-choice
hyphenate-limit-lines: 1;
```

```css interactive-example-choice
hyphenate-limit-lines: 0;
```

```html interactive-example
<section id="default-example">
  <p id="example-element" lang="en">
    The word supercalifragilisticexpialidocious is a mouthful of nonsensical
    syllables.
  </p>
</section>
```

```css interactive-example
#example-element {
  border: 2px dashed #aaa;
  font-size: 1.5rem;
  text-align: left;
  width: 12rem;
  hyphens: auto;
}
```

## Syntax

```css
/* Keyword value */
hyphenate-limit-lines: no-limit;

/* <integer> values */
hyphenate-limit-lines: 2;
hyphenate-limit-lines: 1;

/* Global values */
hyphenate-limit-lines: inherit;
hyphenate-limit-lines: initial;
hyphenate-limit-lines: revert;
hyphenate-limit-lines: revert-layer;
hyphenate-limit-lines: unset;
```

### Values

The property is specified as a single value from the following list:

- `no-limit`
  - : There is no limit on the number of consecutive hyphenated lines. This is the default.
- {{cssxref("integer")}}
  - : A non-negative integer (`0` or greater) specifying the maximum number of consecutive lines that can end with a hyphenated word.

## Description

The `hyphenate-limit-lines` property lets you limit how many lines in a row can end with a hyphenated word. In narrow or justified text, the browser may need to [hyphenate](/en-US/docs/Web/CSS/Reference/Properties/hyphens) words on several consecutive lines. Many typographic style guides consider a long run of hyphenated lines (sometimes called a "ladder" or "stack") to be distracting and hard to read, and recommend limiting hyphenation to two or three lines.

The `<integer>` value specifies the maximum number of consecutive lines that can be hyphenated. For example, a value of `2` allows at most two consecutive lines to be hyphenated. A value of `0` prevents any line from ending with a hyphenated word, which effectively disables hyphenation. Negative values are invalid.

Once the specified number of consecutive lines has been hyphenated, the browser won't hyphenate the next line. Instead, it breaks that line at a regular line-break opportunity, such as a space between words. After a line that isn't hyphenated, the count starts again.

The property only has an effect when hyphenation is enabled, for example, by setting {{cssxref("hyphens", "hyphens: auto")}} or by including soft hyphens (`&shy;`) in the text with `hyphens: manual`.

If {{cssxref("overflow-wrap")}} is set to `break-word` or `anywhere`, a word that doesn't fit on a line can still be broken to prevent it from overflowing, even after the `hyphenate-limit-lines` limit has been reached. In this case, the browser may still break the word without inserting a hyphen or ignore the limit.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Limiting consecutive hyphenated lines

This example demonstrates how the `hyphenate-limit-lines` property can be used to limit consecutive hyphenated lines.

#### HTML

We include two boxes with the same text, including a very long word.

```html
<div class="container">
  <p class="no-limit" lang="en">
    The word pneumonoultramicroscopicsilicovolcanoconiosis names a lung disease.
  </p>
  <p class="limit-1" lang="en">
    The word pneumonoultramicroscopicsilicovolcanoconiosis names a lung disease.
  </p>
</div>
```

#### CSS

We include some basic styles, including limiting the width to `10em`, which is too narrow to contain our long word. We set each box to `hyphens: auto`, which, in the narrow container, will cause the long word to break across three lines by default. We then explicitly set `hyphenate-limit-lines` on one box to the default `no-limit` value and the other to `1`, which allows only one line in a row to end with a hyphen.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  margin: 0;
  padding: 0.5rem;
  border: 2px dashed #999999;
  font-size: 1.25rem;
  width: 10em;
  hyphens: auto;
}

.no-limit {
  hyphenate-limit-lines: no-limit;
}

.limit-1 {
  hyphenate-limit-lines: 1;
}
```

#### Result

{{EmbedLiveSample("Limiting consecutive hyphenated lines", "", 250)}}

The `no-limit` in the first box allows the long word to be hyphenated as needed to prevent it from overflowing the container. With `1` on the second box, only one line in a row can end with a hyphen. The long word needs two consecutive hyphenated lines to fit, so after the first hyphen, the rest of the word overflows the container.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("hyphens")}}
- {{cssxref("hyphenate-character")}}
- {{cssxref("hyphenate-limit-chars")}}
- [Wrapping and breaking text](/en-US/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- [CSS text module](/en-US/docs/Web/CSS/Guides/Text)
