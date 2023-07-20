---
title: text-wrap
slug: Web/CSS/text-wrap
page-type: css-property
status:
  - experimental
browser-compat: css.properties.text-wrap
---

{{CSSRef}}{{seecompattable}}

The **`text-wrap`** CSS property controls how text inside an element is wrapped. The different values provide:

- Typographic improvements, for example more balanced line lengths across broken headings
- A way to turn text wrapping off completely.

<!-- - More stability in content-editable elements — for example {{htmlelement("textarea")}}s and elements with [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) set on them — as content is edited.-->

> **Note:** The {{CSSxRef("white-space-collapse")}} and `text-wrap` properties can be declared together using the {{CSSxRef("white-space")}} shorthand property.

## Syntax

```css
/* Keyword values */
text-wrap: wrap;
text-wrap: nowrap;
text-wrap: balance;

/* Global values */
text-wrap: inherit;
text-wrap: initial;
text-wrap: revert;
text-wrap: revert-layer;
text-wrap: unset;
```

The `text-wrap` property is specified as a single keyword chosen from the list of values below.

### Values

- `wrap`
  - : Text is wrapped across lines at appropriate characters (for example spaces, in languages like English that use space separators) to minimize overflow. This is the default value.
- `nowrap`
  - : Text does not wrap across lines. It will overflow its containing element rather than breaking onto a new line.
- `balance`
  - : Text is wrapped in a way that best balances the number of characters on each line, enhancing layout quality and legibility. Because counting characters and balancing them across multiple lines is computationally expensive, this value is only supported for blocks of text spanning a limited number of lines (the Chromium implementation uses four wrapped lines or less), meaning that it is useful for cases such as headings or pull quotes.

<!--
`pretty`

Results in the same behavior as `wrap`, except that the user agent will use a slower algorithm that favors better layout over speed. This is intended for body copy where good typography is favored over performance (for example, when the number of [orphans](/en-US/docs/Web/CSS/orphans) should be kept to a minimum).

`stable`

Results in the same behavior as `wrap`, except that the algorithm does not consider subsequent lines when making break decisions. When editing text that has already been painted to the screen, line 1 breaking is not affected by changes on lines 2 and later, line 2 breaking is not affected by changes on lines 3 and later, etc.

For example, imagine a situation where you have a long word broken onto the next line because it doesn't quite fit on the previous line. With the default behavior (i.e. with values like `wrap` or `balance`), if you start deleting the long word so that what is left would then fit on the previous line, the user agent will recalculate the break and all the content will jump onto the same line. With `stable`, recalculation won't happen, and it will remain as two lines.

The intention is to keep the text layout as stable as possible and mitigate performance issues in containers where editable text is updated. You don't want the editing cursor jumping around as text is added or removed due to the algorithm recalculating the wrapping.
-->

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic text wrap value comparison

#### HTML

```html
<h2 class="wrap" contenteditable="true">
  The default behavior; the text in the heading wraps "normally"
</h2>

<h2 class="nowrap" contenteditable="true">
  In this case the text in the heading doesn't wrap, and overflows the container
</h2>

<h2 class="balance" contenteditable="true">
  In this case the text in the heading is nicely balanced across lines
</h2>
```

### CSS

```css
.wrap {
  text-wrap: wrap;
}

.nowrap {
  text-wrap: nowrap;
}

.balance {
  text-wrap: balance;
}

h2 {
  font-size: 2rem;
  font-family: sans-serif;
}
```

#### Result

The text in the example is editable. Change the text, adding long words, to view how the different line and word lengths impact wrapping.

{{EmbedLiveSample("Examples", "100%", 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS text module](/en-US/docs/Web/CSS/CSS_text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/blog/css-text-wrap-balance/) on developer.chrome.com
