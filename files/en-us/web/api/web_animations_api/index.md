---
title: Web Animations API
slug: Web/API/Web_Animations_API
page-type: web-api-overview
spec-urls: https://drafts.csswg.org/web-animations/
---

{{DefaultAPISidebar("Web Animations")}}

The **Web Animations API** allows for synchronizing and timing changes to the presentation of a Web page, i.e. animation of DOM elements. It does so by combining two models: the Timing Model and the Animation Model.

## Concepts and usage

The Web Animations API provides a common language for browsers and developers to describe animations on DOM elements. To get more information on the concepts behind the API and how to use it, read [Using the Web Animations API](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

## Web Animations interfaces

- {{domxref("Animation")}}
  - : Provides playback controls and a timeline for an animation node or source. Can take an object created with the {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} constructor.
- {{domxref("KeyframeEffect")}}
  - : Describes sets of animatable properties and values, called **keyframes** and their timing options. These can then be played using the {{domxref("Animation.Animation", "Animation()")}} constructor.
- {{domxref("AnimationTimeline")}}
  - : Represents the timeline of animation. This interface exists to define timeline features (inherited by {{domxref("DocumentTimeline")}} and future timeline objects) and is not itself accessed by developers.
- {{domxref("AnimationEvent")}}
  - : Part of the [CSS Animations](/en-US/docs/Web/CSS/CSS_animations) module, capturing the animation name and elapsed time.
- {{domxref("DocumentTimeline")}}
  - : Represents animation timelines, including the default document timeline (accessed using the {{domxref("Document.timeline")}} property).

## Extensions to other interfaces

The Web Animations API adds features to {{domxref("document")}} and {{domxref("element")}}.

### Extensions to the `Document` interface

- {{domxref("document.timeline")}}
  - : The `DocumentTimeline` object representing the default document timeline.
- {{domxref("document.getAnimations()")}}
  - : Returns an Array of {{domxref("Animation")}} objects currently in effect on elements in the `document`.

### Extensions to the `Element` interface

- {{domxref("Element.animate()")}}
  - : A shortcut method for creating and playing an animation on an element. It returns the created {{domxref("Animation")}} object instance.
- {{domxref("Element.getAnimations()")}}
  - : Returns an Array of {{domxref("Animation")}} objects currently affecting an element or which are scheduled to do so in the future.

## Specifications

{{Specifications}}

## See also

- CSS {{cssxref("animation")}} shorthand property
- CSS {{cssxref("animation-timeline")}} property
- [Using the Web Animations API](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module
