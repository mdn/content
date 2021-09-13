---
title: HTMLMediaElement.fastSeek()
slug: Web/API/HTMLMediaElement/fastSeek
tags:
- API
- Audio
- HTMLMediaElement
- Media
- Method
- Reference
- fastSeek
browser-compat: api.HTMLMediaElement.fastSeek
---
<p>{{APIRef("HTML DOM")}} {{SeeCompatTable}}</p>

<p>The <strong><code>HTMLMediaElement.fastSeek()</code></strong> method quickly seeks the
  media to the new time with precision tradeoff.</p>

<div class="note">
  <p><strong>Note:</strong> If you need to seek with precision, you should set <a
      href="/en-US/docs/Web/API/HTMLMediaElement/currentTime"><code>HTMLMediaElement.currentTime</code></a>
    instead.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>HTMLMediaElement</em>.fastSeek(time);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>time</dt>
  <dd>A double.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h2 id="Example">Example</h2>

<p>This example quickly seeks to 20-second position of the video element.</p>

<pre class="brush: js">let myVideo = document.getElementById("myVideoElement");

myVideo.fastSeek(20);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/docs/Web/API/HTMLMediaElement/currentTime">HTMLMediaElement.currentTime</a>
    for seeking without precision tradeoff</li>
</ul>
