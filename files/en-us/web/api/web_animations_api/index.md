---
title: Web Animations API
slug: Web/API/Web_Animations_API
page-type: web-api-overview
tags:
  - API
  - Animation
  - Landing
  - Reference
  - Web Animations
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
  - : Actually part of CSS Animations.
- {{domxref("DocumentTimeline")}}
  - : Represents animation timelines, including the default document timeline (accessed using the {{domxref("Document.timeline")}} property).

## Extensions to other interfaces

The Web Animations API adds some new features to {{domxref("document")}} and {{domxref("element")}}.

### Extensions to the `Document` interface

- {{domxref("document.timeline")}}
  - : The `DocumentTimeline` object representing the default document timeline.
- {{domxref("document.getAnimations()")}}
  - : Returns an Array of {{domxref("Animation")}} objects currently in effect on elements in the `document`.

### Extensions to the `Element` interface

- {{domxref("Element.animate()")}}
  - : A shortcut method for creating and playing an animation on an element. It returns the created {{domxref("Animation")}} object instance.
- {{domxref("Element.getAnimations()")}}
  - : Returns an Array of {{domxref("Animation")}} objects currently affecting an element or which are scheduled to do so in future.

## Specifications

{{Specifications}}

## See also

- [Using the Web Animations API](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Web Animations demos](https://mozdevs.github.io/Animation-examples/)
- [Polyfill](https://github.com/web-animations/web-animations-js)
- Firefox's current implementation: [AreWeAnimatedYet](https://birtles.github.io/areweanimatedyet/)
- [Browser support test](https://codepen.io/danwilson/pen/xGBKVq)
