---
title: text-wrap
slug: Web/CSS/text-wrap
page-type: css-property
status:
  - experimental
browser-compat: css.properties.text-wrap
---

{{CSSRef}}{{seecompattable}}

The **`text-wrap`** CSS property controls how text inside an element is wrapped.

> **Note:** The {{CSSxRef("white-space-collapse")}} and `text-wrap` properties can both be set on one line using the {{CSSxRef("white-space")}} shorthand property.

## Syntax

```css
/* Keyword values */
text-wrap: wrap;
text-wrap: nowrap;
text-wrap: balance;
text-wrap: pretty;
text-wrap: stable;

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
- `pretty`
  - : Results in the same behavior as `wrap`, except that the user agent will use a slower algorithm that favors better layout over speed. This is intended for body copy where good typography is favored over performance (for example, when the number of [typographic orphans](https://en.wikipedia.org/wiki/Widows_and_orphans) should be kept to a minimum).
- `stable`
  - : Results in the same behavior as `wrap`, except that the algorithm does not consider subsequent lines when making break decisions. So, for example, line 1 breaking is not affected by changes on lines 2 and later, line 2 breaking is not affected by changes on lines 3 and later, etc. The intention is to keep the text layout as stable as possible and mitigate performance issues in containers where editable text is updated. You don't want the editing cursor jumping around as text is added or removed due to the algorithm recalculating the wrapping.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic text wrap value comparison

#### HTML

```html
<h2 class="wrap">
  The default behavior; the text in the heading wraps fairly "normally"
</h2>

<h2 class="no-wrap">
  In this case the text in the heading doesn't wrap, and overflows the container
</h2>

<h2 class="balance">
  In this case the text in the heading is nicely balanced across lines
</h2>
```

### CSS

```css
.wrap {
  text-wrap: wrap;
}

.no-wrap {
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

{{EmbedLiveSample("Examples", "100%", 350)}}

### Unsetting white-space nowrap

`text-wrap` values like `balance` can compete with {{cssxref("white-space")}} values like `nowrap` because one is asking for no wrapping and the other is asking for balanced wrapping. You can overcome this by unsetting `white-space` before applying balanced wrapping:

```css
.balanced {
  white-space: unset;
  text-wrap: balance;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS text module](/en-US/docs/Web/CSS/CSS_Text)
- [CSS text-wrap: balance](https://developer.chrome.com/blog/css-text-wrap-balance/) on developer.chrome.com
