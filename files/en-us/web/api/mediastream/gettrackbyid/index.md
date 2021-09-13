---
title: MediaStream.getTrackById()
slug: Web/API/MediaStream/getTrackById
tags:
- Media
- MediaStream
- MediaStream API
- Method
- Reference
- WebRTC
- getTrackById
browser-compat: api.MediaStream.getTrackById
---
<p>{{APIRef("Media Capture and Streams")}}</p>

<p>The <strong><code>MediaStream.getTrackById()</code></strong> method returns a
  {{domxref("MediaStreamTrack")}} object representing the track with the specified ID
  string. If there is no track with the specified ID, this method returns
  <code>null</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>track</em> = <em>MediaStream</em>.getTrackById(<em>id</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>id</code></dt>
  <dd>A {{domxref("DOMString")}} which identifies the track to be returned.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>If a track is found for which {{domxref("MediaStreamTrack.id")}} matches the specified
  <code>id</code> string, that {{domxref("MediaStreamTrack")}} object is returned.
  Otherwise, the returned value is <code>null</code>.</p>

<h2 id="Example">Example</h2>

<p>This example activates a commentary track on a video by ducking the audio level of the
  main audio track to 50%, then enabling the commentary track.</p>

<pre class="brush: js">stream.getTrackById("primary-audio-track").applyConstraints({ volume: 0.5 });
stream.getTrackById("commentary-track").enabled = true;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("MediaStream")}}</li>
  <li>{{domxref("MediaStreamTrack.id")}}</li>
</ul>
