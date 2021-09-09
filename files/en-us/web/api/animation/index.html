---
title: Animation
slug: Web/API/Animation
tags:
  - API
  - Animations
  - Interface
  - Reference
  - Web Animations
  - waapi
  - web animations api
browser-compat: api.Animation
---
<div>{{ APIRef("Web Animations") }}</div>

<p>The <strong><code>Animation</code></strong> interface of the <a href="/en-US/docs/Web/API/Web_Animations_API">Web Animations API</a> represents a single animation player and provides playback controls and a timeline for an animation node or source.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("Animation.Animation()", "Animation()")}}</dt>
 <dd>Creates a new <code>Animation</code> object instance.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("Animation.currentTime")}}</dt>
 <dd>The current time value of the animation in milliseconds, whether running or paused. If the animation lacks a {{domxref("AnimationTimeline", "timeline")}}, is inactive or hasn't been played yet, its value is <code>null</code>.</dd>
 <dt>{{domxref("Animation.effect")}}</dt>
 <dd>Gets and sets the {{domxref("AnimationEffect")}} associated with this animation. This will usually be a {{domxref("KeyframeEffect")}} object.</dd>
 <dt>{{domxref("Animation.finished")}} {{readOnlyInline}}</dt>
 <dd>Returns the current finished Promise for this animation.</dd>
 <dt>{{domxref("Animation.id")}}</dt>
 <dd>Gets and sets the <code>String</code> used to identify the animation.</dd>
 <dt>{{domxref("Animation.pending")}} {{readonlyinline}}</dt>
 <dd>Indicates whether the animation is currently waiting for an asynchronous operation such as initiating playback or pausing a running animation.</dd>
 <dt>{{domxref("Animation.playState")}} {{readOnlyInline}}</dt>
 <dd>Returns an enumerated value describing the playback state of an animation.</dd>
 <dt>{{domxref("Animation.playbackRate")}}</dt>
 <dd>Gets or sets the playback rate of the animation.</dd>
 <dt>{{domxref("Animation.ready")}} {{readOnlyInline}}</dt>
 <dd>Returns the current ready Promise for this animation.</dd>
 <dt>{{domxref("animation.replaceState")}}</dt>
 <dd>Returns the replace state of the animation. This will be <code>active</code> if the animation has been replaced, or <code>persisted</code> if {{domxref("Animation.persist()")}} has been invoked on it.</dd>
 <dt>{{domxref("Animation.startTime")}}</dt>
 <dd>Gets or sets the scheduled time when an animation's playback should begin.</dd>
 <dt>{{domxref("Animation.timeline")}}</dt>
 <dd>Gets or sets the {{domxref("AnimationTimeline", "timeline")}} associated with this animation.</dd>
</dl>

<h3 id="Event_handlers">Event handlers</h3>

<dl>
 <dt>{{domxref("Animation.oncancel")}}</dt>
 <dd>Gets and sets the event handler for the <code>cancel</code> event.</dd>
 <dt>{{domxref("Animation.onfinish")}}</dt>
 <dd>Gets and sets the event handler for the <code>finish</code> event.</dd>
 <dt>{{domxref("animation.onremove")}}</dt>
 <dd>Allows you to set and run an event handler that fires when the animation is removed (i.e., put into an <code>active</code> replace state).</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("Animation.cancel()")}}</dt>
 <dd>Clears all {{domxref("KeyframeEffect", "keyframeEffects")}} caused by this animation and aborts its playback.</dd>
 <dt>{{domxref("animation.commitStyles()")}}</dt>
 <dd>Commits the end styling state of an animation to the element being animated, even after that animation has been removed. It will cause the end styling state to be written to the element being animated, in the form of properties inside a <code>style</code> attribute.</dd>
 <dt>{{domxref("Animation.finish()")}}</dt>
 <dd>Seeks either end of an animation, depending on whether the animation is playing or reversing.</dd>
 <dt>{{domxref("Animation.pause()")}}</dt>
 <dd>Suspends playing of an animation.</dd>
 <dt>{{domxref("animation.persist()")}}</dt>
 <dd>Explicitly persists an animation, when it would otherwise be removed due to the browser's {{anch("Automatically removing filling animations")}} behavior.</dd>
 <dt>{{domxref("Animation.play()")}}</dt>
 <dd>Starts or resumes playing of an animation, or begins the animation again if it previously finished.</dd>
 <dt>{{domxref("Animation.reverse()")}}</dt>
 <dd>Reverses playback direction, stopping at the start of the animation. If the animation is finished or unplayed, it will play from end to beginning.</dd>
 <dt>{{domxref("Animation.updatePlaybackRate()")}}</dt>
 <dd>Sets the speed of an animation after first synchronizing its playback position.</dd>
</dl>

<h2 id="Automatically_removing_filling_animations">Automatically removing filling animations</h2>

<p>It is possible to trigger a large number of animations on the same element. If they are indefinite (i.e., forwards-filling), this can result in a huge animations list, which could create a memory leak. For this reason, modern browsers have implemented the part of the Web Animations spec that automatically removes overriding forward filling animations, unless the developer explicitly specifies to keep them.</p>

<p>You can see this in action in our simple <a href="https://mdn.github.io/dom-examples/web-animations-api/replace-indefinite-animations.html">replace indefinite animations demo</a>. The related JavaScript features are:</p>

<ul>
 <li>{{domxref("animation.commitStyles()")}} for commiting the end styling state of an animation to the element being animated, even after that animation has been removed.</li>
 <li>{{domxref("animation.onremove")}} for setting and running an event handler that fires when the animation is removed (i.e., put into an <code>active</code> replace state).</li>
 <li>{{domxref("animation.persist()")}} for when you explicitly want an animations to be retained.</li>
 <li>{{domxref("animation.replaceState")}} to return the replace state of the animation. This will be <code>active</code> if the animation has been removed, or <code>persisted</code> if {{domxref("persist()")}} has been invoked.</li>
</ul>

<h2 id="Accessibility_concerns">Accessibility concerns</h2>

<p>Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for Vestibular disorders, epilepsy, and migraine, and Scotopic sensitivity.</p>

<p>Consider providing a mechanism for pausing or disabling animation, as well as using the <a href="/en-US/docs/Web/CSS/@media/prefers-reduced-motion">Reduced Motion Media Query</a> to create a complimentary experience for users who have expressed a preference for no animated experiences.</p>

<ul>
 <li><a href="https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity">Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article </a></li>
 <li><a href="https://css-tricks.com/introduction-reduced-motion-media-query/">An Introduction to the Reduced Motion Media Query | CSS-Tricks</a></li>
 <li><a href="https://webkit.org/blog/7551/responsive-design-for-motion/">Responsive Design for Motion | WebKit</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content">MDN Understanding WCAG, Guideline 2.2 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html">Understanding Success Criterion 2.2.2  | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Animations_API">Web Animations API</a></li>
</ul>
