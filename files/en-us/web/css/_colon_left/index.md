---
title: :left
slug: Web/CSS/:left
page-type: css-pseudo-class
browser-compat: css.selectors.left
---

{{CSSRef}}

The **`:left`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes), used with the {{cssxref("@page")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule), represents all left-hand pages of a printed document.

```css
/* Selects any left-hand pages when printing */
@page :left {
  margin: 2in 3in;
}
```

Whether a given page is "left" or "right" is determined by the major writing direction of the document. For example, if the first page has a major writing direction of left-to-right then it will be a {{Cssxref(":right")}} page; if it has a major writing direction of right-to-left then it will be a `:left` page.

> [!NOTE]
> This pseudo-class can be used to change only the {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }}, and {{ Cssxref("background") }} properties of the _page box_. All other properties will be ignored, and only the page box, not the document content on the page, will be affected.

## Syntax

```css
:left {
  /* ... */
}
```

## Examples

### Setting a margin for left-hand pages

```css
@page :left {
  margin: 2in 3in;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ Cssxref("@page") }}
- Other page-related pseudo-classes: {{ Cssxref(":first") }}, {{ Cssxref(":right") }}
