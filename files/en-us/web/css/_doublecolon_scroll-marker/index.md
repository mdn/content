---
title: ::scroll-marker
slug: Web/CSS/::scroll-marker
page-type: css-pseudo-element
browser-compat: css.selectors.scroll-marker
---

{{CSSRef}}

The **`::scroll-marker`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) can be generated inside any element and represents its scroll marker. A scroll marker behaves like an anchor ({{htmlelement("a")}} element) whose scroll target is its originating element — when activated, the element's nearest ancestor {{glossary("scroll container")}} will scroll to it.

## Syntax

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Description

A `::scroll-marker` is generated on an element when the `::scroll-marker`'s {{cssxref("content")}} property is set to a non-`none` value, and its has an ancestor scroll container with a non-`none` {{cssxref("scroll-marker-group")}} property value (meaning that it will generate a {{cssxref("::scroll-marker-group")}} pseudo-element).

The `::scroll-marker-group` pseudo-element automatically contains any `::scroll-marker` pseudo-elements generated on the scroll container's decendants. This allows them to be positioned and laid out as a group, and is typically used when creating a CSS carousel, to create a scroll position indicator. The individual scroll markers can also be used to navigate to their associated content items.

Accessibility-wise, the scroll marker group and contained scroll markers are rendered with [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) semantics. When you <kbd>Tab</kbd> to the group, it behaves like a single item (that is, another press of the <kbd>Tab</kbd> key will move past the group to the next item), and you can move between the different scroll markers using the left and right (or up and down) cursor keys.

## Examples

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) for full examples that use the `::scroll-marker` pseudo-element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("scroll-marker-group")}} and {{cssxref("interactivity")}} properties
- {{cssxref("::scroll-button()")}}, {{cssxref("::scroll-marker-group")}}, and {{cssxref("::column")}} pseudo-elements
- {{cssxref(":target-current")}} pseudo-class
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) on chrome.dev (2025)
