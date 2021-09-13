---
title: MediaStreamTrack.readyState
slug: Web/API/MediaStreamTrack/readyState
tags:
- API
- Media Capture and Streams
- MediaStreamTrack
- NeedsExample
- Property
- Read-only
- Reference
browser-compat: api.MediaStreamTrack.readyState
---
<div>{{APIRef("Media Capture and Streams")}}</div>

<p>The <code><strong>MediaStreamTrack.readyState</strong></code> read-only property
  returns an enumerated value giving the status of the track.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">const <em>state</em> = <em>track</em>.readyState</pre>

<h3 id="Value">Value</h3>

<p>It takes one of the following values:</p>

<ul>
  <li><code>"live"</code> which indicates that an input is connected and does its
    best-effort in providing real-time data. In that case, the output of data can be
    switched on or off using the {{domxref("MediaStreamTrack.enabled")}} property.</li>
  <li><code>"ended"</code> which indicates that the input is not giving any more data and
    will never provide new data. </li>
</ul>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Media_Streams_API">Media Stream API</a></li>
  <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a></li>
  <li>{{domxref("MediaStreamTrack.onended")}}</li>
</ul>
