---
title: Scroll chaining
slug: Glossary/Scroll_chaining
page-type: glossary-definition
---

{{GlossarySidebar}}

**Scroll chaining** refers to the behavior observed when a user scrolls past the {{Glossary("Scroll_boundary", "Scroll boundary")}} of a scrollable element, causing scrolling on an ancestor element.

When a user scrolls within a scrollable element such as a `<div>` or `<textarea>` and the [scrollport](/en-US/docs/Glossary/Scroll_container#scrollport) boundary (top, bottom, left or right) of the scrollable element is reached, there may be a "chained effect" in which the scroll action is seamlessly propagated to the parent element. This behavior creates a continuous scrolling experience, both vertically and horizontally.

A **scroll chain** is the order of scrollable elements where the scrolling action passes from one element to another. This happens when an inner element is scrolled to its limit, and the scrolling continues to its parent element, creating a 'chain' of scrolling actions. Chaining typically recurses up the containing block.

## See also

- {{CSSxRef("overscroll-behavior")}} CSS property
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS overscroll behavior](/en-US/docs/Web/CSS/CSS_overscroll_behavior) module
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
