---
title: Scroll chaining
slug: Glossary/Scroll_chaining
page-type: glossary-definition
---

{{GlossarySidebar}}

**Scroll chaining** refers to the behavior observed when scrolling within a scrollable element, such as a `<div>` or `<textarea>`, triggers scrolling in its parent element or the underlying page. This propagation results in a "chained effect", where there is a seamless transition of the scroll action to the parent element when the [scrollport](/en-US/docs/Glossary/Scroll_container#scrollport) boundary (top, bottom, left or right) of the scrollable element is reached. This behavior creates a continuous scrolling experience, both vertically and horizontally.

A **scroll chain** is the order of scrollable elements where the scrolling action passes from one element to another. This happens when an inner element is scrolled to its limit, and the scrolling continues to its parent element, creating a 'chain' of scrolling actions. Chaining typically recurses up the containing block.

## See also

- {{CSSxRef("overscroll-behavior")}} CSS property
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS overscroll behavior](/en-US/docs/Web/CSS/CSS_overscroll_behavior) module
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
