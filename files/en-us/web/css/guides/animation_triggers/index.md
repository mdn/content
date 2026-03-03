---
title: CSS animation triggers
short-title: Animation triggers
slug: Web/CSS/Guides/Animation_triggers
page-type: css-module
spec-urls: https://drafts.csswg.org/animation-triggers-1/
sidebar: cssref
---

The **CSS animation triggers** module provides functionality for triggering standard time-based [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) when a particular trigger occurs, such as the user scrolling a trigger element to a certain scroll offset inside the viewport, or a JavaScript event firing on an element.

## Reference

### Properties

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger")}} shorthand
- {{cssxref("timeline-trigger-activation-range")}} shorthand
  - {{cssxref("timeline-trigger-activation-range-end")}}
  - {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-active-range")}} shorthand
  - {{cssxref("timeline-trigger-active-range-end")}}
  - {{cssxref("timeline-trigger-active-range-start")}}
- {{cssxref("timeline-trigger-name")}}
- {{cssxref("timeline-trigger-source")}}
- {{cssxref("trigger-scope")}}

The CSS animation triggers module level 1 also introduces the `event-trigger`, `event-trigger-name`, and `event-trigger-source` properties. Currently, no browsers support these features.

### Data types and values

- {{cssxref("&lt;animation-action>")}}

## Guides

- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
  - : A guide to implementing CSS scroll-triggered animations.

## Related concepts

- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
  - {{cssxref("animation-timeline")}}
  - {{cssxref("@keyframes")}} at-rule
  - [`<keyframe-selector>`](/en-US/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
  - {{cssxref("animation-range")}} shorthand
    - {{cssxref("animation-range-end")}}
    - {{cssxref("animation-range-start")}}
  - {{cssxref("scroll-timeline")}} shorthand
    - {{cssxref("scroll-timeline-axis")}}
    - {{cssxref("scroll-timeline-name")}}
  - {{cssxref("timeline-scope")}}
  - {{cssxref("view-timeline")}} shorthand
    - {{cssxref("view-timeline-axis")}}
    - {{cssxref("view-timeline-inset")}}
    - {{cssxref("view-timeline-name")}}

## Specifications

{{Specifications}}

## See also

- [CSS scroll-triggered animations are coming!](https://developer.chrome.com/blog/scroll-triggered-animations) on developer.chrome.com (2025)
