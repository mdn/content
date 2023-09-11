---
title: CSS scroll-driven animations
slug: Web/CSS/CSS_scroll-driven_animations
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/scroll-animations-1/
  - https://drafts.csswg.org/css-animations-2/
  - https://drafts.csswg.org/web-animations-2/
---

{{CSSRef}}

The **CSS scroll-driven animations** module provides functionality that builds on top of the [CSS animations module](/en-US/docs/Web/CSS/CSS_animations) and [Web Animations API](/en-US/docs/Web/API/Web_Animations_API). It allows you to animate property values based on a progression along a scroll-based timeline instead of the default time-based document timeline. This means that you can animate an element by scrolling a scrollable element, rather than just by the passing of time.

There are two types of scroll-based timelines:

- _scroll progress timeline_: You progress this timeline by scrolling a scrollable element (_scroller_) from top to bottom (or left to right) and back again. The position in the scroll range is converted into a percentage of progress — 0% at the start and 100% at the end.
- _view progress timeline_: You progress this timeline based on the change in visibility of an element (known as the _subject_) inside a scroller. The visibility of the subject inside the scroller is tracked as a percentage of progress — by default, the timeline is at 0% when the subject is first visible at one edge of the scroller, and 100% when it reaches the opposite edge.

When one of these two timelines is applied to an animated element, the animation progresses along that timeline instead of following the default time-based timeline.

It is possible to adjust the effective placement of the animation along the scroll progress and view progress timelines, i.e., you can define the position at which the animation starts and ends. This can be done in a couple of different ways:

- Start and end animation range values can be applied to the animation to adjust the position of the animation's starting and ending position along the timeline.
- View progress timelines can have a start and/or end inset (or outset) applied to them to adjust the position of the scrollport (see {{glossary("Scroll container")}} for more details) in which the subject element is deemed to be visible. Put another way, this allows you to specify start and/or end inset (or outset) values that offset the position of the timeline itself.

## Scroll-driven animations in action

You can find several tools and demos showing scroll-driven animations in action at [Scroll-driven Animations tools and demos](https://scroll-driven-animations.style/).

## Reference

### Properties

Set the timeline that will control the progress of an animation, and set its attachment range along that timeline:

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range-end")}}

Define _named scroll progress timelines_:

- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}

Define _named view progress timelines_:

- {{cssxref("view-timeline")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

Modify timeline scope:

- {{cssxref("timeline-scope")}}

### At-rules

CSS scroll-driven animations adds the ability to include `<timeline-range-name>`s in {{cssxref("@keyframes")}} blocks, to place keyframes at specific positions inside named timeline ranges.

### Functions

Possible values of the {{cssxref("animation-timeline")}} property for defining _anonymous scroll progress timelines_ and _anonymous view progress timelines_ (i.e. implicitly defined by the browser rather than being explicitly named and defined using the `scroll-timeline-*` and `view-timeline-*` properties):

- [`scroll()`](/en-US/docs/Web/CSS/animation-timeline/scroll)
- [`view()`](/en-US/docs/Web/CSS/animation-timeline/view)

### JavaScript features

- {{domxref("Element.animate()")}}
- {{domxref("AnimationTimeline")}}
- {{domxref("ScrollTimeline")}}
- {{domxref("ViewTimeline")}}

## Specifications

{{Specifications}}

## See also

- [Animate elements on scroll with Scroll-driven animations](https://developer.chrome.com/articles/scroll-driven-animations/) on developer.chrome.com
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations)
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
