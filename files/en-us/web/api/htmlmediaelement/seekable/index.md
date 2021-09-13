---
title: HTMLMediaElement.seekable
slug: Web/API/HTMLMediaElement/seekable
tags:
- API
- Audio
- Extensions
- HTMLMediaElement
- MSE
- Media
- Property
- Reference
- Video
- seekable
- source
browser-compat: api.HTMLMediaElement.seekable
---
<div>{{APIRef("HTML DOM")}}</div>


<p>The <strong><code>seekable</code></strong> read-only property of {{domxref("HTMLMediaElement")}} objects returns a new static <a href="/en-US/docs/Web/API/TimeRanges#normalized_timeranges_objects">normalized <code>TimeRanges</code> object</a> that represents the ranges of the media resource, if any, that the user agent is able to seek to at the time <code>seekable</code> property is accessed.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var seekable = audioOrVideo.seekable;</pre>

<h3 id="Value">Value</h3>

<p>A new static <a href="/en-US/docs/Web/API/TimeRanges#normalized_timeranges_objects">normalized TimeRanges object</a> that represents the ranges of the media resource, if any, that the user agent is able to seek to at the time <code>seekable</code> property is accessed.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: html">var video = document.querySelector("video");
var timeRangesObject = video.seekable;
var timeRanges = [];
//Go through the object and output an array
for (let count = 0; count &lt; timeRangesObject.length; count ++) {
    timeRanges.push([timeRangesObject.start(count), timeRangesObject.end(count)]);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The interface defining it, {{domxref("HTMLMediaElement")}}.</li>
  <li><a href="/en-US/docs/Web/API/Media_Source_Extensions_API">Media Source Extensions
      API</a></li>
  <li><a
      href="/en-US/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges">Media
      buffering, seeking, and time ranges</a></li>
</ul>
