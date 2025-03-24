---
title: :target-current
slug: Web/CSS/:target-current
page-type: css-pseudo-class
browser-compat: css.selectors.target-current
---

{{CSSRef}}

The **`:target-current`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selects the {{cssxref("::scroll-marker")}} pseudo-element of a {{cssxref("scroll-marker-group")}} that is currently scrolled to, in other words, the **active** scroll marker. This can be used to stlye it differently, so the user can see see their navigation position inside the scroll marker group.

## Syntax

```css-nolint
:target-current {
  /* ... */
}
```

## Examples

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) for full examples that use the `:target-current` pseudo-class.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("scroll-marker-group")}} and {{cssxref("interactivity")}} properties
- {{cssxref("::scroll-button()")}}, {{cssxref("::scroll-marker")}}, {{cssxref("::scroll-marker-group")}}, and {{cssxref("::column")}} pseudo-elements
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) on chrome.dev (2025)
