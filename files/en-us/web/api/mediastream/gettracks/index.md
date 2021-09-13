---
title: MediaStream.getTracks()
slug: Web/API/MediaStream/getTracks
tags:
- API
- Experimental
- Media Streams API
- MediaStream
- MediaStreamTrack
- Method
- Reference
- getTracks
browser-compat: api.MediaStream.getTracks
---
<p>{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}</p>

<p>The <strong><dfn><code>getTracks()</code></dfn></strong> method of the
  {{domxref("MediaStream")}} interface returns a sequence that represents all the
  {{domxref("MediaStreamTrack")}} objects in this
  stream's <code><a href="https://www.w3.org/TR/mediacapture-streams/#track-set">track set</a></code>,
  regardless of {{domxref("MediaStreamTrack.kind")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>mediaStreamTracks</em> = <em>mediaStream</em>.getTracks()</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>An array of {{domxref("MediaStreamTrack")}} objects.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">navigator.mediaDevices.getUserMedia({audio: false, video: true})
.then(mediaStream =&gt; {
  document.querySelector('video').srcObject = mediaStream;
  // Stop the stream after 5 seconds
  setTimeout(() =&gt; {
    const tracks = mediaStream.getTracks()
    tracks[0].stop()
  }, 5000)
})
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
