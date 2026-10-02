---
title: Scroll container
slug: Glossary/Scroll_container
page-type: glossary-definition
sidebar: glossarysidebar
---

A **scroll container** is an element box whose content can be scrolled, whether or not scroll bars are present. An element box becomes a scroll container when its {{cssxref("overflow")}} property (or {{cssxref("overflow-x")}} or {{cssxref("overflow-y")}}) is set to `scroll`, `auto`, or `hidden`.

Each scroll container `overflow` value controls when scroll bars are shown:

- `scroll`: Scroll bars are always shown, if the platform displays them.
- `auto`: Scroll bars are shown only when the content overflows the box.
- `hidden`: No scroll bars are shown, and the user can't scroll the content directly, but it can still be scrolled programmatically, for example with {{domxref("Element.scrollTo()")}} or by focusing an element inside it.

A scroll container always:

- Establishes a new block formatting context, so it contains floats and its margins don't collapse with its children's margins.
- Scts as the reference box for descendants with {{cssxref("position")}} set to `sticky`.
- Has an automatic minimum size of 0 when it is a flex or grid item, so it can shrink smaller than its content.

### Scrollport

A scroll container has a **scrollport** — this is the visible part of a scroll container and coincides with the scroll container's padding box. Scrolling moves content into and out of the scrollport for viewing.

## See also

- [Learn: Overflowing content](/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow)
- [Scroll snapping](/en-US/docs/Glossary/Scroll_snap), including [scroll snap container](/en-US/docs/Glossary/Scroll_snap#scroll_snap_container)
- [CSS overflow](/en-US/docs/Web/CSS/Guides/Overflow) module
- [CSS overscroll behavior](/en-US/docs/Web/CSS/Guides/Overscroll_behavior) module
- [CSS scroll snap](/en-US/docs/Web/CSS/Guides/Scroll_snap) module
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
