---
title: Scroll boundary
slug: Glossary/Scroll_boundary
page-type: glossary-definition
---

{{GlossarySidebar}}

A **scroll boundary** is the point at which a scrollable element cannot be scrolled any further in a particular direction, either at the top or bottom (or left/right for horizontal scrolling). This typically is the edge of the [scrollport](/en-US/docs/Glossary/Scroll_container#scrollport).

When the content of a {{Glossary("Scroll_container", "scroll container")}} does not exceed the container size in the scrolling direction, the container is considered to be at its scroll boundary at all times. This is because there's no extra content to scroll through. If the content is prevented from scrolling, such as when {{cssxref("overflow", "overflow: hidden")}} is set, the element is not a scroll container, and therefore, there is no scroll boundary.

When the scroll boundary of the scrollport is reached by a user scrolling the content, a visual effect such as a bounce or a functional action like pull-to-refresh on mobile devices may occur. This default browser behavior is called the **boundary default action**.

For example, on mobile devices, dragging a page downward when already at the top causes a bounce effect and sometimes triggers a page refresh. This bounce or refresh is the boundary default action.

Boundary default actions can be local or non-local.

- A **local boundary default** is the action that occurring at the boundary of a specific scrollable area confined to that element. This action is considered _local_ as it does not affect any ancestor containers or the rest of the webpage.

- A **non-local boundary default action** is when reaching the scroll boundary of a scroll container has effects beyond the specific element being scrolled. An example of this is {{Glossary("Scroll_chaining", "scroll chaining")}}, where reaching the scroll boundary of one element triggers scrolling in a parent or ancestor element, and possibly even initiating a page-wide action, such as navigation.

## See also

- {{CSSxRef("overscroll-behavior")}} CSS property
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS overscroll behavior](/en-US/docs/Web/CSS/CSS_overscroll_behavior) module
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
