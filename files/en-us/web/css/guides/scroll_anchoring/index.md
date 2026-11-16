---
title: CSS scroll anchoring
short-title: Scroll anchoring
slug: Web/CSS/Guides/Scroll_anchoring
page-type: css-module
spec-urls: https://drafts.csswg.org/css-scroll-anchoring/
sidebar: cssref
---

The **CSS scroll anchoring** module defines a mechanism to prevent page movement due to DOM changes above the visible region of a scrolling box while the user is consuming the visible content.

Scroll anchoring attempts to keep the user's view of the document stable across layout changes. It works by selecting a DOM node (the anchor node) whose movement is used to determine adjustments to the scroll position. The anchor node is always a descendant of the scrolling box.

For scroll containers that are [snapped](/en-US/docs/Glossary/Scroll_snap) to an element, scroll anchoring is limited to adjustments that would be allowed by re-snapping.

## Reference

### Properties

- {{cssxref("overflow-anchor")}}

## Glossary terms

- {{glossary("Scroll container")}}
- {{glossary("Scroll snap")}}

## Guides

- [Overview of scroll anchoring](/en-US/docs/Web/CSS/Guides/Scroll_anchoring/Overview)
  - : What is scroll anchoring, suppression triggers, and when and how to enable and disable this browser feature.

## Related concepts

- {{CSSxRef("overscroll-behavior")}}

## Specifications

{{Specifications}}

## See also

- [CSS overflow](/en-US/docs/Web/CSS/Guides/Overflow) module
- [CSS scroll snap](/en-US/docs/Web/CSS/Guides/Scroll_snap) module
- [CSS overscroll behavior](/en-US/docs/Web/CSS/Guides/Overscroll_behavior) module
