---
title: CSS overscroll behavior
slug: Web/CSS/CSS_overscroll_behavior
page-type: css-module
spec-urls: https://drafts.csswg.org/css-overscroll/
---

{{CSSRef}}

The **CSS overscroll behavior** module provides properties to control the behavior of a scroll container when its scroll position reaches the scroll boundary. Controlling this aspect is particularly useful in scenarios where embedded scrollable areas should not trigger scrolling of the parent container.

When commenting on a blog, you might notice that if your comment exceeds the length of the provided {{htmlelement("textarea")}}, scrolling beyond the end of the text area causes the entire blog to scroll. This is because reaching the end of a scrollable area, known as the scroll boundary, can lead to scrolling other content or the entire page. This continuous scrolling experience is called {{Glossary("Scroll_chaining", "scroll chaining")}}.

In situations where the contents of an element are larger than its container and {{cssxref("overflow")}} allows or defaults to scrolling (like in `<textarea>`), continued scrolling past the element's scrollable area will initiate scrolling in the parent element or the underlying page.

Conversely, scrolling through a website's terms and conditions and reaching the end of the content to enable a checkbox, may not force the page to scroll or bounce (as on a phone). This example shows that you can control overscroll behavior and prevent scroll chaining.

This module defines the overscroll behavior, enabling you to specify the actions when a user scrolls beyond the boundaries of a scrollable element.

## Reference

### CSS properties

- {{CSSxRef("overscroll-behavior")}} shorthand
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

### Glossary terms

- {{Glossary("Scroll_boundary", "Scroll boundary")}}
- {{Glossary("Scroll_chaining", "Scroll chaining")}}

## Guides

- [CSS building blocks: Overflowing content](/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : Learn what overflow is and how to manage it.

## Related concepts

- [Containing block](/en-US/docs/Web/CSS/Containing_block) concept ([CSS display](/en-US/docs/Web/CSS/CSS_display) module)
- {{cssxref("overflow")}} CSS property ([CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module)
- {{CSSxref("position")}} CSS property ([CSS positioned layout](/en-US/docs/Web/CSS/CSS_positioned_layout) module)
- [getBoundingClientRect](/en-US/docs/Web/API/Element/getBoundingClientRect) method ([CSSOM view](/en-US/docs/Web/CSS/CSSOM_view) module)
- {{Glossary("Scroll_container", "Scroll container")}} and [scrollport](/en-US/docs/Glossary/Scroll_container#scrollport) glossary terms ([CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module)

## Specifications

{{Specifications}}

## See also

- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA role
- [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module
- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
- [Take control of your scroll - customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior) on developer.chrome.com (2017)
