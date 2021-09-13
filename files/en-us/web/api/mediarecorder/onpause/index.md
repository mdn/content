---
title: MediaRecorder.onpause
slug: Web/API/MediaRecorder/onpause
tags:
  - API
  - Audio
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Property
  - Reference
  - Video
  - onpause
browser-compat: api.MediaRecorder.onpause
---
<p>{{APIRef("Media Recorder API")}}</p>

<p>The <strong><code>MediaRecorder.onpause </code></strong>event handler (part of the <a
    href="/en-US/docs/Web/API/MediaStream_Recording_API">MediaRecorder API</a>) handles the
  <code>pause</code> event, allowing you to run code in response to the media recording
  being paused.</p>

<p>The <code>pause</code> event is thrown as a result of the
  {{domxref("MediaRecorder.pause()")}} method being invoked.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">MediaRecorder.onpause = function(event) { ... }
MediaRecorder.addEventListener('pause', function(event) { ... })
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">...

  pause.onclick = function() {
    if(mediaRecorder.state === "recording") {
      mediaRecorder.pause();
      // recording paused
    } else if(mediaRecorder.state === "paused") {
      mediaRecorder.resume();
      // resume recording
    }
  }

  mediaRecorder.onpause = function() {
    // do something in response to
    // recording being paused
  }

  mediaRecorder.onresume = function() {
    // do something in response to
    // recording being resumed
  }

...</pre>

<h2 id="Properties">Properties</h2>

<p>None.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API">Using
      the MediaRecorder API</a></li>
  <li><a href="https://mdn.github.io/web-dictaphone/">Web Dictaphone</a>: MediaRecorder +
    getUserMedia + Web Audio API visualization demo, by <a
      href="https://twitter.com/chrisdavidmills">Chris Mills</a> (<a
      href="https://github.com/mdn/web-dictaphone/">source on Github</a>.)</li>
  <li><a href="http://simpl.info/mediarecorder/">simpl.info MediaStream Recording
      demo</a>, by <a href="https://twitter.com/sw12">Sam Dutton</a>.</li>
  <li>{{domxref("Navigator.getUserMedia")}}</li>
</ul>
