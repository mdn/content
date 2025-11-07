---
title: CSS scroll-driven animations
short-title: Scroll-driven animations
slug: Web/CSS/Guides/Scroll-driven_animations
page-type: css-module
spec-urls: https://drafts.csswg.org/scroll-animations-1/
sidebar: cssref
---

The **CSS scroll-driven animations** module provides functionality that builds on the [CSS animations module](/en-US/docs/Web/CSS/Guides/Animations) and [Web Animations API](/en-US/docs/Web/API/Web_Animations_API). It allows you to animate property values along a scroll-based timeline rather than the default time-based document timeline. This means that you can animate an element by scrolling the element, its scroll container, or its root element, rather than just by the passing of time.

## Scroll-driven animations in action

You can define the scroller that controls the animation either by naming the animation or with the {{cssxref("scroll")}} function.

```html hidden live-sample___scroll_animation
<main>
  <div></div>
</main>
```

```css live-sample___scroll_animation
main {
  scroll-timeline: --mainTimeline;
}

div {
  animation: backgroundAnimation linear;
  animation-timeline: scroll(nearest inline);
}

div::after {
  animation: shapeAnimation linear;
  animation-timeline: --mainTimeline;
}
```

```css hidden live-sample___scroll_animation
@layer animations {
  @keyframes backgroundAnimation {
    0% {
      background-color: palegoldenrod;
    }
    100% {
      background-color: magenta;
    }
  }
  @keyframes shapeAnimation {
    0% {
      left: 0;
      top: 0;
      background-color: black;
    }
    50% {
      top: calc(100% - var(--elSize));
      left: calc(50% - var(--elSize));
      background-color: red;
    }
    100% {
      left: calc(100vw - var(--elSize));
      top: 0;
      rotate: 1800deg;
      background-color: white;
    }
  }
}

@layer pageSetup {
  :root {
    --elSize: 50px;
  }
  main {
    height: 90vh;
    overflow: scroll;
    border: 1px solid;
    margin: 5vh auto;
  }
  div {
    height: 400vh;
    width: 400vw;
  }
  div::after {
    content: "";
    border: 1px solid red;
    height: var(--elSize);
    width: var(--elSize);
    position: absolute;
    border-radius: 20px;
    corner-shape: superellipse(-4);
  }
}

@layer noSupport {
  @supports not (scroll-timeline: --mainTimeline) {
    body::before {
      content: "Your browser doesn't support scroll-driven animations.";
      background-color: wheat;
      display: block;
      width: 100%;
      text-align: center;
    }
    body > * {
      display: none;
    }
  }
}
```

{{EmbedLiveSample("scroll_animation", "", "400px")}}

Scroll the element in the inline direction to see its background color change. Scroll it vertically to see the generated content move, spin, and change colors.

## Reference

### Properties

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

### Data types and values

<!--
- {{cssxref("axis")}}
- {{cssxref("scroller")}} -->

- [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Properties/animation-range#timeline-range-name)

### Functions

- [`scroll()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)
- [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view)

### Interfaces

- {{domxref("ScrollTimeline")}}
- {{domxref("ViewTimeline")}}

## Guides

- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
  - : Scroll-driven animation timelines and creating scroll-driven animations.

## Related concepts

- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
  - {{cssxref("animation-timeline")}}
  - {{cssxref("@keyframes")}}
- [CSS overflow](/en-US/docs/Web/CSS/Guides/Overflow) module
  - {{glossary("Scroll container")}}
  - [Scrollport](/en-US/docs/Glossary/Scroll_container#scrollport)
- [Web Animations](/en-US/docs/Web/API/Web_Animations_API) API
  - {{domxref("Element.animate()")}}
  - {{domxref("Animation")}}
  - {{domxref("AnimationTimeline")}}
  - {{domxref("DocumentTimeline")}}
  - {{domxref("KeyframeEffect")}}

## Specifications

{{Specifications}}

## See also

- [Animate elements on scroll with scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) via developer.chrome.com (2023)
