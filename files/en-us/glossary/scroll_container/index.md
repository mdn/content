---
title: Scroll container
slug: Glossary/Scroll_container
page-type: glossary-definition
sidebar: glossarysidebar
---

A **scroll container** is an element box whose content can be scrolled, whether or not scroll bars are present. An element box becomes a scroll container when its {{cssxref("overflow")}} property (or {{cssxref("overflow-x")}} or {{cssxref("overflow-y")}}) is set to `scroll`, `auto`, or `hidden`.

Each scroll container `overflow` value controls when scroll bars are shown:

- `scroll`: scroll bars are always shown, if the platform displays them.
- `auto`: scroll bars are shown only when the content overflows the box.
- `hidden`: no scroll bars are shown, and the user can't scroll the content directly, but it can still be scrolled programmatically, for example with {{domxref("Element.scrollTo()")}} or by focusing an element inside it.

Because scroll container status comes from the `overflow` value, it affects layout even when nothing overflows, for example a scroll container that is a flex item has an automatic minimum size of `0`.

When the content of a scroll container overflows its bounding box, the clipped content that would otherwise be hidden from view can be scrolled through, using scroll bars or other input such as touch or the mouse wheel.

A scroll container has a scrollport, the visible area through which the content is scrolled, and may have scroll bars.

## Scrollport

The scrollport is the visible part of a scroll container and coincides with the padding box of the scroll container. The scroll bars are used to move content in and out of the scrollport so that the content can be viewed.

## See also

- [Learn: Overflowing content](/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow)
- [Scroll snapping](/en-US/docs/Glossary/Scroll_snap), including [scroll snap container](/en-US/docs/Glossary/Scroll_snap#scroll_snap_container)
- [CSS overflow](/en-US/docs/Web/CSS/Guides/Overflow) module
- [CSS overscroll behavior](/en-US/docs/Web/CSS/Guides/Overscroll_behavior) module
- [CSS scroll snap](/en-US/docs/Web/CSS/Guides/Scroll_snap) module
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
