---
title: CSS Animations
slug: Web/CSS/CSS_Animations
page-type: css-module
tags:
  - CSS
  - CSS Animations
  - Guide
  - Overview
  - Reference
spec-urls: 
  - https://w3c.github.io/csswg-drafts/css-animations-2/
  - https://w3c.github.io/csswg-drafts/css-animations/
---

{{CSSRef}}

The **CSS Animations** module lets you animate the values of CSS properties over time, using keyframes, providing properties to control the easing, duration, number of repetitions, play state, and other attributes of these keyframes.

`<STILL WORKING ON THIS>`

### Example

`<STILL WORKING ON THIS>`

## Reference

### Properties

- {{cssxref("animation")}} shorthand
- {{cssxref("animation-composition")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-timeline")}}

### At-rules

- {{cssxref("@keyframes")}}

### Data types, functions, and values

- {{cssxref("easing-function")}}
- [`scroll()`](/en-US/docs/Web/CSS/animation-timeline/scroll) function

### Events

- {{domxref("Element/animationstart_event", "animationstart")}}
- {{domxref("Element/animationend_event", "animationend")}}
- {{domxref("Element/animationcancel_event", "animationcancel")}},
- {{domxref("Element/animationiteration_event", "animationiteration")}}

### Interfaces

- {{domxref("AnimationEvent")}} (inherits from {{domxref("Event")}})
  - : Including {{domxref("AnimationEvent.animationName")}}, {{domxref("AnimationEvent.elapsedTime")}}, and {{domxref("AnimationEvent.pseudoElement")}} properties.
- {{domxref("CSSKeyframeRule")}} (inherits from {{domxref("CSSRule")}})
  - : Including {{domxref("CSSKeyframeRule.keyText")}} and {{domxref("CSSKeyframeRule.style")}}.
- {{domxref("CSSKeyframesRule")}} (inherits from {{domxref("CSSRule")}})
  - : Including {{domxref("CSSKeyframesRule.name")}}, {{domxref("CSSKeyframesRule.cssRules")}}, {{domxref("CSSKeyframesRule.appendRule()")}}, {{domxref("CSSKeyframesRule.deleteRule()")}}, and {{domxref("CSSKeyframesRule.findRule()")}}
- {{DOMxRef("Element")}}
  - : Including {{DOMxRef("Element.animate()")}} and {{DOMxRef("Element.getAnimations()")}}

## Guides

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
  - : Step-by-step tutorial about how to create animations using CSS. This article describes each relevant CSS property and at-rule and explains how they interact with each other.
- [CSS animations tips and tricks](/en-US/docs/Web/CSS/CSS_Animations/Tips)
  - : Tips and tricks to help you get the most out of CSS animations. Currently offers a technique for replaying an animation which has already run through to completion, which the API doesn't support inherently.

## Associated content

### Associated properties

- {{cssxref('will-change')}}

### Glossary terms

- {{glossary("Bézier curve")}}

## Specifications

{{Specifications}}

## See also

- [CSS Transitions](/en-US/docs/Web/CSS/CSS_Transitions) can trigger animations based on user actions.
- The CSS Scroll Timeline {{cssxref('scroll-timeline-name')}} and {{cssxref('scroll-timeline-axis')}} properties, along with the {{cssxref('scroll-timeline')}} shorthand, create animations tied to the scroll offset of a scroll container.
