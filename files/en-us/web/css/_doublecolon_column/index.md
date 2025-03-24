---
title: ::column
slug: Web/CSS/::column
page-type: css-pseudo-element
browser-compat: css.selectors.column
---

{{CSSRef}}

The **`::column`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the different column fragments of a container set to display in multiple columns via [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout).

## Syntax

```css-nolint
::column {
  /* ... */
}
```

## Description

When CSS multi-column layout is used to lay out a container's content in multiple columns (for example, using the {{cssxref("column-count")}} property), a box is generated to contain each generated column's content. The `::column` pseudo-element represents those generated boxes.

This is useful for [CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) — `::column` can be used to generate {{cssxref("::scroll-marker")}} pseudo-elements for each column, and set them as [snap targets](/en-US/docs/Glossary/Scroll_snap#snap_target) using [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap).

Beyond that, the styling that can be applied to `::column` is very limited, but may be expanded in the future.

## Examples

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) for full examples that use the `::column` pseudo-element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("scroll-marker-group")}} and {{cssxref("interactivity")}} properties
- {{cssxref("::scroll-button()")}}, {{cssxref("::scroll-marker")}}, and {{cssxref("::scroll-marker-group")}} pseudo-elements
- {{cssxref(":target-current")}} pseudo-class
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) on chrome.dev (2025)
