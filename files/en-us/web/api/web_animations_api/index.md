---
title: Web Animations API
slug: Web/API/Web_Animations_API
page-type: web-api-overview
spec-urls: https://drafts.csswg.org/web-animations/
---

{{DefaultAPISidebar("Web Animations")}}

The **Web Animations API** allows for synchronizing and timing changes to the presentation of a Web page, i.e., animation of DOM elements. It does so by combining two models: the Timing Model and the Animation Model.

## Concepts and usage

The Web Animations API provides a common language for browsers and developers to describe animations on DOM elements. To get more information on the concepts behind the API and how to use it, read [Using the Web Animations API](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

### Accessibility

Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for Vestibular disorders, epilepsy, and migraine, and Scotopic sensitivity.

Consider providing a mechanism for pausing or disabling animation, as well as using the [Reduced Motion Media Query](/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) (or equivalent [user agent client hint](/en-US/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) to create a complimentary experience for users who have expressed a preference for no animated experiences.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Web Animations interfaces

- {{domxref("Animation")}}
  - : Provides playback controls and a timeline for an animation node or source. Can take an object created with the {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} constructor.
- {{domxref("KeyframeEffect")}}
  - : Describes sets of animatable properties and values, called **keyframes** and their timing options. These can then be played using the {{domxref("Animation.Animation", "Animation()")}} constructor.
- {{domxref("AnimationTimeline")}}
  - : Represents the timeline of animation. This interface exists to define timeline features (inherited by {{domxref("DocumentTimeline")}} and future timeline objects) and is not itself accessed by developers.
- {{domxref("AnimationEvent")}}
  - : Part of the [CSS Animations](/en-US/docs/Web/CSS/Guides/Animations) module, capturing the animation name and elapsed time.
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
- [Using CSS animations](/en-US/docs/Web/CSS/Guides/Animations/Using)
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
