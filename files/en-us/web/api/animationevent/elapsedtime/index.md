---
title: AnimationEvent.elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
tags:
- API
- AnimationEvent
- CSSOM
- Experimental
- Property
- Reference
- Web Animations
browser-compat: api.AnimationEvent.elapsedTime
---
<div>{{SeeCompatTable}}{{ apiref("Web Animations API") }}</div>

<p>The <code><strong>AnimationEvent.elapsedTime</strong></code> read-only property is a
  <code>float</code> giving the amount of time the animation has been running, in seconds,
  when this event fired, excluding any time the animation was paused. For an
  {{domxref("HTMLElement/animationstart_event", "animationstart")}} event,
  <code>elapsedTime</code> is <code>0.0</code> unless there was a negative value for
  {{cssxref("animation-delay")}}, in which case the event will be fired with
  <code>elapsedTime</code> containing <code>(-1 * </code><em>delay</em><code>)</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">time = <em>AnimationEvent</em>.elapsedTime</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations">Using CSS
      animations</a></li>
  <li>Animation-related CSS properties and at-rules: {{cssxref("animation")}},
    {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
    {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
    {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
    {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
    {{cssxref("@keyframes")}}.</li>
  <li>The {{domxref("AnimationEvent")}} interface it belongs to.</li>
</ul>
