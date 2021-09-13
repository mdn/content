---
title: MediaRecorder.state
slug: Web/API/MediaRecorder/state
tags:
  - API
  - Media Recorder API
  - MediaRecording
  - Property
  - Reference
  - state
browser-compat: api.MediaRecorder.state
---
<div>{{APIRef("MediaStream Recording")}}</div>

<p>The <strong><code>MediaRecorder.state</code></strong> read-only property returns the
  current state of the current <code>MediaRecorder</code> object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>state</em> = MediaRecorder.state</pre>

<h3 id="Values">Values</h3>

<p>A string containing one of the following values:</p>

<dl>
  <dt><code>inactive</code></dt>
  <dd>Recording is not occurring — it has either not been started yet, or it has been
    started and then stopped.</dd>
  <dt><code>recording</code></dt>
  <dd>Recording has been started and the UA is capturing data.</dd>
  <dt><code>paused</code></dt>
  <dd>Recording has been started, then paused, but not yet stopped or resumed.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">...

  record.onclick = function() {
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    // Will return "recording"
    console.log("recorder started");
  }

...</pre>

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
