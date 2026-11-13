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
    The word pneumonoultramicroscopicsilicovolcanoconiosis names a lung disease.
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
  - : Specifies the maximum number of consecutive lines that can end with a hyphenated word. For example, a value of `2` allows at most two lines in a row to be hyphenated. A value of `0` prevents any line from ending with a hyphenated word, which effectively disables hyphenation. Negative values are invalid.

## Description

The `hyphenate-limit-lines` property lets you limit how many lines in a row can end with a hyphenated word. In narrow or justified text, the browser may need to [hyphenate](/en-US/docs/Web/CSS/Reference/Properties/hyphens) words on several consecutive lines. Many typographic style guides consider a long run of hyphenated lines (sometimes called a "ladder" or "stack") to be distracting and hard to read, and recommend limiting it to two or three lines.

Once the specified number of consecutive lines has been hyphenated, the browser won't hyphenate the next line. Instead, it breaks that line at a regular line-break opportunity, such as a space between words. After a line that isn't hyphenated, the count starts again.

> [!NOTE]
> If {{cssxref("overflow-wrap")}} is set to `break-word` or `anywhere`, a word that doesn't fit on a line can still be broken to prevent it from overflowing, even after the `hyphenate-limit-lines` limit has been reached. In this case, the browser may still break the word without inserting a hyphen or ignore the limit.

The property only has an effect when hyphenation is enabled, for example by setting {{cssxref("hyphens", "hyphens: auto")}} or by including soft hyphens (`&shy;`) in the text with `hyphens: manual`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Limiting consecutive hyphenated lines

In this example, we have two boxes containing the same text, which includes a very long word. Each box uses `hyphens: auto` and is narrow enough that the long word needs to be broken across three lines. The boxes set `hyphenate-limit-lines` to `no-limit` and `1`, respectively.

#### HTML

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

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  margin: 0;
  width: 150px;
  padding: 0.5rem;
  border: 2px dashed #999999;
  font-size: 1.25rem;
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

In the first box, with `no-limit`, the browser can hyphenate as many lines in a row as it needs to, so it breaks the long word across three lines, and two lines in a row end with a hyphen.

In the second box, with `1`, only one hyphenated line is allowed in a row. The browser can hyphenate the long word once, but it can't hyphenate the next line as well, so the rest of the word overflows the box.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("hyphens")}}
- {{cssxref("hyphenate-character")}}
- {{cssxref("hyphenate-limit-chars")}}
- [Wrapping and breaking text](/en-US/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- [CSS Text module](/en-US/docs/Web/CSS/Guides/Text)
