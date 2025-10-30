---
title: :target-current
slug: Web/CSS/Reference/Selectors/:target-current
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.target-current
sidebar: cssref
---

{{SeeCompatTable}}

The **`:target-current`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) selects the **active** scroll marker — the {{cssxref("::scroll-marker")}} pseudo-element of a {{cssxref("scroll-marker-group")}} that is currently scrolled to. This [selector](/en-US/docs/Web/CSS/CSS_selectors) can be used to style the active navigation position within a [scroll marker group](/en-US/docs/Web/CSS/::scroll-marker-group#description).

> [!NOTE]
> The `:target-current` pseudo-class is only valid on `::scroll-marker` pseudo-elements.

## Syntax

```css-nolint
:target-current {
  /* ... */
}
```

## Examples

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) and {{cssxref("::scroll-marker")}} for complete examples that use the `:target-current` pseudo-class.

### Basic usage

```css
::scroll-marker {
  background-color: white;
}

::scroll-marker:target-current {
  background-color: black;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
