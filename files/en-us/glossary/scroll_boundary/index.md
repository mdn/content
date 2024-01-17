---
title: Scroll boundary
slug: Glossary/Scroll_boundary
page-type: glossary-definition
---

{{GlossarySidebar}}

A **scroll boundary** is the point at which a scrollable element cannot be scrolled any further in a particular direction, either at the top or bottom (or left/right for horizontal scrolling). This typically refers to the edge of the scrollport.

When the content of a {{Glossary("Scroll_container", "scroll container")}} does not exceed the container size in the scrolling direction, the container is considered to be at its scroll boundary at all times. This is because there's no extra content to scroll through.

### Boundary default action

This refers to a browser's default behavior when the scroll boundary of the scrollport is reached. This can lead to a visual effect such as a bounce or a functional action like pull-to-refresh on mobile devices.

For example, on mobile devices, dragging a page downward when already at the top causes a bounce effect and sometimes triggers a page refresh. This bounce or refresh is the boundary default action.

Boundary default actions can be local or non-local.

### Local and non-local boundary defaults

A local boundary default is the action that occurs at the boundary of a specific scrollable area and is confined to the element. For example, the action could be to display a visual effect within the element to indicate the end of scrolling. This action does not affect the larger container or the rest of the webpage.

On the other hand, a non-local boundary default action has effects beyond the specific element. An example of this is scroll chaining, where reaching the scroll boundary of one element triggers scrolling in a parent element or even initiate a page-wide action, such as navigation.

## See also

- {{CSSxRef("overscroll-behavior")}} CSS property
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS overscroll behavior](/en-US/docs/Web/CSS/CSS_overscroll_behavior) module
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
