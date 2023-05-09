---
title: Animation
slug: Web/API/Animation
page-type: web-api-interface
browser-compat: api.Animation
---

{{ APIRef("Web Animations") }}

The **`Animation`** interface of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) represents a single animation player and provides playback controls and a timeline for an animation node or source.

{{InheritanceDiagram}}

## Constructor

- {{domxref("Animation.Animation()", "Animation()")}}
  - : Creates a new `Animation` object instance.

## Instance properties

- {{domxref("Animation.currentTime")}}
  - : The current time value of the animation in milliseconds, whether running or paused. If the animation lacks a {{domxref("AnimationTimeline", "timeline")}}, is inactive or hasn't been played yet, its value is `null`.
- {{domxref("Animation.effect")}}
  - : Gets and sets the {{domxref("AnimationEffect")}} associated with this animation. This will usually be a {{domxref("KeyframeEffect")}} object.
- {{domxref("Animation.finished")}} {{ReadOnlyInline}}
  - : Returns the current finished Promise for this animation.
- {{domxref("Animation.id")}}
  - : Gets and sets the `String` used to identify the animation.
- {{domxref("Animation.pending")}} {{ReadOnlyInline}}
  - : Indicates whether the animation is currently waiting for an asynchronous operation such as initiating playback or pausing a running animation.
- {{domxref("Animation.playState")}} {{ReadOnlyInline}}
  - : Returns an enumerated value describing the playback state of an animation.
- {{domxref("Animation.playbackRate")}}
  - : Gets or sets the playback rate of the animation.
- {{domxref("Animation.ready")}} {{ReadOnlyInline}}
  - : Returns the current ready Promise for this animation.
- {{domxref("Animation.replaceState")}} {{ReadOnlyInline}}
  - : Returns the replace state of the animation. This will be `removed` if the animation has been replaced and removed, or `persisted` if {{domxref("Animation.persist()")}} has been invoked on it.
- {{domxref("Animation.startTime")}}
  - : Gets or sets the scheduled time when an animation's playback should begin.
- {{domxref("Animation.timeline")}}
  - : Gets or sets the {{domxref("AnimationTimeline", "timeline")}} associated with this animation.

## Instance methods

- {{domxref("Animation.cancel()")}}
  - : Clears all {{domxref("KeyframeEffect", "keyframeEffects")}} caused by this animation and aborts its playback.
- {{domxref("Animation.commitStyles()")}}
  - : Commits the current styling state of an animation to the element being animated, even after that animation has been removed. It will cause the current styling state to be written to the element being animated, in the form of properties inside a `style` attribute.
- {{domxref("Animation.finish()")}}
  - : Seeks either end of an animation, depending on whether the animation is playing or reversing.
- {{domxref("Animation.pause()")}}
  - : Suspends playing of an animation.
- {{domxref("animation.persist()")}}
  - : Explicitly persists an animation, preventing it from being [automatically removed](#automatically_removing_filling_animations) when another animation replaces it.
- {{domxref("Animation.play()")}}
  - : Starts or resumes playing of an animation, or begins the animation again if it previously finished.
- {{domxref("Animation.reverse()")}}
  - : Reverses playback direction, stopping at the start of the animation. If the animation is finished or unplayed, it will play from end to beginning.
- {{domxref("Animation.updatePlaybackRate()")}}
  - : Sets the speed of an animation after first synchronizing its playback position.

## Events

- {{domxref("Animation.cancel_event", "cancel")}}
  - : Fires when the {{domxref("Animation.cancel()")}} method is called or when the animation enters the `"idle"` play state from another state.
- {{domxref("Animation.finish_event", "finish")}}
  - : Fires when the animation finishes playing.
- {{domxref("animation.remove_event", "remove")}}
  - : Fires when the animation is [automatically removed](#automatically_removing_filling_animations) by the browser.

## Automatically removing filling animations

It is possible to trigger a large number of animations on the same element. If they are indefinite (i.e., forwards-filling), this can result in a huge animations list, which could create a memory leak. For this reason, browsers automatically remove filling animations after they are replaced by newer animations, unless the developer explicitly specifies to keep them.

Animations are removed when all of the following are true:

- The animation is filling (its `fill` is `forwards` if it is playing forwards, `backwards` if it is playing backwards, or `both`).
- The animation is finished. (Note that because of the `fill` it will still be in effect.)
- The animation's timeline is monotonically increasing. (This is always true for {{domxref("DocumentTimeline")}}; other timelines such as {{cssxref("scroll-timeline")}} can run backwards.)
- The animation is not being controlled by declarative markup such as CSS.
- Every styling effect of the animation's {{domxref("AnimationEffect")}} is being overridden by another animation that also satisfies all the conditions above. (Typically, when two animations would set the same style property of the same element, the one created last overrides the other.)

The first four conditions ensure that, without intervention by JavaScript code, the animation's effect will never change or end. The last condition ensures that the animation will never actually affect the style of any element: it has been entirely replaced.

The related JavaScript features are:

- The {{domxref("animation/remove_event", "remove")}} event on the {{domxref("Animation")}} interface fires when the animation is removed (i.e., put into the `removed` replace state).
- {{domxref("animation.persist()")}} for when you explicitly want an animation to be retained.
- {{domxref("animation.replaceState")}} to return the replace state of the animation. This will be `removed` if the animation has been removed, or `persisted` if {{domxref("Animation.persist", "persist()")}} has been invoked.

## Accessibility concerns

Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for Vestibular disorders, epilepsy, and migraine, and Scotopic sensitivity.

Consider providing a mechanism for pausing or disabling animation, as well as using the [Reduced Motion Media Query](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) to create a complimentary experience for users who have expressed a preference for no animated experiences.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
