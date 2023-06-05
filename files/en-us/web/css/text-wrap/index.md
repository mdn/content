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

> **Note:** Newer values of the {{CSSxRef("white-space")}} property can act as shorthand for {{CSSxRef("white-space-collapse")}} and `text-wrap`.

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
  - : Text is wrapped across lines at appropriate characters (for example spaces between words, in the case of latin languages) to minimize overflow.
- `nowrap`
  - : Text does not wrap across lines and will overflow its containing element rather than break onto a new line.
- `balance`
  - : Text is wrapped across lines in a way that best balances the number of characters on each line, enhancing layout quality and legibility. Because the underlying algorithm is computationally expensive, this only works with a limited number of lines (the Chromium implementation uses four wrapped lines or less), meaning that it is useful for cases such as headings or pull quotes.
- `pretty`
  - : Results in the same behavior as `wrap`, except that the user agent will use a slower algorithm that favors better layout over speed. This is intended for body copy where good typography is favored over performance (for example, when the number of typographic orphans should be kept to a minimum).
- `stable`
  - : Results in the same behavior as `wrap`, except that the algorithm does not consider subsequent lines when making break decisions. So, for example, line 1 breaking is not affected by changes on lines 2 and later, line 2 breaking is not affected by changes on lines 3 and later, etc. The intention is to keep the text layout as stable as possible and mitigate performance issues in containers where editable text is updated. You don't want the editing cursor jumping around as text is added or removed due to the algorithm recalculating the wrapping.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### HTML

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

### Result

{{EmbedLiveSample("Examples", "100%", 350)}}

> **Note:** If you already have another property set on your text that stops wrapping, such as {{cssxref("white-space", "white-space: nowrap")}}, your `text-wrap` setting may not work. In such a case, you'll have to unset the other property.

> **Note:** Remember that `text-wrap` only controls wrapping of the text inside the element, not the inline-size of the element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Shorthand for {{CSSxRef("white-space-collapse")}} and `text-wrap`: The {{CSSxRef("white-space")}} property.
- [CSS text module](/en-US/docs/Web/CSS/CSS_Text)
- [CSS text-wrap: balance](https://developer.chrome.com/blog/css-text-wrap-balance/) on developer.chrome.com
