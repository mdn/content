---
title: CSS animations
slug: Web/CSS/CSS_Animations
page-type: css-module
spec-urls:
  - https://w3c.github.io/csswg-drafts/css-animations-2/
  - https://w3c.github.io/csswg-drafts/css-animations/
---

{{CSSRef}}

The animations CSS module lets you animate the values of CSS properties, such as background-position and transform, over time by using keyframes. Each keyframe describes how the animated element should render at a given time during the animation sequence. You can use the properties in the animations module to control the duration, number of repetitions, delayed start, and other aspects of an animation.

### Animations in action

To view the animation in the box below, click the checkbox 'Play the animation' or hover the cursor over the box. When the animating is active, the cloud at the top changes shape, snowflakes fall, and the snow level at the bottom rises. To pause the animation, uncheck the checkbox or move your cursor away from the box.

{{EmbedGHLiveSample("css-examples/modules/animation.html", '100%', 650)}}

This sample animation uses {{cssxref("animation-iteration-count")}} to make the flakes fall repeatedly, {{cssxref("animation-direction")}} to make the cloud move back and forth, {{cssxref("animation-fill-mode")}} to raise the snow level in response to the cloud movement, and {{cssxref("animation-play-state")}} to pause the animation.

To see the code for this animation, [view the source on Github](https://github.com/mdn/css-examples/blob/main/modules/animation.html).

## Reference

### Properties

- {{cssxref("animation")}} shorthand
- {{cssxref("animation-composition")}} {{Experimental_Inline}}
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

### Functions

- [`scroll()`](/en-US/docs/Web/CSS/animation-timeline/scroll)

### Events

All animations, even those with 0 seconds duration, throw animation events.

- {{domxref("Element/animationstart_event", "animationstart")}}
- {{domxref("Element/animationend_event", "animationend")}}
- {{domxref("Element/animationcancel_event", "animationcancel")}}
- {{domxref("Element/animationiteration_event", "animationiteration")}}

### Interfaces

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEvent")}}
- {{domxref("CSSKeyframeRule")}}
- {{domxref("CSSKeyframesRule")}}

## Guides

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
  - : Step-by-step tutorial on how to create animations using CSS. This article describes the animation-related CSS properties and at-rule and how they interact with each other.
- [CSS animations tips and tricks](/en-US/docs/Web/CSS/CSS_Animations/Tips)
  - : Tips and tricks to help you get the most out of CSS animations.

## Related concepts

- {{cssxref("will-change")}} CSS property
- [`<easing-function>`](/en-US/docs/Web/CSS/easing-function) data type
- [`prefers-reduced-motion`](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query
- {{glossary("Bézier curve")}} glossary term

## Specifications

{{Specifications}}

## See also

- {{Experimental_Inline}} The CSS scroll timeline {{cssxref('scroll-timeline-name')}} and {{cssxref('scroll-timeline-axis')}} properties, along with the {{cssxref('scroll-timeline')}} shorthand, create animations tied to the scroll offset of a scroll container.
- Properties in the [transitions](/en-US/docs/Web/CSS/CSS_Transitions) CSS module to trigger animations based on user actions
- The {{htmlelement("canvas")}} HTML element along with [canvas API](/en-US/docs/Web/API/Canvas_API) and [WebGL API](/en-US/docs/Web/API/WebGL_API) to draw graphics and animations
- The {{domxref("SVGAnimationElement")}} interface for all the animation-related element interfaces, including {{domxref("SVGAnimateElement")}}, {{domxref("SVGSetElement")}}, {{domxref("SVGAnimateColorElement")}}, {{domxref("SVGAnimateMotionElement")}}, and {{domxref("SVGAnimateTransformElement")}}
