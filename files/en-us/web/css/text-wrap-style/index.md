---
title: text-wrap-style
slug: Web/CSS/text-wrap-style
page-type: css-property
browser-compat: css.properties.text-wrap-style
---

{{CSSRef}}

The **`text-wrap-style`** CSS property controls how text inside an element is wrapped. The different values provide alternate ways of wrapping the content of a block element. It can also be set, and reset, using the {{CSSXRef("text-wrap")}} shorthand.

{{EmbedInteractiveExample("pages/css/text-wrap-style.html")}}

## Syntax

```css
/* Keyword values */
text-wrap-style: auto;
text-wrap-style: balance;
text-wrap-style: pretty;
text-wrap-style: stable;

/* Global values */
text-wrap-style: inherit;
text-wrap-style: initial;
text-wrap-style: revert;
text-wrap-style: revert-layer;
text-wrap-style: unset;
```

When wrapping is allowed (see {{CSSXRef("text-wrap-mode")}}), the `text-wrap-style` property is specified as a single keyword chosen from the list of values below.

### Values

- `auto`
  - : Text does not wrap across lines. It will overflow its containing element rather than breaking onto a new line.
- `balance`
  - : Text is wrapped in a way that best balances the number of characters on each line, enhancing layout quality and legibility. Because counting characters and balancing them across multiple lines is computationally expensive, this value is only supported for blocks of text spanning a limited number of lines (six or less for Chromium and ten or less for Firefox).
- `pretty`
  - : Results in the same behavior as `wrap`, except that the user agent will use a slower algorithm that favors better layout over speed. This is intended for body copy where good typography is favored over performance (for example, when the number of [orphans](/en-US/docs/Web/CSS/orphans) should be kept to a minimum).
- `stable` {{experimental_inline}}
  - : Results in the same behavior as `wrap`, except that when the user is editing the content, the lines that come before the lines they are editing remain static rather than the whole block of text re-wrapping.

## Description

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-mode")}}
