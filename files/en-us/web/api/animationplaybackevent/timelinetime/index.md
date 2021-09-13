---
title: AnimationPlaybackEvent.timelineTime
slug: Web/API/AnimationPlaybackEvent/timelineTime
tags:
  - API
  - Animation
  - AnimationPlaybackEvent
  - Attribute
  - Experimental
  - Property
  - Reference
  - timelineTime
  - waapi
  - web animations api
browser-compat: api.AnimationPlaybackEvent.timelineTime
---
<p>{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}</p>

<p>The <strong><code>timelineTime</code></strong> read-only property of the <code>{{domxref("AnimationPlaybackEvent")}}</code> interface represents the time value of the animation's {{domxref("AnimationTimeline", "timeline")}} at the moment the event is queued. This will be unresolved if the animation was not associated with a timeline at the time the event was generated or if the associated timeline was inactive.</p>

<h2 id="Value">Value</h2>

<p>A number representing the current time in milliseconds, or <code>null</code>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Animations_API">Web Animations API</a></li>
 <li>{{domxref("AnimationPlayBackEvent")}}</li>
 <li>{{domxref("AnimationTimeline")}}</li>
</ul>
